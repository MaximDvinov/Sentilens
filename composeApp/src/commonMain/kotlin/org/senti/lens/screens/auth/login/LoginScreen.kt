package org.senti.lens.screens.auth.login

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.CircularProgressIndicator
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.koin.core.component.KoinComponent
import org.koin.core.component.get
import org.senti.lens.LoadState
import org.senti.lens.screens.auth.registration.RegistrationScreen
import org.senti.lens.screens.commons.ui.PrimaryButton
import org.senti.lens.screens.commons.ui.SecondaryButton
import org.senti.lens.screens.auth.ui.AuthTextField
import org.senti.lens.screens.auth.ui.PasswordTextField
import org.senti.lens.screens.home.HomeScreen

class LoginScreen(val username: String? = null, val password: String? = null) : Screen,
    KoinComponent {
    override val key = uniqueScreenKey

    @Composable
    override fun Content() {
        val screenModel = rememberScreenModel {
            LoginScreenModel(get(), get())
        }
        val state by screenModel.state.collectAsState()
        val localNavigator = LocalNavigator.currentOrThrow

        LaunchedEffect(state.tokenData != null) {
            if (state.tokenData != null) {
                localNavigator.replace(HomeScreen())
            }
        }

        LaunchedEffect(username) {
            if (username != null && password != null) {
                screenModel.processIntent(LoginScreenModel.Intent.OnPasswordChanged(password))
                screenModel.processIntent(LoginScreenModel.Intent.OnUsernameChanged(username))
            }
        }

        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            AuthScreenContent(
                state = state,
                onClickLogin = { screenModel.processIntent(LoginScreenModel.Intent.OnLoginClicked) },
                currentUsername = username,
                currentPassword = password,
                onPasswordChanged = { password: String ->
                    screenModel.processIntent(
                        LoginScreenModel.Intent.OnPasswordChanged(
                            password
                        )
                    )
                },
                onUsernameChanged = { username: String ->
                    screenModel.processIntent(
                        LoginScreenModel.Intent.OnUsernameChanged(
                            username
                        )
                    )
                },
                navigator = localNavigator
            )
        }

    }
}

@Composable
fun AuthScreenContent(
    state: LoginScreenModel.UiState,
    onClickLogin: () -> Unit,
    onPasswordChanged: (String) -> Unit,
    onUsernameChanged: (String) -> Unit,
    navigator: Navigator,
    currentUsername: String?,
    currentPassword: String?
) {


    LoginFields(
        state,
        onUsernameChanged,
        onPasswordChanged,
        onClickLogin,
        navigator,
        currentUsername,
        currentPassword
    )
}

@OptIn(ExperimentalAnimationApi::class)
@Composable
private fun LoginFields(
    state: LoginScreenModel.UiState,
    onUsernameChanged: (String) -> Unit,
    onPasswordChanged: (String) -> Unit,
    onClickLogin: () -> Unit,
    navigator: Navigator,
    currentUsername: String?,
    currentPassword: String?
) {
    val (username, setUsername) = remember { mutableStateOf(currentUsername) }
    val (password, setPassword) = remember { mutableStateOf(currentPassword) }

    Column(
        modifier = Modifier.widthIn(max = 500.dp)
            .padding(bottom = 40.dp, start = 40.dp, end = 40.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically)
    ) {
        Column(
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.weight(1f)
        ) {
            Text(
                "Авторизация",
                style = MaterialTheme.typography.h1,
                modifier = Modifier.fillMaxWidth(),
                textAlign = TextAlign.Center,
                color = MaterialTheme.colors.onBackground
            )


            Spacer(modifier = Modifier.height(40.dp))

            AuthTextField(
                modifier = Modifier.fillMaxWidth().widthIn(max = 240.dp),
                text = username ?: "",
                placeholder = "Логин",
                onTextChange = {
                    setUsername(it)
                    onUsernameChanged(it)
                },
                keyboardType = KeyboardType.Text
            )

            Spacer(modifier = Modifier.height(16.dp))

            PasswordTextField(
                modifier = Modifier.fillMaxWidth().widthIn(max = 240.dp),
                text = password ?: "",
                onTextChange = {
                    setPassword(it)
                    onPasswordChanged(it)
                },
                placeholder = "Пароль",
                keyboardType = KeyboardType.Password
            )

            Spacer(modifier = Modifier.height(16.dp))

            AnimatedVisibility(state.loadState is LoadState.Error) {
                if (state.loadState is LoadState.Error) {
                    Text(
                        state.loadState.message,
                        style = MaterialTheme.typography.body1,
                        modifier = Modifier.fillMaxWidth(),
                        textAlign = TextAlign.Center,
                        color = MaterialTheme.colors.onError
                    )
                }

            }
        }

        Column(verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically)) {

            PrimaryButton(
                modifier = Modifier.fillMaxWidth().height(54.dp),
                onClick = onClickLogin,
                enabled = state.loadState !is LoadState.Loading
            ) {
                AnimatedContent(state.loadState !is LoadState.Loading) {
                    if (it) {
                        Text(
                            "Войти",
                            style = MaterialTheme.typography.body1,
                            color = MaterialTheme.colors.onPrimary
                        )
                    } else {
                        CircularProgressIndicator(
                            modifier = Modifier.size(24.dp),
                            strokeCap = StrokeCap.Round,
                            strokeWidth = 3.dp
                        )
                    }
                }
            }


            SecondaryButton(modifier = Modifier.fillMaxWidth().height(54.dp), onClick = {
                navigator.push(RegistrationScreen())
            }) {
                Text(
                    "Регистрация",
                    style = MaterialTheme.typography.body1,
                    color = MaterialTheme.colors.onSecondary
                )
            }
        }
    }
}