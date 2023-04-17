package org.senti.lens.screens.repositories

import org.senti.lens.models.Note
import org.senti.lens.models.notes

interface NotesRepository {

    suspend fun getNotes(): List<Note>
}

class NotesRepositoryImpl : NotesRepository {
    override suspend fun getNotes(): List<Note> {
        return notes
    }

    companion object{
        val instance = NotesRepositoryImpl()
    }
}


object GetNotesRepositoryImpl {

}