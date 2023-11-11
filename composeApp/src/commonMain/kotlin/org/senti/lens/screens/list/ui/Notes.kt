package org.senti.lens.screens.list.ui

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.requiredHeight
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.collections.immutable.ImmutableList
import org.senti.lens.BodyText
import org.senti.lens.PlatformGrid
import org.senti.lens.VerticalScrollBar
import org.senti.lens.bounceClick
import org.senti.lens.dateFormatWithEnter
import org.senti.lens.models.Note
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.onError
import org.senti.lens.theme.smallShape
import org.senti.lens.timeFormat


@Composable
fun NotesList(
    modifier: Modifier = Modifier,
    onItemClick: (Note) -> Unit,
    notes: ImmutableList<Note>,
    onDeleteClick: (Note) -> Unit,
    currentNote: Note?,
    contentPadding: PaddingValues,
) {
    val state = rememberLazyListState()

    LaunchedEffect(key1 = currentNote) {
        if (currentNote != null) {
            val index = notes.indexOfFirst { currentNote.uuid == it.uuid }
            if (index >= 0) {
                state.animateScrollToItem(index)
            }
        }
    }

    Box {
        LazyColumn(
            modifier = modifier.fillMaxHeight().fadingEdge(
                startingColor = MaterialTheme.colors.background,
                length = 10f,
                length1 = 40f,
                horizontal = false
            ),
            state = state,
            verticalArrangement = Arrangement.spacedBy(10.dp),
            contentPadding = contentPadding
        ) {

            items(notes) {
                key(it.uuid) {
                    val color by animateColorAsState(if (currentNote?.uuid == it.uuid) MaterialTheme.colors.primary else MaterialTheme.colors.secondary)
                    val width by animateDpAsState(if (currentNote?.uuid == it.uuid) 2.dp else 0.dp)

                    NoteItem(
                        modifier = Modifier.bounceClick().border(
                            width = width,
                            color = color,
                            shape = smallShape
                        ),
                        note = it,
                        onDeleteItemClick = remember {
                            { onDeleteClick(it) }
                        }
                    ) {
                        onItemClick(it)
                    }
                }

            }

            item {
                Spacer(modifier = Modifier.height(1.dp))
            }
        }

        VerticalScrollBar(state)
    }
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
        Row(
            modifier = modifier
                .height(IntrinsicSize.Min)
                .clip(smallShape)
                .combinedClickable(
                    onClick = onItemClick,
                    onLongClick = {
                        expanded = true
                    })
                .background(MaterialTheme.colors.secondary).padding(8.dp),
        ) {
            Column(
                modifier = Modifier.width(80.dp).fillMaxHeight(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    note.updatedAt.timeFormat(),
                    style = MaterialTheme.typography.body1,
                    color = MaterialTheme.colors.onSecondary
                )
                Text(
                    note.updatedAt.dateFormatWithEnter(),
                    style = MaterialTheme.typography.caption.copy(textAlign = TextAlign.Center),
                    color = MaterialTheme.colors.onSecondary.copy(alpha = 0.6f)
                )
            }

            Spacer(
                modifier = Modifier.clip(RoundedCornerShape(50))
                    .background(MaterialTheme.colors.primary).width(2.dp)
                    .fillMaxHeight()

            )

            Column(
                Modifier.fillMaxWidth().padding(start = 8.dp, top = 5.dp, bottom = 5.dp),
                verticalArrangement = Arrangement.spacedBy(2.dp)
            ) {
                Text(
                    note.title,
                    style = MaterialTheme.typography.subtitle1.copy(
                        fontSize = 18.sp
                    ),
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                    color = MaterialTheme.colors.onSecondary
                )

                Text(
                    modifier = Modifier,
                    text = note.content ?: "",
                    style = MaterialTheme.typography.body1.copy(
                        color = MaterialTheme.colors.onSecondary.copy(
                            alpha = 0.7f
                        )
                    ),
                    maxLines = 3,
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


