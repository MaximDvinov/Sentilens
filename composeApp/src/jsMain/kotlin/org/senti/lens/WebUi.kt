package org.senti.lens

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.HorizontalScrollbar
import androidx.compose.foundation.LocalScrollbarStyle
import androidx.compose.foundation.VerticalScrollbar
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.ImmutableList
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.NoteItem
import org.senti.lens.screens.commons.ui.TagItem
import org.senti.lens.theme.defaultShape

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
    val state = rememberLazyGridState()

    LaunchedEffect(key1 = currentNote) {
        if (currentNote != null) {
            val index = notes.indexOfFirst { currentNote.uuid == it.uuid }
            if (index >= 0) {
                state.animateScrollToItem(index)
            }
        }
    }

    Box {
        LazyVerticalGrid(
            modifier = modifier.fadingEdge(
                startingColor = MaterialTheme.colors.background,
                length = 10f,
                length1 = 40f,
                horizontal = false
            ),
            columns = GridCells.Adaptive(cellsDp),
            state = state,
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
            contentPadding = contentPadding
        ) {

            items(notes) {
                key(it.uuid) {
                    val color by animateColorAsState(if (currentNote?.uuid == it.uuid) MaterialTheme.colors.primary else MaterialTheme.colors.secondary)
                    val width by animateDpAsState(if (currentNote?.uuid == it.uuid) 2.dp else 0.dp)

                    NoteItem(
                        modifier = Modifier.bounceClick().height(200.dp).border(
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

            item(span = { GridItemSpan(1) }) {
                Spacer(modifier = Modifier.height(1.dp))
            }
        }

        VerticalScrollbar(
            modifier = Modifier.align(Alignment.TopEnd).fillMaxHeight().padding(end = 2.dp),
            adapter = rememberScrollbarAdapter(state),
            style = LocalScrollbarStyle.current.copy(
                hoverColor = MaterialTheme.colors.onBackground.copy(
                    0.3f
                ),
                shape = defaultShape,
                unhoverColor = MaterialTheme.colors.onBackground.copy(
                    0.03f
                ),
                thickness = 6.dp
            )
        )
    }

}

@Composable
actual fun ColumnScope.BodyText(
    text: String,
) {
    Text(
        modifier = Modifier.weight(1f),
        text = text,
        style = MaterialTheme.typography.body1.copy(
            color = MaterialTheme.colors.onSecondary.copy(
                alpha = 0.7f
            )
        ),
        maxLines = 4,
        overflow = TextOverflow.Ellipsis
    )
}

@Composable
actual fun BoxScope.VerticalScrollBar(state: LazyListState) {
    VerticalScrollbar(
        modifier = Modifier.align(Alignment.TopEnd).fillMaxHeight().padding(end = 2.dp),
        adapter = rememberScrollbarAdapter(state),
        style = LocalScrollbarStyle.current.copy(
            hoverColor = MaterialTheme.colors.onBackground.copy(
                0.3f
            ),
            shape = defaultShape,
            unhoverColor = MaterialTheme.colors.onBackground.copy(
                0.03f
            ),
            thickness = 6.dp
        )
    )
}

@Composable
actual fun TagsList(
    modifier: Modifier,
    tags: List<Pair<Tag, Boolean>>,
    onClickTag: (Tag) -> Unit,
) {
    val state = rememberLazyListState()
    Box {
        LazyRow(
            state = state,
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
                    defaultColor = MaterialTheme.colors.secondary,
                    onSelect = { onClickTag(tag) })
            }
        }

        HorizontalScrollbar(
            modifier = Modifier.align(Alignment.BottomStart).fillMaxWidth()
                .padding(horizontal = 16.dp),
            adapter = rememberScrollbarAdapter(state),
            style = LocalScrollbarStyle.current.copy(
                hoverColor = MaterialTheme.colors.onBackground.copy(
                    0.3f
                ),
                shape = defaultShape,
                unhoverColor = MaterialTheme.colors.onBackground.copy(
                    0.03f
                ),
                thickness = 6.dp
            )
        )
    }
}