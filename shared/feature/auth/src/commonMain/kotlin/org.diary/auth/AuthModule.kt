package org.diary.auth

import org.diary.auth.login.LoginScreenModel
import org.diary.auth.registration.RegistrationScreenModel
import org.diary.auth.splash.SplashScreenModel
import org.diary.data.dataModule
import org.koin.core.module.dsl.factoryOf
import org.koin.dsl.module

val authModule = module {
    includes(dataModule)

    factoryOf(::LoginScreenModel)
    factoryOf(::RegistrationScreenModel)
    factoryOf(::SplashScreenModel)
}