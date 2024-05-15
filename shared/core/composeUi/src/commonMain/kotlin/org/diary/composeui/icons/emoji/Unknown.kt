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

internal val Unknown: ImageVector
		get() {
			if (_Unknown != null) {
				return _Unknown!!
			}
_Unknown = ImageVector.Builder(
                name = "Unknown",
                defaultWidth = 24.dp,
                defaultHeight = 24.dp,
                viewportWidth = 24f,
                viewportHeight = 24f
            ).apply {
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xAAFCFEFF),
				0.48f to Color(0xAAF2FAFF),
				0.66f to Color(0xAAE2F5FF),
				0.82f to Color(0xAACCEEFF),
				0.97f to Color(0xAAB0E4FF),
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
					moveTo(5.31694f, 9.74766f)
					curveTo(6.699f, 8.7241f, 7.1894f, 7.0446f, 6.4122f, 5.9964f)
					curveTo(5.635f, 4.9483f, 3.8845f, 4.9283f, 2.5025f, 5.9519f)
					curveTo(1.1204f, 6.9755f, 0.63f, 8.655f, 1.4072f, 9.7031f)
					curveTo(2.1844f, 10.7513f, 3.9349f, 10.7712f, 5.3169f, 9.7477f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xAAFCFEFF),
				0.48f to Color(0xAAF2FAFF),
				0.66f to Color(0xAAE2F5FF),
				0.82f to Color(0xAACCEEFF),
				0.97f to Color(0xAAB0E4FF),
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
					moveTo(23.3049f, 10.3428f)
					curveTo(23.4571f, 8.9405f, 22.3994f, 7.6757f, 20.9425f, 7.5178f)
					curveTo(19.4856f, 7.3598f, 18.1812f, 8.3686f, 18.029f, 9.7709f)
					curveTo(17.8769f, 11.1732f, 18.9345f, 12.438f, 20.3914f, 12.5959f)
					curveTo(21.8483f, 12.7538f, 23.1527f, 11.745f, 23.3049f, 10.3428f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xAAFFFFFF),
				0.1f to  Color(0xAAFFFFFF),
				0.18f to Color(0xAAFFFFFF),
				0.24f to Color(0xAAFFFFFF),
				0.3f to  Color(0xAAFFFFFF),
				0.36f to Color(0xAAFFFFFF),
				0.41f to Color(0xAAFFFFFF),
				0.43f to Color(0xAAFFFFFF),
				0.51f to Color(0xAAFBFDFF),
				0.61f to Color(0xAAF0FAFF),
				0.74f to Color(0xAADFF4FF),
				0.87f to Color(0xAAC7ECFF),
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
					moveTo(19.3873f, 3.55176f)
					curveTo(19.5341f, 2.1988f, 18.2831f, 0.9535f, 16.5931f, 0.7703f)
					curveTo(14.9031f, 0.5871f, 13.4141f, 1.5354f, 13.2672f, 2.8884f)
					curveTo(13.1204f, 4.2414f, 14.3714f, 5.4867f, 16.0614f, 5.6699f)
					curveTo(17.7514f, 5.8531f, 19.2404f, 4.9048f, 19.3873f, 3.5518f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xCCFFFFFF),
				0.18f to Color(0xCCFEFEFF),
				0.32f to Color(0xCCFAFDFF),
				0.43f to Color(0xCCF5FBFF),
				0.54f to Color(0xCCEEF9FF),
				0.64f to Color(0xCCE4F6FF),
				0.74f to Color(0xCCD8F2FF),
				0.83f to Color(0xCCCAEDFF),
				0.92f to Color(0xCCBAE8FF),
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
					moveTo(20.7771f, 4.32176f)
					curveTo(20.626f, 4.281f, 20.4669f, 4.2524f, 20.3036f, 4.2361f)
					curveTo(18.8462f, 4.077f, 17.5603f, 4.897f, 17.4338f, 6.0638f)
					curveTo(17.3848f, 6.5248f, 17.5236f, 6.9695f, 17.7971f, 7.353f)
					lineTo(19.1279f, 7.43871f)
					curveTo(18.6585f, 6.3086f, 18.8462f, 4.3993f, 20.7771f, 4.3258f)
					verticalLineTo(4.32176f)
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
					moveTo(11.9678f, 22.8113f)
					curveTo(17.9355f, 22.8113f, 22.7733f, 17.9763f, 22.7733f, 12.0121f)
					curveTo(22.7733f, 6.0479f, 17.9355f, 1.213f, 11.9678f, 1.213f)
					curveTo(6.0001f, 1.213f, 1.1623f, 6.0479f, 1.1623f, 12.0121f)
					curveTo(1.1623f, 17.9763f, 6.0001f, 22.8113f, 11.9678f, 22.8113f)
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
					moveTo(11.9678f, 22.8113f)
					curveTo(17.9355f, 22.8113f, 22.7733f, 17.9763f, 22.7733f, 12.0121f)
					curveTo(22.7733f, 6.0479f, 17.9355f, 1.213f, 11.9678f, 1.213f)
					curveTo(6.0001f, 1.213f, 1.1623f, 6.0479f, 1.1623f, 12.0121f)
					curveTo(1.1623f, 17.9763f, 6.0001f, 22.8113f, 11.9678f, 22.8113f)
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
					moveTo(8.4408f, 12.4691f)
					curveTo(9.0157f, 12.4691f, 9.4817f, 11.7658f, 9.4817f, 10.8984f)
					curveTo(9.4817f, 10.0309f, 9.0157f, 9.3276f, 8.4408f, 9.3276f)
					curveTo(7.8659f, 9.3276f, 7.3999f, 10.0309f, 7.3999f, 10.8984f)
					curveTo(7.3999f, 11.7658f, 7.8659f, 12.4691f, 8.4408f, 12.4691f)
					close()
}
				path(
    				fill = Brush.linearGradient(
		start = Offset(8.4408f, 9.31947f),
		end = Offset(8.4408f, 10.7841f),
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
					moveTo(8.4408f, 9.858f)
					curveTo(8.8898f, 9.858f, 9.2776f, 10.2456f, 9.4817f, 10.8208f)
					curveTo(9.4695f, 9.9722f, 9.0082f, 9.2868f, 8.4408f, 9.2868f)
					curveTo(7.8734f, 9.2868f, 7.4121f, 9.9682f, 7.3999f, 10.8208f)
					curveTo(7.604f, 10.2456f, 7.9918f, 9.858f, 8.4408f, 9.858f)
					verticalLineTo(9.858f)
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
					moveTo(15.4989f, 12.4691f)
					curveTo(16.0738f, 12.4691f, 16.5398f, 11.7658f, 16.5398f, 10.8984f)
					curveTo(16.5398f, 10.0309f, 16.0738f, 9.3276f, 15.4989f, 9.3276f)
					curveTo(14.924f, 9.3276f, 14.4579f, 10.0309f, 14.4579f, 10.8984f)
					curveTo(14.4579f, 11.7658f, 14.924f, 12.4691f, 15.4989f, 12.4691f)
					close()
}
				path(
    				fill = Brush.linearGradient(
		start = Offset(15.4989f, 9.3562f),
		end = Offset(15.4989f, 10.8208f),
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
					moveTo(15.4989f, 9.89881f)
					curveTo(15.0498f, 9.8988f, 14.662f, 10.2864f, 14.4579f, 10.8616f)
					curveTo(14.4702f, 10.013f, 14.9314f, 9.3276f, 15.4989f, 9.3276f)
					curveTo(16.0663f, 9.3276f, 16.5276f, 10.009f, 16.5398f, 10.8616f)
					curveTo(16.3357f, 10.2864f, 15.9479f, 9.8988f, 15.4989f, 9.8988f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xAAFFFFFF),
				0.28f to Color(0xAAFCFEFF),
				0.48f to Color(0xAAF2FAFF),
				0.66f to Color(0xAAE2F5FF),
				0.82f to Color(0xffCCEEFF),
				0.97f to Color(0xffB0E4FF),
				1f to    Color(0xffAAE3FF),
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
					moveTo(6.11465f, 21.9783f)
					curveTo(7.3757f, 21.2278f, 7.6379f, 19.3436f, 6.7001f, 17.7696f)
					curveTo(5.7624f, 16.1956f, 3.98f, 15.528f, 2.7189f, 16.2784f)
					curveTo(1.4578f, 17.0288f, 1.1957f, 18.9131f, 2.1334f, 20.4871f)
					curveTo(3.0711f, 22.0611f, 4.8536f, 22.7287f, 6.1147f, 21.9783f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x78FFFFFF),
				0.28f to Color(0x78FCFEFF),
				0.48f to Color(0x78F2FAFF),
				0.66f to Color(0x78E2F5FF),
				0.82f to Color(0xffCCEEFF),
				0.97f to Color(0xffB0E4FF),
				1f to    Color(0xffAAE3FF),
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
					moveTo(5.9711f, 21.6608f)
					curveTo(4.2362f, 21.775f, 2.4604f, 20.7306f, 1.644f, 19.2292f)
					curveTo(1.893f, 20.4369f, 2.7421f, 21.5629f, 3.881f, 22.0443f)
					curveTo(4.9342f, 22.489f, 5.9629f, 22.2605f, 6.6038f, 21.5588f)
					curveTo(6.4038f, 21.6078f, 6.1956f, 21.6445f, 5.9711f, 21.6567f)
					verticalLineTo(21.6608f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x45FFFFFF),
				0.1f to  Color(0x45FFFFFF),
				0.18f to Color(0x45FFFFFF),
				0.24f to Color(0x45FFFFFF),
				0.3f to  Color(0x45FFFFFF),
				0.36f to Color(0x45FFFFFF),
				0.41f to Color(0x45FFFFFF),
				0.43f to Color(0x45FFFFFF),
				0.51f to Color(0x45FCFEFF),
				0.61f to Color(0x45F6FBFF),
				0.74f to Color(0x45EBF7FF),
				0.87f to Color(0x45DCF2FF),
				1f to    Color(0x45CBECFF),
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
					moveTo(17.5645f, 22.1124f)
					curveTo(18.1191f, 21.07f, 17.5118f, 19.6632f, 16.2079f, 18.9703f)
					curveTo(14.904f, 18.2775f, 13.3975f, 18.5609f, 12.8428f, 19.6033f)
					curveTo(12.2882f, 20.6458f, 12.8956f, 22.0526f, 14.1995f, 22.7455f)
					curveTo(15.5033f, 23.4383f, 17.0099f, 23.1549f, 17.5645f, 22.1124f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x43FFFFFF),
				0.18f to Color(0x43FEFEFF),
				0.32f to Color(0x43FAFDFF),
				0.43f to Color(0x43F5FBFF),
				0.54f to Color(0x43EEF9FF),
				0.64f to Color(0x43E4F6FF),
				0.74f to Color(0x43D8F2FF),
				0.83f to Color(0x43CAEDFF),
				0.92f to Color(0x43BAE8FF),
				1f to    Color(0x43AAE3FF),
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
					moveTo(15.9969f, 23.101f)
					curveTo(15.8499f, 23.1173f, 15.6989f, 23.1254f, 15.5438f, 23.1173f)
					curveTo(14.1395f, 23.0561f, 12.8495f, 21.9913f, 12.6617f, 20.7388f)
					curveTo(12.5883f, 20.2451f, 12.6985f, 19.7964f, 12.9434f, 19.4373f)
					lineTo(13.9966f, 20.1023f)
					curveTo(13.6047f, 21.2202f, 14.1232f, 22.7175f, 15.9969f, 23.101f)
					verticalLineTo(23.101f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x32FFFFFF),
				0.28f to Color(0x32FCFEFF),
				0.48f to Color(0x32F2FAFF),
				0.66f to Color(0x32E2F5FF),
				0.82f to Color(0x32CCEEFF),
				0.97f to Color(0x32B0E4FF),
				1f to    Color(0x32AAE3FF),
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
					moveTo(10.0696f, 20.8652f)
					curveTo(11.7018f, 20.8652f, 13.0251f, 19.8058f, 13.0251f, 18.499f)
					curveTo(13.0251f, 17.1921f, 11.7018f, 16.1327f, 10.0696f, 16.1327f)
					curveTo(8.4373f, 16.1327f, 7.1141f, 17.1921f, 7.1141f, 18.499f)
					curveTo(7.1141f, 19.8058f, 8.4373f, 20.8652f, 10.0696f, 20.8652f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x34FFFFFF),
				0.1f to  Color(0x34FFFFFF),
				0.18f to Color(0x34FFFFFF),
				0.24f to Color(0x34FFFFFF),
				0.3f to  Color(0x34FFFFFF),
				0.36f to Color(0x34FFFFFF),
				0.41f to Color(0x34FFFFFF),
				0.43f to Color(0x34FFFFFF),
				0.51f to Color(0x34FCFEFF),
				0.61f to Color(0x34F6FBFF),
				0.74f to Color(0x34EBF7FF),
				0.87f to Color(0x34DCF2FF),
				1f to    Color(0x34CBECFF),
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
					moveTo(7.91657f, 23.0253f)
					curveTo(9.3926f, 22.9823f, 10.5613f, 21.9907f, 10.5269f, 20.8106f)
					curveTo(10.4925f, 19.6304f, 9.268f, 18.7085f, 7.7919f, 18.7515f)
					curveTo(6.3158f, 18.7946f, 5.1471f, 19.7861f, 5.1815f, 20.9663f)
					curveTo(5.216f, 22.1465f, 6.4405f, 23.0683f, 7.9166f, 23.0253f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0x54FCFEFF),
				0.48f to Color(0x54F2FAFF),
				0.66f to Color(0x54E2F5FF),
				0.82f to Color(0x54CCEEFF),
				0.97f to Color(0x54B0E4FF),
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
					moveTo(18.3972f, 21.2528f)
					curveTo(19.8739f, 21.2528f, 21.071f, 20.2957f, 21.071f, 19.115f)
					curveTo(21.071f, 17.9343f, 19.8739f, 16.9772f, 18.3972f, 16.9772f)
					curveTo(16.9205f, 16.9772f, 15.7234f, 17.9343f, 15.7234f, 19.115f)
					curveTo(15.7234f, 20.2957f, 16.9205f, 21.2528f, 18.3972f, 21.2528f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x66FFFFFF),
				0.18f to Color(0x66FEFEFF),
				0.32f to Color(0x66FAFDFF),
				0.43f to Color(0x66F5FBFF),
				0.54f to Color(0x66EEF9FF),
				0.64f to Color(0x66E4F6FF),
				0.74f to Color(0x66D8F2FF),
				0.83f to Color(0x66CAEDFF),
				0.92f to Color(0x66BAE8FF),
				1f to    Color(0x66AAE3FF),
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
					moveTo(17.9155f, 21.2202f)
					curveTo(18.0706f, 21.2447f, 18.2339f, 21.2569f, 18.3972f, 21.2569f)
					curveTo(19.8709f, 21.2569f, 21.071f, 20.2981f, 21.071f, 19.1191f)
					curveTo(21.071f, 18.654f, 20.8832f, 18.2215f, 20.5689f, 17.8707f)
					lineTo(19.23f, 17.9319f)
					curveTo(19.8219f, 19.0089f, 19.8423f, 20.9428f, 17.9196f, 21.2243f)
					lineTo(17.9155f, 21.2202f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x77FFFFFF),
				0.1f to  Color(0x77FFFFFF),
				0.18f to Color(0x77FFFFFF),
				0.24f to Color(0x77FFFFFF),
				0.3f to  Color(0x77FFFFFF),
				0.36f to Color(0x77FFFFFF),
				0.41f to Color(0x77FFFFFF),
				0.43f to Color(0x77FFFFFF),
				0.51f to Color(0x77FBFDFF),
				0.61f to Color(0x77F0FAFF),
				0.74f to Color(0x77DFF4FF),
				0.87f to Color(0x77C7ECFF),
				1f to    Color(0x77AAE3FF),
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
					moveTo(16.1683f, 18.1196f)
					curveTo(17.6856f, 18.1196f, 18.9156f, 17.1332f, 18.9156f, 15.9165f)
					curveTo(18.9156f, 14.6997f, 17.6856f, 13.7134f, 16.1683f, 13.7134f)
					curveTo(14.6511f, 13.7134f, 13.4211f, 14.6997f, 13.4211f, 15.9165f)
					curveTo(13.4211f, 17.1332f, 14.6511f, 18.1196f, 16.1683f, 18.1196f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x11FFFFFF),
				0.1f to  Color(0x11FFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FCFEFF),
				0.61f to Color(0x11F6FBFF),
				0.74f to Color(0x11EBF7FF),
				0.87f to Color(0x11DCF2FF),
				1f to    Color(0x11CBECFF),
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
					moveTo(7.51823f, 19.523f)
					curveTo(9.509f, 19.523f, 11.1228f, 18.2316f, 11.1228f, 16.6386f)
					curveTo(11.1228f, 15.0456f, 9.509f, 13.7542f, 7.5182f, 13.7542f)
					curveTo(5.5275f, 13.7542f, 3.9137f, 15.0456f, 3.9137f, 16.6386f)
					curveTo(3.9137f, 18.2316f, 5.5275f, 19.523f, 7.5182f, 19.523f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xAAFFFFFF),
				0.1f to  Color(0xAAFFFFFF),
				0.18f to Color(0xAAFFFFFF),
				0.24f to Color(0xAAFFFFFF),
				0.3f to  Color(0xAAFFFFFF),
				0.36f to Color(0xAAFFFFFF),
				0.41f to Color(0xAAFFFFFF),
				0.43f to Color(0xAAFFFFFF),
				0.51f to Color(0xAAFCFEFF),
				0.61f to Color(0xAAF6FBFF),
				0.74f to Color(0xAAEBF7FF),
				0.87f to Color(0xAADCF2FF),
				1f to    Color(0xAACBECFF),
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
					moveTo(11.5759f, 17.9686f)
					curveTo(13.4088f, 17.9686f, 14.8947f, 16.7795f, 14.8947f, 15.3127f)
					curveTo(14.8947f, 13.8458f, 13.4088f, 12.6567f, 11.5759f, 12.6567f)
					curveTo(9.743f, 12.6567f, 8.2571f, 13.8458f, 8.2571f, 15.3127f)
					curveTo(8.2571f, 16.7795f, 9.743f, 17.9686f, 11.5759f, 17.9686f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xFFFFFFFF),
				0.1f to  Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xBBFFFFFF),
				0.3f to  Color(0xBBFFFFFF),
				0.36f to Color(0xBBFFFFFF),
				0.41f to Color(0xBBFFFFFF),
				0.43f to Color(0xBBFFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0x11DFF4FF),
				0.87f to Color(0x11C7ECFF),
				1f to    Color(0x11AAE3FF),
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
					moveTo(7.37473f, 15.6512f)
					curveTo(7.5955f, 14.1943f, 6.2999f, 12.79f, 4.4809f, 12.5148f)
					curveTo(2.662f, 12.2395f, 1.0085f, 13.1975f, 0.7877f, 14.6545f)
					curveTo(0.567f, 16.1114f, 1.8626f, 17.5157f, 3.6815f, 17.791f)
					curveTo(5.5005f, 18.0662f, 7.154f, 17.1082f, 7.3747f, 15.6512f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xCBFFFFFF),
				0.18f to Color(0xCBFFFFFF),
				0.24f to Color(0xCBFFFFFF),
				0.3f to  Color(0xBBFFFFFF),
				0.36f to Color(0xBBFFFFFF),
				0.41f to Color(0xBBFFFFFF),
				0.43f to Color(0xBBFFFFFF),
				0.51f to Color(0xBBFCFEFF),
				0.61f to Color(0x62F6FBFF),
				0.74f to Color(0x62EBF7FF),
				0.87f to Color(0x62DCF2FF),
				1f to    Color(0x62CBECFF),
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
					moveTo(14.5333f, 21.5289f)
					curveTo(14.6276f, 20.3091f, 13.4778f, 19.2255f, 11.965f, 19.1086f)
					curveTo(10.4522f, 18.9917f, 9.1494f, 19.8859f, 9.055f, 21.1057f)
					curveTo(8.9607f, 22.3256f, 10.1106f, 23.4092f, 11.6233f, 23.5261f)
					curveTo(13.1361f, 23.6429f, 14.439f, 22.7488f, 14.5333f, 21.5289f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xFFFFFFFF),
				0.1f to  Color(0xFFFFFFFF),
				0.18f to Color(0xFFFFFFFF),
				0.24f to Color(0xCBFFFFFF),
				0.3f to  Color(0xCBFFFFFF),
				0.36f to Color(0xCBFFFFFF),
				0.41f to Color(0xCBFFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0x11DFF4FF),
				0.87f to Color(0x11C7ECFF),
				1f to    Color(0x11AAE3FF),
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
					moveTo(22.109f, 15.836f)
					curveTo(23.1534f, 15.265f, 23.6299f, 14.1259f, 23.1733f, 13.2917f)
					curveTo(22.7167f, 12.4576f, 21.4999f, 12.2442f, 20.4556f, 12.8151f)
					curveTo(19.4112f, 13.3861f, 18.9348f, 14.5252f, 19.3914f, 15.3593f)
					curveTo(19.848f, 16.1935f, 21.0647f, 16.4069f, 22.109f, 15.836f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xCBFFFFFF),
				0.18f to Color(0xCBFFFFFF),
				0.24f to Color(0xCBFFFFFF),
				0.3f to  Color(0xCBFFFFFF),
				0.36f to Color(0x88FFFFFF),
				0.41f to Color(0x88FFFFFF),
				0.43f to Color(0x88FFFFFF),
				0.51f to Color(0x88FCFEFF),
				0.61f to Color(0x88F6FBFF),
				0.74f to Color(0x11EBF7FF),
				0.87f to Color(0x11DCF2FF),
				1f to    Color(0x11CBECFF),
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
					moveTo(14.0816f, 6.15414f)
					curveTo(14.1062f, 4.9625f, 12.8872f, 3.9709f, 11.3589f, 3.9394f)
					curveTo(9.8307f, 3.908f, 8.5719f, 4.8485f, 8.5473f, 6.0402f)
					curveTo(8.5228f, 7.2319f, 9.7418f, 8.2235f, 11.27f, 8.2549f)
					curveTo(12.7982f, 8.2864f, 14.057f, 7.3458f, 14.0816f, 6.1541f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xffFFFFFF),
				0.1f to  Color(0xffFFFFFF),
				0.18f to Color(0xffFFFFFF),
				0.24f to Color(0xffFFFFFF),
				0.3f to  Color(0x55FFFFFF),
				0.36f to Color(0x55FFFFFF),
				0.41f to Color(0x55FFFFFF),
				0.43f to Color(0x11FFFFF),
				0.51f to Color(0x11BFDFF),
				0.61f to Color(0x110FAFF),
				0.74f to Color(0x11FF4FF),
				0.87f to Color(0x117ECFF),
				1f to    Color(0x11AE3FF),
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
					moveTo(6.87406f, 6.54475f)
					curveTo(6.8989f, 5.3395f, 5.6674f, 4.3368f, 4.1233f, 4.305f)
					curveTo(2.5793f, 4.2732f, 1.3075f, 5.2244f, 1.2827f, 6.4296f)
					curveTo(1.2578f, 7.6349f, 2.4894f, 8.6376f, 4.0334f, 8.6694f)
					curveTo(5.5774f, 8.7012f, 6.8492f, 7.75f, 6.8741f, 6.5447f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCB80D4F8),
				0.19f to Color(0xCB80D4F8),
				0.32f to Color(0xFF82D4F8),
				0.44f to Color(0xFF84D5F8),
				0.55f to Color(0xFF88D7F9),
				0.65f to Color(0xFF8DD8FA),
				0.75f to Color(0x1193DAFB),
				0.84f to Color(0x119ADDFC),
				0.93f to Color(0x11A2E0FD),
				1f to    Color(0x11AAE3FF),
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
					moveTo(3.74222f, 5.7252f)
					curveTo(2.8564f, 5.664f, 1.5746f, 6.7329f, 2.1094f, 8.018f)
					curveTo(1.4154f, 7.4754f, 1.1051f, 6.6635f, 1.3868f, 5.8761f)
					curveTo(1.6154f, 5.2397f, 2.1869f, 4.7542f, 2.9013f, 4.5013f)
					lineTo(3.74222f, 5.7252f)
					verticalLineTo(5.7252f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x22FFFFFF),
				0.1f to  Color(0x22FFFFFF),
				0.18f to Color(0x22FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0x11DFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(21.9683f, 6.54705f)
					curveTo(22.2484f, 5.3583f, 21.2657f, 4.11f, 19.7735f, 3.7588f)
					curveTo(18.2812f, 3.4076f, 16.8444f, 4.0866f, 16.5644f, 5.2753f)
					curveTo(16.2843f, 6.4641f, 17.267f, 7.7124f, 18.7592f, 8.0636f)
					curveTo(20.2515f, 8.4147f, 21.6882f, 7.7358f, 21.9683f, 6.547f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x44FFFFFF),
				0.1f to  Color(0x44FFFFFF),
				0.18f to Color(0x44FFFFFF),
				0.24f to Color(0x44FFFFFF),
				0.3f to  Color(0x44FFFFFF),
				0.36f to Color(0x55FFFFFF),
				0.41f to Color(0x55FFFFFF),
				0.43f to Color(0x55FFFFFF),
				0.51f to Color(0x55FBFDFF),
				0.61f to Color(0x55F0FAFF),
				0.74f to Color(0xCBDFF4FF),
				0.87f to Color(0xCBC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(9.21762f, 6.80283f)
					curveTo(9.2386f, 5.7869f, 8.2012f, 4.9415f, 6.9006f, 4.9148f)
					curveTo(5.6f, 4.888f, 4.5287f, 5.6899f, 4.5078f, 6.7059f)
					curveTo(4.4868f, 7.7219f, 5.5242f, 8.5672f, 6.8248f, 8.5939f)
					curveTo(8.1254f, 8.6207f, 9.1967f, 7.8188f, 9.2176f, 6.8028f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x11FFFFFF),
				0.28f to Color(0x11FCFEFF),
				0.48f to Color(0x11F2FAFF),
				0.66f to Color(0x11E2F5FF),
				0.82f to Color(0x11CCEEFF),
				0.97f to Color(0xCBB0E4FF),
				1f to    Color(0xCBAAE3FF),
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
					moveTo(7.69241f, 3.90758f)
					curveTo(7.717f, 2.7159f, 6.498f, 1.7243f, 4.9698f, 1.6929f)
					curveTo(3.4415f, 1.6614f, 2.1827f, 2.602f, 2.1582f, 3.7936f)
					curveTo(2.1336f, 4.9853f, 3.3526f, 5.9769f, 4.8808f, 6.0084f)
					curveTo(6.4091f, 6.0398f, 7.6678f, 5.0993f, 7.6924f, 3.9076f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.28f to Color(0xCBFCFEFF),
				0.48f to Color(0x11F2FAFF),
				0.66f to Color(0x11E2F5FF),
				0.82f to Color(0xAACCEEFF),
				0.97f to Color(0xAAB0E4FF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(13.4071f, 4.43553f)
					curveTo(13.4271f, 3.4218f, 12.3889f, 2.5792f, 11.0883f, 2.5536f)
					curveTo(9.7877f, 2.5279f, 8.7172f, 3.3289f, 8.6972f, 4.3427f)
					curveTo(8.6771f, 5.3564f, 9.7153f, 6.199f, 11.0159f, 6.2246f)
					curveTo(12.3165f, 6.2503f, 13.3871f, 5.4493f, 13.4071f, 4.4355f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x44FFFFFF),
				0.1f to  Color(0x44FFFFFF),
				0.18f to Color(0x44FFFFFF),
				0.24f to Color(0x44FFFFFF),
				0.3f to  Color(0x44FFFFFF),
				0.36f to Color(0x44FFFFFF),
				0.41f to Color(0x44FFFFFF),
				0.43f to Color(0x44FFFFFF),
				0.51f to Color(0xCBFCFEFF),
				0.61f to Color(0xCBF6FBFF),
				0.74f to Color(0xCBEBF7FF),
				0.87f to Color(0xCBDCF2FF),
				1f to    Color(0xCBCBECFF),
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
					moveTo(16.7144f, 3.08102f)
					curveTo(16.739f, 1.9141f, 15.5475f, 0.9426f, 14.0531f, 0.9111f)
					curveTo(12.5587f, 0.8795f, 11.3273f, 1.7999f, 11.3026f, 2.9668f)
					curveTo(11.2779f, 4.1337f, 12.4694f, 5.1052f, 13.9638f, 5.1368f)
					curveTo(15.4582f, 5.1683f, 16.6897f, 4.2479f, 16.7144f, 3.081f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0x44FFFFFF),
				0.18f to Color(0x44FFFFFF),
				0.24f to Color(0x44FFFFFF),
				0.3f to  Color(0x44FFFFFF),
				0.36f to Color(0x44FFFFFF),
				0.41f to Color(0x44FFFFFF),
				0.43f to Color(0x44FFFFFF),
				0.51f to Color(0x44FCFEFF),
				0.61f to Color(0x44F6FBFF),
				0.74f to Color(0x44EBF7FF),
				0.87f to Color(0x44DCF2FF),
				1f to    Color(0xCBCBECFF),
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
					moveTo(20.5551f, 4.58864f)
					curveTo(20.5831f, 3.2325f, 19.1969f, 2.1042f, 17.4591f, 2.0684f)
					curveTo(15.7212f, 2.0326f, 14.2897f, 3.1029f, 14.2618f, 4.4591f)
					curveTo(14.2338f, 5.8152f, 15.62f, 6.9436f, 17.3579f, 6.9794f)
					curveTo(19.0957f, 7.0152f, 20.5272f, 5.9448f, 20.5551f, 4.5886f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xCBFFFFFF),
				0.18f to Color(0x22FFFFFF),
				0.24f to Color(0x22FFFFFF),
				0.3f to  Color(0x22FFFFFF),
				0.36f to Color(0x22FFFFFF),
				0.41f to Color(0x22FFFFFF),
				0.43f to Color(0x22FFFFFF),
				0.51f to Color(0x22FCFEFF),
				0.61f to Color(0x22F6FBFF),
				0.74f to Color(0x22EBF7FF),
				0.87f to Color(0x22DCF2FF),
				1f to    Color(0xCBCBECFF),
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
					moveTo(17.6883f, 6.87374f)
					curveTo(17.7121f, 5.7203f, 16.5326f, 4.7607f, 15.054f, 4.7302f)
					curveTo(13.5753f, 4.6998f, 12.3574f, 5.6101f, 12.3336f, 6.7635f)
					curveTo(12.3098f, 7.9169f, 13.4893f, 8.8766f, 14.9679f, 8.907f)
					curveTo(16.4466f, 8.9375f, 17.6645f, 8.0271f, 17.6883f, 6.8737f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xCBFFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FCFEFF),
				0.61f to Color(0x11F6FBFF),
				0.74f to Color(0x11EBF7FF),
				0.87f to Color(0xCBDCF2FF),
				1f to    Color(0xCBCBECFF),
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
					moveTo(11.0513f, 3.73351f)
					curveTo(11.0793f, 2.4067f, 9.7243f, 1.302f, 8.0248f, 1.2661f)
					curveTo(6.3253f, 1.2302f, 4.9248f, 2.2768f, 4.8967f, 3.6036f)
					curveTo(4.8687f, 4.9304f, 6.2237f, 6.0351f, 7.9233f, 6.071f)
					curveTo(9.6228f, 6.1069f, 11.0232f, 5.0603f, 11.0513f, 3.7335f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xCBFFFFFF),
				0.18f to Color(0x22FFFFFF),
				0.24f to Color(0x22FFFFFF),
				0.3f to  Color(0x22FFFFFF),
				0.36f to Color(0x22FFFFFF),
				0.41f to Color(0x22FFFFFF),
				0.43f to Color(0x22FFFFFF),
				0.51f to Color(0x22FCFEFF),
				0.61f to Color(0x22F6FBFF),
				0.74f to Color(0x22EBF7FF),
				0.87f to Color(0xCBDCF2FF),
				1f to    Color(0xCBCBECFF),
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
					moveTo(13.847f, 2.01535f)
					curveTo(13.8637f, 0.9452f, 12.7569f, 0.0603f, 11.3751f, 0.0388f)
					curveTo(9.9932f, 0.0174f, 8.8595f, 0.8675f, 8.8429f, 1.9377f)
					curveTo(8.8263f, 3.0078f, 9.933f, 3.8927f, 11.3149f, 3.9142f)
					curveTo(12.6967f, 3.9356f, 13.8304f, 3.0855f, 13.847f, 2.0154f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x22FFFFFF),
				0.1f to  Color(0x22FFFFFF),
				0.18f to Color(0x22FFFFFF),
				0.24f to Color(0x22FFFFFF),
				0.3f to  Color(0x22FFFFFF),
				0.36f to Color(0x22FFFFFF),
				0.41f to Color(0x22FFFFFF),
				0.43f to Color(0x22FFFFFF),
				0.51f to Color(0x22FCFEFF),
				0.61f to Color(0x22F6FBFF),
				0.74f to Color(0x22EBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to    Color(0xFFCBECFF),
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
					moveTo(20.2709f, 18.3031f)
					curveTo(21.7476f, 18.3031f, 22.9447f, 17.346f, 22.9447f, 16.1653f)
					curveTo(22.9447f, 14.9847f, 21.7476f, 14.0275f, 20.2709f, 14.0275f)
					curveTo(18.7942f, 14.0275f, 17.5971f, 14.9847f, 17.5971f, 16.1653f)
					curveTo(17.5971f, 17.346f, 18.7942f, 18.3031f, 20.2709f, 18.3031f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x22FFFFFF),
				0.1f to  Color(0x22FFFFFF),
				0.18f to Color(0x22FFFFFF),
				0.24f to Color(0x22FFFFFF),
				0.3f to  Color(0x22FFFFFF),
				0.36f to Color(0x22FFFFFF),
				0.41f to Color(0x22FFFFFF),
				0.43f to Color(0x22FFFFFF),
				0.51f to Color(0x22FBFDFF),
				0.61f to Color(0x22F0FAFF),
				0.74f to Color(0x22DFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(4.18717f, 5.9251f)
					curveTo(3.3707f, 5.7415f, 2.7421f, 5.2887f, 2.4155f, 4.7256f)
					curveTo(2.2849f, 4.7991f, 2.1624f, 4.8766f, 2.0522f, 4.9664f)
					curveTo(2.3665f, 5.6844f, 3.1136f, 6.276f, 4.1178f, 6.5044f)
					curveTo(4.2525f, 6.533f, 4.3872f, 6.5534f, 4.5219f, 6.5697f)
					curveTo(4.5464f, 6.3616f, 4.6117f, 6.174f, 4.7097f, 5.9985f)
					curveTo(4.5342f, 5.9863f, 4.3586f, 5.9618f, 4.1831f, 5.921f)
					lineTo(4.18717f, 5.9251f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x11FFFFFF),
				0.1f to  Color(0x11FFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0x11DFF4FF),
				0.87f to Color(0xCBC7ECFF),
				1f to    Color(0xCBAAE3FF),
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
					moveTo(7.3631f, 6.02302f)
					curveTo(6.9998f, 5.9618f, 6.665f, 5.8557f, 6.367f, 5.7089f)
					curveTo(5.8813f, 5.9333f, 5.3057f, 6.0434f, 4.7179f, 6.0026f)
					curveTo(4.6485f, 6.1291f, 4.5872f, 6.2596f, 4.5546f, 6.3984f)
					curveTo(5.1996f, 6.4718f, 5.8364f, 6.3657f, 6.367f, 6.1209f)
					curveTo(6.665f, 6.2678f, 6.9998f, 6.3739f, 7.3631f, 6.4351f)
					curveTo(7.9877f, 6.5371f, 8.6041f, 6.484f, 9.147f, 6.3127f)
					curveTo(9.1062f, 6.1862f, 9.0409f, 6.0638f, 8.9674f, 5.9496f)
					curveTo(8.4694f, 6.0801f, 7.9183f, 6.1128f, 7.3631f, 6.023f)
					verticalLineTo(6.02302f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xaaFFFFFF),
				0.1f to  Color(0xaaFFFFFF),
				0.18f to Color(0xaaFFFFFF),
				0.24f to Color(0xaaFFFFFF),
				0.3f to  Color(0xaaFFFFFF),
				0.36f to Color(0xaaFFFFFF),
				0.41f to Color(0xaaFFFFFF),
				0.43f to Color(0xaaFFFFFF),
				0.51f to Color(0xaaFCFEFF),
				0.61f to Color(0xaaF6FBFF),
				0.74f to Color(0xffEBF7FF),
				0.87f to Color(0xffDCF2FF),
				1f to    Color(0xffCBECFF),
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
					moveTo(12.3311f, 6.87978f)
					curveTo(12.3311f, 6.8798f, 12.327f, 6.8879f, 12.3229f, 6.8961f)
					curveTo(12.176f, 7.3082f, 12.2127f, 7.7243f, 12.3923f, 8.0955f)
					curveTo(12.5229f, 8.0548f, 12.6495f, 8.0058f, 12.772f, 7.9487f)
					curveTo(12.5066f, 7.6345f, 12.3515f, 7.2633f, 12.3311f, 6.8798f)
					verticalLineTo(6.87978f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xFFFFFFFF),
				0.1f to  Color(0xFFFFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to    Color(0xFFCBECFF),
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
					moveTo(10.4002f, 6.15765f)
					curveTo(10.0532f, 6.0801f, 9.7471f, 5.9414f, 9.494f, 5.766f)
					curveTo(9.3307f, 5.8394f, 9.1552f, 5.8966f, 8.9756f, 5.9455f)
					curveTo(9.1062f, 6.1495f, 9.1837f, 6.3698f, 9.2123f, 6.6024f)
					curveTo(9.3511f, 6.5616f, 9.4899f, 6.5167f, 9.6165f, 6.4636f)
					curveTo(9.8532f, 6.6268f, 10.1349f, 6.7492f, 10.4533f, 6.8227f)
					curveTo(11.135f, 6.9777f, 11.8249f, 6.8553f, 12.3515f, 6.5493f)
					curveTo(12.3678f, 6.4432f, 12.3923f, 6.3372f, 12.4291f, 6.2311f)
					curveTo(12.5066f, 6.0108f, 12.6332f, 5.8109f, 12.7883f, 5.6314f)
					curveTo(12.2086f, 6.1291f, 11.2942f, 6.3576f, 10.4002f, 6.1577f)
					verticalLineTo(6.15765f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xFFFFFFFF),
				0.1f to  Color(0xCBFFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FCFEFF),
				0.61f to Color(0xFFF6FBFF),
				0.74f to Color(0xFFEBF7FF),
				0.87f to Color(0xFFDCF2FF),
				1f to    Color(0xFFCBECFF),
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
					moveTo(9.22049f, 6.78186f)
					curveTo(9.2205f, 6.8349f, 9.2205f, 6.8839f, 9.2205f, 6.9369f)
					curveTo(9.2042f, 7.0838f, 9.1633f, 7.2225f, 9.1062f, 7.3571f)
					curveTo(9.1838f, 7.4387f, 9.2695f, 7.5162f, 9.3593f, 7.5856f)
					curveTo(9.3593f, 7.5733f, 9.3634f, 7.557f, 9.3674f, 7.5448f)
					curveTo(9.4001f, 7.2755f, 9.343f, 7.0185f, 9.2246f, 6.7819f)
					horizontalLineTo(9.22049f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xaaFFFFFF),
				0.18f to Color(0xaaFFFFFF),
				0.24f to Color(0xaaFFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0xFFF0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(15.5356f, 4.77869f)
					curveTo(14.9559f, 5.0847f, 14.2252f, 5.2152f, 13.4823f, 5.0969f)
					curveTo(13.2986f, 5.1948f, 13.1271f, 5.3131f, 12.9761f, 5.4437f)
					curveTo(13.1679f, 5.513f, 13.368f, 5.5702f, 13.5802f, 5.6028f)
					curveTo(14.5681f, 5.766f, 15.5356f, 5.4845f, 16.152f, 4.9378f)
					curveTo(16.0173f, 4.8888f, 15.8785f, 4.844f, 15.7315f, 4.8113f)
					curveTo(15.6662f, 4.795f, 15.6009f, 4.7909f, 15.5356f, 4.7787f)
					verticalLineTo(4.77869f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x11FFFFFF),
				0.1f to  Color(0x11FFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0xCBDFF4FF),
				0.87f to Color(0xCBC7ECFF),
				1f to    Color(0xCBAAE3FF),
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
					moveTo(20.1974f, 5.69664f)
					curveTo(19.6912f, 6.4351f, 18.736f, 6.9124f, 17.6787f, 6.9736f)
					curveTo(17.6665f, 7.1164f, 17.6379f, 7.2592f, 17.5848f, 7.4061f)
					curveTo(17.3603f, 8.0303f, 16.797f, 8.5035f, 16.0949f, 8.7401f)
					curveTo(16.4296f, 9.7519f, 17.5318f, 10.5434f, 18.9238f, 10.6536f)
					curveTo(20.7036f, 10.7923f, 22.2753f, 9.7723f, 22.4385f, 8.373f)
					curveTo(22.5814f, 7.1572f, 21.614f, 6.0597f, 20.1974f, 5.6966f)
					verticalLineTo(5.69664f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x11FFFFFF),
				0.1f to  Color(0x11FFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0xAAFFFFFF),
				0.41f to Color(0xAAFFFFFF),
				0.43f to Color(0xAAFFFFFF),
				0.51f to Color(0xAAFBFDFF),
				0.61f to Color(0xAAF0FAFF),
				0.74f to Color(0xAADFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(20.4913f, 5.78231f)
					curveTo(20.3975f, 5.7497f, 20.2995f, 5.7211f, 20.1974f, 5.6925f)
					curveTo(19.6912f, 6.431f, 18.736f, 6.9083f, 17.6787f, 6.9695f)
					curveTo(17.6665f, 7.1123f, 17.6379f, 7.2551f, 17.5848f, 7.402f)
					curveTo(17.3603f, 8.0262f, 16.797f, 8.4994f, 16.0949f, 8.7361f)
					curveTo(16.1806f, 8.9972f, 16.3194f, 9.242f, 16.499f, 9.4623f)
					curveTo(17.2256f, 9.1644f, 17.7849f, 8.6218f, 17.9563f, 7.9487f)
					curveTo(17.9931f, 7.8018f, 18.0094f, 7.6549f, 18.0094f, 7.5121f)
					curveTo(19.1483f, 7.3367f, 20.1199f, 6.6799f, 20.4954f, 5.7823f)
					horizontalLineTo(20.4913f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xAAFFFFFF),
				0.18f to Color(0xAAFFFFFF),
				0.24f to Color(0xAAFFFFFF),
				0.3f to  Color(0xAAFFFFFF),
				0.36f to Color(0xAAFFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0xFFDFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(22.4508f, 8.19754f)
					curveTo(22.4508f, 8.2547f, 22.4508f, 8.3118f, 22.4385f, 8.3689f)
					curveTo(22.4181f, 8.5484f, 22.3732f, 8.7197f, 22.312f, 8.8829f)
					curveTo(22.41f, 9.2093f, 22.4957f, 9.5439f, 22.5651f, 9.8866f)
					curveTo(22.7365f, 9.6173f, 22.8508f, 9.3154f, 22.8876f, 8.9972f)
					curveTo(22.8998f, 8.9033f, 22.8998f, 8.8095f, 22.8998f, 8.7157f)
					curveTo(22.7774f, 8.528f, 22.6222f, 8.3526f, 22.4549f, 8.2016f)
					lineTo(22.4508f, 8.19754f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xFFFFFFFF),
				0.18f to Color(0xAAFFFFFF),
				0.24f to Color(0xAAFFFFFF),
				0.3f to  Color(0xAAFFFFFF),
				0.36f to Color(0xAAFFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0x11DFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(5.45673f, 19.9595f)
					curveTo(5.6119f, 19.7025f, 5.8241f, 19.474f, 6.0854f, 19.2864f)
					curveTo(5.269f, 19.0049f, 4.6117f, 18.4827f, 4.2402f, 17.834f)
					curveTo(4.0525f, 17.834f, 3.8647f, 17.8176f, 3.6728f, 17.7891f)
					curveTo(3.0034f, 17.6871f, 2.4033f, 17.4341f, 1.9257f, 17.0792f)
					curveTo(1.8562f, 17.1975f, 1.795f, 17.324f, 1.746f, 17.4586f)
					curveTo(2.1828f, 17.8503f, 2.7421f, 18.1563f, 3.3912f, 18.3235f)
					curveTo(3.5789f, 18.3725f, 3.7667f, 18.4011f, 3.9504f, 18.4255f)
					curveTo(4.228f, 19.0538f, 4.7628f, 19.5924f, 5.4567f, 19.9595f)
					verticalLineTo(19.9595f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0x11FFFFFF),
				0.1f to  Color(0x11FFFFFF),
				0.18f to Color(0x11FFFFFF),
				0.24f to Color(0x11FFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xFFFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xFFFBFDFF),
				0.61f to Color(0xAAF0FAFF),
				0.74f to Color(0xAADFF4FF),
				0.87f to Color(0xFFC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(5.18729f, 20.9468f)
					curveTo(5.1791f, 20.7225f, 5.22f, 20.5021f, 5.2975f, 20.2982f)
					curveTo(4.8852f, 20.6409f, 4.6158f, 21.0978f, 4.579f, 21.6159f)
					curveTo(4.5627f, 21.8322f, 4.5913f, 22.0484f, 4.6525f, 22.2524f)
					curveTo(5.024f, 22.2972f, 5.3751f, 22.2605f, 5.7016f, 22.1504f)
					curveTo(5.3914f, 21.8158f, 5.2036f, 21.3997f, 5.1914f, 20.9509f)
					lineTo(5.18729f, 20.9468f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xAAFFFFFF),
				0.1f to  Color(0xAAFFFFFF),
				0.18f to Color(0xAAFFFFFF),
				0.24f to Color(0xAAFFFFFF),
				0.3f to  Color(0x11FFFFFF),
				0.36f to Color(0x11FFFFFF),
				0.41f to Color(0x11FFFFFF),
				0.43f to Color(0x11FFFFFF),
				0.51f to Color(0x11FBFDFF),
				0.61f to Color(0x11F0FAFF),
				0.74f to Color(0xCBDFF4FF),
				0.87f to Color(0xCBC7ECFF),
				1f to    Color(0xCBAAE3FF),
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
					moveTo(10.588f, 18.5969f)
					curveTo(10.8207f, 18.6458f, 11.0575f, 18.6662f, 11.2983f, 18.6744f)
					curveTo(11.3351f, 18.4337f, 11.4085f, 18.193f, 11.5432f, 17.9645f)
					curveTo(11.282f, 17.9645f, 11.0207f, 17.936f, 10.7636f, 17.8829f)
					curveTo(10.1798f, 18.8498f, 8.9511f, 19.5189f, 7.5182f, 19.5189f)
					curveTo(7.4774f, 19.5189f, 7.4406f, 19.5189f, 7.4039f, 19.5148f)
					curveTo(7.5509f, 19.7596f, 7.7509f, 19.984f, 7.9958f, 20.1798f)
					curveTo(9.1429f, 20.0126f, 10.0981f, 19.4128f, 10.5921f, 18.5969f)
					horizontalLineTo(10.588f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xCBFFFFFF),
				0.1f to  Color(0xCBFFFFFF),
				0.18f to Color(0xAAFFFFFF),
				0.24f to Color(0xAAFFFFFF),
				0.3f to  Color(0xAAFFFFFF),
				0.36f to Color(0xAAFFFFFF),
				0.41f to Color(0xCBFFFFFF),
				0.43f to Color(0xFFFFFFFF),
				0.51f to Color(0xAAFBFDFF),
				0.61f to Color(0xAAF0FAFF),
				0.74f to Color(0xAADFF4FF),
				0.87f to Color(0xAAC7ECFF),
				1f to    Color(0xAAAAE3FF),
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
					moveTo(11.2779f, 18.858f)
					curveTo(11.0126f, 19.4414f, 11.0493f, 20.0738f, 11.3555f, 20.6286f)
					curveTo(11.5351f, 20.5593f, 11.7065f, 20.4777f, 11.8657f, 20.3797f)
					curveTo(11.4534f, 19.9391f, 11.2493f, 19.4006f, 11.2779f, 18.8621f)
					verticalLineTo(18.858f)
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
					moveTo(16.1683f, 18.1155f)
					curveTo(15.2417f, 18.1155f, 14.4212f, 17.7442f, 13.9231f, 17.1812f)
					curveTo(13.8864f, 17.2098f, 13.8578f, 17.2383f, 13.8211f, 17.2669f)
					curveTo(13.1761f, 17.7442f, 12.3556f, 17.9727f, 11.5432f, 17.9645f)
					curveTo(10.9432f, 19.0089f, 11.3636f, 20.2737f, 12.5964f, 20.9264f)
					curveTo(13.9599f, 21.6486f, 15.7928f, 21.3466f, 16.6949f, 20.2573f)
					curveTo(17.2623f, 19.5679f, 17.3236f, 18.7315f, 16.948f, 18.0257f)
					curveTo(16.699f, 18.0828f, 16.4418f, 18.1155f, 16.1683f, 18.1155f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to    Color(0xAAFFFFFF),
				0.1f to  Color(0xAAFFFFFF),
				0.18f to Color(0xAAFFFFFF),
				0.24f to Color(0xAAFFFFFF),
				0.3f to  Color(0xCBFFFFFF),
				0.36f to Color(0xFFFFFFFF),
				0.41f to Color(0xAAFFFFFF),
				0.43f to Color(0xAAFFFFFF),
				0.51f to Color(0xAAFBFDFF),
				0.61f to Color(0xAAF0FAFF),
				0.74f to Color(0xAADFF4FF),
				0.87f to Color(0xAAC7ECFF),
				1f to    Color(0xFFAAE3FF),
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
					moveTo(16.948f, 18.0257f)
					curveTo(16.699f, 18.0828f, 16.4418f, 18.1155f, 16.1683f, 18.1155f)
					curveTo(15.2417f, 18.1155f, 14.4212f, 17.7442f, 13.9231f, 17.1812f)
					curveTo(13.8864f, 17.2098f, 13.8578f, 17.2383f, 13.8211f, 17.2669f)
					curveTo(13.1761f, 17.7442f, 12.3556f, 17.9727f, 11.5432f, 17.9645f)
					curveTo(11.2411f, 18.4949f, 11.2003f, 19.0824f, 11.3922f, 19.6168f)
					curveTo(12.2372f, 19.5271f, 13.0618f, 19.1762f, 13.6619f, 18.5846f)
					curveTo(13.6945f, 18.552f, 13.7231f, 18.5194f, 13.7517f, 18.4867f)
					curveTo(14.3232f, 18.9722f, 15.1886f, 19.2252f, 16.1071f, 19.0905f)
					curveTo(16.4949f, 19.0334f, 16.8501f, 18.9151f, 17.1685f, 18.7519f)
					curveTo(17.1399f, 18.503f, 17.0705f, 18.2542f, 16.948f, 18.0257f)
					verticalLineTo(18.0257f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xCBFCFEFF),
				0.48f to Color(0xCBF2FAFF),
				0.66f to Color(0xCBE2F5FF),
				0.82f to Color(0xCBCCEEFF),
				0.97f to Color(0xCBB0E4FF),
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
					moveTo(13.9232f, 17.1812f)
					curveTo(13.8619f, 17.1118f, 13.8088f, 17.0384f, 13.7599f, 16.9609f)
					curveTo(13.7599f, 17.0139f, 13.7599f, 17.0629f, 13.7639f, 17.1159f)
					curveTo(13.768f, 17.173f, 13.7844f, 17.2261f, 13.7966f, 17.2791f)
					curveTo(13.8048f, 17.275f, 13.8129f, 17.2669f, 13.8211f, 17.2628f)
					curveTo(13.8578f, 17.2342f, 13.8905f, 17.2057f, 13.9232f, 17.1771f)
					verticalLineTo(17.1812f)
					close()
}
				path(
    				fill = Brush.radialGradient(
		center = Offset(0f, 0f),
		radius = 1f,
		colorStops = arrayOf(
				0f to Color(0xFFFFFFFF),
				0.28f to Color(0xAAFCFEFF),
				0.48f to Color(0xAAF2FAFF),
				0.66f to Color(0xAAE2F5FF),
				0.82f to Color(0xAACCEEFF),
				0.97f to Color(0xAAB0E4FF),
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
					moveTo(20.8424f, 18.2542f)
					curveTo(20.6587f, 18.2868f, 20.4669f, 18.3031f, 20.2709f, 18.3031f)
					curveTo(19.3973f, 18.3031f, 18.6258f, 17.9686f, 18.14f, 17.4505f)
					curveTo(17.8175f, 17.7157f, 17.4093f, 17.9156f, 16.9521f, 18.0257f)
					curveTo(17.3277f, 18.7315f, 17.2664f, 19.572f, 16.699f, 20.2574f)
					curveTo(16.6133f, 20.3594f, 16.5194f, 20.4532f, 16.4173f, 20.5429f)
					curveTo(16.699f, 20.7918f, 17.046f, 20.9876f, 17.4461f, 21.11f)
					curveTo(17.9278f, 20.3797f, 17.9073f, 19.5556f, 17.4746f, 18.8988f)
					curveTo(17.9196f, 18.7478f, 18.3074f, 18.5112f, 18.6054f, 18.2175f)
					curveTo(19.1401f, 18.6866f, 19.9362f, 18.9518f, 20.8057f, 18.8743f)
					curveTo(20.8873f, 18.8662f, 20.969f, 18.8539f, 21.0465f, 18.8417f)
					curveTo(21.0139f, 18.6336f, 20.9445f, 18.4378f, 20.8424f, 18.2542f)
					close()
}
}.build()
return _Unknown!!
		}

