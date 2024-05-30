package org.diary.advice.player

import androidx.compose.runtime.Stable
import cafe.adriel.voyager.core.model.StateScreenModel
import kotlinx.collections.immutable.ImmutableList
import kotlinx.coroutines.flow.update
import org.diary.advice.player.models.Track

@Stable
data class PlayerState(
    val isPlaying: Boolean = false,
    val progress: Float = 0f,
    val selectedTrack: Track? = null,
    val playlist: ImmutableList<Track> = org.diary.advice.player.models.playlist,
)

@Stable
sealed class PlayerIntent {
    @Stable
    data class ChangePlay(val isPlaying: Boolean) : PlayerIntent()

    @Stable
    data class ChangeTrack(val track: Track) : PlayerIntent()

    @Stable
    data object Next : PlayerIntent()

    @Stable
    data object Previous : PlayerIntent()
}

class PlayerScreenModel : StateScreenModel<PlayerState>(PlayerState()) {

    fun handle(intent: PlayerIntent) {
        when (intent) {
            is PlayerIntent.ChangePlay -> if (intent.isPlaying) play() else pause()
            is PlayerIntent.Next -> next()
            is PlayerIntent.Previous -> previous()
            is PlayerIntent.ChangeTrack -> mutableState.update { it.copy(selectedTrack = intent.track) }
        }
    }

    private fun play() {
        mutableState.update { it.copy(isPlaying = true) }
    }

    private fun pause() {
        mutableState.update { it.copy(isPlaying = false) }
    }

    private fun next() {
        mutableState.update { oldState ->
            val next =
                oldState.playlist.getOrNull(oldState.playlist.indexOf(oldState.selectedTrack) + 1)
                    ?: oldState.playlist.first()
            oldState.copy(selectedTrack = next)
        }
    }

    private fun previous() {
        mutableState.update { oldState ->
            val previous =
                oldState.playlist
                    .getOrNull(oldState.playlist.indexOf(oldState.selectedTrack) - 1)
                    ?: oldState.playlist.last()
            oldState.copy(selectedTrack = previous)
        }
    }
}