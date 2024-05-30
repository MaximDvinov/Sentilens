package org.diary.auth.login

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import com.russhwolf.settings.ObservableSettings
import kotlinx.coroutines.launch
import org.diary.composeui.LoadState
import org.diary.data.ApiResult
import org.diary.data.auth.UserRepository
import org.diary.data.auth.LoginData

class LoginScreenModel(
    private val userRepository: UserRepository,
    private val settings: ObservableSettings,
) : StateScreenModel<LoginScreenModel.UiState>(UiState()) {
    data class UiState(
        val loginData: LoginData = LoginData(),
        val loadState: LoadState = LoadState.Idle,
        val tokenData: String? = null,
    )

    sealed class Intent {
        data class OnPasswordChanged(val value: String) : Intent()
        data class OnUsernameChanged(val value: String) : Intent()
        object OnLoginClicked : Intent()
    }

    fun processIntent(intent: Intent) {
        screenModelScope.launch {
            if (intent is Intent.OnLoginClicked) {
                mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
            }

            mutableState.value = reduce(intent = intent, mutableState.value)
        }
    }

    private suspend fun reduce(intent: Intent, state: UiState): UiState {
        return when (intent) {
            Intent.OnLoginClicked -> onLoginClick(state)
            is Intent.OnPasswordChanged -> state.copy(loginData = state.loginData.copy(password = intent.value))
            is Intent.OnUsernameChanged -> state.copy(loginData = state.loginData.copy(username = intent.value))
        }
    }

    private suspend fun onLoginClick(state: UiState) =
        when (val result = userRepository.login(state.loginData)) {
            is ApiResult.ServerError -> state.copy(
                loadState = LoadState.Error(message = "Ошибка авторизации: ${result.status}")
            )

            is ApiResult.Success -> state.copy(
                loadState = LoadState.Success,
                tokenData = result.data.accessToken
            )

            is ApiResult.Failure -> state.copy(
                loadState = LoadState.Error(result.message)
            )
        }
}