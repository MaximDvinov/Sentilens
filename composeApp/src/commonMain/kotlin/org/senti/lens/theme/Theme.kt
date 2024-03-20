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
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import io.ktor.client.plugins.websocket.WebSockets
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.Font
import org.jetbrains.compose.resources.FontResource
import org.senti.lens.SetColorStatusBar
import sentilens.composeapp.generated.resources.Nunito_Bold
import sentilens.composeapp.generated.resources.Nunito_Medium
import sentilens.composeapp.generated.resources.Nunito_SemiBold
import sentilens.composeapp.generated.resources.Res

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
    primaryVariant = tagColor,
    secondaryVariant = secondary.copy(alpha = 0.3f)
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
    primaryVariant = lightTagColor,
    secondaryVariant = lightSecondary.copy(alpha = 0.5f)
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
    onError = animateColor(onError),
)

@OptIn(ExperimentalResourceApi::class)
@Composable
internal fun AppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    val colors = if (darkTheme) {
        darkColors
    } else {
        lightColors
    }

    SetColorStatusBar(darkTheme, colors)

    val fontFamily = FontFamily(
        Font(Res.font.Nunito_Bold, weight = FontWeight.Bold),
        Font(Res.font.Nunito_Medium, weight = FontWeight.Medium),
        Font(Res.font.Nunito_Medium, weight = FontWeight.Normal),
        Font(Res.font.Nunito_SemiBold, weight = FontWeight.SemiBold),
    )

    MaterialTheme(
        colors = colors.switch(),
        typography = Typography(
            h1 = h1.copy(
                fontFamily = fontFamily,
                color = colors.onSecondary
            ),
            h2 = h2.copy(
                fontFamily = fontFamily,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSecondary
            ),
            defaultFontFamily = fontFamily,
            subtitle1 = title.copy(
                fontFamily = fontFamily,
                fontWeight = FontWeight.Medium,
                color = colors.onSecondary
            ),
            body1 = body.copy(
                fontFamily = fontFamily,
                fontWeight = FontWeight.Medium,
            ),
            caption = muted.copy(
                fontFamily = fontFamily,
                fontWeight = FontWeight.Medium,
                color = colors.onSecondary.copy(0.6f)
            ),
            overline = small.copy(
                fontFamily = fontFamily,
                fontWeight = FontWeight.Medium,
                color = colors.onSecondary
            )
        ),
        shapes = MaterialTheme.shapes.copy(medium = defaultShape),
        content = {
            Surface(content = content, color = Color.Transparent)
        }
    )
}