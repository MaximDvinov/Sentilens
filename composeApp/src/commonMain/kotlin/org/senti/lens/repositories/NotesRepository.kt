package org.senti.lens.repositories

import io.github.xxfast.kstore.KStore
import kotlinx.coroutines.delay
import org.senti.lens.models.Note
import org.senti.lens.models.notes

interface NotesRepository {

    suspend fun getNotes(): List<Note>

    suspend fun createNotes(note: Note)
    suspend fun updateNotes(note: Note)
    suspend fun deleteNote(note: Note)
}

class NotesRepositoryImpl : NotesRepository {
    override suspend fun getNotes(): MutableList<Note> {
        delay(1000)
        return notes
    }

    override suspend fun createNotes(note: Note) {
        notes.add(note)
    }

    override suspend fun updateNotes(note: Note) {
        notes[notes.indexOfFirst { note.id == it.id }] = note
    }

    override suspend fun deleteNote(note: Note) {
        notes.removeAt(notes.indexOfFirst { note.id == it.id })
    }

    companion object {
        val instance = NotesRepositoryImpl()
    }
}

class DbNotesRepositoryImpl : NotesRepository {
    override suspend fun getNotes(): MutableList<Note> {
        delay(1000)
        return notes
    }

    override suspend fun createNotes(note: Note) {
        notes.add(note)
    }

    override suspend fun updateNotes(note: Note) {
        notes[notes.indexOfFirst { note.id == it.id }] = note
    }

    override suspend fun deleteNote(note: Note) {
        notes.removeAt(notes.indexOfFirst { note.id == it.id })
    }

    companion object {
        val instance = NotesRepositoryImpl()
    }
}