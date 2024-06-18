package org.diary.navigation

import cafe.adriel.voyager.core.lifecycle.JavaSerializable
import cafe.adriel.voyager.core.registry.ScreenProvider
import kotlinx.uuid.UUID

sealed class DiaryScreenProvider : ScreenProvider {
    data object HomeScreen : DiaryScreenProvider()
    data object SettingScreen : DiaryScreenProvider()
    data object BreathScreen : DiaryScreenProvider()
    data object PlayerScreen : DiaryScreenProvider()
    data object RegistrationScreen : DiaryScreenProvider()
    data class DiaryScreen(val initialState: InitialDiaryScreenState = InitialDiaryScreenState.Idle) :
        DiaryScreenProvider()

    data class LoginScreen(
        val username: String? = null,
        val password: String? = null,
    ) : DiaryScreenProvider()

    data object SplashScreen : DiaryScreenProvider()
    data object HomeStatsScreen : DiaryScreenProvider()
    data object PinCodeScreen : DiaryScreenProvider()
    data object AdviceScreen : DiaryScreenProvider()
}


sealed class InitialDiaryScreenState : JavaSerializable {
    data object CreateDiary : InitialDiaryScreenState(), JavaSerializable
    data object Idle : InitialDiaryScreenState(), JavaSerializable
    data class UpdateDiary(val diaryId: String?) : InitialDiaryScreenState(), JavaSerializable
}