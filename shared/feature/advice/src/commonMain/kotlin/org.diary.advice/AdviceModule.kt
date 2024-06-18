package org.diary.advice

import org.koin.core.module.dsl.factoryOf
import org.koin.dsl.module
import org.diary.advice.player.PlayerScreenModel
import org.diary.advice.list.AdvicesScreenModel

val adviceModule = module {
    factoryOf(::PlayerScreenModel)
    factoryOf(::AdvicesScreenModel)
}