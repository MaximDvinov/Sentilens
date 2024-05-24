package org.diary.data.diary

import io.github.aakira.napier.Napier
import org.diary.data.ApiResult
import org.diary.database.datasources.LocalNotesDataSource
import org.diary.nerwork.NetworkNotesDataSource
import org.diary.data.models.toNote
import org.diary.data.models.toNoteDBO
import org.diary.data.toApiResult
import org.diary.database.models.NoteDBO
import org.diary.nerwork.models.NoteDTO
import org.diary.nerwork.models.NoteWrite

interface SyncRepository {
    suspend fun sync(): ApiResult<String>
}


class SyncRepositoryImpl(
    private val localNotesDataSource: LocalNotesDataSource,
    private val networkNotesDataSource: NetworkNotesDataSource,
) : SyncRepository {
    override suspend fun sync(): ApiResult<String> {
        val localeNotes = localNotesDataSource.getNotesSync()
        val networkNotes = networkNotesDataSource.getNotes().toApiResult()

        if (networkNotes is ApiResult.Success) {
            updateNotesFromLocale(localeNotes, networkNotes)

            updateNotesFromNetwork(networkNotes, localeNotes)
        }

        return when (networkNotes) {
            is ApiResult.ServerError -> ApiResult.ServerError(
                message = "Ошибка синхронизации ${networkNotes.message}",
                status = networkNotes.status
            )

            is ApiResult.Success -> ApiResult.Success("Данные синхронизированны")
            else -> ApiResult.Failure("Ошибка синхронизации")
        }
    }

    private suspend fun updateNotesFromNetwork(
        networkNotes: ApiResult.Success<List<NoteDTO>>,
        localeNotes: List<NoteDBO>,
    ) {
        networkNotes.data.forEach { note ->
            val localeNote = localeNotes.find { it.uuid == note.uuid }?.toNote()
            if (localeNote?.updatedAt != null && note.updatedAt != null) {
                if (localeNote.updatedAt.compareTo(note.updatedAt!!) == 1) {
                    val updated = networkNotesDataSource.updateNote(note.copy(isNew = false))
                    Napier.wtf(tag = "updated") { "$updated" }
                }
                if (localeNote.updatedAt.compareTo(note.updatedAt!!) == -1) {
                    val updated =
                        localNotesDataSource.updateNotes(note.copy(isNew = false).toNoteDBO())
                    Napier.wtf(tag = "updated") { "$updated" }
                }
            }
            if (localeNote == null) {
                localNotesDataSource.createNotes(note.copy(isNew = false).toNoteDBO())
                Napier.wtf(tag = "syncedNote", throwable = null) { "$localeNote" }
            }
        }
    }

    private suspend fun updateNotesFromLocale(
        localeNotes: List<NoteDBO>,
        networkNotes: ApiResult.Success<List<NoteDTO>>,
    ) {
        localeNotes.forEach { note ->
            if (note.isNew && !note.isDeleted) {
                val created = networkNotesDataSource.createNote(
                    NoteWrite(
                        title = note.title,
                        content = note.content,
                        uuid = note.uuid
                    )
                ).toApiResult()

                if (created is ApiResult.Success) {
                    localNotesDataSource.upsertNote(note.copy(isNew = false))
                }
            } else {
                if (note.isNotExistOnServer(networkNotes)) {
                    localNotesDataSource.deleteNote(note)
                }
            }

            if (note.isDeleted) {
                val deletedResult =
                    networkNotesDataSource.deleteNote(note.uuid.toString()).toApiResult()
                if (deletedResult is ApiResult.Success) {
                    localNotesDataSource.finallyDeleteNote(note)
                }
            }
        }
    }

    private fun NoteDBO.isNotExistOnServer(
        networkNotes: ApiResult.Success<List<NoteDTO>>,
    ) = networkNotes.data.find { it.uuid == uuid } == null
}