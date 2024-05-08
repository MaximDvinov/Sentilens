package org.diary.stats

import org.diary.stats.screens.StatsScreenModel
import org.koin.core.module.dsl.factoryOf
import org.koin.dsl.module

val statsModule = module {
    factoryOf(::StatsScreenModel)
}