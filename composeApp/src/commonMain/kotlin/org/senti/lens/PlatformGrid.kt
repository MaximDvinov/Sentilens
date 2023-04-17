package org.senti.lens

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import org.senti.lens.models.Note

@Composable
expect fun PlatformGrid(
    modifier: Modifier,
    onClick: (Note) -> Unit,
    notes: List<Note>
)