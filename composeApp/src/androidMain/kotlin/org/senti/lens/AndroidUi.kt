package org.senti.lens

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridCells
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import compose.icons.FeatherIcons
import compose.icons.feathericons.Tag
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.fadingEdge
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
    contentPadding: PaddingValues
) {
    LazyVerticalStaggeredGrid(
        modifier = modifier.fillMaxSize().fadingEdge(
            startingColor = MaterialTheme.colors.background,
            length = 0f,
            length1 = 150f,
            horizontal = false
        ),
        columns = StaggeredGridCells.Adaptive(cellsDp),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalItemSpacing = 10.dp,
        contentPadding = contentPadding
    ) {
        notes.forEach {
            item {
                val color by animateColorAsState(if (currentNote?.uuid == it.uuid) MaterialTheme.colors.primary else MaterialTheme.colors.secondary,
                    label = ""
                )
                val width by animateDpAsState(if (currentNote?.uuid == it.uuid) 2.dp else 0.dp)

                NoteItem(
                    modifier = Modifier.animateContentSize().border(
                        width = width,
                        color = color,
                        shape = defaultShape
                    ), it
                ) {
                    onClick(it)
                }
            }
        }
    }
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
    onClickTag: (Tag) -> Unit
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

@Composable
actual fun PlatformDialog(
    modifier: Modifier,
    visible: Boolean,
    onDismissRequest: () -> Unit,
    size: Pair<Int, Int>,
    content: @Composable () -> Unit
) {
    if (visible) {
        Dialog(
            onDismissRequest = onDismissRequest
        ) {
            content()
        }
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