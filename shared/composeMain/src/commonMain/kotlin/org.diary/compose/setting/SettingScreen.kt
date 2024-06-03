package org.diary.compose.setting

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.registry.rememberScreen
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import com.russhwolf.settings.ObservableSettings
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.ArrowRight
import compose.icons.feathericons.Moon
import compose.icons.feathericons.Sun
import compose.icons.feathericons.Tablet
import org.diary.auth.pincode.PinCodeIntent
import org.diary.compose.setting.DialogState.*
import org.diary.composeui.LoadState
import org.diary.composeui.bounceClick
import org.diary.composeui.components.ActionTopBar
import org.diary.composeui.components.ErrorSnackbar
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import org.diary.composeui.components.SecondaryIconButton
import org.diary.composeui.components.TitleIconButton
import org.diary.composeui.icons.LeftArrow
import org.diary.composeui.theme.defaultShape
import org.diary.diary.list.DiaryScreenModel
import org.diary.navigation.DiaryScreenProvider
import org.diary.navigation.koinNavigatorScreenModel

class SettingScreen : Screen, KoinComponent {
    override val key = uniqueScreenKey

    @Composable
    override fun Content() {
        val settings: ObservableSettings by inject()
        val navigator = LocalNavigator.currentOrThrow

        val screenModel = koinNavigatorScreenModel<SettingScreenModel>(navigator)
        val state by screenModel.state.collectAsState()

        val authScreen = rememberScreen(DiaryScreenProvider.LoginScreen())

        var isDarkTheme by remember(false) {
            mutableStateOf(
                settings.getBooleanOrNull(
                    "theme"
                )
            )
        }

        LaunchedEffect(Unit) {
            screenModel.singleEvent.collect {
                if (it is SettingScreenModel.SingleEvent.Logout) {
                    navigator.replaceAll(authScreen)
                }
            }
        }

        Box {
            SettingScreenContent(
                isDarkTheme = isDarkTheme,
                state = state,
                onChangeTheme = {
                    isDarkTheme = it
                    if (it == null) {
                        settings.remove("theme")
                    } else {
                        settings.putBoolean("theme", it)
                    }

                },
                onBackClick = { navigator.pop() },
                onIntent = screenModel::processIntent
            )

            if (state.loadState is LoadState.Error && state.dialogState == Closed) {
                ErrorSnackbar(error = (state.loadState as? LoadState.Error)?.message ?: "",
                    onDismiss = {
                        screenModel.processIntent(SettingScreenModel.Intent.CloseError)
                    })
            }
        }


        when (state.dialogState) {
            is ChangeEmail -> {
                SingleFieldChangeDialog(
                    modifier = Modifier.widthIn(max = 600.dp),
                    title = "Изменить эл. почту",
                    text = state.email ?: "",
                    error = (state.loadState as? LoadState.Error)?.message ?: "",
                    onDismiss = screenModel::closeDialog,
                    onConfirm = {
                        screenModel.processIntent(
                            SettingScreenModel.Intent.ChangeEmail(it)
                        )
                    }
                )
            }

            is ChangeLogin -> {
                SingleFieldChangeDialog(
                    modifier = Modifier.widthIn(max = 600.dp),
                    title = "Изменить логин",
                    text = state.login ?: "",
                    error = (state.loadState as? LoadState.Error)?.message ?: "",
                    onDismiss = screenModel::closeDialog,
                    onConfirm = {
                        screenModel.processIntent(
                            SettingScreenModel.Intent.ChangeLogin(it)
                        )
                    }
                )
            }

            ChangePassword -> {
                PasswordChangeDialog(
                    modifier = Modifier.widthIn(max = 600.dp),
                    onDismiss = screenModel::closeDialog,
                    error = (state.loadState as? LoadState.Error)?.message ?: "",
                    onConfirm = { oldPassword, newPassword ->
                        screenModel.processIntent(
                            SettingScreenModel.Intent.ChangePassword(
                                oldPassword = oldPassword,
                                password = newPassword
                            )
                        )
                    }
                )
            }

            Closed -> {}
            ConfirmDeleteUser -> {
                ConfirmDialog(
                    modifier = Modifier.widthIn(max = 600.dp),
                    onDismiss = screenModel::closeDialog,
                    title = "Удаление аккаунта",
                    subtitle = "Вы уверены, что хотите удалить аккаунт? Данное действие нельзя будет отменить, все данные будут потеряны.",
                    onConfirm = {
                        screenModel.processIntent(
                            SettingScreenModel.Intent.DeleteUser
                        )
                    }
                )
            }

            ConfirmLogout -> {
                ConfirmDialog(
                    modifier = Modifier.widthIn(max = 600.dp),
                    onDismiss = screenModel::closeDialog,
                    title = "Выход из приложения",
                    subtitle = "Вы уверены, что хотите выйти из приложения? Записи, которые не были синхронизированы, будут потеряны.",
                    onConfirm = {
                        screenModel.processIntent(
                            SettingScreenModel.Intent.Logout
                        )
                    }
                )
            }

            ChangePinCode -> {
                ChangePinCodeDialog(
                    modifier = Modifier.widthIn(max = 600.dp),
                    state.isPinCodeSet,
                    error = (state.loadState as? LoadState.Error)?.message ?: "",
                    onDismiss = screenModel::closeDialog,
                    onConfirm = { oldPinCode, newPinCode ->
                        screenModel.processIntent(
                            SettingScreenModel.Intent.ChangePinCode(
                                oldPinCode = oldPinCode,
                                newPinCode = newPinCode
                            )
                        )
                    }
                )
            }
        }
    }
}

fun SettingScreenModel.closeDialog() {
    processIntent(SettingScreenModel.Intent.OpenDialog(Closed))
}

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
fun SettingScreenContent(
    isDarkTheme: Boolean?,
    state: SettingScreenModel.UiState,
    onChangeTheme: (Boolean?) -> Unit,
    onBackClick: () -> Unit,
    onIntent: (SettingScreenModel.Intent) -> Unit,
) {
    val screenSizeClass = calculateWindowSizeClass()
    Column(
        modifier = Modifier.fillMaxSize().padding(horizontal = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        ActionTopBar(
            modifier = Modifier.padding(vertical = 16.dp).fillMaxWidth(),
            title = "Настройки",
            leftButtonIcon = FeatherIcons.ArrowLeft,
            onClickLeft = onBackClick
        )

        if (screenSizeClass.widthSizeClass == WindowWidthSizeClass.Compact) {
            CompactSetting(state, onIntent, isDarkTheme, onChangeTheme)
        } else {
            ExpandedSetting(state, onIntent, isDarkTheme, onChangeTheme)
        }

    }
}

@Composable
private fun CompactSetting(
    state: SettingScreenModel.UiState,
    onIntent: (SettingScreenModel.Intent) -> Unit,
    isDarkTheme: Boolean?,
    onChangeTheme: (Boolean?) -> Unit
) {
    Column(
        modifier = Modifier.padding(bottom = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        ProfileItem(
            title = "Логин",
            text = state.login,
            onClick = {
                onIntent(SettingScreenModel.Intent.OpenDialog(ChangeLogin))
            }
        )

        ProfileItem(
            title = "Эл. почта",
            text = state.email,
            onClick = {
                onIntent(SettingScreenModel.Intent.OpenDialog(ChangeEmail))
            }
        )

        TitleIconButton(
            modifier = Modifier.height(48.dp).fillMaxWidth(),
            onClick = {
                onIntent(SettingScreenModel.Intent.OpenDialog(ChangePassword))
            },
            title = "Изменить пароль",
            icon = LeftArrow
        )

        TitleIconButton(
            modifier = Modifier.height(48.dp).fillMaxWidth(),
            onClick = {
                onIntent(SettingScreenModel.Intent.OpenDialog(ChangePinCode))
            },
            title = if (state.isPinCodeSet) "Изменить пин-код" else "Установить пин-код",
            icon = LeftArrow
        )

        ThemePicker(
            modifier = Modifier.fillMaxWidth(),
            isDarkTheme = isDarkTheme,
            onChangeTheme = onChangeTheme
        )

        Spacer(modifier = Modifier.weight(1f))

        TitleIconButton(
            modifier = Modifier.height(48.dp).fillMaxWidth(),
            onClick = {
                onIntent(SettingScreenModel.Intent.OpenDialog(ConfirmLogout))
            },
            title = "Выйти из приложения",
            icon = LeftArrow
        )

        TitleIconButton(
            modifier = Modifier.height(48.dp).fillMaxWidth(),
            onClick = {
                onIntent(SettingScreenModel.Intent.OpenDialog(ConfirmDeleteUser))
            },
            title = "Удалить аккаунт",
            icon = LeftArrow,
            color = MaterialTheme.colors.error
        )

    }
}


@Composable
private fun ExpandedSetting(
    state: SettingScreenModel.UiState,
    onIntent: (SettingScreenModel.Intent) -> Unit,
    isDarkTheme: Boolean?,
    onChangeTheme: (Boolean?) -> Unit
) {
    Row(
        modifier = Modifier.padding(bottom = 16.dp),
        horizontalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        Column(
            modifier = Modifier.weight(1f).padding(bottom = 16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                ProfileItem(
                    modifier = Modifier.weight(1f).height(82.dp),
                    title = "Логин",
                    text = state.login,
                    onClick = {
                        onIntent(SettingScreenModel.Intent.OpenDialog(ChangeLogin))
                    }
                )

                ProfileItem(
                    modifier = Modifier.weight(1f).height(82.dp),
                    title = "Эл. почта",
                    text = state.email,
                    onClick = {
                        onIntent(SettingScreenModel.Intent.OpenDialog(ChangeEmail))
                    }
                )
            }

            TitleIconButton(
                modifier = Modifier.height(48.dp).fillMaxWidth(),
                onClick = {
                    onIntent(SettingScreenModel.Intent.OpenDialog(ChangePassword))
                },
                title = "Изменить пароль",
                icon = LeftArrow
            )

            TitleIconButton(
                modifier = Modifier.height(48.dp).fillMaxWidth(),
                onClick = {
                    onIntent(SettingScreenModel.Intent.OpenDialog(ChangePinCode))
                },
                title = if (state.isPinCodeSet) "Изменить пин-код" else "Установить пин-код",
                icon = LeftArrow
            )

        }

        Column(
            modifier = Modifier.weight(1f).padding(bottom = 16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {

            ThemePicker(
                modifier = Modifier.fillMaxWidth(),
                isDarkTheme = isDarkTheme,
                onChangeTheme = onChangeTheme
            )

            TitleIconButton(
                modifier = Modifier.height(48.dp).fillMaxWidth(),
                onClick = {
                    onIntent(SettingScreenModel.Intent.OpenDialog(ConfirmLogout))
                },
                title = "Выйти из приложения",
                icon = LeftArrow
            )

            TitleIconButton(
                modifier = Modifier.height(48.dp).fillMaxWidth(),
                onClick = {
                    onIntent(SettingScreenModel.Intent.OpenDialog(ConfirmDeleteUser))
                },
                title = "Удалить аккаунт",
                icon = LeftArrow,
                color = MaterialTheme.colors.error
            )

        }

    }
}

@Composable
fun ProfileItem(
    modifier: Modifier = Modifier,
    title: String,
    text: String?,
    onClick: () -> Unit,
) {
    Column(
        modifier
            .bounceClick()
            .clip(defaultShape)
            .clickable(onClick = onClick)
            .background(MaterialTheme.colors.secondary)
            .padding(horizontal = 16.dp, vertical = 10.dp),
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Row(modifier = Modifier.alpha(0.7f)) {
            Text(
                modifier = Modifier.weight(1f),
                text = title,
                style = MaterialTheme.typography.body1.copy(MaterialTheme.colors.onSecondary)
            )

            Text(
                modifier = Modifier.weight(1f),
                text = "изменить",
                style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.primary),
                textAlign = TextAlign.End
            )
        }

        Text(
            text = text ?: "",
            style = MaterialTheme.typography.subtitle1.copy(MaterialTheme.colors.onSecondary)
        )
    }
}

@Composable
fun ThemePicker(
    modifier: Modifier = Modifier,
    isDarkTheme: Boolean?,
    onChangeTheme: (Boolean?) -> Unit,
) {
    Row(
        modifier = modifier,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        ThemeItem(
            modifier = Modifier.weight(1f),
            icon = FeatherIcons.Sun,
            title = "Светлая",
            isDarkTheme = isDarkTheme == false,
            onChangeTheme = {
                onChangeTheme(false)
            }
        )
        ThemeItem(
            modifier = Modifier.weight(1f),
            icon = FeatherIcons.Moon,
            title = "Темная",
            isDarkTheme = isDarkTheme == true,
            onChangeTheme = {
                onChangeTheme(true)
            }
        )
        ThemeItem(
            modifier = Modifier.weight(1f),
            icon = FeatherIcons.Tablet,
            title = "Системная",
            isDarkTheme = isDarkTheme == null,
            onChangeTheme = {
                onChangeTheme(null)
            }
        )
    }
}

@Composable
fun ThemeItem(
    modifier: Modifier = Modifier,
    icon: ImageVector,
    title: String,
    isDarkTheme: Boolean?,
    onChangeTheme: () -> Unit,
) {
    val border by animateDpAsState(if (isDarkTheme == true) 1.dp else 0.dp)
    val borderColor by animateColorAsState(if (isDarkTheme == true) MaterialTheme.colors.primary else MaterialTheme.colors.secondary)
    Column(
        modifier = modifier
            .bounceClick()
            .clip(defaultShape)
            .border(border, borderColor, defaultShape)
            .clickable(onClick = onChangeTheme)
            .background(MaterialTheme.colors.secondary)
            .padding(horizontal = 10.dp, vertical = 10.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Icon(icon, contentDescription = null, modifier = Modifier.size(24.dp))
        Text(
            text = title,
            style = MaterialTheme.typography.body1.copy(MaterialTheme.colors.onSecondary)
        )
    }
}



