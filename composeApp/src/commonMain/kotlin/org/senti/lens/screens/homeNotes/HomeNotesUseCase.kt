package org.senti.lens.screens.homeNotes

import org.senti.lens.ApiResult
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.NotesRepositoryImpl
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.repositories.TagsRepositoryImpl

class HomeNotesUseCase(
    private val notesRepository: NotesRepository,
    private val tagsRepository: TagsRepository
) {
    suspend fun getNotesAndTags(): ApiResult<Pair<List<Note>, List<Tag>>> {
        val notes = notesRepository.getNotes()
        val tags = tagsRepository.getTags()

        return ApiResult.Success(notes to tags)
    }

    companion object {
        val instance = HomeNotesUseCase(
            notesRepository = NotesRepositoryImpl.instance,
            tagsRepository = TagsRepositoryImpl.instance
        )
    }
}
