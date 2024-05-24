package org.diary.stats.components

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.size
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.TextMeasurer
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.drawText
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

@Composable
fun SentimentVariability(
    modifier: Modifier,
    variability: Int?,
    strokeWidth: Dp = 8.dp,
    textStyle: TextStyle = MaterialTheme.typography.h1,
) {
    val color = MaterialTheme.colors.primary
    val textMeasurer = rememberTextMeasurer()

    Row(
        modifier,
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        VariabilityPie(
            modifier = Modifier.size(84.dp),
            color = color,
            strokeWidth = strokeWidth,
            variability = variability,
            textMeasurer = textMeasurer,
            textStyle = textStyle
        )

        Column(Modifier.weight(1f)) {
            Text(text = "Стабильность", style = MaterialTheme.typography.h2)
            Text(text = "Чем выше число, тем более сбалансированным человеком вы являетесь", style = MaterialTheme.typography.caption)
        }

    }
}

@Composable
private fun VariabilityPie(
    modifier: Modifier,
    color: Color,
    strokeWidth: Dp,
    variability: Int?,
    textMeasurer: TextMeasurer,
    textStyle: TextStyle,
) {
    Canvas(modifier = modifier) {
        val canvasWidth = size.width
        val canvasHeight = size.height

        drawCircle(
            color = color.copy(0.5f),
            center = Offset(x = canvasWidth / 2, y = canvasHeight / 2),
            radius = 42.dp.toPx(),
            style = Stroke(width = strokeWidth.toPx(), cap = StrokeCap.Round)
        )

        drawArc(
            color = color,
            startAngle = -90f,
            sweepAngle = 360f * (variability?.toFloat() ?: 0f) / 100f,
            useCenter = false,
            size = size,
            topLeft = Offset(x = 0f, y = 0f),
            style = Stroke(width = strokeWidth.toPx(), cap = StrokeCap.Round),
        )

        val textLayoutResult =
            textMeasurer.measure(variability.toString(), style = textStyle)

        drawText(
            textMeasurer = textMeasurer,
            text = "$variability",
            topLeft = Offset(
                x = canvasWidth / 2 - textLayoutResult.size.width / 2,
                y = canvasHeight / 2 - textLayoutResult.size.width / 2
            ),
            style = textStyle,
        )
    }
}