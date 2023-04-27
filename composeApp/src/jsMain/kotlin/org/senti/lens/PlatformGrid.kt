package org.senti.lens

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.HorizontalScrollbar
import androidx.compose.foundation.LocalScrollbarStyle
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.homeNotes.elements.NoteItem
import org.senti.lens.screens.homeNotes.elements.TagItem
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.onBackground

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun PlatformGrid(
    modifier: Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>,
    cellsDp: Dp,
    currentNote: Note?
) {
    val state = rememberLazyGridState()

    Box {
        LazyVerticalGrid(
            columns = GridCells.Adaptive(cellsDp),
            state = state,
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
//        verticalItemSpacing = 10.dp,
            contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 16.dp)
        ) {
            notes.forEach {
                item {
                    NoteItem(modifier = Modifier.height(200.dp).animateItemPlacement(), note = it) {
                        onClick(it)
                    }
                }
            }

            item(span = { GridItemSpan(1) }) {
                Spacer(modifier = Modifier.height(1.dp))
            }
        }

    }

}

@Composable
actual fun ColumnScope.BodyText(
    text: String,
) {
    Text(
        modifier = Modifier.weight(1f),
        text = text,
        style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary.copy(alpha = 0.7f)),
        maxLines = 16,
        overflow = TextOverflow.Ellipsis
    )
}

@Composable
actual fun TagsList(
    modifier: Modifier,
    tags: List<Pair<Tag, Boolean>>,
    onClickTag: (Tag) -> Unit
) {
    val state = rememberLazyListState()
    Box {
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
                    text = tag.name,
                    onSelect = { onClickTag(tag) })
            }
        }

        HorizontalScrollbar(
            modifier = modifier.align(Alignment.BottomCenter).fillMaxWidth(),
            adapter = rememberScrollbarAdapter(state),
            style = LocalScrollbarStyle.current.copy(
                hoverColor = MaterialTheme.colors.onBackground.copy(
                    0.3f
                ),
                shape = defaultShape,
                unhoverColor = MaterialTheme.colors.onBackground.copy(
                    0.05f
                ),
                thickness = 6.dp
            )
        )
    }

}