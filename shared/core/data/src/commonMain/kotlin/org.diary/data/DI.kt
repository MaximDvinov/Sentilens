package org.diary.data

import org.diary.database.databaseModule
import org.diary.nerwork.networkModule
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

val dataModule = module {
    includes(databaseModule, networkModule)
    singleOf(::NotesRepositoryImpl) bind NotesRepository::class
    singleOf(::SyncRepositoryImpl) bind SyncRepository::class
    singleOf(::MockAuthRepository) bind AuthRepository::class
}