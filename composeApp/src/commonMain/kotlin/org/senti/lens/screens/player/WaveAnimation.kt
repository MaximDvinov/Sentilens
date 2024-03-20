package org.senti.lens.screens.player

import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animate
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.clipPath
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.toSize
import androidx.constraintlayout.compose.ConstraintLayout
import kotlinx.coroutines.delay
import kotlin.math.acos
import kotlin.math.asin
import kotlin.math.cos
import kotlin.math.cosh
import kotlin.math.sin
import kotlin.math.tan


@Composable
fun WaveAnimation(modifier: Modifier, isPlaying: Boolean) {
    val color = MaterialTheme.colors.primary
    val colorBackground = MaterialTheme.colors.background
    var sizeWave by remember { mutableStateOf(Size.Zero) }
    val numPoints = remember(sizeWave) { (sizeWave.width / 5).toInt() + 5 }
    var isPlayingLocalState by remember {
        mutableStateOf(true)
    }

    val animatedAmplitude by animateFloatAsState(
        if (!isPlaying) 0.2f else 1.3f,
        animationSpec = spring(stiffness = Spring.StiffnessLow)
    ){
        isPlayingLocalState = false
    }

    Box(
        modifier = modifier.onSizeChanged { sizeWave = it.toSize() },
        contentAlignment = Alignment.Center
    ) {
        var a by remember { mutableStateOf(0.05f) }

        var wavePoints: List<Offset> by remember(sizeWave) {
            mutableStateOf(
                generateWavePoints(numPoints, 0.15f, 0f, a) { x, waveLength, a ->
                    sin(x * waveLength + a) * cos((x * sin(10f)) / 12)
                }
            )
        }
        var wavePoints2: List<Offset> by remember(sizeWave) {
            mutableStateOf(
                generateWavePoints(numPoints, 0.24f, 0f, a) { x, waveLength, a ->
                    cos(x * waveLength + a) * sin(x / 11)
                }
            )
        }
        var wavePoints3: List<Offset> by remember(sizeWave) {
            mutableStateOf(
                generateWavePoints(numPoints, 0.20f, 0f, a) { x, waveLength, a ->
                    cos(x * waveLength + a) * cos(x / 10f)
                }
            )
        }

        val del = 10f

        LaunchedEffect(isPlaying, sizeWave) {
            while (isPlaying || !isPlayingLocalState) {
                wavePoints = generateWavePoints(
                    numPoints,
                    0.15f,
                    80f * animatedAmplitude,
                    a
                ) { x, waveLength, a ->
                    sin(x * waveLength + a) * cos((x * sin(10f)) / del)

                }
                wavePoints2 = generateWavePoints(
                    numPoints,
                    0.24f,
                    70f * animatedAmplitude,
                    a
                ) { x, waveLength, a ->
                    cos(x * waveLength + a) * sin(x / del)
                }
                wavePoints3 = generateWavePoints(
                    numPoints,
                    0.20f,
                    60f * animatedAmplitude,
                    a
                ) { x, waveLength, a ->
                    cos(x * waveLength + a) * cos(x / del)
                }
                delay(16)
                a += 0.05f * animatedAmplitude
            }
        }

        Canvas(Modifier.fillMaxSize()) {
            drawCircle(
                Brush.radialGradient(listOf(colorBackground, colorBackground.copy(0.8f))),
                sizeWave.width / 2
            )
            clipPath(Path().apply {
                addOval(
                    Rect(
                        Offset(sizeWave.width / 2, sizeWave.height / 2),
                        radius = sizeWave.width / 2
                    )
                )
            }) {
                wavePoints(
                    listOf(Offset(0f, sizeWave.height)) + wavePoints.map {
                        it.copy(y = it.y + sizeWave.height / 2)
                    } + listOf(
                        Offset(sizeWave.width, sizeWave.height),
                        Offset(0f, sizeWave.height)
                    ),
                    color = color.copy(0.5f),
                    strokeWidth = 5.dp.toPx()
                )

                wavePoints(
                    listOf(Offset(0f, sizeWave.height)) + wavePoints2.map {
                        it.copy(y = it.y + sizeWave.height / 2)
                    } + listOf(
                        Offset(sizeWave.width, sizeWave.height),
                        Offset(0f, sizeWave.height)
                    ),
                    color = color.copy(0.8f),
                    strokeWidth = 5.dp.toPx()
                )

                wavePoints(
                    listOf(Offset(0f, sizeWave.height)) + wavePoints3.map {
                        it.copy(y = it.y + sizeWave.height / 2)
                    } + listOf(
                        Offset(sizeWave.width, sizeWave.height),
                        Offset(0f, sizeWave.height)
                    ),
                    color = color.copy(1f),
                    strokeWidth = 5.dp.toPx()
                )
                drawCircle(
                    Brush.radialGradient(
                        listOf(
                            colorBackground.copy(0.0f),
                            colorBackground.copy(0.3f)
                        )
                    ),
                    sizeWave.width / 2 + 300
                )
            }

            drawCircle(color = color, radius = sizeWave.width / 2, style = Stroke(4.dp.toPx()))
        }
    }


}


