package org.diary.main

import cafe.adriel.voyager.core.registry.ScreenRegistry
import cafe.adriel.voyager.core.registry.screenModule
import org.diary.auth.login.LoginScreen
import org.diary.auth.registration.RegistrationScreen
import org.diary.auth.splash.SplashScreen
import org.diary.navigation.DiaryScreenProvider
import org.diary.diary.list.DiaryScreen
import org.diary.main.home.HomeScreen

val navigationModule = screenModule {
    register<DiaryScreenProvider.LoginScreen> {
        LoginScreen(it.username, it.password)
    }
    register<DiaryScreenProvider.RegistrationScreen> {
        RegistrationScreen()
    }
    register<DiaryScreenProvider.DiaryScreen> {
        DiaryScreen(it.initialState)
    }
    register<DiaryScreenProvider.HomeScreen> {
        HomeScreen()
    }

    register<DiaryScreenProvider.SplashScreen> {
        SplashScreen()
    }
}

fun screenRegistry(){
    ScreenRegistry {
        navigationModule()
    }
}
