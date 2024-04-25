package org.diary.advice

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.animation.togetherWith
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp
import io.github.alexzhirkevich.compottie.LottieAnimation
import io.github.alexzhirkevich.compottie.LottieCompositionSpec
import io.github.alexzhirkevich.compottie.rememberLottieComposition
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Composable
fun BreathAnimation(modifier: Modifier) {
    var isStarted by remember {
        mutableStateOf(4)
    }

    LaunchedEffect(Unit) {
        launch {
            for (i in (0..3)) {
                delay(1600)
                isStarted--
            }


        }
    }

    val composition by rememberLottieComposition(
        LottieCompositionSpec.JsonString(breathAnimationJson)
    )

    AnimatedContent(isStarted, modifier, transitionSpec = {
        fadeIn(tween(durationMillis = 300)) + scaleIn(tween(durationMillis = 300)) togetherWith fadeOut(
            tween(durationMillis = 300)
        ) + scaleOut(tween(durationMillis = 300))
    }) {
        if (it == 0) {
            LottieAnimation(
                composition = composition,
                iterations = Int.MAX_VALUE
            )
        } else {
            Text(
                if (it == 4) "Начинаем" else it.toString(),
                style = if (it == 4) MaterialTheme.typography.h1.copy(fontSize = 32.sp) else MaterialTheme.typography.h1.copy(
                    fontSize = 64.sp
                ),
                textAlign = TextAlign.Center
            )
        }

    }

}