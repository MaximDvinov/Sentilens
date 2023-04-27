import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.window.WindowDraggableArea
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
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
import androidx.compose.ui.graphics.colorspace.ColorModel
import androidx.compose.ui.input.pointer.PointerEventType
import androidx.compose.ui.input.pointer.onPointerEvent
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.ApplicationScope
import androidx.compose.ui.window.MenuBar
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.WindowPlacement
import androidx.compose.ui.window.WindowState
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import compose.icons.FeatherIcons
import compose.icons.feathericons.Minus
import compose.icons.feathericons.Square
import compose.icons.feathericons.X
import dev.icerock.moko.resources.compose.fontFamilyResource
import dev.icerock.moko.resources.compose.painterResource
import org.senti.lens.App
import org.senti.lens.MR
import org.senti.lens.generalElements.WindowSize
import org.senti.lens.theme.AppTheme
import org.senti.lens.theme.background
import org.senti.lens.theme.body
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.h2
import org.senti.lens.theme.onBackground
import org.senti.lens.theme.onPrimary
import org.senti.lens.theme.onSecondary
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary
import java.awt.Dimension

fun main() = application {
    val windowState = rememberWindowState()
    Window(
        title = "Sentilens",
        state = windowState,
        onCloseRequest = ::exitApplication,
//        undecorated = true,
//        transparent = true,
//        icon = painterResource(MR.images.icon)
    ) {
        window.minimumSize = Dimension(600, 600)

        AppTheme(true) {
            App(windowSize = WindowSize.basedOnWidth(windowState.size.width))
        }

//        Column(
//            modifier = Modifier
//                    .clip(if (windowState.placement == WindowPlacement.Maximized) RectangleShape else defaultShape)
//                    .background(color = MaterialTheme.colors.background)
//        ) {
//                window.isResizable = windowState.placement != WindowPlacement.Maximized
//                if (windowState.placement != WindowPlacement.Maximized) {
//                    WindowDraggableArea {
//                        AppBar(windowState)
//                    }
//                } else {
//                    AppBar(windowState)
//                }
//
//        }


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
//        Icon(
//            painter = painterResource(MR.images.icon),
//            modifier = Modifier.size(20.dp),
//            contentDescription = "icon",
//            tint = primary
//        )

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
            shape = RoundedCornerShape(8.dp),
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
            shape = RoundedCornerShape(8.dp),
            colors = ButtonDefaults.buttonColors(
                backgroundColor = if (!activePlacement) Color.Transparent else MaterialTheme.colors.primary
            ),
            onClick = {
                windowState.placement = if (windowState.placement == WindowPlacement.Maximized) {
                    WindowPlacement.Floating
                } else {
                    WindowPlacement.Maximized
                }
            }) {
            Icon(FeatherIcons.Square, contentDescription = "close", tint = onBackground)
        }

        var activeClose by remember { mutableStateOf(false) }
        Button(modifier = Modifier.size(24.dp)
            .onPointerEvent(PointerEventType.Enter) { activeClose = true }
            .onPointerEvent(PointerEventType.Exit) { activeClose = false },
            onClick = ::exitApplication,
            contentPadding = PaddingValues(4.dp),
            shape = RoundedCornerShape(8.dp),
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
