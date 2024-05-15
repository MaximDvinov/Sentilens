package org.diary.composeui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.material.AlertDialog
import androidx.compose.material.Colors
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import org.diary.composeui.theme.defaultShape
import org.diary.composeui.theme.onError


@Composable
expect fun ColumnScope.BodyText(
    text: String,
)


@Composable
fun PlatformDialog(
    modifier: Modifier,
    visible: Boolean,
    onDismissRequest: () -> Unit,
    size: Pair<Int, Int> = 350 to 300,
    content: @Composable () -> Unit
){
    if (visible)
        AlertDialog(
            onDismissRequest = onDismissRequest,
            modifier = modifier,
            buttons = {
                content()
            }
        )
}

@Composable
fun SettingNoteMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    onDeleteClick: () -> Unit,
    onTagsClick: () -> Unit,
    modifier: Modifier
){
    DropdownMenu(
        offset = DpOffset(x = 0.dp, y = 10.dp),
        expanded = expanded,
        onDismissRequest = onDismissRequest,
        modifier = modifier.clip(defaultShape).background(
            MaterialTheme.colors.secondary
        )
    ) {
        DropdownMenuItem(onClick = onDeleteClick) {
            Icon(Icons.Default.Delete, "Settings", tint = MaterialTheme.colors.onError)

            Text(
                text = "Удалить",
                style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onError),
                modifier = Modifier.padding(10.dp)
            )
        }
    }
}

@Composable
expect fun BoxScope.VerticalScrollBar(state: LazyListState)

//@Composable
//expect fun RecommendationScreenContent(
//    modifier: Modifier = Modifier, recommendationList: List<Advice?>
//)

@Composable
expect fun PlatformBackHandler(backHandlingEnabled: Boolean, onBack: () -> Unit)


@Composable
expect fun SetColorStatusBar(darkTheme: Boolean, colors: Colors)