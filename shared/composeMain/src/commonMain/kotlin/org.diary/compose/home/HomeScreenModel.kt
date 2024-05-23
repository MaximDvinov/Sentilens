package org.diary.compose.home

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.persistentListOf
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import org.diary.composeui.Intent
import org.diary.data.ApiResult
import org.diary.data.diary.NotesRepository
import org.diary.data.diary.SyncRepository
import org.diary.diary.Note
import org.diary.diary.toUiNote

class HomeScreenModel(diaryUseCase: NotesRepository, val syncRepository: SyncRepository) :
    StateScreenModel<HomeScreenModel.UiState>(UiState.Idle) {
    sealed class UiState(val notes: ImmutableList<Note>) {
        data object Idle : UiState(persistentListOf())
        data class Loading(val oldNotes: ImmutableList<Note>) : UiState(oldNotes)
        data class Success(val newNotes: ImmutableList<Note>) : UiState(newNotes)
        data class Error(val error: String, val oldNotes: ImmutableList<Note>) : UiState(oldNotes)
    }

    sealed class HomeIntent : Intent {
        data object LoadData : HomeIntent()
        data object CloseErrorMessage : HomeIntent()
    }

    init {
        screenModelScope.launch {
            diaryUseCase.getNotes().collect { newList ->
                mutableState.update {
                    UiState.Success(newList.map { it.toUiNote() }.toPersistentList())
                }
            }
        }

        sync()

    }

    fun processIntent(intent: Intent) {
        when (intent) {
            is HomeIntent.LoadData -> sync()
            is HomeIntent.CloseErrorMessage -> {
                mutableState.update {
                    UiState.Success(it.notes)
                }
            }
        }
    }

    private fun sync() {
        screenModelScope.launch {
            mutableState.update {
                UiState.Loading(it.notes)
            }
            when (val result = syncRepository.sync()) {
                is ApiResult.Failure -> {
                    mutableState.update {
                        UiState.Error(result.message, it.notes)
                    }
                }

                is ApiResult.ServerError -> {
                    mutableState.update {
                        UiState.Error(
                            "${result.status} ${result.message}",
                            it.notes
                        )
                    }
                }

                is ApiResult.Success -> {
                    mutableState.update {
                        UiState.Success(it.notes)
                    }
                }
            }
        }
    }
}