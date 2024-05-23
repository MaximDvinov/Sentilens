package org.diary.composeui.icons.emoji

import androidx.compose.runtime.Composable
import androidx.compose.foundation.Image
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp


private var _Unknown: ImageVector? = null

public val Unknown: ImageVector
		get() {
			if (_Unknown != null) {
				return _Unknown!!
			}
_Unknown = ImageVector.Builder(
                name = "Unknown",
                defaultWidth = 32.dp,
                defaultHeight = 32.dp,
                viewportWidth = 32f,
                viewportHeight = 32f
            ).apply {
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(7.21539f, 13.5147f)
					curveTo(9.0909f, 12.0956f, 9.7564f, 9.7671f, 8.7017f, 8.3138f)
					curveTo(7.647f, 6.8606f, 5.2716f, 6.8329f, 3.396f, 8.2521f)
					curveTo(1.5204f, 9.6712f, 0.855f, 11.9998f, 1.9097f, 13.453f)
					curveTo(2.9644f, 14.9063f, 5.3398f, 14.9339f, 7.2154f, 13.5147f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(31.6261f, 14.3398f)
					curveTo(31.8326f, 12.3956f, 30.3973f, 10.642f, 28.4202f, 10.4231f)
					curveTo(26.4431f, 10.2041f, 24.6729f, 11.6027f, 24.4664f, 13.5469f)
					curveTo(24.2599f, 15.4911f, 25.6952f, 17.2447f, 27.6723f, 17.4637f)
					curveTo(29.6494f, 17.6826f, 31.4196f, 16.284f, 31.6261f, 14.3398f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(26.3096f, 4.92437f)
					curveTo(26.5088f, 3.0485f, 24.8112f, 1.3219f, 22.5178f, 1.0679f)
					curveTo(20.2244f, 0.814f, 18.2036f, 2.1288f, 18.0044f, 4.0046f)
					curveTo(17.8051f, 5.8805f, 19.5028f, 7.6071f, 21.7962f, 7.8611f)
					curveTo(24.0896f, 8.115f, 26.1103f, 6.8002f, 26.3096f, 4.9244f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFEFEFF),
				0.32f to Color(0xFFFAFDFF),
				0.43f to Color(0xFFF5FBFF),
				0.54f to Color(0xFFEEF9FF),
				0.64f to Color(0xFFE4F6FF),
				0.74f to Color(0xFFD8F2FF),
				0.83f to Color(0xFFCAEDFF),
				0.92f to Color(0xFFBAE8FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(28.1957f, 5.99194f)
					curveTo(27.9907f, 5.9354f, 27.7747f, 5.8958f, 27.5531f, 5.8732f)
					curveTo(25.5754f, 5.6525f, 23.8304f, 6.7895f, 23.6586f, 8.4072f)
					curveTo(23.5922f, 9.0464f, 23.7805f, 9.663f, 24.1517f, 10.1947f)
					lineTo(25.9576f, 10.3135f)
					curveTo(25.3206f, 8.7466f, 25.5754f, 6.0994f, 28.1957f, 5.9976f)
					verticalLineTo(5.99194f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFDA30),
				1f to Color(0xFFFFB32E),
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
					moveTo(16.2409f, 31.6269f)
					curveTo(24.3395f, 31.6269f, 30.9046f, 24.9235f, 30.9046f, 16.6543f)
					curveTo(30.9046f, 8.3852f, 24.3395f, 1.6817f, 16.2409f, 1.6817f)
					curveTo(8.1424f, 1.6817f, 1.5773f, 8.3852f, 1.5773f, 16.6543f)
					curveTo(1.5773f, 24.9235f, 8.1424f, 31.6269f, 16.2409f, 31.6269f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFE45F),
				1f to Color(0xFFFFB647),
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
					moveTo(16.2409f, 31.6269f)
					curveTo(24.3395f, 31.6269f, 30.9046f, 24.9235f, 30.9046f, 16.6543f)
					curveTo(30.9046f, 8.3852f, 24.3395f, 1.6817f, 16.2409f, 1.6817f)
					curveTo(8.1424f, 1.6817f, 1.5773f, 8.3852f, 1.5773f, 16.6543f)
					curveTo(1.5773f, 24.9235f, 8.1424f, 31.6269f, 16.2409f, 31.6269f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFF7A4400),
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
					moveTo(11.4546f, 17.2879f)
					curveTo(12.2348f, 17.2879f, 12.8673f, 16.3128f, 12.8673f, 15.1101f)
					curveTo(12.8673f, 13.9074f, 12.2348f, 12.9324f, 11.4546f, 12.9324f)
					curveTo(10.6745f, 12.9324f, 10.042f, 13.9074f, 10.042f, 15.1101f)
					curveTo(10.042f, 16.3128f, 10.6745f, 17.2879f, 11.4546f, 17.2879f)
					close()
}
				path(
    				fill = Brush.linearGradient(
		start = Offset(11.4546f, 12.9211f),
		end = Offset(11.4546f, 14.9517f),
		colorStops = arrayOf(
				0f to Color(0xFF3C2200),
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
					moveTo(11.4546f, 13.6677f)
					curveTo(12.064f, 13.6677f, 12.5903f, 14.2051f, 12.8673f, 15.0026f)
					curveTo(12.8506f, 13.8261f, 12.2247f, 12.8758f, 11.4546f, 12.8758f)
					curveTo(10.6846f, 12.8758f, 10.0586f, 13.8204f, 10.042f, 15.0026f)
					curveTo(10.319f, 14.2051f, 10.8453f, 13.6677f, 11.4546f, 13.6677f)
					verticalLineTo(13.6677f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFF7A4400),
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
					moveTo(21.0328f, 17.2879f)
					curveTo(21.813f, 17.2879f, 22.4454f, 16.3128f, 22.4454f, 15.1101f)
					curveTo(22.4454f, 13.9074f, 21.813f, 12.9324f, 21.0328f, 12.9324f)
					curveTo(20.2526f, 12.9324f, 19.6202f, 13.9074f, 19.6202f, 15.1101f)
					curveTo(19.6202f, 16.3128f, 20.2526f, 17.2879f, 21.0328f, 17.2879f)
					close()
}
				path(
    				fill = Brush.linearGradient(
		start = Offset(21.0328f, 12.972f),
		end = Offset(21.0328f, 15.0026f),
		colorStops = arrayOf(
				0f to Color(0xFF3C2200),
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
					moveTo(21.0328f, 13.7243f)
					curveTo(20.4234f, 13.7243f, 19.8972f, 14.2617f, 19.6202f, 15.0592f)
					curveTo(19.6368f, 13.8827f, 20.2628f, 12.9324f, 21.0328f, 12.9324f)
					curveTo(21.8028f, 12.9324f, 22.4288f, 13.877f, 22.4454f, 15.0592f)
					curveTo(22.1685f, 14.2617f, 21.6422f, 13.7243f, 21.0328f, 13.7243f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(9.06398f, 29.1969f)
					curveTo(10.7753f, 28.1565f, 11.1311f, 25.544f, 9.8585f, 23.3618f)
					curveTo(8.586f, 21.1795f, 6.1671f, 20.2539f, 4.4558f, 21.2943f)
					curveTo(2.7444f, 22.3347f, 2.3886f, 24.9472f, 3.6612f, 27.1295f)
					curveTo(4.9337f, 29.3117f, 7.3526f, 30.2374f, 9.064f, 29.1969f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(8.86916f, 28.7568f)
					curveTo(6.5148f, 28.9152f, 4.105f, 27.4671f, 2.997f, 25.3855f)
					curveTo(3.335f, 27.0599f, 4.4872f, 28.621f, 6.0328f, 29.2885f)
					curveTo(7.462f, 29.905f, 8.8581f, 29.5883f, 9.7278f, 28.6154f)
					curveTo(9.4564f, 28.6833f, 9.1738f, 28.7342f, 8.8692f, 28.7511f)
					verticalLineTo(28.7568f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(24.6021f, 29.383f)
					curveTo(25.3547f, 27.9376f, 24.5305f, 25.9872f, 22.7611f, 25.0265f)
					curveTo(20.9917f, 24.0659f, 18.9471f, 24.4588f, 18.1945f, 25.9042f)
					curveTo(17.4419f, 27.3495f, 18.2661f, 29.3f, 20.0355f, 30.2606f)
					curveTo(21.8049f, 31.2212f, 23.8494f, 30.8283f, 24.6021f, 29.383f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFEFEFF),
				0.32f to Color(0xFFFAFDFF),
				0.43f to Color(0xFFF5FBFF),
				0.54f to Color(0xFFEEF9FF),
				0.64f to Color(0xFFE4F6FF),
				0.74f to Color(0xFFD8F2FF),
				0.83f to Color(0xFFCAEDFF),
				0.92f to Color(0xFFBAE8FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(22.4747f, 30.7535f)
					curveTo(22.2753f, 30.7761f, 22.0703f, 30.7874f, 21.8598f, 30.7761f)
					curveTo(19.9541f, 30.6913f, 18.2036f, 29.215f, 17.9488f, 27.4784f)
					curveTo(17.849f, 26.794f, 17.9986f, 26.1718f, 18.331f, 25.674f)
					lineTo(19.7603f, 26.596f)
					curveTo(19.2284f, 28.1459f, 19.932f, 30.2218f, 22.4747f, 30.7535f)
					verticalLineTo(30.7535f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(14.431f, 27.6538f)
					curveTo(16.6461f, 27.6538f, 18.4418f, 26.1849f, 18.4418f, 24.373f)
					curveTo(18.4418f, 22.5611f, 16.6461f, 21.0923f, 14.431f, 21.0923f)
					curveTo(12.2159f, 21.0923f, 10.4203f, 22.5611f, 10.4203f, 24.373f)
					curveTo(10.4203f, 26.1849f, 12.2159f, 27.6538f, 14.431f, 27.6538f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(11.5093f, 30.6487f)
					curveTo(13.5124f, 30.589f, 15.0984f, 29.2142f, 15.0517f, 27.578f)
					curveTo(15.0049f, 25.9417f, 13.3432f, 24.6636f, 11.3401f, 24.7232f)
					curveTo(9.337f, 24.7828f, 7.7509f, 26.1576f, 7.7977f, 27.7939f)
					curveTo(7.8444f, 29.4302f, 9.5061f, 30.7083f, 11.5093f, 30.6487f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(25.7321f, 28.1912f)
					curveTo(27.7361f, 28.1912f, 29.3606f, 26.8641f, 29.3606f, 25.2272f)
					curveTo(29.3606f, 23.5902f, 27.7361f, 22.2632f, 25.7321f, 22.2632f)
					curveTo(23.7281f, 22.2632f, 22.1036f, 23.5902f, 22.1036f, 25.2272f)
					curveTo(22.1036f, 26.8641f, 23.7281f, 28.1912f, 25.7321f, 28.1912f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFEFEFF),
				0.32f to Color(0xFFFAFDFF),
				0.43f to Color(0xFFF5FBFF),
				0.54f to Color(0xFFEEF9FF),
				0.64f to Color(0xFFE4F6FF),
				0.74f to Color(0xFFD8F2FF),
				0.83f to Color(0xFFCAEDFF),
				0.92f to Color(0xFFBAE8FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(25.0784f, 28.1459f)
					curveTo(25.2889f, 28.1798f, 25.5105f, 28.1968f, 25.7321f, 28.1968f)
					curveTo(27.7319f, 28.1968f, 29.3606f, 26.8675f, 29.3606f, 25.2328f)
					curveTo(29.3606f, 24.588f, 29.1058f, 23.9884f, 28.6792f, 23.502f)
					lineTo(26.8622f, 23.5868f)
					curveTo(27.6655f, 25.0801f, 27.6931f, 27.7613f, 25.0839f, 28.1515f)
					lineTo(25.0784f, 28.1459f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(20.4886f, 28.574f)
					curveTo(20.6166f, 26.8827f, 19.0562f, 25.3803f, 17.0032f, 25.2183f)
					curveTo(14.9503f, 25.0562f, 13.1823f, 26.2959f, 13.0543f, 27.9872f)
					curveTo(12.9262f, 29.6785f, 14.4867f, 31.1809f, 16.5396f, 31.3429f)
					curveTo(18.5925f, 31.5049f, 20.3605f, 30.2652f, 20.4886f, 28.574f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(19.1095f, 8.53248f)
					curveTo(19.1428f, 6.8803f, 17.4886f, 5.5055f, 15.4147f, 5.4619f)
					curveTo(13.3408f, 5.4182f, 11.6326f, 6.7223f, 11.5992f, 8.3745f)
					curveTo(11.5659f, 10.0268f, 13.2201f, 11.4015f, 15.294f, 11.4451f)
					curveTo(17.3679f, 11.4887f, 19.0762f, 10.1847f, 19.1095f, 8.5325f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(9.32848f, 9.07403f)
					curveTo(9.3622f, 7.4031f, 7.6909f, 6.0128f, 5.5956f, 5.9687f)
					curveTo(3.5003f, 5.9246f, 1.7744f, 7.2435f, 1.7407f, 8.9144f)
					curveTo(1.7069f, 10.5854f, 3.3782f, 11.9757f, 5.4735f, 12.0198f)
					curveTo(7.5689f, 12.0639f, 9.2948f, 10.745f, 9.3285f, 9.074f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFF80D4F8),
				0.19f to Color(0xFF80D4F8),
				0.32f to Color(0xFF82D4F8),
				0.44f to Color(0xFF84D5F8),
				0.55f to Color(0xFF88D7F9),
				0.65f to Color(0xFF8DD8FA),
				0.75f to Color(0xFF93DAFB),
				0.84f to Color(0xFF9ADDFC),
				0.93f to Color(0xFFA2E0FD),
				1f to Color(0xFFAAE3FF),
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
					moveTo(5.07839f, 7.93776f)
					curveTo(3.8763f, 7.8529f, 2.1368f, 9.3349f, 2.8625f, 11.1167f)
					curveTo(1.9207f, 10.3644f, 1.4997f, 9.2387f, 1.882f, 8.1471f)
					curveTo(2.1922f, 7.2646f, 2.9678f, 6.5915f, 3.9372f, 6.2408f)
					lineTo(5.07839f, 7.93776f)
					verticalLineTo(7.93776f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(29.8122f, 9.07723f)
					curveTo(30.1923f, 7.4291f, 28.8588f, 5.6984f, 26.8337f, 5.2115f)
					curveTo(24.8086f, 4.7246f, 22.8588f, 5.6659f, 22.4788f, 7.314f)
					curveTo(22.0987f, 8.9622f, 23.4322f, 10.6929f, 25.4573f, 11.1798f)
					curveTo(27.4824f, 11.6667f, 29.4322f, 10.7253f, 29.8122f, 9.0772f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(12.5088f, 9.43185f)
					curveTo(12.5372f, 8.0232f, 11.1295f, 6.8512f, 9.3645f, 6.8141f)
					curveTo(7.5996f, 6.777f, 6.1457f, 7.8888f, 6.1173f, 9.2974f)
					curveTo(6.0889f, 10.706f, 7.4967f, 11.878f, 9.2616f, 11.9152f)
					curveTo(11.0266f, 11.9523f, 12.4804f, 10.8405f, 12.5088f, 9.4319f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(10.439f, 5.4177f)
					curveTo(10.4724f, 3.7655f, 8.8181f, 2.3907f, 6.7443f, 2.3471f)
					curveTo(4.6703f, 2.3035f, 2.9621f, 3.6075f, 2.9288f, 5.2598f)
					curveTo(2.8954f, 6.912f, 4.5496f, 8.2867f, 6.6235f, 8.3303f)
					curveTo(8.6975f, 8.374f, 10.4057f, 7.0699f, 10.439f, 5.4177f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(18.1941f, 6.14968f)
					curveTo(18.2213f, 4.7442f, 16.8125f, 3.576f, 15.0475f, 3.5404f)
					curveTo(13.2825f, 3.5049f, 11.8297f, 4.6154f, 11.8025f, 6.021f)
					curveTo(11.7754f, 7.4265f, 13.1842f, 8.5947f, 14.9492f, 8.6302f)
					curveTo(16.7142f, 8.6658f, 18.167f, 7.5552f, 18.1941f, 6.1497f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(22.6823f, 4.27172f)
					curveTo(22.7158f, 2.6539f, 21.0989f, 1.3069f, 19.0709f, 1.2631f)
					curveTo(17.0429f, 1.2194f, 15.3717f, 2.4955f, 15.3383f, 4.1133f)
					curveTo(15.3048f, 5.7312f, 16.9217f, 7.0782f, 18.9497f, 7.1219f)
					curveTo(20.9777f, 7.1656f, 22.6488f, 5.8896f, 22.6823f, 4.2717f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(27.8945f, 6.36196f)
					curveTo(27.9324f, 4.4817f, 26.0513f, 2.9173f, 23.6929f, 2.8677f)
					curveTo(21.3345f, 2.8181f, 19.3919f, 4.3021f, 19.354f, 6.1823f)
					curveTo(19.3161f, 8.0626f, 21.1972f, 9.627f, 23.5556f, 9.6766f)
					curveTo(25.9139f, 9.7262f, 27.8565f, 8.2422f, 27.8945f, 6.362f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(18.7912f, 2.7942f)
					curveTo(18.8138f, 1.3105f, 17.3119f, 0.0836f, 15.4366f, 0.0539f)
					curveTo(13.5614f, 0.0241f, 12.0229f, 1.2028f, 12.0003f, 2.6865f)
					curveTo(11.9778f, 4.1702f, 13.4796f, 5.3971f, 15.3549f, 5.4268f)
					curveTo(17.2302f, 5.4566f, 18.7686f, 4.2779f, 18.7912f, 2.7942f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(26.9178f, 23.9519f)
					curveTo(28.9218f, 23.9519f, 30.5463f, 22.6249f, 30.5463f, 20.9879f)
					curveTo(30.5463f, 19.351f, 28.9218f, 18.024f, 26.9178f, 18.024f)
					curveTo(24.9138f, 18.024f, 23.2893f, 19.351f, 23.2893f, 20.9879f)
					curveTo(23.2893f, 22.6249f, 24.9138f, 23.9519f, 26.9178f, 23.9519f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(5.68223f, 8.21492f)
					curveTo(4.5743f, 7.9604f, 3.7212f, 7.3325f, 3.278f, 6.5519f)
					curveTo(3.1007f, 6.6537f, 2.9345f, 6.7612f, 2.785f, 6.8857f)
					curveTo(3.2115f, 7.8812f, 4.2253f, 8.7014f, 5.5881f, 9.0181f)
					curveTo(5.7709f, 9.0577f, 5.9537f, 9.086f, 6.1365f, 9.1086f)
					curveTo(6.1697f, 8.8202f, 6.2584f, 8.56f, 6.3913f, 8.3167f)
					curveTo(6.1531f, 8.2998f, 5.9149f, 8.2658f, 5.6767f, 8.2093f)
					lineTo(5.68223f, 8.21492f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(9.99214f, 8.35066f)
					curveTo(9.4991f, 8.2658f, 9.0448f, 8.1188f, 8.6404f, 7.9151f)
					curveTo(7.9812f, 8.2262f, 7.2001f, 8.3789f, 6.4024f, 8.3224f)
					curveTo(6.3082f, 8.4977f, 6.2251f, 8.6787f, 6.1808f, 8.8711f)
					curveTo(7.0561f, 8.9729f, 7.9203f, 8.8258f, 8.6404f, 8.4864f)
					curveTo(9.0448f, 8.69f, 9.4991f, 8.8371f, 9.9921f, 8.922f)
					curveTo(10.8397f, 9.0634f, 11.6762f, 8.9898f, 12.413f, 8.7523f)
					curveTo(12.3576f, 8.5769f, 12.269f, 8.4072f, 12.1692f, 8.2488f)
					curveTo(11.4934f, 8.4299f, 10.7455f, 8.4751f, 9.9921f, 8.3507f)
					verticalLineTo(8.35066f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(16.734f, 9.53853f)
					curveTo(16.734f, 9.5385f, 16.7284f, 9.5498f, 16.7229f, 9.5611f)
					curveTo(16.5235f, 10.1325f, 16.5733f, 10.7094f, 16.8171f, 11.2241f)
					curveTo(16.9943f, 11.1676f, 17.1661f, 11.0997f, 17.3323f, 11.0205f)
					curveTo(16.9722f, 10.585f, 16.7617f, 10.0702f, 16.734f, 9.5385f)
					verticalLineTo(9.53853f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(14.1137f, 8.53734f)
					curveTo(13.6428f, 8.4299f, 13.2273f, 8.2376f, 12.8839f, 7.9943f)
					curveTo(12.6623f, 8.0961f, 12.4241f, 8.1753f, 12.1803f, 8.2432f)
					curveTo(12.3576f, 8.526f, 12.4628f, 8.8315f, 12.5016f, 9.1539f)
					curveTo(12.69f, 9.0973f, 12.8784f, 9.0351f, 13.0501f, 8.9616f)
					curveTo(13.3714f, 9.1878f, 13.7536f, 9.3575f, 14.1857f, 9.4593f)
					curveTo(15.1109f, 9.6743f, 16.0471f, 9.5046f, 16.7617f, 9.0804f)
					curveTo(16.7838f, 8.9333f, 16.8171f, 8.7862f, 16.8669f, 8.6392f)
					curveTo(16.9722f, 8.3337f, 17.1439f, 8.0565f, 17.3544f, 7.8077f)
					curveTo(16.5678f, 8.4977f, 15.3269f, 8.8145f, 14.1137f, 8.5373f)
					verticalLineTo(8.53734f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to Color(0xFFCBECFF),
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
					moveTo(12.5127f, 9.40277f)
					curveTo(12.5127f, 9.4763f, 12.5127f, 9.5442f, 12.5127f, 9.6177f)
					curveTo(12.4906f, 9.8214f, 12.4352f, 10.0137f, 12.3576f, 10.2003f)
					curveTo(12.4629f, 10.3135f, 12.5792f, 10.4209f, 12.7011f, 10.5171f)
					curveTo(12.7011f, 10.5001f, 12.7066f, 10.4775f, 12.7121f, 10.4605f)
					curveTo(12.7565f, 10.0872f, 12.6789f, 9.7308f, 12.5183f, 9.4028f)
					horizontalLineTo(12.5127f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(21.0827f, 6.62544f)
					curveTo(20.296f, 7.0497f, 19.3044f, 7.2307f, 18.2962f, 7.0666f)
					curveTo(18.0469f, 7.2024f, 17.8142f, 7.3664f, 17.6093f, 7.5474f)
					curveTo(17.8696f, 7.6436f, 18.1411f, 7.7228f, 18.4291f, 7.768f)
					curveTo(19.7697f, 7.9943f, 21.0826f, 7.604f, 21.9191f, 6.846f)
					curveTo(21.7363f, 6.7782f, 21.548f, 6.716f, 21.3486f, 6.6707f)
					curveTo(21.2599f, 6.6481f, 21.1713f, 6.6424f, 21.0827f, 6.6254f)
					verticalLineTo(6.62544f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(27.4091f, 7.89815f)
					curveTo(26.7221f, 8.922f, 25.4258f, 9.5838f, 23.991f, 9.6686f)
					curveTo(23.9744f, 9.8666f, 23.9356f, 10.0646f, 23.8636f, 10.2682f)
					curveTo(23.5589f, 11.1336f, 22.7945f, 11.7898f, 21.8416f, 12.1179f)
					curveTo(22.2959f, 13.5207f, 23.7916f, 14.618f, 25.6807f, 14.7707f)
					curveTo(28.096f, 14.963f, 30.2288f, 13.5489f, 30.4504f, 11.6088f)
					curveTo(30.6442f, 9.9231f, 29.3313f, 8.4016f, 27.4091f, 7.8982f)
					verticalLineTo(7.89815f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(27.8079f, 8.01694f)
					curveTo(27.6805f, 7.9717f, 27.5475f, 7.9321f, 27.4091f, 7.8925f)
					curveTo(26.7221f, 8.9163f, 25.4258f, 9.5781f, 23.991f, 9.663f)
					curveTo(23.9744f, 9.8609f, 23.9356f, 10.0589f, 23.8636f, 10.2626f)
					curveTo(23.5589f, 11.128f, 22.7945f, 11.7841f, 21.8416f, 12.1122f)
					curveTo(21.958f, 12.4742f, 22.1463f, 12.8136f, 22.3901f, 13.1191f)
					curveTo(23.3761f, 12.7061f, 24.1351f, 11.9538f, 24.3677f, 11.0205f)
					curveTo(24.4176f, 10.8169f, 24.4398f, 10.6133f, 24.4398f, 10.4153f)
					curveTo(25.9853f, 10.172f, 27.3038f, 9.2614f, 27.8134f, 8.0169f)
					horizontalLineTo(27.8079f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.1f to Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xFFFFFFFF),
				0.3f to Color(0xFFFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(30.467f, 11.3656f)
					curveTo(30.467f, 11.4447f, 30.467f, 11.5239f, 30.4504f, 11.6031f)
					curveTo(30.4227f, 11.852f, 30.3617f, 12.0896f, 30.2786f, 12.3158f)
					curveTo(30.4116f, 12.7684f, 30.5279f, 13.2322f, 30.6221f, 13.7073f)
					curveTo(30.8548f, 13.334f, 31.0099f, 12.9154f, 31.0597f, 12.4742f)
					curveTo(31.0763f, 12.3441f, 31.0763f, 12.214f, 31.0763f, 12.0839f)
					curveTo(30.9102f, 11.8237f, 30.6996f, 11.5805f, 30.4725f, 11.3712f)
					lineTo(30.467f, 11.3656f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xFFFCFEFF),
				0.48f to Color(0xFFF2FAFF),
				0.66f to Color(0xFFE2F5FF),
				0.82f to Color(0xFFCCEEFF),
				0.97f to Color(0xFFB0E4FF),
				1f to Color(0xFFAAE3FF),
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
					moveTo(18.8945f, 23.821f)
					curveTo(18.8114f, 23.7249f, 18.7394f, 23.6231f, 18.6729f, 23.5156f)
					curveTo(18.6729f, 23.5891f, 18.6729f, 23.657f, 18.6784f, 23.7305f)
					curveTo(18.684f, 23.8097f, 18.7062f, 23.8832f, 18.7228f, 23.9568f)
					curveTo(18.7338f, 23.9511f, 18.7449f, 23.9398f, 18.756f, 23.9342f)
					curveTo(18.8059f, 23.8946f, 18.8502f, 23.855f, 18.8945f, 23.8154f)
					verticalLineTo(23.821f)
					close()
}
}.build()
return _Unknown!!
		}

