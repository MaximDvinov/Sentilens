package org.senti.lens.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material.Colors
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Typography
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable
import dev.icerock.moko.resources.compose.fontFamilyResource
import org.senti.lens.MR

private val darkColors = darkColors(
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

private val lightColors = lightColors(
    primary = lightPrimary,
    onPrimary = lightOnPrimary,
    secondary = lightSecondary,
    onSecondary = lightOnSecondary,
    error = lightError,
    onError = lightOnError,
    background = lightBackground,
    onBackground = lightOnBackground,
    surface = lightSurface,
    onSurface = lightOnSurface,
)

@Composable

internal fun AppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colors = if (darkTheme) {
        darkColors
    } else {
        lightColors
    }

    SetColorStatusBar(darkTheme,colors)


    MaterialTheme(
        colors = colors,
        typography = Typography(
            h1 = h1.copy(fontFamily = fontFamilyResource(MR.fonts.Nunito.bold)),
            h2 = h2.copy(fontFamily = fontFamilyResource(MR.fonts.Nunito.semiBold)),
            defaultFontFamily = fontFamilyResource(MR.fonts.Nunito.medium),
            body1 = body.copy(fontFamily = fontFamilyResource(MR.fonts.Nunito.medium)),
            caption = muted.copy(fontFamily = fontFamilyResource(MR.fonts.Nunito.medium)),
            overline = small.copy(fontFamily = fontFamilyResource(MR.fonts.Nunito.medium))
        ),
        shapes = MaterialTheme.shapes.copy(medium = defaultShape),
        content = {
            Surface(content = content)
        }
    )
}

@Composable
expect fun SetColorStatusBar(darkTheme: Boolean, colors: Colors)