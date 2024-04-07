package org.senti.lens.screens.list

import kotlinx.coroutines.flow.Flow
import org.senti.lens.ApiResult
import org.senti.lens.models.Note
import org.senti.lens.models.NoteWrite
import org.senti.lens.datasource.LocalNotesDataSource
import org.senti.lens.datasource.NetworkNotesDataSource

interface NotesRepository {
    fun getNotesAndTags(): Flow<List<Note>>

    suspend fun createNoteAndAnalyze(note: Note): Pair<ApiResult<Note>, Note?>

    suspend fun createNote(note: Note): ApiResult<Note>

    suspend fun updateNoteAndAnalyze(note: Note): ApiResult<Note>

    suspend fun updateNote(note: Note): Note?

    suspend fun deleteNote(note: Note)
}

class NotesRepositoryImpl(
    private val localNotesDataSource: LocalNotesDataSource,
    private val networkNotesDataSource: NetworkNotesDataSource,
) : NotesRepository {
    override fun getNotesAndTags(): Flow<List<Note>> {
        return localNotesDataSource.getNotes()
    }

    override suspend fun createNoteAndAnalyze(note: Note): Pair<ApiResult<Note>, Note?> {
        var createdNote: Note? = localNotesDataSource.createNotes(note.copy(isNew = true))

        val serverNote = networkNotesDataSource.createNote(
            NoteWrite(
                title = createdNote?.title,
                content = createdNote?.content,
                uuid = createdNote?.uuid,
            )
        )

        if (serverNote is ApiResult.Success) {
            createdNote = localNotesDataSource.updateNotes(serverNote.data.copy(isNew = false))
        }

        return serverNote to createdNote
    }

    override suspend fun createNote(note: Note): ApiResult<Note> {
        val serverNote = networkNotesDataSource.createNote(
            NoteWrite(
                title = note.title, content = note.content, uuid = note.uuid
            )
        )

        if (serverNote is ApiResult.Success) {
            localNotesDataSource.updateNotes(serverNote.data)
        }

        return serverNote
    }

    override suspend fun updateNoteAndAnalyze(note: Note): ApiResult<Note> {
        localNotesDataSource.updateNotes(note)

        val serverNote = networkNotesDataSource.updateNote(note)

        if (serverNote is ApiResult.Success) {
            localNotesDataSource.updateNotes(serverNote.data)
        }

        return serverNote
    }

    override suspend fun updateNote(note: Note): Note? {
        return localNotesDataSource.updateNotes(note)
    }

    override suspend fun deleteNote(note: Note) {
        localNotesDataSource.deleteNote(note)

        if (networkNotesDataSource.deleteNote(note.uuid.toString()) is ApiResult.Success) {
            localNotesDataSource.finalyDeleteNote(note)
        }
    }
}
