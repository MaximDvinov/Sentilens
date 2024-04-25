package org.diary.main.setting

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import com.russhwolf.settings.ObservableSettings
import kotlinx.coroutines.launch


class SettingScreenModel(
    private val settings: ObservableSettings
) :
    StateScreenModel<SettingScreenModel.UiState>(UiState) {
    data object UiState

    sealed class Intent {
        data object Logout : Intent()
    }

    fun processIntent(intent: Intent) {
        screenModelScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    private suspend fun reduce(oldState: UiState, intent: Intent): UiState {
        return when (intent) {
            Intent.Logout -> {
//                settings.remove(TOKEN)
                oldState
            }
        }
    }

}