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

private var _Great: ImageVector? = null

public val Great: ImageVector
		get() {
			if (_Great != null) {
				return _Great!!
			}
_Great = ImageVector.Builder(
                name = "Great",
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
				0f to Color(0xFFAFE8FF),
				0.0467788f to Color(0xFF8FDEFF),
				0.1178f to Color(0xFF64D1FE),
				0.1869f to Color(0xFF43C7FE),
				0.2524f to Color(0xFF2BC0FD),
				0.313f to Color(0xFF1CBCFD),
				0.3638f to Color(0xFF17BAFD),
				1f to Color(0xFF008DE5),
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
						moveTo(16f, 5.67622f)
						curveTo(11.6466f, 5.6762f, 4.3349f, 5.3581f, 4.3349f, 3.226f)
						horizontalLineTo(5.90888f)
						curveTo(5.9089f, 3.0585f, 5.8307f, 2.9469f, 5.8028f, 2.919f)
						curveTo(6.2493f, 3.332f, 9.7042f, 4.0967f, 16f, 4.0967f)
						curveTo(22.2959f, 4.0967f, 25.7452f, 3.3264f, 26.1973f, 2.919f)
						curveTo(26.1693f, 2.9469f, 26.0912f, 3.053f, 26.0912f, 3.226f)
						horizontalLineTo(27.6652f)
						curveTo(27.6652f, 5.3581f, 20.3535f, 5.6762f, 16f, 5.6762f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFAFE8FF),
				0.0467788f to Color(0xFF8FDEFF),
				0.1178f to Color(0xFF64D1FE),
				0.1869f to Color(0xFF43C7FE),
				0.2524f to Color(0xFF2BC0FD),
				0.313f to Color(0xFF1CBCFD),
				0.3638f to Color(0xFF17BAFD),
				1f to Color(0xFF3640FF),
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
						moveTo(16f, 5.67622f)
						curveTo(11.6466f, 5.6762f, 4.3349f, 5.3581f, 4.3349f, 3.226f)
						horizontalLineTo(5.90888f)
						curveTo(5.9089f, 3.0585f, 5.8307f, 2.9469f, 5.8028f, 2.919f)
						curveTo(6.2493f, 3.332f, 9.7042f, 4.0967f, 16f, 4.0967f)
						curveTo(22.2959f, 4.0967f, 25.7452f, 3.3264f, 26.1973f, 2.919f)
						curveTo(26.1693f, 2.9469f, 26.0912f, 3.053f, 26.0912f, 3.226f)
						horizontalLineTo(27.6652f)
						curveTo(27.6652f, 5.3581f, 20.3535f, 5.6762f, 16f, 5.6762f)
						close()
}
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
		start = Offset(10.6089f, 7.26962f),
		end = Offset(10.2679f, 6.05194f),
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
						moveTo(12.8298f, 5.81025f)
						curveTo(12.7014f, 5.347f, 12.121f, 5.1963f, 11.2559f, 5.4363f)
						curveTo(10.5247f, 5.6428f, 9.0289f, 6.4912f, 8.3201f, 8.227f)
						curveTo(8.1917f, 8.5451f, 8.5433f, 8.6009f, 8.694f, 8.3777f)
						curveTo(9.2131f, 7.6075f, 10.8261f, 6.3572f, 12.294f, 6.1116f)
						curveTo(12.8912f, 6.0168f, 12.8298f, 5.8102f, 12.8298f, 5.8102f)
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
						moveTo(12.7516f, 9.54413f)
						curveTo(11.92f, 9.0306f, 10.8484f, 9.0864f, 10.067f, 9.6725f)
						curveTo(9.6707f, 9.9739f, 9.28f, 10.4316f, 9.0512f, 11.146f)
						curveTo(9.0121f, 11.2632f, 8.9842f, 11.3916f, 8.9786f, 11.5199f)
						curveTo(8.9619f, 11.7767f, 9.1405f, 12.0055f, 9.4307f, 11.7376f)
						curveTo(11.6465f, 9.6446f, 13.1982f, 11.799f, 13.1982f, 11.799f)
						curveTo(13.4996f, 12.0167f, 13.8065f, 11.5646f, 13.7451f, 11.146f)
						curveTo(13.7284f, 11.0232f, 13.7116f, 10.8948f, 13.6837f, 10.7832f)
						curveTo(13.5051f, 10.1692f, 13.1423f, 9.7841f, 12.7516f, 9.5441f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(11.5683f, 8.27101f),
		end = Offset(11.4214f, 10.286f),
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
						moveTo(13.6781f, 10.7776f)
						curveTo(13.6f, 10.5265f, 13.4939f, 10.3088f, 13.3767f, 10.1302f)
						curveTo(13.1981f, 9.8734f, 12.9804f, 9.6837f, 12.7516f, 9.5441f)
						curveTo(11.92f, 9.0306f, 10.8483f, 9.0864f, 10.0669f, 9.6725f)
						curveTo(9.6707f, 9.9739f, 9.28f, 10.4316f, 9.0511f, 11.146f)
						curveTo(9.0288f, 11.213f, 9.0121f, 11.2855f, 9.0009f, 11.3581f)
						verticalLineTo(11.3637f)
						curveTo(9.9776f, 9.8399f, 11.3842f, 9.7339f, 11.3842f, 9.7339f)
						curveTo(11.3842f, 9.7339f, 12.7795f, 9.6167f, 13.7228f, 10.9785f)
						curveTo(13.7116f, 10.9116f, 13.6949f, 10.8446f, 13.6781f, 10.7776f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(21.4045f, 7.272f),
		end = Offset(21.7456f, 6.05432f),
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
						moveTo(19.1702f, 5.81025f)
						curveTo(19.2986f, 5.347f, 19.879f, 5.1963f, 20.7442f, 5.4363f)
						curveTo(21.4753f, 5.6428f, 22.9711f, 6.4912f, 23.68f, 8.227f)
						curveTo(23.8084f, 8.5451f, 23.4567f, 8.6009f, 23.306f, 8.3777f)
						curveTo(22.787f, 7.6075f, 21.1739f, 6.3572f, 19.706f, 6.1116f)
						curveTo(19.1088f, 6.0168f, 19.1702f, 5.8102f, 19.1702f, 5.8102f)
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
						moveTo(19.2484f, 9.54413f)
						curveTo(20.08f, 9.0306f, 21.1516f, 9.0864f, 21.933f, 9.6725f)
						curveTo(22.3293f, 9.9739f, 22.72f, 10.4316f, 22.9488f, 11.146f)
						curveTo(22.9879f, 11.2632f, 23.0158f, 11.3916f, 23.0214f, 11.5199f)
						curveTo(23.0381f, 11.7767f, 22.8595f, 12.0055f, 22.5693f, 11.7376f)
						curveTo(20.3535f, 9.6446f, 18.8019f, 11.799f, 18.8019f, 11.799f)
						curveTo(18.5005f, 12.0167f, 18.1935f, 11.5646f, 18.2549f, 11.146f)
						curveTo(18.2716f, 11.0232f, 18.2884f, 10.8948f, 18.3163f, 10.7832f)
						curveTo(18.4949f, 10.1692f, 18.8577f, 9.7841f, 19.2484f, 9.5441f)
						close()
}
					path(
    					fill = Brush.linearGradient(
		start = Offset(20.4193f, 8.27169f),
		end = Offset(20.5663f, 10.2867f),
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
						moveTo(18.3218f, 10.7776f)
						curveTo(18.4f, 10.5265f, 18.506f, 10.3088f, 18.6232f, 10.1302f)
						curveTo(18.8018f, 9.8734f, 19.0195f, 9.6837f, 19.2483f, 9.5441f)
						curveTo(20.08f, 9.0306f, 21.1516f, 9.0864f, 21.933f, 9.6725f)
						curveTo(22.3293f, 9.9739f, 22.72f, 10.4316f, 22.9488f, 11.146f)
						curveTo(22.9711f, 11.213f, 22.9879f, 11.2855f, 22.999f, 11.3581f)
						verticalLineTo(11.3637f)
						curveTo(22.0223f, 9.8399f, 20.6158f, 9.7339f, 20.6158f, 9.7339f)
						curveTo(20.6158f, 9.7339f, 19.2204f, 9.6167f, 18.2772f, 10.9785f)
						curveTo(18.2883f, 10.9116f, 18.3051f, 10.8446f, 18.3218f, 10.7776f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFF7A4400),
				0.6008f to Color(0xFF894D00),
				0.995f to Color(0xFF965500),
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
						moveTo(16f, 3.64463f)
						curveTo(21.4195f, 3.6446f, 25.7395f, 5.6372f, 26.56f, 6.2902f)
						curveTo(25.5944f, 4.5042f, 24.1879f, 2.9972f, 22.4856f, 1.9032f)
						curveTo(20.3814f, 1.4623f, 17.8865f, 1.3563f, 16f, 1.3563f)
						curveTo(14.1135f, 1.3563f, 11.613f, 1.4623f, 9.5144f, 1.9032f)
						curveTo(7.8177f, 2.9972f, 6.4112f, 4.5042f, 5.44f, 6.2902f)
						curveTo(6.2604f, 5.6372f, 10.5805f, 3.6446f, 16f, 3.6446f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0.0049844f to Color(0xFF965500),
				0.3992f to Color(0xFF894D00),
				1f to Color(0xFF7A4400),
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
						moveTo(5.23351f, 6.69765f)
						curveTo(5.2614f, 6.6474f, 5.2893f, 6.5972f, 5.3172f, 6.5414f)
						curveTo(5.2893f, 6.5916f, 5.2614f, 6.6418f, 5.2335f, 6.6977f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0.0049844f to Color(0xFF965500),
				0.3992f to Color(0xFF894D00),
				1f to Color(0xFF7A4400),
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
						moveTo(26.6828f, 6.53577f)
						curveTo(26.7051f, 6.5916f, 26.733f, 6.6418f, 26.7665f, 6.692f)
						curveTo(26.7386f, 6.6418f, 26.7107f, 6.5916f, 26.6828f, 6.5358f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFAFE8FF),
				0.0165504f to Color(0xFFABE7FF),
				0.1448f to Color(0xFF93DFFE),
				0.2639f to Color(0xFF85DBFD),
				0.3638f to Color(0xFF80D9FD),
				1f to Color(0xFF008DE5),
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
						moveTo(26.1303f, 3.48278f)
						curveTo(25.4773f, 3.0642f, 22.0559f, 2.3498f, 16f, 2.3498f)
						curveTo(9.9442f, 2.3498f, 6.5173f, 3.0642f, 5.8698f, 3.4828f)
						curveTo(5.7638f, 3.7953f, 4.3349f, 3.6614f, 4.3349f, 3.226f)
						curveTo(4.3349f, 1.0995f, 11.6466f, 0.7814f, 16f, 0.7814f)
						curveTo(20.3535f, 0.7814f, 27.6652f, 1.0995f, 27.6652f, 3.2316f)
						curveTo(27.6652f, 3.6614f, 26.2363f, 3.7953f, 26.1303f, 3.4828f)
						close()
}
					path(
    					fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.0236692f to Color(0xFFFCFEFF),
				0.2964f to Color(0xFFDAF4FF),
				0.5569f to Color(0xFFC2EEFF),
				0.7977f to Color(0xFFB4E9FF),
				1f to Color(0xFFAFE8FF),
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
						moveTo(26.1303f, 3.48278f)
						curveTo(25.4773f, 3.0642f, 22.0559f, 2.3498f, 16f, 2.3498f)
						curveTo(9.9442f, 2.3498f, 6.5173f, 3.0642f, 5.8698f, 3.4828f)
						curveTo(5.1219f, 4.013f, 4.3349f, 3.6614f, 4.3349f, 3.226f)
						curveTo(4.3349f, 1.0995f, 11.6466f, 0.7814f, 16f, 0.7814f)
						curveTo(20.3535f, 0.7814f, 27.6652f, 1.0995f, 27.6652f, 3.2316f)
						curveTo(27.6652f, 3.6614f, 26.8782f, 4.013f, 26.1303f, 3.4828f)
						close()
}
}
}.build()
return _Great!!
		}

