package org.diary.navigation

import cafe.adriel.voyager.core.registry.ScreenProvider
import kotlinx.uuid.UUID

sealed class DiaryScreenProvider : ScreenProvider {
    data object HomeScreen : DiaryScreenProvider()
    data object SettingScreen : DiaryScreenProvider()
    data object BreathScreen : DiaryScreenProvider()
    data object PlayerScreen : DiaryScreenProvider()
    data object RegistrationScreen : DiaryScreenProvider()
    data class DiaryListScreen(val diaryId: UUID? = null) : DiaryScreenProvider()
    data class LoginScreen(
        val username: String? = null,
        val password: String? = null,
    ) : DiaryScreenProvider()
}