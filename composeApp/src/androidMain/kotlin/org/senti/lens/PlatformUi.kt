package org.senti.lens

import androidx.compose.animation.animateContentSize
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridCells
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.DialogContent
import org.senti.lens.screens.homeNotes.elements.NoteItem
import org.senti.lens.screens.homeNotes.elements.TagItem

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun PlatformGrid(
    modifier: Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>,
    cellsDp: Dp,
    currentNote: Note?
) {
    LazyVerticalStaggeredGrid(
        modifier = modifier.fillMaxSize(),
        columns = StaggeredGridCells.Adaptive(cellsDp),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalItemSpacing = 10.dp,
        contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 16.dp)
    ) {
        notes.forEach {
            item {
                NoteItem(modifier = Modifier.animateContentSize(), it) {
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
                defaultColor = MaterialTheme.colors.secondary,
                text = tag.name,
                onSelect = { onClickTag(tag) })
        }
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

    if (visible) {
        Dialog(
            onDismissRequest = onDismissRequest
        ) {
            DialogContent(
                modifier = modifier.background(MaterialTheme.colors.background),
                tags = tags,
                selectedTags = selectedTags,
                onSaveClick = onSaveClick,
                onDismissRequest = onDismissRequest
            )
        }
    }

}