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

public val webIcon: ImageVector
    get() {
        if (_vector != null) {
            return _vector!!
        }
        _vector = ImageVector.Builder(
            name = "vector",
            defaultWidth = 25.dp,
            defaultHeight = 25.dp,
            viewportWidth = 25f,
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
                moveTo(5f, 22.5f)
                curveTo(4.45f, 22.5f, 3.9792f, 22.2552f, 3.5875f, 21.7656f)
                curveTo(3.1958f, 21.276f, 3f, 20.6875f, 3f, 20f)
                verticalLineTo(5f)
                curveTo(3f, 4.3125f, 3.1958f, 3.724f, 3.5875f, 3.2344f)
                curveTo(3.9792f, 2.7448f, 4.45f, 2.5f, 5f, 2.5f)
                horizontalLineTo(21f)
                curveTo(21.55f, 2.5f, 22.0208f, 2.7448f, 22.4125f, 3.2344f)
                curveTo(22.8042f, 3.724f, 23f, 4.3125f, 23f, 5f)
                verticalLineTo(20f)
                curveTo(23f, 20.6875f, 22.8042f, 21.276f, 22.4125f, 21.7656f)
                curveTo(22.0208f, 22.2552f, 21.55f, 22.5f, 21f, 22.5f)
                horizontalLineTo(5f)
                close()
                moveTo(5f, 20f)
                horizontalLineTo(15.5f)
                verticalLineTo(15.625f)
                horizontalLineTo(5f)
                verticalLineTo(20f)
                close()
                moveTo(17.5f, 20f)
                horizontalLineTo(21f)
                verticalLineTo(8.75f)
                horizontalLineTo(17.5f)
                verticalLineTo(20f)
                close()
                moveTo(5f, 13.125f)
                horizontalLineTo(15.5f)
                verticalLineTo(8.75f)
                horizontalLineTo(5f)
                verticalLineTo(13.125f)
                close()
            }
        }.build()
        return _vector!!
    }

