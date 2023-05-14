package org.senti.lens

import org.koin.core.module.Module
import org.koin.dsl.module
import org.senti.lens.db.dao.NoteDao
import org.senti.lens.db.dao.NoteDaoImpl
import org.senti.lens.db.dao.TagDao
import org.senti.lens.db.dao.TagDaoImpl
import org.senti.lens.network.NetworkDataSource
import org.senti.lens.repositories.DbNotesRepositoryImpl
import org.senti.lens.repositories.DbTagsRepositoryImpl
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.screens.home.HomeNotesUseCase


expect val platformModule: Module

val commonModule = module {
    single<TagDao> {
        TagDaoImpl()
    }

    single<NoteDao> {
        NoteDaoImpl()
    }

    single<NotesRepository> {
        DbNotesRepositoryImpl(get())
    }

    single<TagsRepository> {
        DbTagsRepositoryImpl(get())
    }

    single {
        NetworkDataSource(get())
    }

    single {
        HomeNotesUseCase(get(), get())
    }
}