package org.diary.auth.splash

import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch
import org.diary.data.auth.UserRepository

sealed class SplashEvent {
    data object Authenticated : SplashEvent()
    data object OpenPinCode : SplashEvent()
    data object Unauthenticated : SplashEvent()
}

class SplashScreenModel(private val userRepository: UserRepository) : ScreenModel {
    private val _event = Channel<SplashEvent>()
    val event = _event.receiveAsFlow()

    init {
        isAuthenticated()
    }

    private fun isAuthenticated() {
        screenModelScope.launch {
            if (userRepository.isAuthenticated()) {
                if (userRepository.getPinCode().isNullOrBlank()) {
                    delay(1000)
                    _event.send(SplashEvent.Authenticated)
                } else {
                    _event.send(SplashEvent.OpenPinCode)
                }

            } else {
                delay(1000)
                _event.send(SplashEvent.Unauthenticated)
            }
        }
    }
}