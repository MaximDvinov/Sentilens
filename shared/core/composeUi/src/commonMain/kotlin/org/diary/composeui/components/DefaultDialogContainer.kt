package org.diary.composeui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.AlertDialog
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import org.diary.composeui.PlatformDialog
import org.diary.composeui.theme.defaultShape

@Composable
fun DefaultDialogContainer(
    modifier: Modifier = Modifier,
    onDismiss: () -> Unit,
    content: @Composable () -> Unit
) {
    AlertDialog(
        onDismissRequest = onDismiss,
        modifier = modifier.widthIn(max = 400.dp)
            .clip(defaultShape)
            .background(MaterialTheme.colors.secondary),
        buttons = {
            content()
        }
    )
}