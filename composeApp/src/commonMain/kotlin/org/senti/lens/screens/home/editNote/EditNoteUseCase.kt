package org.senti.lens.screens.home.editNote

import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.senti.lens.models.Note
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository
import java.util.UUID

class EditNoteUseCase(
    private val notesRepository: NotesRepository, private val tagsRepository: TagsRepository
) {

    suspend fun getNote(id: UUID) = notesRepository.getNote(id)

    suspend fun getAllTags() = tagsRepository.getTags()

    suspend fun createNote(note: Note): Note? {
        val now: Instant = Clock.System.now()

       return notesRepository.createNotes(
            note.copy(
                uuid = UUID.randomUUID(), updatedAt = now.toLocalDateTime(
                    TimeZone.currentSystemDefault()
                ), createdAt = now.toLocalDateTime(TimeZone.currentSystemDefault())
            )
        )
    }

    suspend fun updateNote(note: Note): Note? {
        return notesRepository.updateNotes(note)
    }

    suspend fun deleteNote(note: Note) {
        notesRepository.deleteNote(note)
    }
}