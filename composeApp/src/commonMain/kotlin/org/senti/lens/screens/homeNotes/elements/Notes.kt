package org.senti.lens.screens.homeNotes.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import org.senti.lens.PlatformGrid
import org.senti.lens.models.Note
import org.senti.lens.theme.*
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary


@Composable
fun NotesList(modifier: Modifier = Modifier, onClick: (Note) -> Unit, notes: List<Note>) {
    PlatformGrid(modifier, onClick, notes)
}


@Composable
fun NoteItem(
    modifier: Modifier,
    note: Note,
    onClick: () -> Unit
) {
    Column(
        modifier = modifier.clip(defaultShape).clickable(onClick = onClick)
            .background(secondary)
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(5.dp)
    ) {
        Text(note.title, style = body, maxLines = 2, overflow = TextOverflow.Ellipsis)
        Text(
            modifier = Modifier,
            text = note.body,
            style = body.copy(color = Color.White.copy(alpha = 0.7f)),
            maxLines = 16,
            overflow = TextOverflow.Ellipsis
        )

        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(note.date, style = muted)
            Text(note.time, style = muted)
        }

        if (note.tags.isNotEmpty()) {
            Text(note.tags.joinToString(", ") { it.name }, style = muted.copy(color = primary))
        }
    }
}


