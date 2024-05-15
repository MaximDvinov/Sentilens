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

private var _Terrible: ImageVector? = null

internal val Terrible: ImageVector
    get() {
        if (_Terrible != null) {
            return _Terrible!!
        }
        _Terrible = ImageVector.Builder(
            name = "Terrible",
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
                        start = Offset(10.9325f, 7.38913f),
                        end = Offset(10.849f, 5.87444f),
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
                    moveTo(13.405f, 6.29257f)
                    curveTo(13.375f, 5.7151f, 12.835f, 5.3851f, 11.9425f, 5.4301f)
                    curveTo(11.185f, 5.4751f, 9.5425f, 6.0676f, 8.4925f, 7.8976f)
                    curveTo(8.2975f, 8.2351f, 8.635f, 8.4001f, 8.83f, 8.1751f)
                    curveTo(9.4975f, 7.4176f, 11.335f, 6.3901f, 12.82f, 6.5026f)
                    curveTo(13.42f, 6.5476f, 13.405f, 6.2926f, 13.405f, 6.2926f)
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
                    moveTo(12.085f, 12.5176f)
                    curveTo(12.7229f, 12.5176f, 13.24f, 11.7352f, 13.24f, 10.7701f)
                    curveTo(13.24f, 9.805f, 12.7229f, 9.0226f, 12.085f, 9.0226f)
                    curveTo(11.4471f, 9.0226f, 10.93f, 9.805f, 10.93f, 10.7701f)
                    curveTo(10.93f, 11.7352f, 11.4471f, 12.5176f, 12.085f, 12.5176f)
                    close()
                }
                path(
                    fill = Brush.linearGradient(
                        start = Offset(12.0822f, 9.01081f),
                        end = Offset(12.0822f, 10.6394f),
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
                    moveTo(12.085f, 9.61511f)
                    curveTo(12.58f, 9.6151f, 13.015f, 10.0501f, 13.24f, 10.6876f)
                    curveTo(13.225f, 9.7426f, 12.715f, 8.9851f, 12.085f, 8.9851f)
                    curveTo(11.455f, 8.9851f, 10.945f, 9.7426f, 10.93f, 10.6876f)
                    curveTo(11.155f, 10.0426f, 11.5825f, 9.6151f, 12.085f, 9.6151f)
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
                    moveTo(19.915f, 12.5176f)
                    curveTo(20.5529f, 12.5176f, 21.07f, 11.7352f, 21.07f, 10.7701f)
                    curveTo(21.07f, 9.805f, 20.5529f, 9.0226f, 19.915f, 9.0226f)
                    curveTo(19.2771f, 9.0226f, 18.76f, 9.805f, 18.76f, 10.7701f)
                    curveTo(18.76f, 11.7352f, 19.2771f, 12.5176f, 19.915f, 12.5176f)
                    close()
                }
                path(
                    fill = Brush.linearGradient(
                        start = Offset(21.0746f, 7.43233f),
                        end = Offset(21.1581f, 5.91764f),
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
                    moveTo(18.5949f, 6.33005f)
                    curveTo(18.6249f, 5.7526f, 19.1649f, 5.4226f, 20.0574f, 5.4676f)
                    curveTo(20.8149f, 5.5126f, 22.4574f, 6.1051f, 23.5074f, 7.9351f)
                    curveTo(23.7024f, 8.2726f, 23.3649f, 8.4375f, 23.1699f, 8.2126f)
                    curveTo(22.5024f, 7.455f, 20.6649f, 6.4276f, 19.1799f, 6.54f)
                    curveTo(18.5799f, 6.5926f, 18.5949f, 6.33f, 18.5949f, 6.33f)
                    close()
                }
                path(
                    fill = Brush.linearGradient(
                        start = Offset(19.9179f, 9.05367f),
                        end = Offset(19.9179f, 10.6822f),
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
                    moveTo(19.915f, 9.65262f)
                    curveTo(19.42f, 9.6526f, 18.985f, 10.0876f, 18.76f, 10.7251f)
                    curveTo(18.775f, 9.7801f, 19.285f, 9.0226f, 19.915f, 9.0226f)
                    curveTo(20.545f, 9.0226f, 21.055f, 9.7801f, 21.07f, 10.7251f)
                    curveTo(20.845f, 10.0876f, 20.4175f, 9.6526f, 19.915f, 9.6526f)
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
                    moveTo(21.2949f, 18.8999f)
                    curveTo(21.5274f, 18.7124f, 21.5724f, 18.3674f, 21.3924f, 18.1274f)
                    curveTo(20.3349f, 16.7024f, 18.6474f, 15.4199f, 15.9999f, 15.4199f)
                    curveTo(13.3524f, 15.4199f, 11.6649f, 16.7024f, 10.6074f, 18.1274f)
                    curveTo(10.4274f, 18.3674f, 10.4724f, 18.7124f, 10.7049f, 18.8999f)
                    curveTo(10.9524f, 19.1024f, 11.3274f, 19.0574f, 11.5149f, 18.7949f)
                    curveTo(12.4224f, 17.5949f, 13.8099f, 16.5899f, 15.9924f, 16.5899f)
                    curveTo(18.1749f, 16.5899f, 19.5699f, 17.5949f, 20.4699f, 18.7949f)
                    curveTo(20.6724f, 19.0574f, 21.0399f, 19.1024f, 21.2949f, 18.8999f)
                    close()
                }
                path(
                    fill = Brush.linearGradient(
                        start = Offset(10.4954f, 16.9722f),
                        end = Offset(21.5046f, 16.9722f),
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
                    moveTo(21.4975f, 18.5249f)
                    curveTo(21.5125f, 18.3899f, 21.4825f, 18.2474f, 21.3925f, 18.1274f)
                    curveTo(20.335f, 16.7024f, 18.6475f, 15.4199f, 16f, 15.4199f)
                    curveTo(13.3525f, 15.4199f, 11.665f, 16.7024f, 10.6075f, 18.1274f)
                    curveTo(10.5175f, 18.2474f, 10.4875f, 18.3899f, 10.5025f, 18.5249f)
                    curveTo(11.65f, 17.1299f, 13.39f, 15.9524f, 16f, 15.9524f)
                    curveTo(18.61f, 15.9524f, 20.3575f, 17.1299f, 21.4975f, 18.5249f)
                    close()
                }
            }
        }.build()
        return _Terrible!!
    }

