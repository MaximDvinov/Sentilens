package org.diary.auth.pincode

import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch
import org.diary.data.auth.UserRepository

sealed class PinCodeIntent {
    data class CheckPinCode(val pin: String) : PinCodeIntent()
}

sealed class PinCodeEvent {
    data class PinCodeCorrect(val pin: String) : PinCodeEvent()
    data class PinCodeIncorrect(val pin: String) : PinCodeEvent()
}

class PinCodeScreenModel(private val userRepository: UserRepository) : ScreenModel {
    private val _event = Channel<PinCodeEvent>(Channel.BUFFERED)
    val event = _event.receiveAsFlow()

    fun onIntent(intent: PinCodeIntent) {
        when (intent) {
            is PinCodeIntent.CheckPinCode -> isPinCodeCorrect(intent.pin)
        }
    }

    private fun isPinCodeCorrect(pin: String) {
        screenModelScope.launch {
            if (userRepository.getPinCode() == pin) {
                _event.send(PinCodeEvent.PinCodeCorrect(pin))
            } else {
                _event.send(PinCodeEvent.PinCodeIncorrect(pin))
            }
        }
    }


}