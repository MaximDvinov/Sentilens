import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.window.WindowDraggableArea
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.type
import androidx.compose.ui.input.pointer.PointerEventType
import androidx.compose.ui.input.pointer.onPointerEvent
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.ApplicationScope
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.WindowPlacement
import androidx.compose.ui.window.WindowState
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.mayakapps.compose.windowstyler.WindowFrameStyle
import com.mayakapps.compose.windowstyler.WindowStyle
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
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
import org.senti.lens.platformModule
import org.senti.lens.screens.auth.login.TOKEN
import org.senti.lens.theme.AppTheme
import org.senti.lens.theme.background
import org.senti.lens.theme.body
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.lightBackground
import java.awt.Dimension


private lateinit var settingsListener: SettingsListener
private lateinit var tokenListener: SettingsListener

val LocalEscapeEvent = compositionLocalOf<MutableState<Key?>> { mutableStateOf(null) }

fun main() = application {
    val koin = startKoin {
        modules(platformModule, commonModule)
    }.koin

    val windowState = rememberWindowState(size = DpSize(1000.dp, 800.dp))

    val settings: ObservableSettings by koin.inject()

    var isDarkTheme by remember { mutableStateOf(settings.getBoolean("theme", false)) }

    var isLogin by remember {
        mutableStateOf(settings.getStringOrNull(TOKEN))
    }

    LaunchedEffect(Unit) {
        settingsListener = settings.addBooleanListener("theme", false) {
            isDarkTheme = it
        }

        tokenListener = settings.addStringOrNullListener(TOKEN) {
            isLogin = it
        }
    }

    CompositionLocalProvider(LocalEscapeEvent provides mutableStateOf(null)) {
        var localEscapeEvent by LocalEscapeEvent.current

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
            onKeyEvent = {
                if (it.key == Key.Escape) {
                    localEscapeEvent = it.key
                    true
                } else {
                    false
                }
            },
            undecorated = true,
            transparent = true,
        ) {
            WindowStyle(
                isDarkTheme = isDarkTheme, frameStyle = WindowFrameStyle(
                    borderColor = if (isDarkTheme) background else lightBackground,
                    titleBarColor = if (isDarkTheme) background else lightBackground
                )
            )

            window.minimumSize = Dimension(400, 500)

            AppTheme(isDarkTheme) {
                Column(
                    modifier = Modifier
                        .clip(if (windowState.placement == WindowPlacement.Maximized) RectangleShape else defaultShape)
                        .background(color = MaterialTheme.colors.background)
                ) {
                    window.isResizable = windowState.placement != WindowPlacement.Maximized
                    if (windowState.placement != WindowPlacement.Maximized) {
                        WindowDraggableArea {
                            AppBar(windowState)
                        }
                    } else {
                        AppBar(windowState)
                    }

                    App(isLogin)
                }

            }
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
            modifier = Modifier.size(18.dp),
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

        WindowControlButton(
            background = MaterialTheme.colors.primary.copy(alpha = 0.3f),
            icon = FeatherIcons.Minus
        ) {
            windowState.isMinimized = !windowState.isMinimized
        }

        WindowControlButton(
            background = MaterialTheme.colors.primary.copy(alpha = 0.3f),
            icon = FeatherIcons.Square
        ) {
            windowState.placement = if (windowState.placement == WindowPlacement.Fullscreen) {
                WindowPlacement.Floating
            } else {
                WindowPlacement.Fullscreen
            }
        }

        WindowControlButton(
            icon = FeatherIcons.X,
            background = MaterialTheme.colors.error,
            iconColor = MaterialTheme.colors.onError,
            onClick = ::exitApplication
        )
    }
}

@OptIn(ExperimentalComposeUiApi::class)
@Composable
private fun WindowControlButton(
    background: Color = MaterialTheme.colors.primary,
    contentPadding: PaddingValues = PaddingValues(4.dp),
    shape: RoundedCornerShape = RoundedCornerShape(4.dp),
    icon: ImageVector,
    iconColor: Color = MaterialTheme.colors.primary,
    contentDescription: String = "",
    onClick: () -> Unit,
) {
    var isActive by remember { mutableStateOf(false) }
    val colorBackground by animateColorAsState(
        if (isActive) background else Color.Transparent
    )
    Box(
        modifier = Modifier.size(24.dp)
            .clip(shape)
            .background(colorBackground)
            .onPointerEvent(PointerEventType.Enter) { isActive = true }
            .onPointerEvent(PointerEventType.Exit) { isActive = false }
            .clickable(onClick = onClick)
            .padding(contentPadding),
    ) {
        Icon(
            icon,
            contentDescription = contentDescription,
            tint = iconColor
        )
    }
}
