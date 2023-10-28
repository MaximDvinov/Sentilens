import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.CanvasBasedWindow
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
import kotlinx.browser.document
import kotlinx.browser.window
import org.senti.lens.App
import org.jetbrains.skiko.wasm.onWasmReady
import org.koin.core.context.startKoin
import org.senti.lens.commonModule
import org.senti.lens.platformModule
import org.senti.lens.screens.auth.login.TOKEN
import org.senti.lens.theme.AppTheme
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.MediaQueryList
import org.w3c.dom.MediaQueryListEvent

private lateinit var tokenListener: SettingsListener
private lateinit var settingsListener: SettingsListener

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    val koin = startKoin {
        modules(platformModule, commonModule)
    }.koin

    onWasmReady {
        CanvasBasedWindow("Multiplatform App") {
            val settings: ObservableSettings by koin.inject()
            var isLogin by remember {
                mutableStateOf(settings.getStringOrNull(TOKEN))
            }
            var isDarkTheme by remember {
                mutableStateOf(
                    settings.getBoolean(
                        "theme",
                        window.matchMedia("(prefers-color-scheme: dark)").matches
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
                    isDarkTheme =
                        it ?: window.matchMedia("(prefers-color-scheme: dark)").matches
                }

                tokenListener = settings.addStringOrNullListener(TOKEN) {
                    console.log("token", it)
                    isLogin = it
                }
            }


            AppTheme(isDarkTheme) {
                App(isLogin)
            }
        }
    }
}
