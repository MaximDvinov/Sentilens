package org.senti.lens.screens.recommendation

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.coroutines.launch
import kotlinx.uuid.UUID
import org.senti.lens.models.Note
import org.senti.lens.repositories.NotesRepository

class RecommendationScreenModel(private val notesRepository: NotesRepository, val id: String?) :
    StateScreenModel<RecommendationScreenModel.UiState>(UiState()) {
    data class UiState(
        val currentNote: Note? = null,
    )

    init {
        processIntent(Intent.LoadNote(id))
    }

    sealed class Intent {
        data class LoadNote(val id: String?) : Intent()
    }

    fun processIntent(intent: Intent) {
        screenModelScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    private suspend fun reduce(value: UiState, intent: Intent): UiState {
        when (intent) {
            is Intent.LoadNote -> {
                return value.copy(
                    currentNote = notesRepository.getNote(UUID(intent.id ?: ""))
                )
            }
        }
    }
}