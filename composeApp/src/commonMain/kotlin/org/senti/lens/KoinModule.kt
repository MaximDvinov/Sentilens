package org.senti.lens

import org.koin.dsl.module
import org.senti.lens.screens.repositories.NotesRepository
import org.senti.lens.screens.repositories.NotesRepositoryImpl
import org.senti.lens.screens.repositories.TagsRepository
import org.senti.lens.screens.repositories.TagsRepositoryImpl
import org.senti.lens.screens.useCases.GetNotesAndTagsUseCase

val appModule = module {
    single<TagsRepository> { TagsRepositoryImpl() }
    single<NotesRepository> { NotesRepositoryImpl() }
    single { GetNotesAndTagsUseCase(get(), get()) }
}
