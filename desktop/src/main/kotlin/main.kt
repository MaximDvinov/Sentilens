import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
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
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
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
import androidx.compose.ui.input.pointer.PointerEventType
import androidx.compose.ui.input.pointer.onPointerEvent
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.ApplicationScope
import androidx.compose.ui.window.PopupProperties
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.WindowPlacement
import androidx.compose.ui.window.WindowState
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
import com.russhwolf.settings.set
import compose.icons.FeatherIcons
import compose.icons.feathericons.Copy
import compose.icons.feathericons.Menu
import compose.icons.feathericons.Minus
import compose.icons.feathericons.Square
import compose.icons.feathericons.X
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.Font
import org.jetbrains.compose.resources.painterResource
import org.koin.core.context.startKoin
import org.diary.composeui.components.tileBack
import org.diary.composeui.theme.AppTheme
import org.diary.composeui.theme.small
import org.diary.composeui.theme.smallShape
import org.diary.desktop.generated.resources.Nunito_Bold
import org.diary.desktop.generated.resources.Res
import org.diary.desktop.generated.resources.icon
import org.diary.compose.App
import org.diary.compose.commonModule
import org.diary.compose.platformModule
import org.diary.compose.screenRegistry
import java.awt.Dimension


private lateinit var settingsListener: SettingsListener

val LocalEscapeEvent = compositionLocalOf<MutableState<Key?>> { mutableStateOf(null) }

@OptIn(ExperimentalResourceApi::class)
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

    screenRegistry()

    CompositionLocalProvider(LocalEscapeEvent provides mutableStateOf(null)) {
        var localEscapeEvent by LocalEscapeEvent.current

        Window(
            title = "Sentilens",
            state = windowState,
            icon = painterResource(Res.drawable.icon),
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
//            WindowStyle(
//                isDarkTheme = isDarkTheme, frameStyle = WindowFrameStyle(
//                    borderColor = if (isDarkTheme) background else lightBackground,
//                    titleBarColor = if (isDarkTheme) background else lightBackground
//                )
//            )

            window.minimumSize = Dimension(400, 500)

            AppTheme(isDarkTheme) {
                Column(
                    modifier = Modifier
                        .clip(if (windowState.placement == WindowPlacement.Maximized) RectangleShape else smallShape)
                        .border(
                            width = if (windowState.placement == WindowPlacement.Maximized) 0.dp else 1.dp,
                            color = MaterialTheme.colors.secondary,
                            shape = if (windowState.placement == WindowPlacement.Maximized) RectangleShape else smallShape
                        )
                        .tileBack()
                ) {
                    window.isResizable = windowState.placement != WindowPlacement.Maximized
                    if (windowState.placement != WindowPlacement.Maximized) {
                        WindowDraggableArea {
                            AppBar(windowState, isDarkTheme = isDarkTheme, onChangeTheme = {
                                settings["theme"] = it
                            })
                        }
                    } else {
                        AppBar(windowState, isDarkTheme) {
                            settings["theme"] = it
                        }
                    }

                    App()
                }
            }
        }
    }
}


@OptIn(ExperimentalResourceApi::class)
@Composable
fun ApplicationScope.AppBar(
    windowState: WindowState,
    isDarkTheme: Boolean,
    onChangeTheme: (Boolean) -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(color = MaterialTheme.colors.secondary)
            .padding(top = 0.dp, start = 0.dp, end = 0.dp, bottom = 0.dp),
        horizontalArrangement = Arrangement.spacedBy(0.dp, Alignment.End),
        verticalAlignment = Alignment.CenterVertically
    ) {
        AppBarMenu(isDarkTheme, onChangeTheme)

        Text(
            "Sentilens",
            modifier = Modifier.weight(1f).padding(start = 4.dp),
            color = MaterialTheme.colors.onBackground,
            style = small.copy(
                fontFamily = FontFamily(Font(Res.font.Nunito_Bold))
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
            icon = if (windowState.placement == WindowPlacement.Maximized) FeatherIcons.Copy else FeatherIcons.Square
        ) {
            windowState.placement = if (windowState.placement == WindowPlacement.Maximized) {
                WindowPlacement.Floating
            } else {
                WindowPlacement.Maximized
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

@Composable
private fun AppBarMenu(isDarkTheme: Boolean, onChangeTheme: (Boolean) -> Unit) {
    var isShowMenu by remember { mutableStateOf(false) }

    Box {
        WindowControlButton(
            background = MaterialTheme.colors.secondary,
            icon = FeatherIcons.Menu,
            iconColor = MaterialTheme.colors.onSecondary
        ) {
            isShowMenu = !isShowMenu
        }

        DropdownMenu(
            offset = DpOffset(x = 5.dp, y = 0.dp),
            expanded = isShowMenu,
            onDismissRequest = { isShowMenu = false },
            properties = PopupProperties(clippingEnabled = true),
            modifier = Modifier
                .clip(RectangleShape)
                .background(
                    MaterialTheme.colors.secondary
                )
        ) {
            DropdownMenuItem(onClick = {

            }) {
                Text(text = "Перейти на сайт", style = small, color = MaterialTheme.colors.onBackground)
            }

            DropdownMenuItem(onClick = {
                onChangeTheme(!isDarkTheme)
            }) {
                Text(text = if (isDarkTheme) "Светлая тема" else "Темная тема", style = small, color = MaterialTheme.colors.onBackground)
            }

            DropdownMenuItem(onClick = {

            }) {
                Text(text = "Настройки", style = small, color = MaterialTheme.colors.onBackground)
            }
        }
    }
}

@OptIn(ExperimentalComposeUiApi::class)
@Composable
private fun WindowControlButton(
    background: Color = MaterialTheme.colors.primary,
    contentPadding: PaddingValues = PaddingValues(6.dp),
    shape: RoundedCornerShape = RoundedCornerShape(0.dp),
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
        modifier = Modifier.size(width = 38.dp, height = 28.dp)
            .clip(shape)
            .background(colorBackground)
            .onPointerEvent(PointerEventType.Enter) { isActive = true }
            .onPointerEvent(PointerEventType.Exit) { isActive = false }
            .clickable(onClick = onClick)
            .padding(contentPadding),
        contentAlignment = Alignment.Center
    ) {
        Icon(
            icon,
            contentDescription = contentDescription,
            tint = iconColor
        )
    }
}
