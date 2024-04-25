package org.diary.main

import org.diary.data.dataModule
import org.diary.diary.diaryModule
import org.koin.core.module.Module
import org.koin.core.module.dsl.factoryOf
import org.koin.dsl.module
import org.diary.main.home.HomeScreenModel

expect val platformModule: Module

val commonModule = module {
    includes(
        dataModule, diaryModule
    )
    factoryOf(::HomeScreenModel)
}