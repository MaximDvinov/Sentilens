package org.diary.navigation

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
}

sealed class InitialDiaryScreenState() {
    data object CreateDiary : InitialDiaryScreenState()
    data object Idle : InitialDiaryScreenState()
    data class UpdateDiary(val diaryId: UUID?) : InitialDiaryScreenState()
    data object Search : InitialDiaryScreenState()
}