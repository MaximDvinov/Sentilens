package org.senti.lens.screens.home

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.repositories.DbNotesRepositoryImpl
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.repositories.DbTagsRepositoryImpl

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

    companion object {
        val instance = HomeNotesUseCase(
            notesRepository = DbNotesRepositoryImpl.instance,
            tagsRepository = DbTagsRepositoryImpl.instance
        )
    }
}
