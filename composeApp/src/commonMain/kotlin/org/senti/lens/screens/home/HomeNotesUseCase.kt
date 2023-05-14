package org.senti.lens.screens.home

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.repositories.DbNotesRepositoryImpl
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.repositories.DbTagsRepositoryImpl
import java.util.UUID

class HomeNotesUseCase(
    private val notesRepository: NotesRepository,
    private val tagsRepository: TagsRepository
) {
    fun getNotesAndTags(): Flow<Pair<List<Note>, List<Tag>>?> {
        val result = MutableStateFlow<Pair<List<Note>, List<Tag>>?>(null)
        val notes = notesRepository.getNotes()
        val tags = tagsRepository.getTags()

        CoroutineScope(Dispatchers.IO).launch {
            notes.collect {
                result.value = result.value?.copy(first = it) ?: Pair(it, listOf())
            }
        }

        CoroutineScope(Dispatchers.IO).launch {
            tags.collect {
                result.value = result.value?.copy(second = it) ?: Pair(listOf(), it)
            }
        }



        return result
    }

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
