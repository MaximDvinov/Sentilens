import androidx.compose.animation.AnimatedContent
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
import kotlinx.browser.window
import org.koin.core.context.startKoin
import org.diary.composeui.components.tileBack
import org.diary.main.commonModule
import org.diary.main.platformModule
import org.diary.main.screenRegistry
import org.w3c.dom.MediaQueryListEvent

private lateinit var settingsListener: SettingsListener

fun main() {
    val koin = startKoin {
        modules(platformModule, commonModule)
    }.koin

    onWasmReady {
        screenRegistry()

        BrowserViewportWindow("Sentilens") {
            val settings: ObservableSettings by koin.inject()

            var isDarkTheme by remember {
                mutableStateOf(
                    settings.getBoolean(
                        "theme", window.matchMedia("(prefers-color-scheme: dark)").matches
                    )
                )
            }

            window.matchMedia("(prefers-color-scheme: dark)").addListener { e ->
                isDarkTheme = e.unsafeCast<MediaQueryListEvent>().matches
            }

            LaunchedEffect(Unit) {
                settingsListener = settings.addBooleanOrNullListener(
                    "theme"
                ) {
                    console.log("theme", it)
                    isDarkTheme = it ?: window.matchMedia("(prefers-color-scheme: dark)").matches
                }
            }

            AppTheme(isDarkTheme) {
                AnimatedContent(
                    modifier = Modifier.tileBack(),
                    targetState = isStartScreen
                ) {
                    if (it) {
                        StartScreenContent {
                            isStartScreen = false
                        }
                    } else {
                        App(isLogin)
                    }
                }
            }
        }
    }
}
