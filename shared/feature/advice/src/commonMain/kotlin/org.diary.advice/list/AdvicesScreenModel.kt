package org.diary.advice.list

import androidx.compose.runtime.Stable
import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.persistentListOf
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import org.diary.composeui.LoadState
import org.diary.data.ApiResult
import org.diary.data.advice.AdviceRepository

data class AdviceState(
    val recommendations: ImmutableList<Recommendations> = persistentListOf(),
    val loadState: LoadState = LoadState.Idle
)

sealed class AdviceEvent {
    data object LoadRecommendations : AdviceEvent()
    data object CloseErrorMessage : AdviceEvent()
}

class AdvicesScreenModel(private val adviceRepository: AdviceRepository) : ScreenModel {
    private val _state: MutableStateFlow<AdviceState> = MutableStateFlow(AdviceState())
    val state: StateFlow<AdviceState> = _state.asStateFlow()

    fun handleIntent(event: AdviceEvent) {
        when (event) {
            AdviceEvent.LoadRecommendations -> loadRecommendation()
            AdviceEvent.CloseErrorMessage -> _state.update { it.copy(loadState = LoadState.Idle) }
        }
    }

    init {
        loadRecommendation()
    }

    private fun loadRecommendation() {
        _state.update { it.copy(loadState = LoadState.Loading) }
        screenModelScope.launch {
            when (val result = adviceRepository.getAdvices()) {
                is ApiResult.Failure -> {
                    _state.update { it.copy(loadState = LoadState.Error(result.message)) }
                }

                is ApiResult.ServerError -> {
                    _state.update { it.copy(loadState = LoadState.Error(result.message)) }
                }

                is ApiResult.Success -> {
                    _state.update { oldState ->
                        oldState.copy(recommendations = result.data.map { it.toStable() }
                            .toPersistentList(), loadState = LoadState.Success)
                    }
                }
            }
        }
    }
}