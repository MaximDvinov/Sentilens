package org.diary.database

import org.koin.core.module.Module
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.module

actual fun platformDatabaseModule(): Module = module {
    singleOf(::DriverFactory)
}