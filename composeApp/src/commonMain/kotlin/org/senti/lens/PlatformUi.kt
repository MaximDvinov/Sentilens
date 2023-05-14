package org.senti.lens

import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
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
    currentNote: Note?,
    contentPadding: PaddingValues
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
expect fun PlatformDialog(
    modifier: Modifier,
    visible: Boolean,
    onDismissRequest: () -> Unit,
    size: Pair<Int, Int> = 350 to 300,
    content: @Composable () -> Unit
)

@Composable
expect fun SettingNoteMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    onDeleteClick: () -> Unit,
    onTagsClick: () -> Unit,
    modifier: Modifier
)