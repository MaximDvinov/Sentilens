package org.diary.compose.setting

import androidx.compose.animation.AnimatedContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.registry.rememberScreen
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import com.russhwolf.settings.ObservableSettings
import compose.icons.FeatherIcons
import compose.icons.feathericons.Moon
import compose.icons.feathericons.Sun
import compose.icons.feathericons.Tablet
import org.koin.core.component.KoinComponent
import org.koin.core.component.get
import org.koin.core.component.inject
import org.diary.composeui.components.SecondaryButton
import org.diary.composeui.components.SecondaryIconButton
import org.diary.navigation.DiaryScreenProvider

class SettingScreen : Screen, KoinComponent {
    override val key = uniqueScreenKey

    @Composable
    override fun Content() {
        val settingScreenModel = rememberScreenModel { SettingScreenModel(get()) }
        val settings: ObservableSettings by inject()
        val navigator = LocalNavigator.currentOrThrow
        val authScreen = rememberScreen(DiaryScreenProvider.LoginScreen())

        var isDarkTheme by remember(false) {
            mutableStateOf(
                settings.getBooleanOrNull(
                    "theme"
                )
            )
        }

        LaunchedEffect(Unit) {
            settingScreenModel.singleEvent.collect {
                if (it is SettingScreenModel.SingleEvent.Logout) {
                    navigator.replaceAll(authScreen)
                }
            }
        }

        SettingScreenContent(
            isDarkTheme = isDarkTheme,
            onChangeTheme = {
                isDarkTheme = when (isDarkTheme) {
                    true -> {
                        settings.putBoolean("theme", false)
                        false
                    }

                    false -> {
                        settings.remove("theme")
                        null
                    }

                    null -> {
                        settings.putBoolean("theme", true)
                        true
                    }
                }
            },
            onBackClick = { navigator.pop() },
            onLogoutClick = {
                settingScreenModel.processIntent(SettingScreenModel.Intent.Logout)
            }
        )

    }
}

@Composable
fun SettingScreenContent(
    isDarkTheme: Boolean?,
    onChangeTheme: () -> Unit,
    onBackClick: () -> Unit,
    onLogoutClick: () -> Unit,
) {
    Column(
        modifier = Modifier.fillMaxSize().padding(horizontal = 16.dp),
    ) {
        Row(
            modifier = Modifier.padding(vertical = 16.dp).fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            SecondaryIconButton(
                onClick = onBackClick,
            ) {
                Icon(Icons.AutoMirrored.Rounded.ArrowBack, "Back")
            }

            Text(
                "Настройки",
                style = MaterialTheme.typography.h1,
                color = MaterialTheme.colors.onBackground,
                modifier = Modifier.weight(1f)
            )
        }

        Column(modifier = Modifier.widthIn(max = 600.dp).align(Alignment.CenterHorizontally)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    "Сменить тему",
                    style = MaterialTheme.typography.h2,
                    color = MaterialTheme.colors.onBackground,
                    modifier = Modifier.weight(1f)
                )

                IconButton(onClick = onChangeTheme) {
                    AnimatedContent(isDarkTheme) {
                        when (it) {
                            true -> Icon(FeatherIcons.Moon, "theme")
                            false -> Icon(FeatherIcons.Sun, "theme")
                            null -> Icon(FeatherIcons.Tablet, "theme")
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))
        }

        Spacer(modifier = Modifier.weight(1f))

        SecondaryButton(
            modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp),
            onClick = onLogoutClick,
            color = MaterialTheme.colors.error,
        ) {
            Text(
                "Выйти",
                style = MaterialTheme.typography.body1,
                color = MaterialTheme.colors.onError,
                modifier = Modifier.fillMaxWidth(),
                textAlign = TextAlign.Center
            )
        }


    }
}
