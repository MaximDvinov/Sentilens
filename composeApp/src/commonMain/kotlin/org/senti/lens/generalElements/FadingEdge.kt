package org.senti.lens.generalElements

import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color

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