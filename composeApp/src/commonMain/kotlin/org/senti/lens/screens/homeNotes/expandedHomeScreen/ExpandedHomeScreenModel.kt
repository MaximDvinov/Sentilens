package org.senti.lens.screens.homeNotes.expandedHomeScreen

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import kotlinx.coroutines.launch
import org.senti.lens.ApiResult
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.repositories.NotesRepositoryImpl
import org.senti.lens.repositories.TagsRepositoryImpl
import org.senti.lens.screens.editNote.EditNoteModel
import org.senti.lens.screens.editNote.EditNoteUseCase
import org.senti.lens.screens.homeNotes.HomeNotesUseCase
import org.senti.lens.screens.homeNotes.smallHomeScreen.SmallHomeScreenModel

class ExpandedHomeScreenModel(private val homeNotesUseCase: HomeNotesUseCase) :
    StateScreenModel<ExpandedHomeScreenModel.UiState>(UiState()) {

    val useCase: EditNoteUseCase =
        EditNoteUseCase(NotesRepositoryImpl.instance, TagsRepositoryImpl.instance)

    data class UiState(
        val currentNote: Note? = null,
        val notes: List<Note>? = null,
        val tags: List<Pair<Tag, Boolean>>? = null,
        val noteTags: List<Tag> = listOf(),
        val searchQuery: String = "",
        val loadState: LoadState = LoadState.Idle,
        val filteredNotes: List<Note>? = notes
    )

    init {
        coroutineScope.launch {
            mutableState.value = getData(mutableState.value)
        }
    }

    fun processIntent(intent: Intent) {
        coroutineScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    sealed class Intent {
        object SaveNote : Intent()
        data class ChangeTitle(val title: String) : Intent()
        data class ChangeBody(val body: String) : Intent()
        data class SelectNoteTag(val tag: Tag) : Intent()
        object DeleteNote : Intent()
        object LoadDataIntent : Intent()
        data class SelectTag(val tag: Tag) : Intent()
        data class ChangeSearchQuery(val query: String) : Intent()
        class SelectNote(val note: Note?) : Intent()
        class SaveTags(val tags: List<Tag>) : Intent()
    }

    private suspend fun reduce(
        oldState: UiState, intent: Intent
    ): UiState {
        return when (intent) {
            is Intent.ChangeBody -> {
                oldState.copy(currentNote = oldState.currentNote?.copy(body = intent.body))
            }

            is Intent.ChangeTitle -> {
                oldState.copy(currentNote = oldState.currentNote?.copy(title = intent.title))
            }

            Intent.SaveNote -> {
                if (oldState.currentNote == null) return oldState
                if (oldState.currentNote.id == null) {
                    useCase.createNote(oldState.currentNote)
                } else {
                    useCase.updateNote(oldState.currentNote)
                }
                oldState
            }

            is Intent.SelectNoteTag -> {
                oldState.copy(noteTags = oldState.noteTags + intent.tag)
            }

            Intent.DeleteNote -> {
                if (oldState.currentNote != null) {
                    useCase.deleteNote(oldState.currentNote)
                }

                oldState.copy(currentNote = null)
            }

            Intent.LoadDataIntent -> {
                mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
                getData(oldState)
            }

            is Intent.SelectTag -> changeTag(intent.tag, oldState)
            is Intent.ChangeSearchQuery -> changeSearchQuery(
                intent.query, oldState
            )

            is Intent.SelectNote -> {
                oldState.copy(currentNote = intent.note)
            }

            is Intent.SaveTags -> {
                oldState.copy(currentNote = oldState.currentNote?.copy(tags = intent.tags))
            }
        }
    }

    private suspend fun getData(currentState: UiState): UiState {
        return when (val result = homeNotesUseCase.getNotesAndTags()) {
            is ApiResult.Failure -> currentState.copy(loadState = LoadState.Error(result.message))
            is ApiResult.Success -> {
                val (notes, tags) = result.data
                currentState.copy(
                    notes = notes, tags = tags.map { tag -> tag to false }, filteredNotes = notes
                )
            }
        }
    }


    private fun changeTag(
        tag: Tag, currentState: UiState
    ): UiState {
        val newTags =
            currentState.tags?.map { (it, isSelected) -> if (it == tag) it to !isSelected else it to isSelected }

        val newFilteredNotes = filterList(currentState.notes, newTags, currentState.searchQuery)

        return currentState.copy(tags = newTags, filteredNotes = newFilteredNotes)
    }

    private fun changeSearchQuery(
        query: String, currentState: UiState
    ): UiState {
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
            note.title.contains(query) || note.body.contains(query)
        }
    } else notes


}