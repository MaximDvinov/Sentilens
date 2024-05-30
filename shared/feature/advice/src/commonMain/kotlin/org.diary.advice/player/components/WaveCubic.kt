package org.diary.advice.player.components

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.clipPath


fun DrawScope.waveCubic(
    animatedValue: Float,
    color: Color,
    xOffset: Float = 0f
) {
    val del = 4

    clipPath(Path().apply { addOval(Rect(Offset(size.width / 2, size.height / 2), radius = size.width / 2)) }) {
        val path = Path()

        // Задаем начальную точку пути
        val startP = Offset(0f, size.height)
        // Задаем конечную точку пути
        val endP = Offset(size.width, size.height / 2)

        // Перемещаемся к начальной точке
        path.moveTo(startP.x, startP.y)
        path.lineTo(startP.x, startP.y - size.height / 2)
        // Создаем кубическую кривую Безье от текущей точки до конечной точки
        // с указанными контрольными точками


        path.cubicTo(
            size.width / del,
            size.height / 2 - 400f * (animatedValue),
            size.width / del,
            size.height / 2 + 400f * (animatedValue),
            2 * endP.x / del, endP.y
        )

        path.cubicTo(
            3 * size.width / del,
            size.height / 2 - 400f * (animatedValue),
            3 * size.width / del,
            size.height / 2 + 400f * (animatedValue),
            4 * endP.x / del, endP.y
        )

        path.cubicTo(
            5 * size.width / del,
            size.height / 2 - 400f * (animatedValue),
            5 * size.width / del,
            size.height / 2 + 400f * (animatedValue),
            6 * endP.x / del, endP.y
        )


        path.lineTo(endP.x, startP.y + size.height)

        path.translate(Offset(xOffset * size.width / del, 0f))

        path.close()

        // Рисуем путь с заданным цветом
        drawPath(path = path, color = color)
    }
}