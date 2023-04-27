package org.senti.lens

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.HorizontalScrollbar
import androidx.compose.foundation.LocalScrollbarStyle
import androidx.compose.foundation.VerticalScrollbar
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.foundation.window.WindowDraggableArea
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import org.senti.lens.generalElements.fadingEdge
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.DialogContent
import org.senti.lens.screens.homeNotes.elements.NoteItem
import org.senti.lens.screens.homeNotes.elements.TagItem
import org.senti.lens.theme.background
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.onBackground
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary
import java.awt.Dimension

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun PlatformGrid(
    modifier: Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>,
    cellsDp: Dp,
    currentNote: Note?,
) {
    val state = rememberLazyGridState()

    LaunchedEffect(key1 = currentNote) {
        if (currentNote != null) {
            val index = notes.indexOfFirst { currentNote.id == it.id }
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
            contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 16.dp)
        ) {
            notes.forEach {
                item {
                    key(it.id) {
                        val color by animateColorAsState(if (currentNote?.id == it.id) MaterialTheme.colors.primary else MaterialTheme.colors.secondary)
                        val width by animateDpAsState(if (currentNote?.id == it.id) 2.dp else 0.dp)

                        NoteItem(
                            modifier = Modifier.height(200.dp).border(
                                width = width,
                                color = color,
                                shape = defaultShape
                            ), note = it
                        ) {
                            onClick(it)
                        }
                    }

                }
            }

            item(span = { GridItemSpan(1) }) {
                Spacer(modifier = Modifier.height(1.dp))
            }
        }

        VerticalScrollbar(
            modifier = Modifier.align(Alignment.TopEnd).fillMaxHeight().padding(end = 6.dp),
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
                    text = tag.name,
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

@Composable
actual fun TagsDialog(
    modifier: Modifier,
    tags: List<Tag>?,
    visible: Boolean,
    selectedTags: List<Tag>?,
    onSaveClick: (List<Tag>) -> Unit,
    onDismissRequest: () -> Unit
) {
    Dialog(
        visible = visible,
        onCloseRequest = onDismissRequest,
        undecorated = true,
        transparent = true,
        resizable = false
    ) {
        window.size = Dimension(350, 200)

        WindowDraggableArea {
            DialogContent(
                modifier = modifier.fillMaxSize().background(MaterialTheme.colors.secondary),
                tags = tags,
                selectedTags = selectedTags,
                onSaveClick = onSaveClick,
                onDismissRequest = onDismissRequest
            )
        }
    }
}