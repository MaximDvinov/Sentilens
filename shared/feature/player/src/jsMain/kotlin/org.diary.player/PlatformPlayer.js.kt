package org.diary.player

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import org.w3c.dom.Audio

@Composable
internal actual fun MusicPlayerImpl(
    url: String,
    seek: Float,
    isResumed: Boolean,
    modifier: Modifier,
    progressState: MutableState<Progress>,
    onFinish: (() -> Unit)?
) {
    val player = remember(url) {
        Audio(url)
    }

    LaunchedEffect(isResumed, url) {

        if (isResumed) {
            player.play()
        } else {
            player.pause()
        }
    }

    DisposableEffect(player) {
        onDispose {
            player.pause()
            player.load()
        }
    }

    LaunchedEffect(seek) {
        player.currentTime = seek.toDouble() / 1000
    }

    LaunchedEffect(Unit) {
        while (isActive) {
            progressState.value = Progress(
                player.currentTime.toFloat() * 1000f,
                player.duration.toLong() * 1000,
                !player.paused && !player.ended
            )
            if (player.duration > 0 && player.currentTime >= player.duration) {
                onFinish?.invoke()
            }
            delay(100)
        }
    }
}