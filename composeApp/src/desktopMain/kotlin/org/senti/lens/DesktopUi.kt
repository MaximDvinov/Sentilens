package org.senti.lens

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.spring
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
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.material.AlertDialog
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.Tag
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.home.ui.NoteItem
import org.senti.lens.screens.home.ui.TagItem
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.onError

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun PlatformGrid(
    modifier: Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>,
    cellsDp: Dp,
    currentNote: Note?,
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

            notes.forEach {
                item {
                    key(it.uuid) {
                        val color by animateColorAsState(if (currentNote?.uuid == it.uuid) MaterialTheme.colors.primary else MaterialTheme.colors.secondary)
//                        val width by animateDpAsState(if (currentNote?.id == it.id) 2.dp else 0.dp)

                        NoteItem(
                            modifier = Modifier.height(200.dp).border(
                                width = 2.dp,
                                color = color,
                                shape = defaultShape
                            )
//                                .animateItemPlacement(animationSpec = spring(stiffness = 500f))
                            ,
                            note = it
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

@OptIn(ExperimentalMaterialApi::class)
@Composable
actual fun PlatformDialog(
    modifier: Modifier,
    visible: Boolean,
    onDismissRequest: () -> Unit,
    size: Pair<Int, Int>,
    content: @Composable () -> Unit
) {
    if (visible) {
        AlertDialog(
            onDismissRequest = onDismissRequest,
            modifier = modifier.width(size.first.dp),
            buttons = {
                content()
            }
        )
    }
}

@Composable
actual fun SettingNoteMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    onDeleteClick: () -> Unit,
    onTagsClick: () -> Unit,
    modifier: Modifier
) {
    DropdownMenu(
        offset = DpOffset(x = 0.dp, y = 10.dp),
        expanded = expanded,
        onDismissRequest = onDismissRequest,
        modifier = modifier.clip(defaultShape).background(
            MaterialTheme.colors.secondary
        )
    ) {
        DropdownMenuItem(onClick = onTagsClick) {
            Icon(FeatherIcons.Tag, "Settings")

            Text(
                text = "Теги",
                style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary),
                modifier = Modifier.padding(10.dp)
            )
        }
        DropdownMenuItem(onClick = onDeleteClick) {
            Icon(Icons.Default.Delete, "Settings", tint = onError)

            Text(
                text = "Удалить",
                style = MaterialTheme.typography.body1.copy(color = onError),
                modifier = Modifier.padding(10.dp)
            )
        }
    }
}