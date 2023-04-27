package org.senti.lens.screens.homeNotes.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import org.senti.lens.BodyText
import org.senti.lens.PlatformGrid
import org.senti.lens.models.Note
import org.senti.lens.theme.*
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary


@Composable
fun NotesList(
    modifier: Modifier = Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>,
    cellsDp: Dp = 175.dp,
    currentNote: Note?,
) {
    PlatformGrid(modifier, onClick, notes, cellsDp, currentNote)
}


@Composable
fun NoteItem(
    modifier: Modifier,
    note: Note,
    onClick: () -> Unit,
) {
    Column(
        modifier = modifier.clip(defaultShape).clickable(onClick = onClick)
            .background(MaterialTheme.colors.secondary)
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(5.dp)
    ) {
        Text(
            note.title,
            style = MaterialTheme.typography.h2,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
            color = MaterialTheme.colors.onSecondary
        )

        BodyText(note.body)

        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(
                note.date,
                style = MaterialTheme.typography.caption,
                color = MaterialTheme.colors.onSecondary.copy(alpha = 0.6f)
            )
            Text(
                note.time,
                style = MaterialTheme.typography.caption,
                color = MaterialTheme.colors.onSecondary.copy(alpha = 0.6f)
            )
        }

        if (note.tags.isNotEmpty()) {
            Text(
                note.tags.joinToString(", ") { it.name },
                style = MaterialTheme.typography.caption.copy(color = MaterialTheme.colors.primary)
            )
        }
    }
}


