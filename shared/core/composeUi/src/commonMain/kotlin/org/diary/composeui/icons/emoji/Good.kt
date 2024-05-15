package org.diary.composeui.icons.emoji

import androidx.compose.runtime.Composable
import androidx.compose.foundation.Image
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


private var _Good: ImageVector? = null

public val Good: ImageVector
		get() {
			if (_Good != null) {
				return _Good!!
			}
_Good = ImageVector.Builder(
                name = "Good",
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
				0f to Color(0xFFFFDF30),
				1f to Color(0xFFFFB82E),
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
				0f to Color(0xFFFFE95F),
				1f to Color(0xFFFFBB47),
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
						moveTo(11.2335f, 11.8995f)
						curveTo(11.2335f, 11.8995f, 9.3358f, 11.8995f, 8.6716f, 10.532f)
						curveTo(8.6326f, 10.4483f, 8.6046f, 10.3534f, 8.5935f, 10.2585f)
						curveTo(8.5768f, 10.0688f, 8.7274f, 9.8511f, 9.0846f, 10.0018f)
						curveTo(11.2614f, 10.9283f, 12.3944f, 10.2753f, 13.2428f, 9.8176f)
						curveTo(13.5721f, 9.639f, 13.9126f, 9.9571f, 13.84f, 10.2753f)
						curveTo(13.8177f, 10.3702f, 13.8065f, 10.465f, 13.7674f, 10.5488f)
						curveTo(13.1312f, 11.9106f, 11.2335f, 11.8995f, 11.2335f, 11.8995f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(10.2801f, 7.20202f),
		end = Offset(10.2442f, 5.93806f),
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
						moveTo(12.7964f, 6.32932f)
						curveTo(12.7852f, 5.8493f, 12.255f, 5.5647f, 11.3619f, 5.587f)
						curveTo(10.6029f, 5.6093f, 8.9452f, 6.0726f, 7.8401f, 7.5851f)
						curveTo(7.6336f, 7.8642f, 7.9684f, 8.0037f, 8.1694f, 7.8195f)
						curveTo(8.8559f, 7.2f, 10.7257f, 6.374f, 12.2047f, 6.4968f)
						curveTo(12.8019f, 6.5414f, 12.7964f, 6.3293f, 12.7964f, 6.3293f)
						close()
}
					path(
    					fill = SolidColor(Color(0xFF643800)),
    					fillAlpha = 1.0f,
    					stroke = null,
    					strokeAlpha = 1.0f,
    					strokeLineWidth = 1.0f,
    					strokeLineCap = StrokeCap.Butt,
    					strokeLineJoin = StrokeJoin.Miter,
    					strokeLineMiter = 1.0f,
    					pathFillType = PathFillType.NonZero
					) {
						moveTo(21.3024f, 15.5108f)
						curveTo(21.2019f, 15.494f, 21.1014f, 15.5219f, 21.0289f, 15.5945f)
						curveTo(19.7396f, 16.8056f, 17.7526f, 17.4531f, 16.2568f, 17.4531f)
						horizontalLineTo(16f)
						horizontalLineTo(15.7433f)
						curveTo(14.2475f, 17.4531f, 12.2549f, 16.8056f, 10.9712f, 15.5945f)
						curveTo(10.8986f, 15.5275f, 10.7982f, 15.494f, 10.6977f, 15.5108f)
						curveTo(10.5972f, 15.5275f, 10.5414f, 15.6447f, 10.5917f, 15.7396f)
						curveTo(11.6912f, 17.6428f, 13.7284f, 18.8261f, 15.9386f, 18.8261f)
						horizontalLineTo(16.0056f)
						horizontalLineTo(16.0726f)
						curveTo(18.2828f, 18.8261f, 20.32f, 17.6484f, 21.4196f, 15.7396f)
						curveTo(21.4642f, 15.6447f, 21.4084f, 15.5331f, 21.3024f, 15.5108f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(16f, 16.3583f),
		end = Offset(16f, 18.1497f),
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
						moveTo(21.3024f, 15.5108f)
						curveTo(21.2019f, 15.494f, 21.1014f, 15.5219f, 21.0289f, 15.5945f)
						curveTo(19.7396f, 16.8056f, 17.7526f, 17.4531f, 16.2568f, 17.4531f)
						horizontalLineTo(16f)
						horizontalLineTo(15.7433f)
						curveTo(14.2475f, 17.4531f, 12.2549f, 16.8056f, 10.9712f, 15.5945f)
						curveTo(10.8986f, 15.5275f, 10.7982f, 15.494f, 10.6977f, 15.5108f)
						curveTo(10.5972f, 15.5275f, 10.5414f, 15.6447f, 10.5917f, 15.7396f)
						curveTo(10.6028f, 15.7563f, 10.614f, 15.7787f, 10.6251f, 15.7954f)
						curveTo(10.7312f, 15.734f, 10.8372f, 15.6782f, 10.9544f, 15.8066f)
						curveTo(12.1768f, 17.1796f, 13.9907f, 18.0001f, 15.933f, 18.0001f)
						horizontalLineTo(16f)
						horizontalLineTo(16.067f)
						curveTo(18.0205f, 18.0001f, 19.8456f, 17.1684f, 21.0679f, 15.7787f)
						curveTo(21.1796f, 15.6503f, 21.2856f, 15.7117f, 21.3861f, 15.7787f)
						curveTo(21.3917f, 15.7675f, 21.4028f, 15.7508f, 21.4084f, 15.7396f)
						curveTo(21.4642f, 15.6447f, 21.4084f, 15.5331f, 21.3024f, 15.5108f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(8.60434f, 10.3392f),
		end = Offset(13.8518f, 10.3392f),
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
						moveTo(13.2484f, 9.81762f)
						curveTo(12.4f, 10.2809f, 11.267f, 10.9339f, 9.0902f, 10.0018f)
						curveTo(8.7944f, 9.8734f, 8.6437f, 10.0074f, 8.6102f, 10.1637f)
						curveTo(8.906f, 9.9739f, 9.3749f, 10.9116f, 11.2f, 10.9116f)
						curveTo(13.3098f, 10.9116f, 13.6279f, 9.7507f, 13.8567f, 10.1693f)
						curveTo(13.84f, 9.8902f, 13.5386f, 9.6558f, 13.2484f, 9.8176f)
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
						moveTo(20.7666f, 11.8995f)
						curveTo(20.7666f, 11.8995f, 22.6642f, 11.8995f, 23.3284f, 10.532f)
						curveTo(23.3675f, 10.4483f, 23.3954f, 10.3534f, 23.4066f, 10.2585f)
						curveTo(23.4233f, 10.0688f, 23.2726f, 9.8511f, 22.9154f, 10.0018f)
						curveTo(20.7387f, 10.9283f, 19.6056f, 10.2753f, 18.7573f, 9.8176f)
						curveTo(18.428f, 9.639f, 18.0875f, 9.9571f, 18.16f, 10.2753f)
						curveTo(18.1824f, 10.3702f, 18.1935f, 10.465f, 18.2326f, 10.5488f)
						curveTo(18.8689f, 11.9106f, 20.7666f, 11.8995f, 20.7666f, 11.8995f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(21.7167f, 7.20206f),
		end = Offset(21.7526f, 5.9381f),
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
						moveTo(19.2037f, 6.32932f)
						curveTo(19.2149f, 5.8493f, 19.7451f, 5.5647f, 20.6381f, 5.587f)
						curveTo(21.3972f, 5.6093f, 23.0549f, 6.0726f, 24.16f, 7.5851f)
						curveTo(24.3665f, 7.8642f, 24.0316f, 8.0037f, 23.8307f, 7.8195f)
						curveTo(23.1442f, 7.2f, 21.2744f, 6.374f, 19.7953f, 6.4968f)
						curveTo(19.1981f, 6.5414f, 19.2037f, 6.3293f, 19.2037f, 6.3293f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(23.3956f, 10.3392f),
		end = Offset(18.1482f, 10.3392f),
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
						moveTo(18.7516f, 9.81762f)
						curveTo(19.6f, 10.2809f, 20.733f, 10.9339f, 22.9098f, 10.0018f)
						curveTo(23.2056f, 9.8734f, 23.3563f, 10.0074f, 23.3898f, 10.1637f)
						curveTo(23.094f, 9.9739f, 22.6251f, 10.9116f, 20.8f, 10.9116f)
						curveTo(18.6902f, 10.9116f, 18.3721f, 9.7507f, 18.1432f, 10.1693f)
						curveTo(18.16f, 9.8902f, 18.4614f, 9.6558f, 18.7516f, 9.8176f)
						close()
}
}
}.build()
return _Good!!
		}

