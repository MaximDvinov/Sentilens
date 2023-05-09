package org.senti.lens.repositories

import kotlinx.coroutines.flow.Flow
import org.senti.lens.db.dao.NoteDaoImpl
import org.senti.lens.models.Note
import java.util.UUID

interface NotesRepository {

    fun getNotes(): Flow<List<Note>>

    suspend fun createNotes(note: Note): Note?
    suspend fun updateNotes(note: Note): Note?
    suspend fun deleteNote(note: Note)
    suspend fun getNote(id: UUID): Note?
}

class DbNotesRepositoryImpl : NotesRepository {
    private val noteDao by lazy {
        NoteDaoImpl()
    }

    override fun getNotes(): Flow<List<Note>> {
        return noteDao.getAllNotes()
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

    override suspend fun getNote(id: UUID): Note? {
        return noteDao.getNote(id)
    }

    companion object {
        val instance = DbNotesRepositoryImpl()
    }
}