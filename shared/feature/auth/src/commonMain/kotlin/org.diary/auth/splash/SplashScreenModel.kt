package org.diary.auth.splash

import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch
import org.diary.data.auth.AuthRepository

sealed class SplashEvent {
    data object Authenticated : SplashEvent()
    data object Unauthenticated : SplashEvent()
}

class SplashScreenModel(private val authRepository: AuthRepository) : ScreenModel {
    private val _event = Channel<SplashEvent>()
    val event = _event.receiveAsFlow()

    init {
        isAuthenticated()
    }

    private fun isAuthenticated() {
        screenModelScope.launch {
            if (authRepository.isAuthenticated()) {
                delay(5000)
                _event.send(SplashEvent.Authenticated)
            } else {
                delay(1000)
                _event.send(SplashEvent.Unauthenticated)
            }
        }
    }
}