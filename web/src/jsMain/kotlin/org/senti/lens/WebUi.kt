package org.senti.lens

import androidx.compose.foundation.LocalScrollbarStyle
import androidx.compose.foundation.VerticalScrollbar
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import org.diary.composeui.theme.defaultShape


@Composable
actual fun ColumnScope.BodyText(
    text: String,
) {
    Text(
        modifier = Modifier.weight(1f),
        text = text,
        style = MaterialTheme.typography.body1.copy(
            color = MaterialTheme.colors.onSecondary.copy(
                alpha = 0.7f
            )
        ),
        maxLines = 4,
        overflow = TextOverflow.Ellipsis
    )
}

@Composable
actual fun BoxScope.VerticalScrollBar(state: LazyListState) {
    VerticalScrollbar(
        modifier = Modifier.align(Alignment.TopEnd).fillMaxHeight().padding(end = 2.dp),
        adapter = rememberScrollbarAdapter(state),
        style = LocalScrollbarStyle.current.copy(
            hoverColor = MaterialTheme.colors.onBackground.copy(
                0.3f
            ),
            shape = defaultShape,
            unhoverColor = MaterialTheme.colors.onBackground.copy(
                0.03f
            ),
            thickness = 6.dp
        )
    )
}