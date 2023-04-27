package org.senti.lens.screens.editNote

import org.senti.lens.models.Note
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository

class EditNoteUseCase(
    private val notesRepository: NotesRepository,
    private val tagsRepository: TagsRepository
) {
    suspend fun createNote(note: Note) {
        notesRepository.createNotes(note.copy(id = (0..10000).random()))
    }

    suspend fun updateNote(note: Note) {
        notesRepository.updateNotes(note)
    }

    suspend fun deleteNote(note: Note) {
        notesRepository.deleteNote(note)
    }
}