package org.senti.lens.screens.home

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.combine
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.senti.lens.ApiResult
import org.senti.lens.models.Note
import org.senti.lens.models.NoteWrite
import org.senti.lens.models.Tag
import org.senti.lens.network.NotesDataSource
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository
import java.util.UUID

class HomeNotesUseCase(
    private val notesRepository: NotesRepository,
    private val tagsRepository: TagsRepository,
    private val notesDataSource: NotesDataSource
) {
    fun getNotesAndTags(): Flow<Pair<List<Note>, List<Tag>>?> {
        val notes = notesRepository.getNotes()
        val tags = tagsRepository.getTags()

        return notes.combine(tags) { f1, f2 -> f1 to f2 }
    }

    suspend fun createNote(note: Note): Note? {
        val now: Instant = Clock.System.now()

        return notesRepository.createNotes(
            note.copy(
                uuid = UUID.randomUUID(), updatedAt = now.toLocalDateTime(
                    TimeZone.UTC
                ), createdAt = now.toLocalDateTime(TimeZone.UTC)
            )
        )
    }

    suspend fun createNoteAndAnalayze(note: Note): Pair<ApiResult<Note>, Note?> {
        var createdNote = notesRepository.createNotes(note.copy(isNew = true))

        val serverNote = notesDataSource.createNote(
            NoteWrite(
                title = createdNote?.title,
                content = createdNote?.content,
                uuid = createdNote?.uuid,
                tags = createdNote?.tags ?: listOf()
            )
        )

        if (serverNote is ApiResult.Success) {
            createdNote = notesRepository.updateNotes(serverNote.data.copy(isNew = false))
        }

        return serverNote to createdNote
    }

    suspend fun createNoteInServer(note: Note): ApiResult<Note> {
        val serverNote = notesDataSource.createNote(
            NoteWrite(
                title = note.title, content = note.content, uuid = note.uuid, tags = note.tags
            )
        )

        if (serverNote is ApiResult.Success) {
            notesRepository.updateNotes(serverNote.data)
        }

        return serverNote
    }

    suspend fun updateNoteAndAnalyze(note: Note): ApiResult<Note> {
        notesRepository.updateNotes(note)

        val serverNote = notesDataSource.updateNote(note)

        if (serverNote is ApiResult.Success) {
            notesRepository.updateNotes(serverNote.data)
        }

        return serverNote
    }

    suspend fun updateNote(note: Note): Note? {
        return notesRepository.updateNotes(note)
    }

    suspend fun deleteNote(note: Note) {
        notesRepository.deleteNote(note)

        if (notesDataSource.deleteNote(note.uuid.toString()) is ApiResult.Success) {
            notesRepository.finalyDeleteNote(note)
        }
    }

    suspend fun createTag(tag: Tag) {
        return tagsRepository.createTag(tag)
    }
}
