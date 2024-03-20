package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.layout.height
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.TileMode

fun Modifier.fadingEdge(
    startingColor: Color = Color.White,
    endingColor: Color = Color.Transparent,
    length: Float = 60f,
    horizontal: Boolean = false,
    starting1Color: Color = endingColor,
    ending1Color: Color = startingColor,
    length1: Float = length
) = this.then(
    drawWithContent {
        val colors = listOf(startingColor, endingColor)
        val colors1 = listOf(starting1Color, ending1Color)
        drawContent()
        if (!horizontal) {
            drawRect(
                brush = Brush.verticalGradient(colors, endY = length),
            )
            drawRect(
                brush = Brush.verticalGradient(
                    colors1,
                    startY = size.height - length1,
                    endY = size.height
                ),
            )
        } else {
            drawRect(
                brush = Brush.horizontalGradient(colors, endX = length),
            )
            drawRect(
                brush = Brush.horizontalGradient(
                    colors1,
                    startX = size.width - length1,
                    endX = size.width
                ),
            )
        }
    }
)

fun Modifier.fadingCenterBack(
    startingColor: Color = Color.White,
    endingColor: Color = Color.Transparent,
    length: Float = 60f,
    horizontal: Boolean = false,
) = this.then(
    drawWithContent {
        val colors = listOf(startingColor, endingColor)
        val colors2 = listOf(endingColor, startingColor)

        if (!horizontal) {
            drawRect(
                brush = Brush.verticalGradient(colors, endY = length, tileMode = TileMode.Clamp),
                size = size.copy(width = size.width, height = size.height - length),
            )

            drawRect(
                brush = Brush.verticalGradient(
                    colors2,
                    startY = size.height - length,
                    endY = size.height,
                    tileMode = TileMode.Clamp
                ),
                size = size.copy(width = size.width, height = size.height - length),
                topLeft = Offset(0f, length)
            )
        } else {
            drawRect(
                brush = Brush.horizontalGradient(colors, tileMode = TileMode.Clamp),
            )
        }

        drawContent()
    }
)