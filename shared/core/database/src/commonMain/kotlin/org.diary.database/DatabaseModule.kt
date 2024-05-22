package org.diary.database

import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

val databaseModule = module {
    singleOf(::FakeLocalNotesDataSource) bind LocalNotesDataSource::class
    singleOf(::FakeLocalUserDataSource) bind LocalUserDataSource::class
}