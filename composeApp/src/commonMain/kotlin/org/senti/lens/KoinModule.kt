package org.senti.lens

import org.koin.dsl.module
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.repositories.DbTagsRepositoryImpl
import org.senti.lens.screens.home.HomeNotesUseCase

val appModule = module {
    single<TagsRepository> { DbTagsRepositoryImpl() }
    single { HomeNotesUseCase(get(), get()) }
}
