package org.senti.lens.screens.useCases

import org.senti.lens.ApiResult
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.repositories.NotesRepository
import org.senti.lens.screens.repositories.NotesRepositoryImpl
import org.senti.lens.screens.repositories.TagsRepository
import org.senti.lens.screens.repositories.TagsRepositoryImpl

class GetNotesAndTagsUseCase(
    private val notesRepository: NotesRepository,
    private val tagsRepository: TagsRepository
) {
    suspend operator fun invoke(): ApiResult<Pair<List<Note>, List<Tag>>> {
        val notes = notesRepository.getNotes()
        val tags = tagsRepository.getTags()

        return ApiResult.Success(notes to tags)
    }

    companion object {
        val instance = GetNotesAndTagsUseCase(
            notesRepository = NotesRepositoryImpl.instance,
            tagsRepository = TagsRepositoryImpl.instance
        )

    }
}
