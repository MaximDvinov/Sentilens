package org.senti.lens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Note
import org.senti.lens.screens.homeNotes.elements.NoteItem

@Composable
actual fun PlatformGrid(modifier: Modifier, onClick: (Note) -> Unit, notes: List<Note>) {
    Row(modifier) {
        LazyVerticalGrid(
            columns = GridCells.Adaptive(175.dp),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
            contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 16.dp)
        ) {
            notes.forEach {
                item {
                    NoteItem(modifier = Modifier.height(200.dp), it) {
                        onClick(it)
                    }
                }
            }
        }
    }

}
