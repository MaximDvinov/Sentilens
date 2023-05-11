package org.senti.lens.screens.home

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.repositories.DbNotesRepositoryImpl
import org.senti.lens.repositories.DbTagsRepositoryImpl
import org.senti.lens.screens.home.editNote.EditNoteUseCase

class HomeScreenModel(private val homeNotesUseCase: HomeNotesUseCase) :
    StateScreenModel<HomeScreenModel.UiState>(UiState()) {

    val useCase: EditNoteUseCase =
        EditNoteUseCase(DbNotesRepositoryImpl.instance, DbTagsRepositoryImpl.instance)

    data class UiState(
        val currentNote: Note? = null,
        val notes: List<Note>? = null,
        val tags: List<Pair<Tag, Boolean>>? = null,
        val noteTags: List<Tag> = listOf(),
        val searchQuery: String = "",
        val loadState: LoadState = LoadState.Idle,
        val noteLoadState: LoadState = LoadState.Idle,
        val filteredNotes: List<Note>? = notes
    )

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
            if (intent is Intent.SaveNote) {
                mutableState.value = mutableState.value.copy(noteLoadState = LoadState.Loading)
            }
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    sealed class Intent {
        object SaveNote : Intent()
        data class ChangeTitle(val title: String) : Intent()
        data class ChangeBody(val body: String) : Intent()
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
                oldState.copy(currentNote = oldState.currentNote?.copy(content = intent.body))
            }

            is Intent.ChangeTitle -> {
                oldState.copy(currentNote = oldState.currentNote?.copy(title = intent.title))
            }

            Intent.SaveNote -> {
                if (oldState.currentNote == null) return oldState
                delay(300)
                if (oldState.currentNote.uuid == null) {
                    oldState.copy(
                        currentNote = useCase.createNote(oldState.currentNote),
                        noteLoadState = LoadState.Success
                    )
                } else {
                    oldState.copy(
                        currentNote = useCase.updateNote(oldState.currentNote),
                        noteLoadState = LoadState.Success
                    )
                }
            }

            Intent.DeleteNote -> {
                if (oldState.currentNote != null) {
                    useCase.deleteNote(oldState.currentNote)
                }
                oldState.copy(currentNote = null)
            }

            Intent.LoadDataIntent -> {
                getData(oldState)
                oldState
            }

            is Intent.SelectTag -> changeTag(intent.tag, oldState)
            is Intent.ChangeSearchQuery -> changeSearchQuery(
                intent.query, oldState
            )

            is Intent.SelectNote -> {
                oldState.copy(
                    currentNote = intent.note
                )
            }

            is Intent.SaveTags -> {
                oldState.copy(currentNote = oldState.currentNote?.copy(tags = intent.tags))
            }
        }
    }

    private suspend fun getData(currentState: UiState) {
//        return when (val result = homeNotesUseCase.getNotesAndTags()) {
//            is ApiResult.Failure -> currentState.copy(loadState = LoadState.Error(result.message))
//            is ApiResult.Success -> {
//                val (notes, tags) = result.data
//                notes.c
//                currentState.copy(
//                    notes = notes, tags = tags.map { tag -> tag to false }, filteredNotes = notes
//                )
//            }
//        }

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
            note.title.contains(query) || note.content?.contains(query) == true
        }
    } else notes


}