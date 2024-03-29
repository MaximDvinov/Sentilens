package org.senti.lens.screens.auth.registration

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.coroutines.launch
import org.senti.lens.ApiResult
import org.senti.lens.LoadState
import org.senti.lens.models.CreatedUser
import org.senti.lens.models.RegisterData
import org.senti.lens.screens.auth.AuthRepository

class RegistrationScreenModel(private val authRepository: AuthRepository) :
    StateScreenModel<RegistrationScreenModel.UiState>(UiState()) {
    data class UiState(
        val loginData: RegisterData = RegisterData(),
        val loadState: LoadState = LoadState.Idle,
        val createdUser: CreatedUser? = null
    )

    sealed class Intent {
        data class OnPasswordChanged(val value: String) : Intent()
        data class OnUsernameChanged(val value: String) : Intent()
        data class OnEmailChanged(val value: String) : Intent()
        object OnRegistrationClicked : Intent()
    }

    fun processIntent(intent: Intent) {
        screenModelScope.launch {
            if (intent is Intent.OnRegistrationClicked) {
                mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
            }
            mutableState.value = reduce(intent = intent, mutableState.value)
        }
    }

    private suspend fun reduce(intent: Intent, state: UiState): UiState {
        return when (intent) {
            Intent.OnRegistrationClicked -> {
                when (val result = authRepository.register(state.loginData)) {
                    is ApiResult.ServerError -> state.copy(loadState = LoadState.Error(message = "Ошибка регистрации: ${result.status}"))
                    is ApiResult.Success -> state.copy(
                        createdUser = result.data,
                        loadState = LoadState.Success
                    )

                    is ApiResult.Failure -> {
                        state.copy(loadState = LoadState.Error(message = result.message))
                    }
                }

            }

            is Intent.OnPasswordChanged -> state.copy(loginData = state.loginData.copy(password = intent.value))
            is Intent.OnUsernameChanged -> state.copy(loginData = state.loginData.copy(username = intent.value))
            is Intent.OnEmailChanged -> state.copy(loginData = state.loginData.copy(email = intent.value))
        }
    }
}