package org.diary.composeui.theme.icons

import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp


private var _vector: ImageVector? = null

public val androidIcon: ImageVector
    get() {
        if (_vector != null) {
            return _vector!!
        }
        _vector = ImageVector.Builder(
            name = "vector",
            defaultWidth = 24.dp,
            defaultHeight = 25.dp,
            viewportWidth = 24f,
            viewportHeight = 25f
        ).apply {
            path(
                fill = SolidColor(Color(0xFFFFFFFF)),
                fillAlpha = 1.0f,
                stroke = null,
                strokeAlpha = 1.0f,
                strokeLineWidth = 1.0f,
                strokeLineCap = StrokeCap.Butt,
                strokeLineJoin = StrokeJoin.Miter,
                strokeLineMiter = 1.0f,
                pathFillType = PathFillType.NonZero
            ) {
                moveTo(12f, 9.83333f)
                curveTo(5.7135f, 9.8333f, 0.554f, 14.6473f, 0f, 20.7893f)
                horizontalLineTo(24f)
                curveTo(23.446f, 14.6473f, 18.2865f, 9.8333f, 12f, 9.8333f)
                close()
                moveTo(16.5895f, 16.3288f)
                curveTo(16.5895f, 15.7768f, 17.037f, 15.3293f, 17.589f, 15.3293f)
                curveTo(18.141f, 15.3293f, 18.5885f, 15.7768f, 18.5885f, 16.3288f)
                curveTo(18.5885f, 16.8808f, 18.141f, 17.3283f, 17.589f, 17.3283f)
                curveTo(17.037f, 17.3283f, 16.5895f, 16.8808f, 16.5895f, 16.3288f)
                close()
                moveTo(6.411f, 17.3283f)
                curveTo(5.859f, 17.3283f, 5.4115f, 16.8808f, 5.4115f, 16.3288f)
                curveTo(5.4115f, 15.7768f, 5.859f, 15.3293f, 6.411f, 15.3293f)
                curveTo(6.963f, 15.3293f, 7.4105f, 15.7768f, 7.4105f, 16.3288f)
                curveTo(7.4105f, 16.8808f, 6.963f, 17.3283f, 6.411f, 17.3283f)
                close()
            }
            path(
                fill = SolidColor(Color(0xFFFFFFFF)),
                fillAlpha = 1.0f,
                stroke = null,
                strokeAlpha = 1.0f,
                strokeLineWidth = 1.0f,
                strokeLineCap = StrokeCap.Butt,
                strokeLineJoin = StrokeJoin.Miter,
                strokeLineMiter = 1.0f,
                pathFillType = PathFillType.NonZero
            ) {
                moveTo(17.019f, 10.1565f)
                curveTo(16.949f, 10.1565f, 16.8785f, 10.139f, 16.814f, 10.1015f)
                curveTo(16.6175f, 9.988f, 16.5505f, 9.737f, 16.6635f, 9.5405f)
                lineTo(19.262f, 5.0365f)
                curveTo(19.3755f, 4.8395f, 19.6265f, 4.772f, 19.823f, 4.886f)
                curveTo(20.0195f, 4.9995f, 20.0865f, 5.2505f, 19.9735f, 5.447f)
                lineTo(17.375f, 9.951f)
                curveTo(17.299f, 10.083f, 17.161f, 10.1565f, 17.019f, 10.1565f)
                close()
            }
            path(
                fill = SolidColor(Color(0xFFFFFFFF)),
                fillAlpha = 1.0f,
                stroke = null,
                strokeAlpha = 1.0f,
                strokeLineWidth = 1.0f,
                strokeLineCap = StrokeCap.Butt,
                strokeLineJoin = StrokeJoin.Miter,
                strokeLineMiter = 1.0f,
                pathFillType = PathFillType.NonZero
            ) {
                moveTo(6.98104f, 10.1565f)
                curveTo(6.839f, 10.1565f, 6.701f, 10.0825f, 6.625f, 9.951f)
                lineTo(4.02704f, 5.447f)
                curveTo(3.9135f, 5.2505f, 3.981f, 4.9995f, 4.177f, 4.886f)
                curveTo(4.373f, 4.772f, 4.6245f, 4.8395f, 4.738f, 5.0365f)
                lineTo(7.33654f, 9.5405f)
                curveTo(7.45f, 9.7375f, 7.3825f, 9.9885f, 7.186f, 10.1015f)
                curveTo(7.1215f, 10.139f, 7.051f, 10.1565f, 6.981f, 10.1565f)
                close()
            }
        }.build()
        return _vector!!
    }

