package org.diary.player

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import uk.co.caprica.vlcj.player.base.MediaPlayer
import uk.co.caprica.vlcj.player.base.MediaPlayerEventAdapter
import uk.co.caprica.vlcj.player.component.AudioPlayerComponent

@Composable
internal actual fun MusicPlayerImpl(
    url: String,
    seek: Float,
    isResumed: Boolean,
    modifier: Modifier,
    progressState: MutableState<Progress>,
    onFinish: (() -> Unit)?
) {
    val playerComponent = remember {
        AudioPlayerComponent()
    }
    val mediaPlayer = remember { playerComponent.mediaPlayer() }
    mediaPlayer.setupFinishHandler(onFinish)
    mediaPlayer.emitProgressTo(progressState)

    LaunchedEffect(url) { mediaPlayer.media().prepare(url) }
    LaunchedEffect(seek) { mediaPlayer.controls().setTime(seek.toLong()) }
    LaunchedEffect(isResumed, url) {
        if (isResumed) {
            mediaPlayer.controls().play()
        } else {
            mediaPlayer.controls().pause()
        }

    }

    DisposableEffect(Unit) { onDispose(mediaPlayer::release) }

}

@Composable
private fun MediaPlayer.emitProgressTo(state: MutableState<Progress>) {
    LaunchedEffect(key1 = Unit) {
        while (isActive) {
            val fraction = status().time()
            val time = status().length()
            state.value = Progress(fraction.toFloat(), time, status().isPlaying)
            delay(50)
        }
    }
}

@Composable
private fun MediaPlayer.setupFinishHandler(onFinish: (() -> Unit)?) {
    DisposableEffect(onFinish) {
        val listener = object : MediaPlayerEventAdapter() {
            override fun finished(mediaPlayer: MediaPlayer) {
                onFinish?.invoke()
                mediaPlayer.submit { mediaPlayer.controls().play() }
            }

            override fun playing(mediaPlayer: MediaPlayer?) {

            }
        }
        events().addMediaPlayerEventListener(listener)
        onDispose { events().removeMediaPlayerEventListener(listener) }
    }
}