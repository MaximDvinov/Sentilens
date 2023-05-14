import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.PointerEventType
import androidx.compose.ui.input.pointer.onPointerEvent
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.ApplicationScope
import androidx.compose.ui.window.Tray
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.WindowPlacement
import androidx.compose.ui.window.WindowState
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.mayakapps.compose.windowstyler.WindowFrameStyle
import com.mayakapps.compose.windowstyler.WindowStyle
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
import com.russhwolf.settings.set
import compose.icons.FeatherIcons
import compose.icons.feathericons.Minus
import compose.icons.feathericons.Square
import compose.icons.feathericons.X
import dev.icerock.moko.resources.compose.fontFamilyResource
import dev.icerock.moko.resources.compose.painterResource
import org.koin.core.context.startKoin
import org.senti.lens.App
import org.senti.lens.MR
import org.senti.lens.commonModule
import org.senti.lens.screens.commons.ui.WindowSize
import org.senti.lens.platformModule
import org.senti.lens.theme.AppTheme
import org.senti.lens.theme.background
import org.senti.lens.theme.body
import org.senti.lens.theme.lightBackground
import org.senti.lens.theme.onBackground
import java.awt.Cursor
import java.awt.Dimension


private lateinit var settingsListener: SettingsListener

fun main() = application {
    val koin = startKoin {
        modules(platformModule, commonModule)
    }.koin


    val windowState = rememberWindowState(size = DpSize(1000.dp, 800.dp))

    val settings: ObservableSettings by koin.inject()

    var isDarkTheme by remember { mutableStateOf(settings.getBoolean("theme", false)) }

    LaunchedEffect(Unit) {
        settingsListener = settings.addBooleanListener("theme", false) {
            isDarkTheme = it
        }
    }


    System.setProperty("skiko.renderApi", "OPENGL")

    Tray(icon = painterResource(MR.images.icon), onAction = {
        settings["theme"] = !isDarkTheme
    }, menu = {
        Item(if (!isDarkTheme) "Темная тема" else "Светлая тема",

            onClick = {
                settings["theme"] = !isDarkTheme
            })
    }, tooltip = "Светлая тема")


    Window(
        title = "Sentilens",
        state = windowState,
        icon = painterResource(MR.images.icon),
        onCloseRequest = {
            if (::settingsListener.isInitialized) {
                settingsListener.deactivate()
            }
            exitApplication()
        },
    ) {
        WindowStyle(
            isDarkTheme = isDarkTheme, frameStyle = WindowFrameStyle(
                borderColor = if (isDarkTheme) background else lightBackground,
                titleBarColor = if (isDarkTheme) background else lightBackground
            )
        )

        window.minimumSize = Dimension(400, 500)

        AppTheme(isDarkTheme) {
            App()
        }
    }
}


@OptIn(ExperimentalComposeUiApi::class)
@Composable
fun ApplicationScope.AppBar(windowState: WindowState) {
    Row(
        modifier = Modifier.fillMaxWidth().background(color = MaterialTheme.colors.background)
            .padding(top = 8.dp, start = 8.dp, end = 8.dp),
        horizontalArrangement = Arrangement.spacedBy(6.dp, Alignment.End),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            painter = painterResource(MR.images.icon),
            modifier = Modifier.size(20.dp),
            contentDescription = "icon",
            tint = MaterialTheme.colors.onBackground
        )

        Text(
            "Sentiles",
            modifier = Modifier.weight(1f).padding(start = 8.dp),
            color = MaterialTheme.colors.onBackground,
            style = body.copy(
                fontFamily = fontFamilyResource(MR.fonts.Nunito.bold)
            )
        )

        var activeMinimize by remember { mutableStateOf(false) }
        Button(modifier = Modifier.size(24.dp)
            .onPointerEvent(PointerEventType.Enter) { activeMinimize = true }
            .onPointerEvent(PointerEventType.Exit) { activeMinimize = false },
            contentPadding = PaddingValues(4.dp),
            shape = RoundedCornerShape(4.dp),
            elevation = null,
            colors = ButtonDefaults.buttonColors(
                backgroundColor = if (!activeMinimize) Color.Transparent else MaterialTheme.colors.primary
            ),
            onClick = {
                windowState.isMinimized = !windowState.isMinimized
            }) {
            Icon(
                FeatherIcons.Minus,
                contentDescription = "close",
                tint = MaterialTheme.colors.onBackground
            )
        }

        var activePlacement by remember { mutableStateOf(false) }
        Button(modifier = Modifier.size(24.dp)
            .onPointerEvent(PointerEventType.Enter) { activePlacement = true }
            .onPointerEvent(PointerEventType.Exit) { activePlacement = false },
            contentPadding = PaddingValues(4.dp),
            elevation = null,
            shape = RoundedCornerShape(4.dp),
            colors = ButtonDefaults.buttonColors(
                backgroundColor = if (!activePlacement) Color.Transparent else MaterialTheme.colors.primary,
            ),
            onClick = {
                windowState.placement = if (windowState.placement == WindowPlacement.Fullscreen) {
                    WindowPlacement.Floating
                } else {
                    WindowPlacement.Fullscreen
                }
            }) {
            Icon(
                FeatherIcons.Square,
                contentDescription = "close",
                tint = MaterialTheme.colors.onBackground
            )
        }

        var activeClose by remember { mutableStateOf(false) }
        Button(modifier = Modifier.size(24.dp)
            .onPointerEvent(PointerEventType.Enter) { activeClose = true }
            .onPointerEvent(PointerEventType.Exit) { activeClose = false },
            onClick = ::exitApplication,
            contentPadding = PaddingValues(4.dp),
            shape = RoundedCornerShape(4.dp),
            elevation = null,
            colors = ButtonDefaults.buttonColors(
                backgroundColor = if (!activeClose) Color.Transparent else Color.Red
            )
        ) {
            Icon(
                FeatherIcons.X,
                contentDescription = "close",
                tint = MaterialTheme.colors.onBackground
            )
        }
    }
}
