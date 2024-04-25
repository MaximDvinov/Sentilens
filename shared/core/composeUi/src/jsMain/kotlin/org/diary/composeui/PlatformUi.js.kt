package org.diary.composeui

import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.material.Colors
import androidx.compose.runtime.Composable

@Composable
actual fun PlatformBackHandler(backHandlingEnabled: Boolean, onBack: () -> Unit) {
}

@Composable
actual fun BoxScope.VerticalScrollBar(state: LazyListState) {
}

@Composable
actual fun SetColorStatusBar(darkTheme: Boolean, colors: Colors) {
}

@Composable
actual fun ColumnScope.BodyText(text: String) {
}