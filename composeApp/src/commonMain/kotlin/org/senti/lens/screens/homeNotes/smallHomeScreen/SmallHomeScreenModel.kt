package org.senti.lens.screens.homeNotes.smallHomeScreen

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import kotlinx.coroutines.launch
import org.senti.lens.ApiResult
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.useCases.GetNotesAndTagsUseCase


class SmallHomeScreenModel(private val getNotesAndTagsUseCase: GetNotesAndTagsUseCase) :
    StateScreenModel<SmallHomeScreenModel.UiState>(UiState()) {

    data class UiState(
        val notes: List<Note>? = null,
        val tags: List<Pair<Tag, Boolean>>? = null,
        val searchQuery: String = "",
        val loadState: LoadState = LoadState.Idle,
        val filteredNotes: List<Note>? = notes
    )

    sealed class Intent {
        object LoadDataIntent : Intent()
        data class SelectTag(val tag: Tag) : Intent()
        data class ChangeSearchQuery(val query: String) : Intent()
    }

    init {
        coroutineScope.launch {
            mutableState.value = getData(mutableState.value)
        }
    }

    fun processIntent(intent: Intent) {
        mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
        coroutineScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    private suspend fun reduce(oldState: UiState, intent: Intent): UiState {
        return when (intent) {
            Intent.LoadDataIntent -> getData(oldState)
            is Intent.SelectTag -> changeTag(intent.tag, oldState)
            is Intent.ChangeSearchQuery -> changeSearchQuery(
                intent.query,
                oldState
            )
        }
    }

    private suspend fun getData(currentState: UiState): UiState {
        return when (val result = getNotesAndTagsUseCase()) {
            is ApiResult.Failure -> currentState.copy(loadState = LoadState.Error(result.message))
            is ApiResult.Success -> {
                val (notes, tags) = result.data
                currentState.copy(
                    notes = notes,
                    tags = tags.map { tag -> tag to false },
                    filteredNotes = notes
                )
            }
        }
    }


    private fun changeTag(tag: Tag, currentState: UiState): UiState {
        val newTags =
            currentState.tags?.map { (it, isSelected) -> if (it == tag) it to !isSelected else it to isSelected }

        val newFilteredNotes = filterList(currentState.notes, newTags, currentState.searchQuery)

        return currentState.copy(tags = newTags, filteredNotes = newFilteredNotes)
    }

    private fun changeSearchQuery(query: String, currentState: UiState): UiState {
        val newFilteredNotes = filterList(currentState.notes, currentState.tags, query)

        return currentState.copy(searchQuery = query, filteredNotes = newFilteredNotes)
    }

    private fun filterList(
        notes: List<Note>?,
        tags: List<Pair<Tag, Boolean>>?,
        query: String
    ) = if (!tags.isNullOrEmpty()) {
        val filteredTag = tags.filter { it.second }.map { it.first }

        notes?.filter { note ->
            note.tags.containsAll(filteredTag)
        }?.filter { note ->
            note.title.contains(query) || note.body.contains(query)
        }
    } else notes

}