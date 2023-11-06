package org.senti.lens.screens.list

import kotlinx.coroutines.flow.Flow
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import org.senti.lens.ApiResult
import org.senti.lens.models.Note
import org.senti.lens.models.NoteWrite
import org.senti.lens.network.NotesDataSource
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository
import kotlin.random.Random

class DiaryUseCase(
    private val notesRepository: NotesRepository,
    private val notesDataSource: NotesDataSource,
) {
    fun getNotesAndTags(): Flow<List<Note>> {
        return notesRepository.getNotes()
    }

    suspend fun createNote(note: Note): Note? {
        val now: Instant = Clock.System.now()

        return notesRepository.createNotes(
            note.copy(
                uuid = UUID.generateUUID(Random), updatedAt = now.toLocalDateTime(
                    TimeZone.UTC
                ), createdAt = now.toLocalDateTime(TimeZone.UTC)
            )
        )
    }

    suspend fun createNoteAndAnalyze(note: Note): Pair<ApiResult<Note>, Note?> {
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
}
