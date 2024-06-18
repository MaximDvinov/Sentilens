package org.diary.compose.home

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.persistentListOf
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import org.diary.composeui.Intent
import org.diary.composeui.LoadState
import org.diary.data.ApiResult
import org.diary.data.diary.NotesRepository
import org.diary.data.diary.SyncRepository
import org.diary.data.stats.StatsRepository
import org.diary.diary.Note
import org.diary.diary.toUiNote

class HomeScreenModel(
    diaryUseCase: NotesRepository,
    private val syncRepository: SyncRepository,
    private val statsRepository: StatsRepository,
) :
    StateScreenModel<HomeScreenModel.UiState>(UiState.Idle) {

    sealed class UiState(val notes: ImmutableList<Note>, val variability: Int? = null) {
        data object Idle : UiState(persistentListOf())
        data class Loading(val oldNotes: ImmutableList<Note>, val oldVariability: Int?) :
            UiState(oldNotes, oldVariability)

        data class Success(val newNotes: ImmutableList<Note>, val newVariability: Int?) :
            UiState(newNotes, newVariability)

        data class Error(
            val error: String,
            val oldNotes: ImmutableList<Note>,
            val oldVariability: Int?,
        ) : UiState(oldNotes, oldVariability)
    }

    sealed class HomeIntent : Intent {
        data object LoadData : HomeIntent()
        data object CloseErrorMessage : HomeIntent()
    }

    init {
        screenModelScope.launch {
            diaryUseCase.getNotes().collect { newList ->
                mutableState.update {
                    UiState.Success(
                        newList.map { it.toUiNote() }.take(15).toPersistentList(),
                        it.variability
                    )
                }
            }
        }

        screenModelScope.launch {
            statsRepository.sentimentVariabilityFlow().collect { newVariability ->
                mutableState.update {
                    UiState.Success(it.notes, newVariability)
                }
            }
        }

        screenModelScope.launch {
            delay(50)

            mutableState.update {
                UiState.Loading(it.notes, it.variability)
            }

            loadNoteList()
        }
    }

    fun processIntent(intent: Intent) {
        when (intent) {
            is HomeIntent.LoadData -> screenModelScope.launch { loadNoteList() }
            is HomeIntent.CloseErrorMessage -> {
                mutableState.update {
                    UiState.Success(it.notes, it.variability)
                }
            }
        }
    }

    private suspend fun loadNoteList() {
        mutableState.update {
            UiState.Loading(it.notes, it.variability)
        }
        when (val result = syncRepository.sync()) {
            is ApiResult.Failure -> {
                mutableState.update {
                    UiState.Error(result.message, it.notes, it.variability)
                }
            }

            is ApiResult.ServerError -> {
                mutableState.update {
                    UiState.Error(
                        "${result.status} ${result.message}",
                        it.notes, it.variability
                    )
                }
            }

            is ApiResult.Success -> {
                mutableState.update {
                    UiState.Success(it.notes, it.variability)
                }
            }
        }
    }
}