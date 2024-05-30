package org.diary.player

import android.media.session.MediaController
import android.util.Log
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive

@Composable
internal actual fun MusicPlayerImpl(
    url: String,
    seek: Float,
    isResumed: Boolean,
    modifier: Modifier,
    progressState: MutableState<Progress>,
    onFinish: (() -> Unit)?
) {
    val context = LocalContext.current
    val mediaPlayer = remember { ExoPlayer.Builder(context).build() }



    LaunchedEffect(isResumed) {
        if (isResumed) {
            mediaPlayer.play()
        } else {
            mediaPlayer.pause()
        }
    }

    LaunchedEffect(Unit) {
        while (isActive) {
            progressState.value = Progress(
                mediaPlayer.currentPosition.toFloat(),
                mediaPlayer.contentDuration,
                mediaPlayer.isPlaying
            )
            if (mediaPlayer.contentDuration > 0 && mediaPlayer.currentPosition >= mediaPlayer.contentDuration) {
                onFinish?.invoke()
            }
            Log.i("MusicPlayer", "MusicPlayerImpl: ${progressState.value}")
            delay(100)
        }

    }

    LaunchedEffect(seek) {
        mediaPlayer.seekTo(seek.toLong())
    }

    LaunchedEffect(url) {
        mediaPlayer.setMediaItem(MediaItem.fromUri(url))
    }

    DisposableEffect(Unit) {
        mediaPlayer.prepare()

        onDispose {
            mediaPlayer.release()
        }
    }
}