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
					moveTo(5.41154f, 10.1361f)
					curveTo(6.8182f, 9.0717f, 7.3173f, 7.3253f, 6.5263f, 6.2354f)
					curveTo(5.7352f, 5.1454f, 3.9537f, 5.1247f, 2.547f, 6.1891f)
					curveTo(1.1403f, 7.2534f, 0.6412f, 8.9998f, 1.4323f, 10.0898f)
					curveTo(2.2233f, 11.1797f, 4.0049f, 11.2004f, 5.4115f, 10.1361f)
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
					moveTo(23.7196f, 10.7549f)
					curveTo(23.8744f, 9.2967f, 22.7979f, 7.9815f, 21.3151f, 7.8173f)
					curveTo(19.8323f, 7.6531f, 18.5047f, 8.702f, 18.3498f, 10.1602f)
					curveTo(18.1949f, 11.6183f, 19.2714f, 12.9335f, 20.7542f, 13.0977f)
					curveTo(22.2371f, 13.262f, 23.5647f, 12.213f, 23.7196f, 10.7549f)
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
					moveTo(19.7322f, 3.69328f)
					curveTo(19.8816f, 2.2864f, 18.6084f, 0.9914f, 16.8883f, 0.801f)
					curveTo(15.1683f, 0.6105f, 13.6527f, 1.5966f, 13.5033f, 3.0035f)
					curveTo(13.3538f, 4.4104f, 14.6271f, 5.7053f, 16.3471f, 5.8958f)
					curveTo(18.0672f, 6.0863f, 19.5827f, 5.1002f, 19.7322f, 3.6933f)
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
					moveTo(21.1468f, 4.49396f)
					curveTo(20.993f, 4.4515f, 20.831f, 4.4218f, 20.6648f, 4.4049f)
					curveTo(19.1816f, 4.2394f, 17.8728f, 5.0921f, 17.744f, 6.3054f)
					curveTo(17.6941f, 6.7848f, 17.8354f, 7.2472f, 18.1138f, 7.646f)
					lineTo(19.4682f, 7.7351f)
					curveTo(18.9904f, 6.56f, 19.1815f, 4.5746f, 21.1468f, 4.4982f)
					verticalLineTo(4.49396f)
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
					moveTo(12.1807f, 23.7202f)
					curveTo(18.2546f, 23.7202f, 23.1785f, 18.6926f, 23.1785f, 12.4907f)
					curveTo(23.1785f, 6.2889f, 18.2546f, 1.2613f, 12.1807f, 1.2613f)
					curveTo(6.1068f, 1.2613f, 1.183f, 6.2889f, 1.183f, 12.4907f)
					curveTo(1.183f, 18.6926f, 6.1068f, 23.7202f, 12.1807f, 23.7202f)
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
					moveTo(12.1807f, 23.7202f)
					curveTo(18.2546f, 23.7202f, 23.1785f, 18.6926f, 23.1785f, 12.4907f)
					curveTo(23.1785f, 6.2889f, 18.2546f, 1.2613f, 12.1807f, 1.2613f)
					curveTo(6.1068f, 1.2613f, 1.183f, 6.2889f, 1.183f, 12.4907f)
					curveTo(1.183f, 18.6926f, 6.1068f, 23.7202f, 12.1807f, 23.7202f)
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
					moveTo(8.59098f, 12.9659f)
					curveTo(9.1761f, 12.9659f, 9.6504f, 12.2346f, 9.6504f, 11.3326f)
					curveTo(9.6504f, 10.4305f, 9.1761f, 9.6993f, 8.591f, 9.6993f)
					curveTo(8.0059f, 9.6993f, 7.5315f, 10.4305f, 7.5315f, 11.3326f)
					curveTo(7.5315f, 12.2346f, 8.0059f, 12.9659f, 8.591f, 12.9659f)
					close()
}
				path(
    				fill = Brush.linearGradient(
		start = Offset(8.59098f, 9.6908f),
		end = Offset(8.59098f, 11.2138f),
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
					moveTo(8.59098f, 10.2508f)
					curveTo(9.048f, 10.2508f, 9.4427f, 10.6538f, 9.6504f, 11.252f)
					curveTo(9.638f, 10.3696f, 9.1685f, 9.6569f, 8.591f, 9.6569f)
					curveTo(8.0135f, 9.6569f, 7.544f, 10.3653f, 7.5315f, 11.252f)
					curveTo(7.7393f, 10.6538f, 8.134f, 10.2508f, 8.591f, 10.2508f)
					verticalLineTo(10.2508f)
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
					moveTo(15.7746f, 12.9659f)
					curveTo(16.3597f, 12.9659f, 16.8341f, 12.2346f, 16.8341f, 11.3326f)
					curveTo(16.8341f, 10.4305f, 16.3597f, 9.6993f, 15.7746f, 9.6993f)
					curveTo(15.1895f, 9.6993f, 14.7151f, 10.4305f, 14.7151f, 11.3326f)
					curveTo(14.7151f, 12.2346f, 15.1895f, 12.9659f, 15.7746f, 12.9659f)
					close()
}
				path(
    				fill = Brush.linearGradient(
		start = Offset(15.7746f, 9.72899f),
		end = Offset(15.7746f, 11.252f),
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
					moveTo(15.7746f, 10.2932f)
					curveTo(15.3176f, 10.2932f, 14.9229f, 10.6962f, 14.7151f, 11.2944f)
					curveTo(14.7276f, 10.412f, 15.1971f, 9.6993f, 15.7746f, 9.6993f)
					curveTo(16.3521f, 9.6993f, 16.8216f, 10.4078f, 16.8341f, 11.2944f)
					curveTo(16.6263f, 10.6962f, 16.2316f, 10.2932f, 15.7746f, 10.2932f)
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
					moveTo(6.79798f, 21.8977f)
					curveTo(8.0815f, 21.1174f, 8.3483f, 19.158f, 7.3939f, 17.5213f)
					curveTo(6.4395f, 15.8846f, 4.6253f, 15.1904f, 3.3418f, 15.9707f)
					curveTo(2.0583f, 16.751f, 1.7915f, 18.7104f, 2.7459f, 20.3471f)
					curveTo(3.7003f, 21.9838f, 5.5145f, 22.678f, 6.798f, 21.8977f)
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
					moveTo(6.65187f, 21.5676f)
					curveTo(4.8861f, 21.6864f, 3.0787f, 20.6003f, 2.2478f, 19.0392f)
					curveTo(2.5012f, 20.2949f, 3.3654f, 21.4658f, 4.5246f, 21.9664f)
					curveTo(5.5965f, 22.4288f, 6.6436f, 22.1912f, 7.2959f, 21.4615f)
					curveTo(7.0923f, 21.5124f, 6.8804f, 21.5506f, 6.6519f, 21.5633f)
					verticalLineTo(21.5676f)
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
					moveTo(18.4516f, 22.0372f)
					curveTo(19.016f, 20.9532f, 18.3979f, 19.4904f, 17.0708f, 18.7699f)
					curveTo(15.7438f, 18.0494f, 14.2104f, 18.3441f, 13.6459f, 19.4281f)
					curveTo(13.0814f, 20.5122f, 13.6996f, 21.975f, 15.0266f, 22.6954f)
					curveTo(16.3537f, 23.4159f, 17.8871f, 23.1212f, 18.4516f, 22.0372f)
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
					moveTo(16.8561f, 23.0651f)
					curveTo(16.7065f, 23.0821f, 16.5527f, 23.0906f, 16.3949f, 23.0821f)
					curveTo(14.9656f, 23.0185f, 13.6527f, 21.9112f, 13.4616f, 20.6088f)
					curveTo(13.3868f, 20.0955f, 13.499f, 19.6288f, 13.7483f, 19.2555f)
					lineTo(14.8202f, 19.947f)
					curveTo(14.4213f, 21.1094f, 14.949f, 22.6664f, 16.8561f, 23.0651f)
					verticalLineTo(23.0651f)
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
					moveTo(10.8233f, 20.7403f)
					curveTo(12.4846f, 20.7403f, 13.8313f, 19.6387f, 13.8313f, 18.2798f)
					curveTo(13.8313f, 16.9209f, 12.4846f, 15.8192f, 10.8233f, 15.8192f)
					curveTo(9.162f, 15.8192f, 7.8152f, 16.9209f, 7.8152f, 18.2798f)
					curveTo(7.8152f, 19.6387f, 9.162f, 20.7403f, 10.8233f, 20.7403f)
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
					moveTo(8.63196f, 22.9865f)
					curveTo(10.1343f, 22.9418f, 11.3238f, 21.9107f, 11.2887f, 20.6835f)
					curveTo(11.2537f, 19.4563f, 10.0074f, 18.4977f, 8.5051f, 18.5424f)
					curveTo(7.0027f, 18.5871f, 5.8132f, 19.6182f, 5.8483f, 20.8454f)
					curveTo(5.8833f, 22.0726f, 7.1296f, 23.0312f, 8.632f, 22.9865f)
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
					moveTo(19.2991f, 21.1434f)
					curveTo(20.802f, 21.1434f, 22.0205f, 20.1481f, 22.0205f, 18.9204f)
					curveTo(22.0205f, 17.6927f, 20.802f, 16.6974f, 19.2991f, 16.6974f)
					curveTo(17.7961f, 16.6974f, 16.5777f, 17.6927f, 16.5777f, 18.9204f)
					curveTo(16.5777f, 20.1481f, 17.7961f, 21.1434f, 19.2991f, 21.1434f)
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
					moveTo(18.8088f, 21.1094f)
					curveTo(18.9667f, 21.1349f, 19.1329f, 21.1476f, 19.2991f, 21.1476f)
					curveTo(20.7989f, 21.1476f, 22.0205f, 20.1507f, 22.0205f, 18.9246f)
					curveTo(22.0205f, 18.441f, 21.8293f, 17.9913f, 21.5094f, 17.6265f)
					lineTo(20.1467f, 17.6901f)
					curveTo(20.7491f, 18.8101f, 20.7699f, 20.8209f, 18.813f, 21.1137f)
					lineTo(18.8088f, 21.1094f)
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
					moveTo(15.3664f, 21.4305f)
					curveTo(15.4624f, 20.162f, 14.2921f, 19.0352f, 12.7524f, 18.9137f)
					curveTo(11.2127f, 18.7922f, 9.8867f, 19.722f, 9.7907f, 20.9904f)
					curveTo(9.6947f, 22.2589f, 10.865f, 23.3857f, 12.4047f, 23.5072f)
					curveTo(13.9444f, 23.6287f, 15.2704f, 22.6989f, 15.3664f, 21.4305f)
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
					moveTo(14.3321f, 6.39935f)
					curveTo(14.3571f, 5.1602f, 13.1165f, 4.1291f, 11.561f, 4.0964f)
					curveTo(10.0056f, 4.0637f, 8.7244f, 5.0417f, 8.6994f, 6.2809f)
					curveTo(8.6744f, 7.5201f, 9.9151f, 8.5511f, 11.4705f, 8.5838f)
					curveTo(13.0259f, 8.6165f, 14.3071f, 7.6385f, 14.3321f, 6.3994f)
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
					moveTo(6.99636f, 6.80552f)
					curveTo(7.0216f, 5.5523f, 5.7682f, 4.5096f, 4.1967f, 4.4765f)
					curveTo(2.6252f, 4.4435f, 1.3308f, 5.4326f, 1.3055f, 6.6858f)
					curveTo(1.2802f, 7.9391f, 2.5337f, 8.9818f, 4.1052f, 9.0149f)
					curveTo(5.6766f, 9.0479f, 6.9711f, 8.0587f, 6.9964f, 6.8055f)
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
					moveTo(3.8088f, 5.95332f)
					curveTo(2.9072f, 5.8897f, 1.6026f, 7.0012f, 2.1469f, 8.3375f)
					curveTo(1.4406f, 7.7733f, 1.1248f, 6.9291f, 1.4115f, 6.1103f)
					curveTo(1.6441f, 5.4485f, 2.2258f, 4.9436f, 2.9529f, 4.6806f)
					lineTo(3.8088f, 5.95332f)
					verticalLineTo(5.95332f)
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
					moveTo(22.3592f, 6.80792f)
					curveTo(22.6442f, 5.5718f, 21.6441f, 4.2738f, 20.1253f, 3.9086f)
					curveTo(18.6065f, 3.5434f, 17.1441f, 4.2495f, 16.8591f, 5.4855f)
					curveTo(16.574f, 6.7216f, 17.5742f, 8.0197f, 19.093f, 8.3849f)
					curveTo(20.6118f, 8.75f, 22.0741f, 8.044f, 22.3592f, 6.8079f)
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
					moveTo(9.38162f, 7.07388f)
					curveTo(9.4029f, 6.0174f, 8.3471f, 5.1384f, 7.0234f, 5.1106f)
					curveTo(5.6997f, 5.0827f, 4.6093f, 5.9166f, 4.588f, 6.9731f)
					curveTo(4.5667f, 8.0295f, 5.6225f, 8.9085f, 6.9462f, 8.9364f)
					curveTo(8.2699f, 8.9642f, 9.3603f, 8.1303f, 9.3816f, 7.0739f)
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
					moveTo(7.82928f, 4.06328f)
					curveTo(7.8543f, 2.8241f, 6.6136f, 1.793f, 5.0582f, 1.7603f)
					curveTo(3.5028f, 1.7276f, 2.2216f, 2.7056f, 2.1966f, 3.9448f)
					curveTo(2.1716f, 5.184f, 3.4122f, 6.215f, 4.9677f, 6.2478f)
					curveTo(6.5231f, 6.2805f, 7.8043f, 5.3025f, 7.8293f, 4.0633f)
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
					moveTo(13.6456f, 4.61226f)
					curveTo(13.666f, 3.5581f, 12.6094f, 2.682f, 11.2856f, 2.6553f)
					curveTo(9.9619f, 2.6286f, 8.8723f, 3.4616f, 8.8519f, 4.5157f)
					curveTo(8.8315f, 5.5698f, 9.8881f, 6.446f, 11.2119f, 6.4727f)
					curveTo(12.5356f, 6.4993f, 13.6252f, 5.6664f, 13.6456f, 4.6123f)
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
					moveTo(17.0117f, 3.20378f)
					curveTo(17.0368f, 1.9904f, 15.8242f, 0.9802f, 14.3032f, 0.9474f)
					curveTo(12.7822f, 0.9145f, 11.5288f, 1.8716f, 11.5037f, 3.085f)
					curveTo(11.4786f, 4.2984f, 12.6913f, 5.3086f, 14.2123f, 5.3414f)
					curveTo(15.7333f, 5.3742f, 16.9866f, 4.4172f, 17.0117f, 3.2038f)
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
					moveTo(20.9209f, 4.77147f)
					curveTo(20.9493f, 3.3613f, 19.5385f, 2.188f, 17.7697f, 2.1508f)
					curveTo(16.0009f, 2.1136f, 14.544f, 3.2266f, 14.5155f, 4.6368f)
					curveTo(14.4871f, 6.0469f, 15.8979f, 7.2203f, 17.6667f, 7.2575f)
					curveTo(19.4355f, 7.2947f, 20.8924f, 6.1817f, 20.9209f, 4.7715f)
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
					moveTo(14.0934f, 2.09565f)
					curveTo(14.1103f, 0.9829f, 12.9839f, 0.0627f, 11.5775f, 0.0404f)
					curveTo(10.171f, 0.0181f, 9.0172f, 0.9021f, 9.0002f, 2.0149f)
					curveTo(8.9833f, 3.1276f, 10.1097f, 4.0478f, 11.5162f, 4.0701f)
					curveTo(12.9226f, 4.0924f, 14.0765f, 3.2084f, 14.0934f, 2.0957f)
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
					moveTo(20.1883f, 17.9639f)
					curveTo(21.6913f, 17.9639f, 22.9097f, 16.9687f, 22.9097f, 15.741f)
					curveTo(22.9097f, 14.5132f, 21.6913f, 13.518f, 20.1883f, 13.518f)
					curveTo(18.6854f, 13.518f, 17.4669f, 14.5132f, 17.4669f, 15.741f)
					curveTo(17.4669f, 16.9687f, 18.6854f, 17.9639f, 20.1883f, 17.9639f)
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
					moveTo(4.26167f, 6.16119f)
					curveTo(3.4307f, 5.9703f, 2.7909f, 5.4994f, 2.4585f, 4.9139f)
					curveTo(2.3255f, 4.9903f, 2.2009f, 5.0709f, 2.0887f, 5.1642f)
					curveTo(2.4086f, 5.9109f, 3.169f, 6.526f, 4.191f, 6.7636f)
					curveTo(4.3281f, 6.7933f, 4.4653f, 6.8145f, 4.6024f, 6.8315f)
					curveTo(4.6273f, 6.6151f, 4.6938f, 6.42f, 4.7935f, 6.2375f)
					curveTo(4.6148f, 6.2248f, 4.4362f, 6.1994f, 4.2575f, 6.1569f)
					lineTo(4.26167f, 6.16119f)
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
					moveTo(7.49411f, 6.263f)
					curveTo(7.1243f, 6.1994f, 6.7836f, 6.0891f, 6.4803f, 5.9363f)
					curveTo(5.9859f, 6.1697f, 5.4001f, 6.2842f, 4.8018f, 6.2418f)
					curveTo(4.7312f, 6.3733f, 4.6688f, 6.5091f, 4.6356f, 6.6533f)
					curveTo(5.2921f, 6.7297f, 5.9402f, 6.6194f, 6.4803f, 6.3648f)
					curveTo(6.7836f, 6.5175f, 7.1243f, 6.6278f, 7.4941f, 6.6915f)
					curveTo(8.1298f, 6.7975f, 8.7572f, 6.7424f, 9.3097f, 6.5642f)
					curveTo(9.2682f, 6.4327f, 9.2017f, 6.3054f, 9.1269f, 6.1866f)
					curveTo(8.6201f, 6.3224f, 8.0592f, 6.3563f, 7.4941f, 6.263f)
					verticalLineTo(6.263f)
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
					moveTo(12.5505f, 7.1539f)
					curveTo(12.5505f, 7.1539f, 12.5463f, 7.1624f, 12.5422f, 7.1709f)
					curveTo(12.3926f, 7.5994f, 12.43f, 8.0321f, 12.6128f, 8.4181f)
					curveTo(12.7458f, 8.3757f, 12.8746f, 8.3248f, 12.9992f, 8.2654f)
					curveTo(12.7291f, 7.9387f, 12.5713f, 7.5527f, 12.5505f, 7.1539f)
					verticalLineTo(7.1539f)
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
					moveTo(10.5853f, 6.403f)
					curveTo(10.2321f, 6.3224f, 9.9205f, 6.1782f, 9.6629f, 5.9957f)
					curveTo(9.4967f, 6.0721f, 9.3181f, 6.1315f, 9.1352f, 6.1824f)
					curveTo(9.2682f, 6.3945f, 9.3471f, 6.6236f, 9.3762f, 6.8654f)
					curveTo(9.5175f, 6.823f, 9.6588f, 6.7763f, 9.7876f, 6.7212f)
					curveTo(10.0285f, 6.8909f, 10.3152f, 7.0181f, 10.6393f, 7.0945f)
					curveTo(11.3331f, 7.2557f, 12.0353f, 7.1284f, 12.5713f, 6.8103f)
					curveTo(12.5879f, 6.7f, 12.6128f, 6.5897f, 12.6502f, 6.4794f)
					curveTo(12.7291f, 6.2503f, 12.8579f, 6.0424f, 13.0158f, 5.8557f)
					curveTo(12.4258f, 6.3733f, 11.4952f, 6.6109f, 10.5853f, 6.403f)
					verticalLineTo(6.403f)
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
					moveTo(9.38454f, 7.05208f)
					curveTo(9.3845f, 7.1072f, 9.3845f, 7.1581f, 9.3845f, 7.2133f)
					curveTo(9.3679f, 7.366f, 9.3264f, 7.5103f, 9.2682f, 7.6502f)
					curveTo(9.3472f, 7.7351f, 9.4344f, 7.8157f, 9.5258f, 7.8878f)
					curveTo(9.5258f, 7.8751f, 9.5299f, 7.8581f, 9.5341f, 7.8454f)
					curveTo(9.5673f, 7.5654f, 9.5092f, 7.2981f, 9.3887f, 7.0521f)
					horizontalLineTo(9.38454f)
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
					moveTo(15.812f, 4.96909f)
					curveTo(15.222f, 5.2873f, 14.4783f, 5.423f, 13.7221f, 5.3f)
					curveTo(13.5352f, 5.4018f, 13.3607f, 5.5248f, 13.2069f, 5.6606f)
					curveTo(13.4022f, 5.7327f, 13.6058f, 5.7921f, 13.8218f, 5.826f)
					curveTo(14.8273f, 5.9957f, 15.812f, 5.703f, 16.4394f, 5.1345f)
					curveTo(16.3023f, 5.0836f, 16.161f, 5.037f, 16.0114f, 5.003f)
					curveTo(15.945f, 4.986f, 15.8785f, 4.9818f, 15.812f, 4.9691f)
					verticalLineTo(4.96909f)
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
					moveTo(20.5568f, 5.92361f)
					curveTo(20.0416f, 6.6915f, 19.0694f, 7.1878f, 17.9933f, 7.2515f)
					curveTo(17.9808f, 7.3999f, 17.9517f, 7.5484f, 17.8977f, 7.7012f)
					curveTo(17.6692f, 8.3502f, 17.0959f, 8.8423f, 16.3812f, 9.0884f)
					curveTo(16.7219f, 10.1405f, 17.8437f, 10.9635f, 19.2605f, 11.078f)
					curveTo(21.072f, 11.2223f, 22.6716f, 10.1617f, 22.8378f, 8.7066f)
					curveTo(22.9832f, 7.4424f, 21.9985f, 6.3012f, 20.5568f, 5.9236f)
					verticalLineTo(5.92361f)
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
					moveTo(20.8559f, 6.0127f)
					curveTo(20.7604f, 5.9788f, 20.6607f, 5.9491f, 20.5568f, 5.9194f)
					curveTo(20.0416f, 6.6872f, 19.0694f, 7.1836f, 17.9933f, 7.2472f)
					curveTo(17.9808f, 7.3957f, 17.9517f, 7.5442f, 17.8977f, 7.6969f)
					curveTo(17.6692f, 8.346f, 17.0959f, 8.8381f, 16.3812f, 9.0841f)
					curveTo(16.4685f, 9.3557f, 16.6097f, 9.6102f, 16.7925f, 9.8393f)
					curveTo(17.5321f, 9.5296f, 18.1013f, 8.9654f, 18.2758f, 8.2654f)
					curveTo(18.3132f, 8.1127f, 18.3298f, 7.9599f, 18.3298f, 7.8114f)
					curveTo(19.489f, 7.629f, 20.4778f, 6.946f, 20.8601f, 6.0127f)
					horizontalLineTo(20.8559f)
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
					moveTo(22.8502f, 8.52417f)
					curveTo(22.8502f, 8.5836f, 22.8502f, 8.643f, 22.8378f, 8.7023f)
					curveTo(22.817f, 8.889f, 22.7713f, 9.0672f, 22.709f, 9.2369f)
					curveTo(22.8087f, 9.5763f, 22.8959f, 9.9241f, 22.9666f, 10.2805f)
					curveTo(23.1411f, 10.0005f, 23.2574f, 9.6866f, 23.2948f, 9.3557f)
					curveTo(23.3072f, 9.2581f, 23.3073f, 9.1605f, 23.3073f, 9.063f)
					curveTo(23.1826f, 8.8678f, 23.0247f, 8.6854f, 22.8544f, 8.5284f)
					lineTo(22.8502f, 8.52417f)
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
					moveTo(14.1709f, 17.8658f)
					curveTo(14.1085f, 17.7937f, 14.0545f, 17.7173f, 14.0047f, 17.6367f)
					curveTo(14.0047f, 17.6918f, 14.0047f, 17.7427f, 14.0088f, 17.7979f)
					curveTo(14.013f, 17.8573f, 14.0296f, 17.9124f, 14.0421f, 17.9676f)
					curveTo(14.0504f, 17.9633f, 14.0587f, 17.9549f, 14.067f, 17.9506f)
					curveTo(14.1044f, 17.9209f, 14.1376f, 17.8912f, 14.1709f, 17.8615f)
					verticalLineTo(17.8658f)
					close()
}
}.build()
return _Unknown!!
		}

