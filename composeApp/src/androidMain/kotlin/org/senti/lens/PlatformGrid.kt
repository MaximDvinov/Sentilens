package org.senti.lens

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridCells
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Note
import org.senti.lens.screens.homeNotes.elements.NoteItem

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun PlatformGrid(modifier: Modifier, onClick: (Note) -> Unit, notes: List<Note>) {
    LazyVerticalStaggeredGrid(
        modifier = modifier.fillMaxSize(),
        columns = StaggeredGridCells.Adaptive(175.dp),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalItemSpacing = 10.dp,
        contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 16.dp)
    ) {
        notes.forEach {
            item {
                NoteItem(modifier = Modifier, it) {
                    onClick(it)
                }
            }
        }
    }
}
