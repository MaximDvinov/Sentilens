package org.diary.advice.player

import androidx.compose.runtime.Stable
import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.persistentListOf
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import org.diary.advice.player.models.Music
import org.diary.advice.player.models.toStable
import org.diary.composeui.LoadState
import org.diary.data.ApiResult
import org.diary.data.advice.AdviceRepository

@Stable
data class PlayerState(
    val isPlaying: Boolean = false,
    val progress: Float = 0f,
    val selectedMusic: Music? = null,
    val playlist: ImmutableList<Music> = persistentListOf(),
    val loadState: LoadState = LoadState.Loading
)

@Stable
sealed class PlayerIntent {
    @Stable
    data class ChangePlay(val isPlaying: Boolean) : PlayerIntent()

    @Stable
    data class ChangeTrack(val music: Music) : PlayerIntent()

    @Stable
    data object Next : PlayerIntent()

    @Stable
    data object Previous : PlayerIntent()
}

class PlayerScreenModel(private val adviceRepository: AdviceRepository) :
    StateScreenModel<PlayerState>(PlayerState()) {

    init {
        getMusics()
    }

    fun handle(intent: PlayerIntent) {
        when (intent) {
            is PlayerIntent.ChangePlay -> if (intent.isPlaying) play() else pause()
            is PlayerIntent.Next -> next()
            is PlayerIntent.Previous -> previous()
            is PlayerIntent.ChangeTrack -> mutableState.update { it.copy(selectedMusic = intent.music) }
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
                oldState.playlist.getOrNull(oldState.playlist.indexOf(oldState.selectedMusic) + 1)
                    ?: oldState.playlist.first()
            oldState.copy(selectedMusic = next)
        }
    }

    private fun previous() {
        mutableState.update { oldState ->
            val previous =
                oldState.playlist
                    .getOrNull(oldState.playlist.indexOf(oldState.selectedMusic) - 1)
                    ?: oldState.playlist.last()
            oldState.copy(selectedMusic = previous)
        }
    }

    private fun getMusics() {
        screenModelScope.launch {
            val musics = adviceRepository.getMusics()

            when (musics) {
                is org.diary.data.ApiResult.Failure -> mutableState.update {
                    it.copy(loadState = LoadState.Error(message = musics.message))
                }

                is org.diary.data.ApiResult.ServerError -> mutableState.update {
                    it.copy(loadState = LoadState.Error(message = musics.message))
                }

                is org.diary.data.ApiResult.Success -> mutableState.update {
                    it.copy(playlist = musics.data.map { it.toStable() }.toPersistentList())
                }
            }
        }

    }
}