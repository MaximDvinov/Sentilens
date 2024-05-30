package org.diary.advice

import org.koin.core.module.dsl.factoryOf
import org.koin.dsl.module
import org.diary.advice.player.PlayerScreenModel

val adviceModule = module {
    factoryOf(::PlayerScreenModel)
}