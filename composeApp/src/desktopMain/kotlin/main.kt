import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import org.senti.lens.App
import org.senti.lens.generalElements.WindowSize

fun main() = application {
    Window(
        title = "Sentilens",
        state = rememberWindowState(width = 800.dp, height = 600.dp),
        onCloseRequest = ::exitApplication,
    ) {
        val windowState = rememberWindowState(size = DpSize(850.dp, 650.dp))
        App(windowSize = WindowSize.basedOnWidth(windowState.size.width))
    }
}