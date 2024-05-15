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

private var _Bad: ImageVector? = null

internal val Bad: ImageVector
		get() {
			if (_Bad != null) {
				return _Bad!!
			}
_Bad = ImageVector.Builder(
                name = "Bad",
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
		start = Offset(10.5308f, 9.90331f),
		end = Offset(10.376f, 8.27275f),
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
						moveTo(7.90748f, 8.78241f)
						curveTo(7.9675f, 9.2624f, 8.5225f, 9.4949f, 9.4075f, 9.3749f)
						curveTo(10.165f, 9.2774f, 11.7625f, 8.6549f, 12.715f, 7.0349f)
						curveTo(12.8875f, 6.7349f, 12.55f, 6.6299f, 12.3625f, 6.8324f)
						curveTo(11.74f, 7.5149f, 9.955f, 8.5199f, 8.47f, 8.5499f)
						curveTo(7.8775f, 8.5724f, 7.9075f, 8.7824f, 7.9075f, 8.7824f)
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
						moveTo(11.17f, 13.4848f)
						curveTo(11.17f, 13.4848f, 9.1675f, 13.3723f, 8.545f, 11.8873f)
						curveTo(8.5075f, 11.7973f, 8.485f, 11.6923f, 8.4775f, 11.5948f)
						curveTo(8.47f, 11.3923f, 8.6425f, 11.1748f, 9.01f, 11.3548f)
						curveTo(11.2525f, 12.4573f, 12.49f, 11.8423f, 13.4125f, 11.3998f)
						curveTo(13.7725f, 11.2273f, 14.11f, 11.5873f, 14.02f, 11.9173f)
						curveTo(13.99f, 12.0148f, 13.975f, 12.1123f, 13.93f, 12.2023f)
						curveTo(13.1725f, 13.6048f, 11.17f, 13.4848f, 11.17f, 13.4848f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(8.47886f, 11.8347f),
		end = Offset(14.0349f, 11.8347f),
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
						moveTo(14.0275f, 11.8723f)
						curveTo(14.0875f, 11.5498f, 13.7575f, 11.2273f, 13.4125f, 11.3923f)
						curveTo(12.49f, 11.8273f, 11.2525f, 12.4498f, 9.01f, 11.3473f)
						curveTo(8.6425f, 11.1673f, 8.47f, 11.3923f, 8.4775f, 11.5873f)
						curveTo(8.4775f, 11.5948f, 8.4775f, 11.6098f, 8.4775f, 11.6173f)
						curveTo(8.9725f, 11.7598f, 10.015f, 12.3748f, 11.1925f, 12.3748f)
						curveTo(12.5725f, 12.3823f, 13.45f, 11.7148f, 14.0275f, 11.8723f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(21.4739f, 9.90727f),
		end = Offset(21.6288f, 8.27671f),
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
						moveTo(24.0925f, 8.78986f)
						curveTo(24.0325f, 9.2699f, 23.4775f, 9.5023f, 22.5925f, 9.3824f)
						curveTo(21.835f, 9.2849f, 20.2375f, 8.6623f, 19.285f, 7.0423f)
						curveTo(19.1125f, 6.7424f, 19.45f, 6.6374f, 19.6375f, 6.8399f)
						curveTo(20.26f, 7.5224f, 22.045f, 8.5274f, 23.53f, 8.5573f)
						curveTo(24.1225f, 8.5799f, 24.0925f, 8.7899f, 24.0925f, 8.7899f)
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
						moveTo(20.8375f, 13.4848f)
						curveTo(20.8375f, 13.4848f, 22.84f, 13.3723f, 23.4625f, 11.8873f)
						curveTo(23.5f, 11.7973f, 23.5225f, 11.6923f, 23.53f, 11.5948f)
						curveTo(23.5375f, 11.3923f, 23.365f, 11.1748f, 22.9975f, 11.3548f)
						curveTo(20.755f, 12.4573f, 19.5175f, 11.8423f, 18.595f, 11.3998f)
						curveTo(18.235f, 11.2273f, 17.8975f, 11.5873f, 17.9875f, 11.9173f)
						curveTo(18.0175f, 12.0148f, 18.0325f, 12.1123f, 18.0775f, 12.2023f)
						curveTo(18.835f, 13.6048f, 20.8375f, 13.4848f, 20.8375f, 13.4848f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(23.5258f, 11.8388f),
		end = Offset(17.9698f, 11.8388f),
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
						moveTo(17.9801f, 11.8798f)
						curveTo(17.9201f, 11.5573f, 18.2501f, 11.2348f, 18.5951f, 11.3998f)
						curveTo(19.5176f, 11.8348f, 20.7551f, 12.4573f, 22.9976f, 11.3548f)
						curveTo(23.3651f, 11.1748f, 23.5376f, 11.3998f, 23.5301f, 11.5948f)
						curveTo(23.5301f, 11.6023f, 23.5301f, 11.6173f, 23.5301f, 11.6248f)
						curveTo(23.0351f, 11.7673f, 21.9926f, 12.3823f, 20.8151f, 12.3823f)
						curveTo(19.4351f, 12.3898f, 18.5576f, 11.7223f, 17.9801f, 11.8798f)
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
						moveTo(16.0001f, 20.0624f)
						curveTo(17.8516f, 20.0624f, 19.3526f, 19.7031f, 19.3526f, 19.2599f)
						curveTo(19.3526f, 18.8167f, 17.8516f, 18.4574f, 16.0001f, 18.4574f)
						curveTo(14.1486f, 18.4574f, 12.6476f, 18.8167f, 12.6476f, 19.2599f)
						curveTo(12.6476f, 19.7031f, 14.1486f, 20.0624f, 16.0001f, 20.0624f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(16.0001f, 18.5034f),
		end = Offset(16.0001f, 21.5543f),
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
						moveTo(16.0001f, 18.8024f)
						curveTo(18.0626f, 18.8024f, 18.9776f, 18.9524f, 19.3526f, 19.2824f)
						curveTo(19.3526f, 19.2749f, 19.3526f, 19.2674f, 19.3526f, 19.2599f)
						curveTo(19.3526f, 18.8174f, 18.8501f, 18.4574f, 16.0001f, 18.4574f)
						curveTo(13.1501f, 18.4574f, 12.6476f, 18.8174f, 12.6476f, 19.2599f)
						curveTo(12.6476f, 19.2674f, 12.6476f, 19.2749f, 12.6476f, 19.2824f)
						curveTo(13.0226f, 18.9524f, 13.9376f, 18.8024f, 16.0001f, 18.8024f)
						close()
}
}
}.build()
return _Bad!!
		}

