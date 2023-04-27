package org.senti.lens

import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Note
import org.senti.lens.models.Tag

@Composable
expect fun PlatformGrid(
    modifier: Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>,
    cellsDp: Dp = 175.dp,
    currentNote: Note?
)


@Composable
expect fun ColumnScope.BodyText(
    text: String,
)

@Composable
expect fun TagsList(
    modifier: Modifier = Modifier,
    tags: List<Pair<Tag, Boolean>>,
    onClickTag: (Tag) -> Unit
)

@Composable
expect fun TagsDialog(
    modifier: Modifier = Modifier,
    tags: List<Tag>?,
    visible: Boolean = false,
    selectedTags: List<Tag>?,
    onSaveClick: (List<Tag>) -> Unit,
    onDismissRequest: () -> Unit
)