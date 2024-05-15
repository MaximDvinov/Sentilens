package org.diary.composeui.icons.emoji

import androidx.compose.runtime.Composable
import androidx.compose.foundation.Image
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.group
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp


private var _Neutral: ImageVector? = null

public val Neutral: ImageVector
		get() {
			if (_Neutral != null) {
				return _Neutral!!
			}
_Neutral = ImageVector.Builder(
                name = "Neutral",
                defaultWidth = 32.dp,
                defaultHeight = 32.dp,
                viewportWidth = 32f,
                viewportHeight = 32f
            ).apply {
				group {
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFE030),
				1f to Color(0xFFFFB92E),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(16f, 24f)
						curveTo(22.6274f, 24f, 28f, 18.6274f, 28f, 12f)
						curveTo(28f, 5.3726f, 22.6274f, 0f, 16f, 0f)
						curveTo(9.3726f, 0f, 4f, 5.3726f, 4f, 12f)
						curveTo(4f, 18.6274f, 9.3726f, 24f, 16f, 24f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFEA5F),
				1f to Color(0xFFFFBC47),
			),
		),
    					fillAlpha = 0.5f,
    					stroke = null,
    					strokeAlpha = 0.5f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(16f, 24f)
						curveTo(22.6274f, 24f, 28f, 18.6274f, 28f, 12f)
						curveTo(28f, 5.3726f, 22.6274f, 0f, 16f, 0f)
						curveTo(9.3726f, 0f, 4f, 5.3726f, 4f, 12f)
						curveTo(4f, 18.6274f, 9.3726f, 24f, 16f, 24f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(11.2015f, 7.3857f),
		end = Offset(11.396f, 5.88121f),
		colorStops = arrayOf(
				0.00132565f to Color(0xFF3C2200),
				1f to Color(0xFF7A4400),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(13.8325f, 6.7501f)
						curveTo(13.9075f, 6.1801f, 13.435f, 5.7526f, 12.55f, 5.6401f)
						curveTo(11.7925f, 5.5426f, 10.075f, 5.8276f, 8.71f, 7.4401f)
						curveTo(8.455f, 7.7401f, 8.755f, 7.9576f, 8.995f, 7.7776f)
						curveTo(9.79f, 7.1551f, 11.785f, 6.4801f, 13.225f, 6.8626f)
						curveTo(13.8025f, 7.0051f, 13.8325f, 6.7501f, 13.8325f, 6.7501f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0.00132565f to Color(0xFF7A4400),
				1f to Color(0xFF643800),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(12.0848f, 12.5099f)
						curveTo(12.7227f, 12.5099f, 13.2398f, 11.7275f, 13.2398f, 10.7624f)
						curveTo(13.2398f, 9.7973f, 12.7227f, 9.0149f, 12.0848f, 9.0149f)
						curveTo(11.447f, 9.0149f, 10.9298f, 9.7973f, 10.9298f, 10.7624f)
						curveTo(10.9298f, 11.7275f, 11.447f, 12.5099f, 12.0848f, 12.5099f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(12.082f, 9.00815f),
		end = Offset(12.082f, 10.6367f),
		colorStops = arrayOf(
				0.00132565f to Color(0xFF3C2200),
				1f to Color(0xFF512D00),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(12.0848f, 9.60742f)
						curveTo(12.5798f, 9.6074f, 13.0148f, 10.0424f, 13.2398f, 10.6799f)
						curveTo(13.2248f, 9.7349f, 12.7148f, 8.9774f, 12.0848f, 8.9774f)
						curveTo(11.4548f, 8.9774f, 10.9448f, 9.7349f, 10.9298f, 10.6799f)
						curveTo(11.1548f, 10.0424f, 11.5823f, 9.6074f, 12.0848f, 9.6074f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0.00132565f to Color(0xFF7A4400),
				1f to Color(0xFF643800),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(19.915f, 12.5099f)
						curveTo(20.5529f, 12.5099f, 21.07f, 11.7275f, 21.07f, 10.7624f)
						curveTo(21.07f, 9.7973f, 20.5529f, 9.0149f, 19.915f, 9.0149f)
						curveTo(19.2772f, 9.0149f, 18.76f, 9.7973f, 18.76f, 10.7624f)
						curveTo(18.76f, 11.7275f, 19.2772f, 12.5099f, 19.915f, 12.5099f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(19.9179f, 9.0512f),
		end = Offset(19.9179f, 10.6798f),
		colorStops = arrayOf(
				0.00132565f to Color(0xFF3C2200),
				1f to Color(0xFF512D00),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(19.915f, 9.65261f)
						curveTo(19.42f, 9.6526f, 18.985f, 10.0876f, 18.76f, 10.7251f)
						curveTo(18.775f, 9.7801f, 19.285f, 9.0226f, 19.915f, 9.0226f)
						curveTo(20.545f, 9.0226f, 21.055f, 9.7801f, 21.07f, 10.7251f)
						curveTo(20.845f, 10.0876f, 20.4175f, 9.6526f, 19.915f, 9.6526f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(20.7988f, 7.38608f),
		end = Offset(20.6044f, 5.88159f),
		colorStops = arrayOf(
				0.00132565f to Color(0xFF3C2200),
				1f to Color(0xFF7A4400),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(18.1675f, 6.7501f)
						curveTo(18.0925f, 6.1801f, 18.565f, 5.7526f, 19.45f, 5.6401f)
						curveTo(20.2075f, 5.5426f, 21.925f, 5.8276f, 23.29f, 7.4401f)
						curveTo(23.545f, 7.7401f, 23.245f, 7.9576f, 23.005f, 7.7776f)
						curveTo(22.21f, 7.1551f, 20.215f, 6.4801f, 18.775f, 6.8626f)
						curveTo(18.1975f, 7.0051f, 18.1675f, 6.7501f, 18.1675f, 6.7501f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0.00132565f to Color(0xFF7A4400),
				1f to Color(0xFF643800),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(19.5995f, 17.125f)
						horizontalLineTo(12.4005f)
						curveTo(12.1816f, 17.125f, 12f, 16.87f, 12f, 16.5625f)
						curveTo(12f, 16.255f, 12.1816f, 16f, 12.4005f, 16f)
						horizontalLineTo(19.5995f)
						curveTo(19.8184f, 16f, 20f, 16.255f, 20f, 16.5625f)
						curveTo(20f, 16.87f, 19.8184f, 17.125f, 19.5995f, 17.125f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(12f, 16.2996f),
		end = Offset(20f, 16.2996f),
		colorStops = arrayOf(
				0.00132565f to Color(0xFF3C2200),
				1f to Color(0xFF512D00),
			),
		),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(12.3632f, 16.3f)
						horizontalLineTo(19.6422f)
						curveTo(19.7971f, 16.3f, 19.9359f, 16.4275f, 20f, 16.6075f)
						curveTo(20f, 16.5925f, 20f, 16.5775f, 20f, 16.5625f)
						curveTo(20f, 16.255f, 19.8184f, 16f, 19.5995f, 16f)
						horizontalLineTo(12.4005f)
						curveTo(12.1816f, 16f, 12f, 16.255f, 12f, 16.5625f)
						curveTo(12f, 16.5775f, 12f, 16.5925f, 12f, 16.6075f)
						curveTo(12.0694f, 16.42f, 12.2029f, 16.3f, 12.3632f, 16.3f)
						close()
}
}
}.build()
return _Neutral!!
		}

