package org.diary.stats.components

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.drawText
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.ImmutableList

@Stable
data class HistogramItem(
    val index: Int,
    val color: Color,
    val value: Float,
    val barText: String? = null,
)

private var barWidth = 0f
private var spacingPx = 0f

@Composable
fun Histogram(
    modifier: Modifier = Modifier,
    items: ImmutableList<HistogramItem>,
    spacing: Dp = 16.dp,
    max: Float,
    cornerRadius: CornerRadius = CornerRadius(16f, 16f),
    barTextStyle: TextStyle = MaterialTheme.typography.subtitle1,
    selectedItem: HistogramItem? = null,
    onItemSelected: (HistogramItem) -> Unit = { _ -> },
    isSelectable: Boolean = false
) {
    val textMeasurer = rememberTextMeasurer()

    Canvas(
        modifier
            .pointerInput(Unit) {
                if (!isSelectable) return@pointerInput
                detectDragGestures(onDrag = { change, _ ->
                    val position = change.position
                    val x = position.x
                    val y = position.y
                    val index = (x / (barWidth + spacingPx)).toInt()
                    items.getOrNull(index)?.let {
                        onItemSelected(it.copy(index = index))
                    }
                })
            }
            .pointerInput(Unit) {
                if (!isSelectable) return@pointerInput
                detectTapGestures { offset ->
                    val x = offset.x
                    val y = offset.y

                    val index = (x / (barWidth + spacingPx)).toInt()
                    items.getOrNull(index)?.let {
                        onItemSelected(it.copy(index = index))
                    }
                }
            }
    ) {
        val canvasWidth = size.width
        val canvasHeight = size.height
        spacingPx = spacing.toPx()
        barWidth = (canvasWidth - spacingPx * (items.size - 1)) / items.size

        items.forEachIndexed { index, item ->
            val barHeight = (canvasHeight * item.value / max)

            drawRoundRect(
                color = item.color.copy(0.3f),
                topLeft = Offset(
                    x = index * (barWidth + spacingPx),
                    y = 0f
                ),
                size = Size(
                    width = barWidth,
                    height = canvasHeight
                ),
                cornerRadius = cornerRadius
            )

            if (selectedItem == item) {
                drawRoundRect(
                    color = item.color.copy(0.5f),
                    topLeft = Offset(
                        x = index * (barWidth + spacingPx),
                        y = 0f
                    ),
                    size = Size(
                        width = barWidth,
                        height = canvasHeight
                    ),
                    cornerRadius = cornerRadius
                )
            }


            drawRoundRect(
                color = item.color,
                topLeft = Offset(
                    x = index * (barWidth + spacingPx),
                    y = canvasHeight - barHeight
                ),
                size = Size(
                    width = barWidth,
                    height = barHeight
                ),
                cornerRadius = cornerRadius
            )

            if (item.barText != null) {
                val textLayoutResult = textMeasurer.measure(item.barText, barTextStyle)
                if (textLayoutResult.size.width <= barWidth) {
                    drawText(
                        textMeasurer = textMeasurer,
                        text = item.barText,
                        style = barTextStyle,
                        topLeft = Offset(
                            x = index * (barWidth + spacingPx) + barWidth / 2 - textLayoutResult.size.width / 2,
                            y = canvasHeight - textLayoutResult.size.height - 8.dp.toPx()
                        )
                    )
                }
            }
        }
    }
}
