package org.diary.compose

import org.diary.auth.authModule
import org.diary.data.dataModule
import org.diary.diary.diaryModule
import org.koin.core.module.Module
import org.koin.core.module.dsl.factoryOf
import org.koin.dsl.module
import org.diary.compose.home.HomeScreenModel
import org.diary.stats.statsModule

expect val platformModule: Module

val commonModule = module {
    includes(
        dataModule, diaryModule, authModule, statsModule
    )
    factoryOf(::HomeScreenModel)
}