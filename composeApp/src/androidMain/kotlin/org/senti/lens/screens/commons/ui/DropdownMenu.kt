package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.padding
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.Tag
import org.senti.lens.theme.*

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