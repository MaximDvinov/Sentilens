package org.diary.composeui.icons

import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.group
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp


private var _Leftarrow: ImageVector? = null

public val LeftArrow: ImageVector
    get() {
        if (_Leftarrow != null) {
            return _Leftarrow!!
        }
        _Leftarrow = ImageVector.Builder(
            name = "Leftarrow",
            defaultWidth = 16.dp,
            defaultHeight = 16.dp,
            viewportWidth = 16f,
            viewportHeight = 16f
        ).apply {
            group {
                path(
                    fill = SolidColor(Color(0xFFFFFFFF)),
                    fillAlpha = 0.9f,
                    stroke = null,
                    strokeAlpha = 0.9f,
                    strokeLineWidth = 1.0f,
                    strokeLineCap = StrokeCap.Butt,
                    strokeLineJoin = StrokeJoin.Miter,
                    strokeLineMiter = 1.0f,
                    pathFillType = PathFillType.NonZero
                ) {
                    moveTo(3.23259f, 15.7732f)
                    curveTo(2.9507f, 15.4984f, 2.925f, 15.0683f, 3.1557f, 14.7652f)
                    lineTo(3.23259f, 14.6784f)
                    lineTo(10.0825f, 8f)
                    lineTo(3.23259f, 1.32163f)
                    curveTo(2.9507f, 1.0468f, 2.925f, 0.6167f, 3.1557f, 0.3136f)
                    lineTo(3.23259f, 0.226755f)
                    curveTo(3.5145f, -0.0481f, 3.9557f, -0.0731f, 4.2666f, 0.1518f)
                    lineTo(4.35564f, 0.226755f)
                    lineTo(11.7674f, 7.45256f)
                    curveTo(12.0493f, 7.7274f, 12.075f, 8.1575f, 11.8443f, 8.4606f)
                    lineTo(11.7674f, 8.54744f)
                    lineTo(4.35564f, 15.7732f)
                    curveTo(4.0455f, 16.0756f, 3.5427f, 16.0756f, 3.2326f, 15.7732f)
                    close()
                }
            }
        }.build()
        return _Leftarrow!!
    }

