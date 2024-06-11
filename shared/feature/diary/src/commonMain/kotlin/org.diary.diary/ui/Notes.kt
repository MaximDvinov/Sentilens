package org.diary.diary.ui

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
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListState
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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.collections.immutable.ImmutableList
import org.diary.composeui.bounceClick
import org.diary.composeui.components.fadingEdge
import org.diary.composeui.theme.SentimentColor
import org.diary.utils.dateFormatWithEnter
import org.diary.composeui.theme.defaultShape
import org.diary.composeui.theme.smallShape
import org.diary.diary.Note
import org.diary.diary.SentimentCategory
import org.diary.utils.timeFormat


@Composable
fun NotesList(
    modifier: Modifier = Modifier,
    scrollState: LazyListState = rememberLazyListState(),
    onItemClick: (Note) -> Unit,
    notes: ImmutableList<Note>,
    onDeleteClick: (Note) -> Unit,
    currentNote: Note?,
    contentPadding: PaddingValues,
) {
    val state = rememberLazyListState()
    val colorSecondary = MaterialTheme.colors.secondary

    LaunchedEffect(key1 = currentNote) {
        if (currentNote != null) {
            val index = notes.indexOfFirst { currentNote.uuid == it.uuid }
            if (index >= 0) {
                state.animateScrollToItem(index)
            }
        }
    }

//    Box {
    LazyColumn(
        modifier = modifier.fillMaxHeight().fadingEdge(
            startingColor = MaterialTheme.colors.background,
            length = 10f,
            length1 = 40f,
            horizontal = false
        ),
        state = scrollState,
        verticalArrangement = Arrangement.spacedBy(10.dp),
        contentPadding = contentPadding,
    ) {
        items(items = notes, contentType = { it }) {
            key(it.uuid) {
                val color by animateColorAsState(
                    if (currentNote?.uuid == it.uuid) it.sentiment?.category.getSentimentColor() else colorSecondary
                )
                val width by animateDpAsState(if (currentNote?.uuid == it.uuid) 0.5.dp else 0.dp)

                NoteItem(modifier = Modifier
                    .bounceClick()
                    .border(width = width, color = color, shape = smallShape),
                    note = it,
                    onDeleteItemClick = remember(it.uuid) { { onDeleteClick(it) } },
                    onItemClick = remember(it.uuid) { { onItemClick(it) } })
            }
        }

        item {
            Spacer(modifier = Modifier.height(1.dp))
        }
    }
}


@OptIn(ExperimentalFoundationApi::class)
@Composable
fun NoteItem(
    modifier: Modifier,
    note: Note,
    onDeleteItemClick: (() -> Unit)? = null,
    onItemClick: () -> Unit,
) {
    var expanded by remember {
        mutableStateOf(false)
    }

    val time by remember(note.uuid) {
        mutableStateOf(note.updatedAt.timeFormat())
    }

    val date by remember(note.uuid) {
        mutableStateOf(note.updatedAt.dateFormatWithEnter())
    }

    val color by animateColorAsState(remember(note.uuid) {
        note.sentiment?.category.getSentimentColor()
    })

    Box {
        Row(
            modifier = modifier.height(IntrinsicSize.Min).clip(smallShape)
                .combinedClickable(onClick = onItemClick, onLongClick = {
                    expanded = true
                }).background(MaterialTheme.colors.secondary).padding(8.dp),
        ) {
            Column(
                modifier = Modifier.width(70.dp).fillMaxHeight(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = time,
                    style = MaterialTheme.typography.body1,
                    color = MaterialTheme.colors.onSecondary
                )
                Text(
                    text = date,
                    style = MaterialTheme.typography.caption.copy(textAlign = TextAlign.Center),
                    color = MaterialTheme.colors.onSecondary.copy(alpha = 0.6f)
                )
            }

            Spacer(
                modifier = Modifier.clip(RoundedCornerShape(50)).background(color).width(2.5.dp)
                    .fillMaxHeight()
            )

            Column(
                Modifier.fillMaxWidth().padding(start = 8.dp, top = 5.dp, bottom = 5.dp),
                verticalArrangement = Arrangement.spacedBy(2.dp)
            ) {
                Text(
                    note.title,
                    style = MaterialTheme.typography.subtitle1.copy(fontSize = 18.sp),
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                    color = MaterialTheme.colors.onSecondary
                )

                Text(
                    modifier = Modifier,
                    text = note.content ?: "",
                    style = MaterialTheme.typography.body1.copy(
                        color = MaterialTheme.colors.onSecondary.copy(alpha = 0.7f)
                    ),
                    maxLines = 3,
                    overflow = TextOverflow.Ellipsis
                )
            }
        }

        if (onDeleteItemClick != null) {
            DropdownMenu(
                offset = DpOffset(x = 0.dp, y = 10.dp),
                expanded = expanded,
                onDismissRequest = { expanded = !expanded },
                modifier = Modifier.clip(defaultShape).background(
                    MaterialTheme.colors.secondary
                )
            ) {
                DropdownMenuItem(onClick = onDeleteItemClick) {
                    Icon(Icons.Default.Delete, "Delete", tint = MaterialTheme.colors.onError)

                    Text(
                        text = "Удалить",
                        style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onError),
                        modifier = Modifier.padding(10.dp)
                    )
                }
            }
        }
    }
}

fun SentimentCategory?.getSentimentColor(): Color = when (this) {
    SentimentCategory.terrible -> SentimentColor.TERRIBLE.value
    SentimentCategory.bad -> SentimentColor.BAD.value
    SentimentCategory.neutral -> SentimentColor.NEUTRAL.value
    SentimentCategory.good -> SentimentColor.GOOD.value
    SentimentCategory.awesome -> SentimentColor.GREAT.value
    null -> SentimentColor.NEUTRAL.value
}


