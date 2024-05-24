package org.diary.database

import org.diary.database.datasources.LocalDiaryDataSource
import org.diary.database.datasources.LocalUserDataSource
import org.diary.database.datasources.LocalUserDataSourceImpl
import org.diary.database.datasources.LocalNotesDataSource
import org.diary.database.daos.*
import org.koin.core.module.Module
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

expect fun platformDatabaseModule(): Module

val databaseModule = module {
    includes(platformDatabaseModule())

    singleOf(::LocalDiaryDataSource) bind LocalNotesDataSource::class
    singleOf(::LocalUserDataSourceImpl) bind LocalUserDataSource::class
    singleOf(::NoteDaoImpl) bind NoteDao::class
    singleOf(::UserDaoImpl) bind UserDao::class

    single {
        createDatabase(get())
    }
}