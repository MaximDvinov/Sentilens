package org.senti.lens.theme

import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.darkColors
import androidx.compose.runtime.Composable

private val colors = darkColors(
    primary = primary,
    onPrimary = onPrimary,
    secondary = secondary,
    onSecondary = onSecondary,
    error = error,
    onError = onError,
    background = background,
    onBackground = onBackground,
    surface = surface,
    onSurface = onSurface,
)

@Composable
internal fun AppTheme(
    content: @Composable() () -> Unit
) {
    MaterialTheme(
        colors = colors,
        content = {
            Surface(content = content)
        }
    )
}
