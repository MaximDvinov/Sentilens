package org.senti.lens

import org.koin.dsl.module
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.NotesRepositoryImpl
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.repositories.TagsRepositoryImpl
import org.senti.lens.screens.homeNotes.HomeNotesUseCase

val appModule = module {
    single<TagsRepository> { TagsRepositoryImpl() }
    single<NotesRepository> { NotesRepositoryImpl() }
    single { HomeNotesUseCase(get(), get()) }
}
