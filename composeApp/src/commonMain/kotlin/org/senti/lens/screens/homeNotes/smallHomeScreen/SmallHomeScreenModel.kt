package org.senti.lens.screens.homeNotes.smallHomeScreen

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.senti.lens.ApiResult
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.homeNotes.HomeNotesUseCase
import org.senti.lens.screens.homeNotes.expandedHomeScreen.ExpandedHomeScreenModel


class SmallHomeScreenModel(private val homeNotesUseCase: HomeNotesUseCase) :
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
            homeNotesUseCase.getNotesAndTags().collect {
                mutableState.value = mutableState.value.copy(
                    notes = it?.first,
                    tags = it?.second?.map { tag -> tag to false },
                    filteredNotes = it?.first
                )
            }
        }
    }

    fun processIntent(intent: Intent) {
        coroutineScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    private suspend fun reduce(oldState: UiState, intent: Intent): UiState {
        return when (intent) {
            Intent.LoadDataIntent -> {
                mutableState.value = oldState.copy(loadState = LoadState.Loading)
                getData(oldState)
            }

            is Intent.SelectTag -> changeTag(intent.tag, oldState)
            is Intent.ChangeSearchQuery -> changeSearchQuery(
                intent.query, oldState
            )
        }
    }

    private suspend fun getData(currentState: UiState): UiState {
        delay(1000)
        return currentState.copy(loadState = LoadState.Success)
    }


    private fun changeTag(tag: Tag, currentState: UiState): UiState {
        val newTags =
            currentState.tags?.map { (it, isSelected) -> if (it.uuid == tag.uuid) it to !isSelected else it to isSelected }

        val newFilteredNotes = filterList(currentState.notes, newTags, currentState.searchQuery)

        return currentState.copy(tags = newTags, filteredNotes = newFilteredNotes)
    }

    private fun changeSearchQuery(query: String, currentState: UiState): UiState {
        val newFilteredNotes = filterList(currentState.notes, currentState.tags, query)

        return currentState.copy(searchQuery = query, filteredNotes = newFilteredNotes)
    }

    private fun filterList(
        notes: List<Note>?, tags: List<Pair<Tag, Boolean>>?, query: String
    ) = if (!tags.isNullOrEmpty()) {
        val filteredTag = tags.filter { it.second }.map { it.first }

        notes?.filter { note ->
            note.tags.containsAll(filteredTag)
        }?.filter { note ->
            note.title.contains(query) || note.content?.contains(query) == true
        }
    } else notes

}