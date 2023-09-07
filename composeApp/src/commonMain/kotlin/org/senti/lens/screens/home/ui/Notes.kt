package org.senti.lens.screens.home.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import dev.icerock.moko.resources.compose.fontFamilyResource
import org.senti.lens.BodyText
import org.senti.lens.PlatformGrid
import org.senti.lens.dateFormat
import org.senti.lens.models.Note
import org.senti.lens.theme.*
import org.senti.lens.timeFormat


@Composable
fun NotesList(
    modifier: Modifier = Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>,
    cellsDp: Dp = 175.dp,
    currentNote: Note?,
    contentPadding: PaddingValues,
) {
    PlatformGrid(modifier, onClick, notes, cellsDp, currentNote, contentPadding)
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
            style = MaterialTheme.typography.h2.copy(
                fontSize = 18.sp, fontFamily = fontFamilyResource(
                    MR.fonts.Nunito.bold
                )
            ),
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
            color = MaterialTheme.colors.onSecondary
        )

        BodyText(note.content ?: "")

        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(
                note.updatedAt.dateFormat(),
                style = MaterialTheme.typography.caption,
                color = MaterialTheme.colors.onSecondary.copy(alpha = 0.6f)
            )
            Text(
                note.updatedAt.timeFormat(),
                style = MaterialTheme.typography.caption,
                color = MaterialTheme.colors.onSecondary.copy(alpha = 0.6f)
            )
        }

        if (note.tags.isNotEmpty()) {
            Text(
                note.tags.joinToString(", ") { it.title },
                style = MaterialTheme.typography.caption.copy(color = MaterialTheme.colors.primary),
                maxLines = 4,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}


