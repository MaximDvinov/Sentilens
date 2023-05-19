package org.senti.lens.screens.auth.login

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import com.russhwolf.settings.ObservableSettings
import kotlinx.coroutines.launch
import org.senti.lens.ApiResult
import org.senti.lens.LoadState
import org.senti.lens.models.LoginData
import org.senti.lens.screens.auth.AuthRepository

const val TOKEN = "token"

class LoginScreenModel(
    private val authRepository: AuthRepository,
    private val settings: ObservableSettings
) :
    StateScreenModel<LoginScreenModel.UiState>(UiState()) {
    data class UiState(
        val loginData: LoginData = LoginData(),
        val loadState: LoadState = LoadState.Idle,
        val tokenData: String? = null
    )

    sealed class Intent {
        data class OnPasswordChanged(val value: String) : Intent()
        data class OnUsernameChanged(val value: String) : Intent()
        object OnLoginClicked : Intent()
    }

    fun processIntent(intent: Intent) {
        coroutineScope.launch {
            if (intent is Intent.OnLoginClicked) {
                mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
            }

            mutableState.value = reduce(intent = intent, mutableState.value)
        }
    }

    private suspend fun reduce(intent: Intent, state: UiState): UiState {
        return when (intent) {
            Intent.OnLoginClicked -> {
                when (val result = authRepository.login(state.loginData)) {
                    is ApiResult.ServerError -> state.copy(loadState = LoadState.Error(message = "Ошибка авторизации: ${result.status}"))
                    is ApiResult.Success -> {
                        result.data.accessToken?.let { settings.putString(TOKEN, it) }
                        state.copy(
                            loadState = LoadState.Success
                        )
                    }
                    else -> {
                        state
                    }
                }

            }

            is Intent.OnPasswordChanged -> state.copy(loginData = state.loginData.copy(password = intent.value))
            is Intent.OnUsernameChanged -> state.copy(loginData = state.loginData.copy(username = intent.value))
        }
    }
}