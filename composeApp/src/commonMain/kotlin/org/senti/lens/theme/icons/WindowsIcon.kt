package org.senti.lens.theme.icons

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.group
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp


private var _vector: ImageVector? = null

public val windowIcon: ImageVector
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
                moveTo(3.5f, 3.5f)
                horizontalLineTo(11f)
                curveTo(11.276f, 3.5f, 11.5f, 3.724f, 11.5f, 4f)
                verticalLineTo(11.5f)
                curveTo(11.5f, 11.776f, 11.276f, 12f, 11f, 12f)
                horizontalLineTo(3.5f)
                curveTo(3.224f, 12f, 3f, 11.776f, 3f, 11.5f)
                verticalLineTo(4f)
                curveTo(3f, 3.724f, 3.224f, 3.5f, 3.5f, 3.5f)
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
                moveTo(12.521f, 11.479f)
                verticalLineTo(4f)
                curveTo(12.521f, 3.724f, 12.745f, 3.5f, 13.021f, 3.5f)
                horizontalLineTo(20.5f)
                curveTo(20.776f, 3.5f, 21f, 3.724f, 21f, 4f)
                verticalLineTo(11.479f)
                curveTo(21f, 11.755f, 20.776f, 11.979f, 20.5f, 11.979f)
                horizontalLineTo(13.021f)
                curveTo(12.7445f, 11.979f, 12.521f, 11.7555f, 12.521f, 11.479f)
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
                moveTo(3.5f, 13f)
                horizontalLineTo(11f)
                curveTo(11.276f, 13f, 11.5f, 13.224f, 11.5f, 13.5f)
                verticalLineTo(21f)
                curveTo(11.5f, 21.276f, 11.276f, 21.5f, 11f, 21.5f)
                horizontalLineTo(3.5f)
                curveTo(3.224f, 21.5f, 3f, 21.276f, 3f, 21f)
                verticalLineTo(13.5f)
                curveTo(3f, 13.224f, 3.224f, 13f, 3.5f, 13f)
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
                moveTo(12.5f, 21f)
                verticalLineTo(13.5f)
                curveTo(12.5f, 13.224f, 12.724f, 13f, 13f, 13f)
                horizontalLineTo(20.5f)
                curveTo(20.776f, 13f, 21f, 13.224f, 21f, 13.5f)
                verticalLineTo(21f)
                curveTo(21f, 21.276f, 20.776f, 21.5f, 20.5f, 21.5f)
                horizontalLineTo(13f)
                curveTo(12.724f, 21.5f, 12.5f, 21.276f, 12.5f, 21f)
                close()
            }
        }.build()
        return _vector!!
    }

