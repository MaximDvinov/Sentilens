package org.diary.compose.setting

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import com.russhwolf.settings.ObservableSettings
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch


class SettingScreenModel(
    private val settings: ObservableSettings,
) : StateScreenModel<SettingScreenModel.UiState>(UiState) {

    data object UiState

    sealed class Intent {
        data object Logout : Intent()
    }

    sealed class SingleEvent {
        data object Logout : SingleEvent()
    }

    private val _singleEvent = Channel<SingleEvent>(Channel.BUFFERED)
    val singleEvent = _singleEvent.receiveAsFlow()

    fun processIntent(intent: Intent) {
        screenModelScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    private suspend fun reduce(oldState: UiState, intent: Intent): UiState {
        return when (intent) {
            Intent.Logout -> {
                settings.clear()
                _singleEvent.send(SingleEvent.Logout)
                oldState
            }
        }
    }

}
