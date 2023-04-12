package org.senti.lens.screens.homeNotes.elements

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridCells
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridItemSpan
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.senti.lens.models.Note
import org.senti.lens.models.notes
import org.senti.lens.screens.editNote.EditNoteScreen
import org.senti.lens.theme.*
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary


@OptIn(ExperimentalFoundationApi::class)
@Composable
fun NotesList(modifier: Modifier = Modifier) {
    val navigator = LocalNavigator.currentOrThrow
    LazyVerticalStaggeredGrid(
        columns = StaggeredGridCells.Adaptive(175.dp),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalItemSpacing = 10.dp,
        contentPadding = PaddingValues(16.dp)
    ) {
        notes.forEach {
            item {
                NoteItem(it) {
                    navigator.push(EditNoteScreen(it))
                }
            }
        }
        item(span = StaggeredGridItemSpan.FullLine) {
            Divider(Modifier.size(16.dp), color = Color.Transparent)
        }
    }
}

@Composable
fun NoteItem(
    note: Note, onClick: () -> Unit
) {
    Column(
        modifier = Modifier.clip(defaultShape).clickable(onClick = onClick).background(secondary)
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(5.dp)
    ) {
        Text(note.title, style = h2, maxLines = 2, overflow = TextOverflow.Ellipsis)
        Text(
            note.body,
            style = body.copy(color = Color.White.copy(alpha = 0.7f)),
            maxLines = 16,
            overflow = TextOverflow.Ellipsis
        )

        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(note.date, style = muted)
            Text(note.time, style = muted)
        }

        if (note.tags.isNotEmpty()) {
            Text(note.tags.joinToString(", "), style = muted.copy(color = primary))
        }
    }
}


