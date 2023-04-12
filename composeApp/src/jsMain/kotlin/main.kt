import androidx.compose.ui.unit.dp
import org.senti.lens.App
import org.jetbrains.skiko.wasm.onWasmReady
import org.senti.lens.generalElements.WindowSize

fun main() {
    onWasmReady {
        BrowserViewportWindow("Sentilens") {
            App(it)
        }
    }
}
