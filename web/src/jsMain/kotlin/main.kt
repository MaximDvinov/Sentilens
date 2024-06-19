import androidx.compose.animation.AnimatedContent
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.CanvasBasedWindow
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
import com.russhwolf.settings.get
import kotlinx.browser.window
import org.diary.compose.App
import org.koin.core.context.startKoin
import org.diary.composeui.components.tileBack
import org.diary.compose.commonModule
import org.diary.compose.platformModule
import org.diary.compose.screenRegistry
import org.diary.compose.setting.ConfirmDialog
import org.diary.composeui.theme.AppTheme
import org.jetbrains.skiko.wasm.onWasmReady
import org.senti.web.StartScreenContent
import org.w3c.dom.MediaQueryListEvent
import org.w3c.dom.events.EventListener
import org.w3c.performance.PerformanceNavigation

private lateinit var settingsListener: SettingsListener

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    val koin = startKoin {
        modules(platformModule, commonModule)
    }.koin

    onWasmReady {
        screenRegistry()

        BrowserViewportWindow("Sentilens") {
            val settings: ObservableSettings by koin.inject()
            var isStartScreen by remember {
                mutableStateOf(settings.getStringOrNull("ACCESS").isNullOrBlank())
            }
            var showDialog by remember { mutableStateOf(isStartScreen) }

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
                    App()
                }


                if (showDialog) {
                    ConfirmDialog(
                        onDismiss = { showDialog = false },
                        onConfirm = { showDialog = false; },
                        title = "Alpha версия",
                        subtitle = "Web-версия приложения заметок находится в стадии разработки, могут возникнуть различные ошибки. " +
                                "Также на некоторых устройствах могут возникнуть проблемы с вводом текста. " +
                                "Советуем установить приложение на Android или Windows. Данные версии приложения стабильны и не содержат известных ошибок."
                    )
                }
            }

        }
    }
}
