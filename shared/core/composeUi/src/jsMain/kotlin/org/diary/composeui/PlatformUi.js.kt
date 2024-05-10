package org.diary.composeui

import androidx.compose.foundation.HorizontalScrollbar
import androidx.compose.foundation.LocalScrollbarStyle
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.material.Colors
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.key
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onPreviewKeyEvent
import androidx.compose.ui.unit.dp
import org.diary.composeui.theme.defaultShape


@Composable
actual fun BoxScope.VerticalScrollBar(state: LazyListState) {
}

@Composable
actual fun ColumnScope.BodyText(text: String) {
}

@Composable
actual fun PlatformBackHandler(
    backHandlingEnabled: Boolean,
    onBack: () -> Unit,
) {
    Box(modifier = Modifier.onPreviewKeyEvent {
        if (it.key == Key.Escape) {
            onBack()
            true
        } else {
            false
        }
    })
}

@Composable
actual fun SetColorStatusBar(darkTheme: Boolean, colors: Colors) {
}

