package org.senti.lens

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridCells
import androidx.compose.foundation.lazy.staggeredgrid.items
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.ImmutableList
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.screens.list.ui.NoteItem
import org.senti.lens.screens.list.ui.TagItem
import org.senti.lens.theme.defaultShape

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun PlatformGrid(
    modifier: Modifier,
    onClick: (Note) -> Unit,
    notes: ImmutableList<Note>,
    cellsDp: Dp,
    currentNote: Note?,
    onDeleteClick: (Note) -> Unit,
    contentPadding: PaddingValues,
) {
    LazyColumn(
        modifier = modifier.fillMaxSize().fadingEdge(
            startingColor = MaterialTheme.colors.background,
            length = 0f,
            length1 = 150f,
            horizontal = false
        ),
        verticalArrangement = Arrangement.spacedBy(10.dp),
        contentPadding = contentPadding
    ) {
        items(notes, key = { it.uuid.toString() }) {
            val color by animateColorAsState(
                if (currentNote?.uuid == it.uuid) MaterialTheme.colors.primary else MaterialTheme.colors.secondary,
                label = ""
            )
            val width by animateDpAsState(
                if (currentNote?.uuid == it.uuid) 2.dp else 0.dp,
                label = ""
            )

            NoteItem(
                modifier = Modifier.bounceClick().animateContentSize().border(
                    width = width,
                    color = color,
                    shape = defaultShape
                ),
                note = it,
                onDeleteItemClick = remember {
                    { onDeleteClick(it) }
                }
            ) {
                onClick(it)
            }
        }
    }
}

@Composable
actual fun BoxScope.VerticalScrollBar(state: LazyListState) {
}


@Composable
actual fun ColumnScope.BodyText(
    text: String,
) {
    Text(
        modifier = Modifier,
        text = text,
        style = MaterialTheme.typography.body1.copy(
            color = MaterialTheme.colors.onSecondary.copy(
                alpha = 0.7f
            )
        ),
        maxLines = when {
            text.length <= 140 -> Int.MAX_VALUE
            text.length <= 250 -> 5
            else -> 9
        },
        overflow = TextOverflow.Ellipsis
    )
}

@Composable
actual fun TagsList(
    modifier: Modifier,
    tags: List<Pair<Tag, Boolean>>,
    onClickTag: (Tag) -> Unit,
) {
    LazyRow(
        modifier = modifier,
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        contentPadding = PaddingValues(horizontal = 16.dp)
    ) {
        items(tags) {
            val (tag, isSelected) = it
            TagItem(
                Modifier,
                selected = isSelected,
                text = tag.title,
                onSelect = { onClickTag(tag) })
        }
    }
}

@Preview
@Composable
private fun Prev() {
    Column { BodyText("Text") }
}