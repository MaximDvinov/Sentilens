package org.diary.data

import org.diary.data.auth.AuthRepository
import org.diary.data.auth.AuthRepositoryImpl
import org.diary.data.diary.NotesRepository
import org.diary.data.diary.NotesRepositoryImpl
import org.diary.data.diary.SyncRepository
import org.diary.data.diary.SyncRepositoryImpl
import org.diary.data.stats.StatsRepository
import org.diary.data.stats.StatsRepositoryImpl
import org.diary.database.databaseModule
import org.diary.nerwork.networkModule
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

val dataModule = module {
    includes(databaseModule, networkModule)
    singleOf(::NotesRepositoryImpl) bind NotesRepository::class
    singleOf(::SyncRepositoryImpl) bind SyncRepository::class
    singleOf(::AuthRepositoryImpl) bind AuthRepository::class
    singleOf(::AuthRepositoryImpl) bind AuthRepository::class
    singleOf(::StatsRepositoryImpl) bind StatsRepository::class
}