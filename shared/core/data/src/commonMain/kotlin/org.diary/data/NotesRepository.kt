package org.diary.data

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.uuid.UUID
import org.diary.data.models.NoteData
import org.diary.data.models.toNote
import org.diary.data.models.toNoteDBO
import org.diary.data.models.toNoteDTO
import org.diary.database.LocalNotesDataSource
import org.diary.nerwork.NetworkNotesDataSource
import org.diary.nerwork.models.NoteDTO
import org.diary.nerwork.models.NoteWrite

interface NotesRepository {
    fun getNotes(): Flow<List<NoteData>>

    suspend fun createNoteAndAnalyze(note: NoteData): ApiResult<NoteData?>

    suspend fun createNote(note: NoteData): ApiResult<NoteData>

    suspend fun updateNoteAndAnalyze(note: NoteData): ApiResult<NoteData?>

    suspend fun updateNote(note: NoteData): NoteData?

    suspend fun deleteNote(note: NoteData)
    suspend fun getNote(uuid: UUID): NoteData?
}

class NotesRepositoryImpl(
    private val localNotesDataSource: LocalNotesDataSource,
    private val networkNotesDataSource: NetworkNotesDataSource,
) : NotesRepository {
    override fun getNotes(): Flow<List<NoteData>> {
        return localNotesDataSource.getNotes().map { list ->
            list.map { it.toNote() }.filter { !it.isDeleted }
        }
    }

    override suspend fun createNoteAndAnalyze(note: NoteData): ApiResult<NoteData?> {
        var createdNote: NoteData? =
            localNotesDataSource.createNotes(note.copy(isNew = true).toNoteDBO()).toNote()

        val serverNote = networkNotesDataSource.createNote(
            NoteWrite(
                title = createdNote?.title,
                content = createdNote?.content,
                uuid = createdNote?.uuid,
            )
        ).toApiResult().map { it.toNote() }

        if (serverNote is ApiResult.Success) {
            createdNote =
                localNotesDataSource.updateNotes(serverNote.data.copy(isNew = false).toNoteDBO())
                    ?.toNote()
        }

        return serverNote.map { createdNote }
    }

    override suspend fun createNote(note: NoteData): ApiResult<NoteData> {
        val serverNote = networkNotesDataSource.createNote(
            NoteWrite(
                title = note.title, content = note.content, uuid = note.uuid
            )
        ).toApiResult()

        if (serverNote is ApiResult.Success) {
            val localNote = localNotesDataSource.createNotes(serverNote.data.toNoteDBO())
            return serverNote.map { localNote.toNote() }
        }

        return serverNote.map(NoteDTO::toNote)
    }

    override suspend fun updateNoteAndAnalyze(note: NoteData): ApiResult<NoteData?> {
        val nowTime: Instant = Clock.System.now()
        val now = nowTime.toLocalDateTime(TimeZone.UTC)

        var updatedNote = localNotesDataSource.updateNotes(note.toNoteDBO())

        val serverNote = networkNotesDataSource.updateNote(note.toNoteDTO()).toApiResult()

        if (serverNote is ApiResult.Success) {
            updatedNote = localNotesDataSource.updateNotes(serverNote.data.toNoteDBO())
            return serverNote.map { updatedNote?.toNote() }
        }

        if (serverNote is ApiResult.ServerError && serverNote.status == 404) {
            return createNote(
                note.copy(
                    updatedAt = now,
                    createdAt = now
                )
            ).map { updatedNote?.toNote() }
        }

        return serverNote.map { updatedNote?.toNote() }
    }

    override suspend fun updateNote(note: NoteData): NoteData? {
        return localNotesDataSource.updateNotes(note.toNoteDBO())?.toNote()
    }

    override suspend fun deleteNote(note: NoteData) {
        localNotesDataSource.deleteNote(note.toNoteDBO())
        val networkResult = networkNotesDataSource.deleteNote(note.uuid.toString()).toApiResult()

        if (networkResult is ApiResult.Success) {
            localNotesDataSource.finallyDeleteNote(note.toNoteDBO())
        }
    }

    override suspend fun getNote(uuid: UUID): NoteData? {
        return localNotesDataSource.getNote(uuid)?.toNote()
    }
}
