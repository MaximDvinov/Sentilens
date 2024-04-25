package org.diary.composeui

import android.annotation.SuppressLint
import android.app.Activity
import android.graphics.Color
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.material.Colors
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.text.style.TextOverflow
import androidx.core.view.WindowCompat

@Composable
actual fun PlatformBackHandler(
    backHandlingEnabled: Boolean,
    onBack: () -> Unit
) {
    BackHandler(backHandlingEnabled, onBack = onBack)
}

@Composable
actual fun BoxScope.VerticalScrollBar(state: LazyListState) {
}

@SuppressLint("NewApi")
@Composable
actual fun SetColorStatusBar(darkTheme: Boolean, colors: Colors) {
    val view = LocalView.current

    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = Color.TRANSPARENT
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
        }
    }
}

@Composable
actual fun ColumnScope.BodyText(
    text: String,
) {
    Text(
        modifier = Modifier,
        text = text,
        style = MaterialTheme.typography.body1.copy(
            color = MaterialTheme.colors.onSecondary.copy(
                alpha = 0.7f
            )
        ),
        maxLines = when {
            text.length <= 140 -> Int.MAX_VALUE
            text.length <= 250 -> 5
            else -> 9
        },
        overflow = TextOverflow.Ellipsis
    )
}

