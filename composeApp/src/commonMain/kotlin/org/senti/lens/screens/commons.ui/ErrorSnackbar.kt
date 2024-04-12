package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Snackbar
import androidx.compose.material.SnackbarData
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.zIndex
import compose.icons.FeatherIcons
import compose.icons.feathericons.X

@Composable
fun BoxScope.ErrorSnackbar(
    error: String, onDismiss: () -> Unit
) {
    Snackbar(
        elevation = 100.dp,
        shape = RoundedCornerShape(16.dp),
        backgroundColor = MaterialTheme.colors.error,
        modifier = Modifier.zIndex(100f).align(Alignment.BottomCenter).padding(16.dp),
        actionOnNewLine = true,
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = error,
                color = MaterialTheme.colors.onError,
                style = MaterialTheme.typography.body1,
                modifier = Modifier.weight(1f).padding(end = 5.dp)
            )

            IconButton(onClick = onDismiss, modifier = Modifier.padding(0.dp)) {
                Icon(
                    imageVector = FeatherIcons.X,
                    contentDescription = null,
                    tint = MaterialTheme.colors.onError,
                    modifier = Modifier.padding(7.dp)
                )
            }
        }
    }
}
