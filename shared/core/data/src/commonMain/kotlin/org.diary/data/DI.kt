package org.diary.data

import org.diary.data.auth.UserRepository
import org.diary.data.auth.UserRepositoryImpl
import org.diary.data.diary.NotesRepository
import org.diary.data.diary.NotesRepositoryImpl
import org.diary.data.diary.SyncRepository
import org.diary.data.diary.SyncRepositoryImpl
import org.diary.data.stats.StatsRepository
import org.diary.data.stats.StatsRepositoryImpl
import org.diary.data.advice.AdviceRepository
import org.diary.data.advice.AdviceRepositoryImpl
import org.diary.database.databaseModule
import org.diary.nerwork.networkModule
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

val dataModule = module {
    includes(databaseModule, networkModule)
    singleOf(::NotesRepositoryImpl) bind NotesRepository::class
    singleOf(::SyncRepositoryImpl) bind SyncRepository::class
    singleOf(::UserRepositoryImpl) bind UserRepository::class
    singleOf(::UserRepositoryImpl) bind UserRepository::class
    singleOf(::StatsRepositoryImpl) bind StatsRepository::class
    singleOf(::AdviceRepositoryImpl) bind AdviceRepository::class
}