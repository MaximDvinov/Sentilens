package org.diary.player

import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.Saver
import androidx.compose.runtime.saveable.listSaver
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Modifier

data class Progress(
    val fraction: Float,
    // TODO: Use kotlin.time.Duration when Kotlin version is updated.
    //  See https://github.com/Kotlin/api-guidelines/issues/6
    val timeMillis: Long,
    val isPlaying: Boolean = false
)

@Composable
fun MusicPlayer(
    url: String,
    state: MusicPlayerState,
    modifier: Modifier = Modifier,
    onFinish: (() -> Unit)? = null,
    onPlayStateChange: ((Boolean) -> Unit)? = null
) = MusicPlayerImpl(
    url = url,
    seek = state.seek,
    modifier = modifier,
    isResumed = state.isResumed,
    progressState = state._progress,
    onFinish = onFinish,
)

@Composable
internal expect fun MusicPlayerImpl(
    url: String,
    seek: Float,
    isResumed: Boolean,
    modifier: Modifier,
    progressState: MutableState<Progress>,
    onFinish: (() -> Unit)?
)

@Composable
fun rememberMusicPlayerState(
    seek: Float = 0f,
    isResumed: Boolean = true,
): MusicPlayerState = rememberSaveable(saver = MusicPlayerState.Saver()) {
    MusicPlayerState(
        seek,
        isResumed = isResumed,
        Progress(0f, 0),
    )
}

class MusicPlayerState(
    seek: Float = 0f,
    isResumed: Boolean = true,
    progress: Progress
) {
    var seek by mutableStateOf(seek)
    var isResumed by mutableStateOf(isResumed)
    internal val _progress = mutableStateOf(progress)
    val progress: State<Progress> = _progress

    companion object {
        /**
         * The default [Saver] implementation for [MusicPlayerState].
         */
        fun Saver() = listSaver(
            save = {
                listOf(
                    it.seek,
//                    it.progress.value,
                    it.isResumed
                )
            },
            restore = {
                MusicPlayerState(
                    seek = it[0] as Float,
                    progress = Progress(0f, 0),
                    isResumed = it[1] as Boolean
                )
            }
        )
    }
}