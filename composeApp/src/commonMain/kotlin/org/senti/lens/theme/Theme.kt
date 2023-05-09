package org.senti.lens.theme

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material.Colors
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Typography
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
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
private fun animateColor(targetValue: Color) =
    animateColorAsState(
        targetValue = targetValue,
        animationSpec = tween(durationMillis = 300)
    ).value


@Composable
fun Colors.switch() = copy(
    primary = animateColor(primary),
    primaryVariant = animateColor(primaryVariant),
    secondary = animateColor(secondary),
    secondaryVariant = animateColor(secondaryVariant),
    background = animateColor(background),
    surface = animateColor(surface),
    error = animateColor(error),
    onPrimary = animateColor(onPrimary),
    onSecondary = animateColor(onSecondary),
    onBackground = animateColor(onBackground),
    onSurface = animateColor(onSurface),
    onError = animateColor(onError)
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

    SetColorStatusBar(darkTheme, colors)


    MaterialTheme(
        colors = colors.switch(),
        typography = Typography(
            h1 = h1.copy(
                fontFamily = fontFamilyResource(MR.fonts.Nunito.bold),
                color = colors.onSecondary
            ),
            h2 = h2.copy(
                fontFamily = fontFamilyResource(MR.fonts.Nunito.semiBold),
                color = colors.onSecondary
            ),
            defaultFontFamily = fontFamilyResource(MR.fonts.Nunito.medium),
            body1 = body.copy(
                fontFamily = fontFamilyResource(MR.fonts.Nunito.medium),
                color = colors.onSecondary
            ),
            caption = muted.copy(
                fontFamily = fontFamilyResource(MR.fonts.Nunito.medium),
                color = colors.onSecondary.copy(0.6f)
            ),
            overline = small.copy(
                fontFamily = fontFamilyResource(MR.fonts.Nunito.medium),
                color = colors.onSecondary
            )
        ),
        shapes = MaterialTheme.shapes.copy(medium = defaultShape),
        content = {
            Surface(content = content)
        }
    )
}

@Composable
expect fun SetColorStatusBar(darkTheme: Boolean, colors: Colors)