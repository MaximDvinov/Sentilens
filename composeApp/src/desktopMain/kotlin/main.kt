import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import cafe.adriel.voyager.navigator.Navigator
import org.senti.lens.App
import org.senti.lens.generalElements.WindowSize
import org.senti.lens.models.notes
import org.senti.lens.screens.editNote.EditNoteScreen
import org.senti.lens.screens.homeNotes.elements.NoteItem

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