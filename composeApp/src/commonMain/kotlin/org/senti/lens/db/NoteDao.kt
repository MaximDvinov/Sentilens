package org.senti.lens.db

import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import org.senti.lens.models.Note

interface NoteDao {

    fun getAllNotes(): Flow<List<Note>>
    suspend fun createNote(note: Note): Note
    suspend fun getNote(uuid: UUID): Note?
    suspend fun updateNote(note: Note): Note?
    suspend fun deleteNote(note: Note)
    fun getAllNotesSync(): List<Note>
    suspend fun upsertNote(note: Note): Note?
    suspend fun finallyDeleteNote(note: Note)
}
