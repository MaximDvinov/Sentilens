package org.diary.compose.setting

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.Stable
import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import com.russhwolf.settings.ObservableSettings
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import org.diary.composeui.LoadState
import org.diary.data.ApiResult
import org.diary.data.auth.AuthRepository

@Stable
sealed class DialogState() {
    data object Closed : DialogState()
    data object ChangeLogin : DialogState()
    data object ChangeEmail : DialogState()
    data object ChangePassword : DialogState()
    data object ConfirmDeleteUser : DialogState()
    data object ConfirmLogout : DialogState()
}

class SettingScreenModel(
    private val settings: ObservableSettings,
    private val authRepository: AuthRepository,
) : StateScreenModel<SettingScreenModel.UiState>(UiState()) {

    @Stable
    data class UiState(
        val login: String? = null,
        val email: String? = null,
        val loadState: LoadState = LoadState.Idle,
        val dialogState: DialogState = DialogState.Closed,
    )

    sealed class Intent {
        data object Logout : Intent()
        data class ChangeLogin(val login: String) : Intent()
        data class ChangePassword(val password: String, val oldPassword: String) : Intent()
        data class ChangeEmail(val email: String) : Intent()
        data object DeleteUser : Intent()
        data object GetUserData : Intent()
        data object CloseError : Intent()

        data class OpenDialog(val dialogState: DialogState) : Intent()
    }

    sealed class SingleEvent {
        data object Logout : SingleEvent()
    }

    private val _singleEvent = Channel<SingleEvent>(Channel.BUFFERED)
    val singleEvent = _singleEvent.receiveAsFlow()

    fun processIntent(intent: Intent) {
        screenModelScope.launch {
            mutableState.update {
                it.copy(loadState = LoadState.Loading)
            }
            mutableState.update {
                reduce(it, intent)
            }
        }
    }

    init {
        processIntent(Intent.GetUserData)
    }

    private suspend fun reduce(oldState: UiState, intent: Intent): UiState {
        return when (intent) {
            is Intent.Logout -> intent.logout(oldState)
            is Intent.ChangeEmail -> intent.changeEmail(oldState)
            is Intent.ChangeLogin -> intent.changeLogin(oldState)
            is Intent.ChangePassword -> intent.changePassword(oldState)
            Intent.DeleteUser -> deleteUser(oldState)
            Intent.GetUserData -> getUserData(oldState)
            is Intent.OpenDialog -> openDialog(oldState, intent.dialogState)
            Intent.CloseError -> oldState.copy(loadState = LoadState.Idle)
        }
    }

    private fun openDialog(
        oldState: UiState,
        dialogState: DialogState
    ): UiState {
        return oldState.copy(dialogState = dialogState)
    }

    private suspend fun getUserData(oldState: UiState): UiState {
        val result = authRepository.userData() ?: return oldState.copy(
            loadState = LoadState.Error(
                message = "Error"
            )
        )

        return oldState.copy(
            login = result.username,
            email = result.email,
            loadState = LoadState.Success
        )
    }

    private suspend fun deleteUser(oldState: UiState): UiState {
        return when (val result = authRepository.deleteUser()) {
            is ApiResult.Failure -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.ServerError -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.Success -> {
                _singleEvent.send(SingleEvent.Logout)
                oldState.copy(loadState = LoadState.Success, dialogState = DialogState.Closed)
            }
        }
    }

    private suspend fun Intent.Logout.logout(oldState: UiState): UiState {
        authRepository.logout()
        _singleEvent.send(SingleEvent.Logout)
        return oldState.copy(dialogState = DialogState.Closed)
    }

    private suspend fun Intent.ChangeLogin.changeLogin(oldState: UiState): UiState {
        return when (val result = authRepository.changeLogin(login)) {
            is ApiResult.Failure -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.ServerError -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.Success -> oldState.copy(
                login = result.data.username,
                loadState = LoadState.Success,
                dialogState = DialogState.Closed
            )
        }
    }

    private suspend fun Intent.ChangePassword.changePassword(oldState: UiState): UiState {
        return when (val result = authRepository.changePassword(oldPassword, password)) {
            is ApiResult.Failure -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.ServerError -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.Success -> oldState.copy(loadState = LoadState.Success, dialogState = DialogState.Closed)
        }
    }

    private suspend fun Intent.ChangeEmail.changeEmail(oldState: UiState): UiState {
        return when (val result = authRepository.changeEmail(email)) {
            is ApiResult.Failure -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.ServerError -> oldState.copy(loadState = LoadState.Error(message = result.message))
            is ApiResult.Success -> oldState.copy(
                login = result.data.email,
                loadState = LoadState.Success,
                dialogState = DialogState.Closed
            )
        }
    }
}