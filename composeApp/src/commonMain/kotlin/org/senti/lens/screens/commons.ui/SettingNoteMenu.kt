package org.senti.lens.screens.commons.ui

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
expect fun SettingNoteMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    onDeleteClick: () -> Unit,
    onTagsClick: () -> Unit,
    modifier: Modifier
)