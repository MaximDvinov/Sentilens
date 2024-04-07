package org.senti.lens.repositories

import io.github.aakira.napier.Napier
import org.senti.lens.ApiResult
import org.senti.lens.models.NoteWrite
import org.senti.lens.datasource.LocalNotesDataSource
import org.senti.lens.datasource.NetworkNotesDataSource

interface SyncRepository {
    suspend fun sync(): ApiResult<String>
}


class SyncRepositoryImpl(
    private val localNotesDataSource: LocalNotesDataSource,
    private val networkNotesDataSource: NetworkNotesDataSource,
) : SyncRepository {
    override suspend fun sync(): ApiResult<String> {
        val localeNotes = localNotesDataSource.getNotesSync()
        val notes = networkNotesDataSource.getNotes()

        if (notes is ApiResult.Success) {
            localeNotes.forEach { note ->
                if (note.isNew != false && !note.isDeleted) {
                    val created = networkNotesDataSource.createNote(
                        NoteWrite(
                            title = note.title,
                            content = note.content,
                            uuid = note.uuid
                        )
                    )

                    if (created is ApiResult.Success) {
                        val upserted = localNotesDataSource.upsertNote(note.copy(isNew = false))
                        Napier.wtf(
                            tag = "created",
                            throwable = null
                        ) { "$upserted ${upserted?.isNew}" }
                    }

                } else {
                    if (notes.data.find { it.uuid == note.uuid } == null) {
                        localNotesDataSource.deleteNote(note)
                        Napier.wtf(tag = "notesDelete", throwable = null) { "$note" }
                    }
                }

                if (note.isDeleted) {
                    if (networkNotesDataSource.deleteNote(note.uuid.toString()) is ApiResult.Success) {
                        localNotesDataSource.finalyDeleteNote(note)
                        Napier.wtf(tag = "finalyDeleteNote", throwable = null) { "$note" }
                    }
                }
            }

            notes.data.forEach { note ->
                val syncedNote = localeNotes.find { it.uuid == note.uuid }
                if (syncedNote?.updatedAt != null && note.updatedAt != null) {
                    if (syncedNote.updatedAt.compareTo(note.updatedAt) == 1) {
                        val updated = networkNotesDataSource.updateNote(note.copy(isNew = false))
                        Napier.wtf(tag = "updated") { "$updated" }
                    }
                    if (syncedNote.updatedAt.compareTo(note.updatedAt) == -1) {
                        val updated = localNotesDataSource.updateNotes(note.copy(isNew = false))
                        Napier.wtf(tag = "updated") { "$updated" }
                    }
                }
                if (syncedNote == null) {
                    localNotesDataSource.createNotes(note.copy(isNew = false))
                    Napier.wtf(tag = "syncedNote", throwable = null) { "$syncedNote" }
                }
            }
        }

        return when (notes) {
            is ApiResult.ServerError -> ApiResult.ServerError(
                message = "Sync error ${notes.message}",
                status = notes.status
            )

            is ApiResult.Success -> {
                ApiResult.Success(
                    "Данные синхронизированны"
                )
            }

            else -> {
                ApiResult.Failure("Ошибка синхронизации")
            }
        }
    }
}