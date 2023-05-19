package org.senti.lens.repositories

import kotlinx.coroutines.flow.Flow
import org.senti.lens.db.dao.NoteDao
import org.senti.lens.models.Note
import java.util.UUID

interface NotesRepository {

    fun getNotes(): Flow<List<Note>>

    suspend fun createNotes(note: Note): Note?
    suspend fun updateNotes(note: Note): Note?
    suspend fun deleteNote(note: Note)
    suspend fun getNote(id: UUID): Note?
    fun getNotesSync(): List<Note>
    suspend fun upsertNote(note: Note): Note?
    suspend fun finalyDeleteNote(note: Note)
}

class DbNotesRepositoryImpl(private val noteDao: NoteDao) : NotesRepository {
    override fun getNotes(): Flow<List<Note>> {
        return noteDao.getAllNotes()
    }

    override fun getNotesSync(): List<Note> {
        return noteDao.getAllNotesSync()
    }

    override suspend fun createNotes(note: Note): Note {
        return noteDao.createNote(note)
    }

    override suspend fun updateNotes(note: Note): Note? {
        return noteDao.updateNote(note)
    }

    override suspend fun deleteNote(note: Note) {
        noteDao.deleteNote(note)
    }

    override suspend fun upsertNote(note: Note): Note? {
        return noteDao.upsertNote(note)
    }

    override suspend fun getNote(id: UUID): Note? {
        return noteDao.getNote(id)
    }

    override suspend fun finalyDeleteNote(note: Note) {
        noteDao.finallyDeleteNote(note)
    }
}