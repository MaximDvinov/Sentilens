package org.diary.advice.player.components

import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.RoundRect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.clipPath
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.toSize
import kotlinx.coroutines.delay
import org.diary.composeui.isCompact
import org.diary.utils.TypeDevice
import org.diary.utils.getTypeDevice
import kotlin.math.cos
import kotlin.math.sin


@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
fun WaveAnimation(modifier: Modifier, isPlaying: Boolean) {
    val color = MaterialTheme.colors.primary
    val colorBackground = MaterialTheme.colors.background
    var sizeWave by remember { mutableStateOf(Size.Zero) }
    val numPoints = remember(sizeWave) { (sizeWave.width / 15).toInt() + 5 }
    var isPlayingLocalState by remember {
        mutableStateOf(true)
    }
    val windowSizeClass = calculateWindowSizeClass()

    val animatedAmplitude by animateFloatAsState(
        if (!isPlaying) 0.2f else 1f, animationSpec = spring(stiffness = Spring.StiffnessLow)
    ) {
        isPlayingLocalState = false
    }

    Box(
        modifier = modifier.onSizeChanged { sizeWave = it.toSize() },
        contentAlignment = Alignment.Center
    ) {
        var a by remember { mutableStateOf(0.0f) }

        var wavePoints: List<Offset> by remember(sizeWave) {
            mutableStateOf(generateWavePoints(numPoints, 0.15f, 0f, a) { x, waveLength, a ->
                sin(x * waveLength + a) * cos((x * sin(10f)) / 12)
            })
        }
        var wavePoints2: List<Offset> by remember(sizeWave) {
            mutableStateOf(generateWavePoints(numPoints, 0.24f, 0f, a) { x, waveLength, a ->
                cos(x * waveLength + a) * sin(x / 11)
            })
        }
        var wavePoints3: List<Offset> by remember(sizeWave) {
            mutableStateOf(generateWavePoints(numPoints, 0.20f, 0f, a) { x, waveLength, a ->
                cos(x * waveLength + a) * cos(x / 10f)
            })
        }

        val del = 10f
        val waveHeightK = if (getTypeDevice() == TypeDevice.MOBILE) 2f else 1f

        LaunchedEffect(isPlaying, sizeWave) {
            while (isPlaying || !isPlayingLocalState) {
                wavePoints = generateWavePoints(
                    numPoints, 0.14f * waveHeightK, 80f * animatedAmplitude, a
                ) { x, waveLength, a ->
                    cos(x * waveLength + a) * cos((x * sin(10f)) / del)

                }
                wavePoints2 = generateWavePoints(
                    numPoints, 0.17f * waveHeightK, 40f * animatedAmplitude, a
                ) { x, waveLength, a ->
                    cos(x * waveLength + a) * sin(x / del)
                }
                wavePoints3 = generateWavePoints(
                    numPoints, 0.20f * waveHeightK, 30f * animatedAmplitude, a
                ) { x, waveLength, a ->
                    cos(x * waveLength + a) * cos(x / del)
                }
                delay(16)
                a += if (isPlaying) 0.03f else animatedAmplitude / 10
            }
        }

        Canvas(Modifier.fillMaxSize()) {
            if (windowSizeClass.isCompact()) {
                drawCircle(
                    Brush.radialGradient(listOf(colorBackground, colorBackground.copy(0.8f))),
                    sizeWave.width / 2
                )
            } else {
                drawRoundRect(
                    Brush.radialGradient(listOf(colorBackground, colorBackground.copy(0.8f))),
                    size = sizeWave,
                    cornerRadius = CornerRadius(sizeWave.width / 2, sizeWave.width / 2)
                )
            }

            clipPath(Path().apply {
                if (windowSizeClass.isCompact()) {
                    addOval(
                        Rect(
                            Offset(sizeWave.width / 2, sizeWave.height / 2),
                            radius = sizeWave.width / 2
                        )
                    )
                } else {
                    addRoundRect(
                        RoundRect(
                            rect = Rect(
                                Offset(sizeWave.width / 2, sizeWave.height / 2),
                                radius = sizeWave.width / 2
                            ),
                            cornerRadius = CornerRadius(sizeWave.width / 2, sizeWave.width / 2)
                        )
                    )
                }

            }) {
                wavePoints(listOf(Offset(0f, sizeWave.height * 2)) + wavePoints.map {
                    it.copy(y = it.y + sizeWave.height / 2)
                } + listOf(
                    Offset(sizeWave.width, sizeWave.height * 2), Offset(0f, sizeWave.height * 2)
                ), color = color.copy(0.5f), strokeWidth = 5.dp.toPx())

                wavePoints(listOf(Offset(0f, sizeWave.height * 2)) + wavePoints2.map {
                    it.copy(y = it.y + sizeWave.height / 2)
                } + listOf(
                    Offset(sizeWave.width, sizeWave.height * 2), Offset(0f, sizeWave.height * 2)
                ), color = color.copy(0.8f), strokeWidth = 5.dp.toPx())

                wavePoints(listOf(Offset(0f, sizeWave.height * 2)) + wavePoints3.map {
                    it.copy(y = it.y + sizeWave.height / 2)
                } + listOf(
                    Offset(sizeWave.width, sizeWave.height * 2), Offset(0f, sizeWave.height * 2)
                ), color = color.copy(1f), strokeWidth = 5.dp.toPx())

                if (windowSizeClass.isCompact()) {
                    drawCircle(
                        Brush.radialGradient(
                            listOf(
                                colorBackground.copy(0.0f), colorBackground.copy(0.3f)
                            )
                        ), sizeWave.width / 2 + 300
                    )
                } else {
                    drawRoundRect(
                        Brush.radialGradient(
                            listOf(
                                colorBackground.copy(0.0f), colorBackground.copy(0.3f)
                            )
                        ),
                        size = sizeWave,
                        cornerRadius = CornerRadius(sizeWave.width / 2, sizeWave.width / 2)
                    )
                }

            }

            if (windowSizeClass.isCompact()) {
                drawCircle(color = color, radius = sizeWave.width / 2, style = Stroke(4.dp.toPx()))
            } else {
                drawRoundRect(
                    color = color,
                    style = Stroke(4.dp.toPx()),
                    size = sizeWave,
                    cornerRadius = CornerRadius(sizeWave.width / 2, sizeWave.width / 2)
                )
            }


        }
    }


}


