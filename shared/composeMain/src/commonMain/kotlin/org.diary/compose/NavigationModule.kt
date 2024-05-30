package org.diary.compose

import cafe.adriel.voyager.core.registry.ScreenRegistry
import cafe.adriel.voyager.core.registry.screenModule
import org.diary.advice.breath.BreathScreen
import org.diary.auth.login.LoginScreen
import org.diary.auth.pincode.PinCodeScreen
import org.diary.auth.registration.RegistrationScreen
import org.diary.auth.splash.SplashScreen
import org.diary.navigation.DiaryScreenProvider
import org.diary.diary.list.DiaryScreen
import org.diary.compose.home.HomeScreen
import org.diary.compose.setting.SettingScreen
import org.diary.stats.screens.HomeStatsScreen
import org.diary.advice.player.PlayerScreen

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
    register<DiaryScreenProvider.HomeStatsScreen> {
        HomeStatsScreen()
    }
    register<DiaryScreenProvider.PlayerScreen> {
        PlayerScreen()
    }

    register<DiaryScreenProvider.BreathScreen> {
        BreathScreen()
    }
    register<DiaryScreenProvider.SettingScreen> {
        SettingScreen()
    }
    register<DiaryScreenProvider.PinCodeScreen> {
        PinCodeScreen()
    }
}

fun screenRegistry() {
    ScreenRegistry {
        navigationModule()
    }
}
