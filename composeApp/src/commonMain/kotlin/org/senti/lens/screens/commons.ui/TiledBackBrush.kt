package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.background
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.ImageShader
import androidx.compose.ui.graphics.ShaderBrush
import androidx.compose.ui.graphics.TileMode
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.imageResource
import org.senti.lens.TypeDevice
import org.senti.lens.getTypeDevice
import sentilens.composeapp.generated.resources.Res
import sentilens.composeapp.generated.resources.back_tile
import sentilens.composeapp.generated.resources.back_tile_big

@OptIn(ExperimentalResourceApi::class)
@Composable
fun Modifier.tileBack(
    backgroundColor: Color = MaterialTheme.colors.background,
    tint: Color = MaterialTheme.colors.secondaryVariant
): Modifier {
    val image =
        if (getTypeDevice() == TypeDevice.MOBILE) imageResource(Res.drawable.back_tile_big) else imageResource(
            Res.drawable.back_tile
        )
    val imageBrush = ShaderBrush(
        shader = ImageShader(
            image = image,
            tileModeX = TileMode.Repeated,
            tileModeY = TileMode.Repeated
        )
    )

    return this
        .background(backgroundColor)
        .drawBehind {
            drawRect(
                brush = imageBrush,
                colorFilter = ColorFilter.tint(tint),
            )
        }
}