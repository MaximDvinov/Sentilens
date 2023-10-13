package org.senti.lens.screens.home.ui

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import compose.icons.FeatherIcons
import compose.icons.feathericons.Tag
import kotlinx.collections.immutable.ImmutableList
import org.senti.lens.BodyText
import org.senti.lens.PlatformGrid
import org.senti.lens.bounceClick
import org.senti.lens.dateFormat
import org.senti.lens.models.Note
import org.senti.lens.theme.*
import org.senti.lens.timeFormat


@Composable
fun NotesList(
    modifier: Modifier = Modifier,
    onItemClick: (Note) -> Unit,
    notes: ImmutableList<Note>,
    cellsDp: Dp = 175.dp,
    onDeleteClick: (Note) -> Unit,
    currentNote: Note?,
    contentPadding: PaddingValues,
) {
    PlatformGrid(modifier, onItemClick, notes, cellsDp, currentNote, onDeleteClick, contentPadding)
}


@OptIn(ExperimentalFoundationApi::class)
@Composable
fun NoteItem(
    modifier: Modifier,
    note: Note,
    onDeleteItemClick: () -> Unit,
    onItemClick: () -> Unit,
) {
    var expanded by remember {
        mutableStateOf(false)
    }
    Box {
        Column(
            modifier = modifier
                .clip(defaultShape).combinedClickable(
                    onClick = onItemClick,
                    onLongClick = {
                        expanded = true
                    }
                )
                .background(MaterialTheme.colors.secondary)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(5.dp)
        ) {
            Text(
                note.title,
                style = MaterialTheme.typography.h2.copy(
                    fontSize = 18.sp
                ),
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
                color = MaterialTheme.colors.onSecondary
            )

            BodyText(note.content ?: "")

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
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

        DropdownMenu(
            offset = DpOffset(x = 0.dp, y = 10.dp),
            expanded = expanded,
            onDismissRequest = { expanded = !expanded },
            modifier = Modifier.clip(defaultShape).background(
                MaterialTheme.colors.secondary
            )
        ) {
            DropdownMenuItem(onClick = onDeleteItemClick) {
                Icon(Icons.Default.Delete, "Delete", tint = onError)

                Text(
                    text = "Удалить",
                    style = MaterialTheme.typography.body1.copy(color = onError),
                    modifier = Modifier.padding(10.dp)
                )
            }
        }
    }

}


