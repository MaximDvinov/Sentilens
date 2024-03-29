package org.senti.lens.screens.player

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.*
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.clipPath
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.toPersistentList
import kotlin.math.sin


fun DrawScope.wavePoints(wavePoints: List<Offset>, color: Color, strokeWidth: Float = 2f) {
    drawPoints(
        wavePoints,
        pointMode = PointMode.Polygon,
        color = color,
        strokeWidth = strokeWidth,
        StrokeCap.Round
    )

//    val path = Path().apply {
//        moveTo(wavePoints.first().x, wavePoints.first().y)
//        wavePoints.forEach {
//            lineTo(it.x, it.y)
//        }
//        close()
//    }

//    drawPath(path, color = color, style = Fill)
}

fun generateWavePoints(
    numPoints: Int,
    waveLength: Float,
    amplitude: Float,
    a: Float,
    func: (Float, Float, Float) -> Float = { it, waveLength, a -> sin(it / waveLength + a) }
): ImmutableList<Offset> {
    val points = mutableListOf<Offset>()

    for (i in 0 until numPoints) {
        val x = i
        val y = amplitude * func(x.toFloat(), waveLength, a)
        points.add(Offset(x * 10f, y))
    }

    return points.toPersistentList()
}