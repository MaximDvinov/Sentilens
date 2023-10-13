package org.senti.lens.screens.home

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import io.ktor.http.HttpStatusCode
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.toImmutableList
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.senti.lens.ApiResult
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.network.SyncUseCase

interface Intent

class HomeScreenModel(
    private val homeNotesUseCase: HomeNotesUseCase, private val syncUseCase: SyncUseCase,
) : StateScreenModel<HomeScreenModel.NoteListUiState>(NoteListUiState()) {

    private val _editNoteState = MutableStateFlow(NoteEditorUiState())
    val editNoteState: StateFlow<NoteEditorUiState>
        get() = _editNoteState


    data class NoteListUiState(
        val notes: ImmutableList<Note>? = null,
        val tags: ImmutableList<Pair<Tag, Boolean>>? = null,
        val searchQuery: String = "",
        val loadState: LoadState = LoadState.Idle,
        val filteredNotes: ImmutableList<Note>? = notes?.toImmutableList(),
    )

    data class NoteEditorUiState(
        val currentNote: Note? = null,
        val loadState: LoadState = LoadState.Idle,
    )

    sealed class NoteListIntent : Intent {
        object LoadData : NoteListIntent()
        data class SelectTag(val tag: Tag) : NoteListIntent()
        data class CreateTag(val tag: Tag) : NoteListIntent()
        data class ChangeSearchQuery(val query: String) : NoteListIntent()
        data class DeleteNote(val note: Note) : NoteListIntent()

        object CloseErrorMessage : NoteListIntent()
    }

    sealed class EditNoteIntent : Intent {
        object SaveNote : EditNoteIntent()
        object DeleteNote : EditNoteIntent()
        data class ChangeTitle(val title: String) : EditNoteIntent()
        data class ChangeBody(val body: String) : EditNoteIntent()
        data class AddTagInNote(val tag: Tag) : EditNoteIntent()
        data class SelectNote(val note: Note?) : EditNoteIntent()
    }

    init {
        coroutineScope.launch {
            homeNotesUseCase.getNotesAndTags().collect {
                mutableState.value = mutableState.value.copy(
                    notes = it?.first?.toPersistentList(),
                    tags = it?.second?.map { tag -> tag to false }?.toPersistentList(),
                    filteredNotes = it?.first?.toPersistentList()
                )
            }
        }

        coroutineScope.launch {
            delay(50)

            mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)

            when (val result = syncUseCase.sync()) {
                is ApiResult.Failure -> {
                    mutableState.value =
                        mutableState.value.copy(loadState = LoadState.Error(message = result.message))
                }

                is ApiResult.ServerError -> {
                    mutableState.value =
                        mutableState.value.copy(loadState = LoadState.Error(message = result.message))
                }

                is ApiResult.Success -> {
                    mutableState.value = mutableState.value.copy(loadState = LoadState.Success)
                }
            }

        }
    }

    fun processIntent(intent: Intent) {
        coroutineScope.launch {
            if (intent is NoteListIntent) {
                if (intent is NoteListIntent.LoadData) {
                    mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
                }
                mutableState.value = reduceListState(mutableState.value, intent)
            }

            if (intent is EditNoteIntent) {
                if (intent is EditNoteIntent.SaveNote) _editNoteState.value =
                    _editNoteState.value.copy(loadState = LoadState.Loading)
                _editNoteState.value = reduceEditState(_editNoteState.value, intent)
            }
        }
    }


    private suspend fun reduceListState(
        noteListUiState: NoteListUiState, noteListIntent: NoteListIntent,
    ): NoteListUiState {
        return when (noteListIntent) {

            NoteListIntent.LoadData -> {
                when (val result = syncUseCase.sync()) {
                    is ApiResult.Failure -> {
                        mutableState.value.copy(loadState = LoadState.Error(message = result.message))
                    }

                    is ApiResult.ServerError -> {
                        mutableState.value.copy(loadState = LoadState.Error(message = result.message))
                    }

                    is ApiResult.Success -> {
                        mutableState.value.copy(loadState = LoadState.Success)
                    }
                }
            }

            is NoteListIntent.SelectTag -> changeTag(noteListIntent.tag, noteListUiState)
            is NoteListIntent.ChangeSearchQuery -> changeSearchQuery(
                noteListIntent.query, noteListUiState
            )

            NoteListIntent.CloseErrorMessage -> {
                noteListUiState.copy(loadState = LoadState.Idle)
            }

            is NoteListIntent.CreateTag -> {
                if (noteListUiState.tags?.find { it.first.title == noteListIntent.tag.title } == null) {
                    homeNotesUseCase.createTag(noteListIntent.tag)
                }
                noteListUiState
            }

            is NoteListIntent.DeleteNote -> {
                homeNotesUseCase.deleteNote(noteListIntent.note)
                val newList =
                    noteListUiState.filteredNotes?.filter { it.uuid != noteListIntent.note.uuid }
                        ?.toPersistentList()
                if (noteListIntent.note.uuid == _editNoteState.value.currentNote?.uuid) {
                    _editNoteState.update {
                        it.copy(currentNote = null)
                    }
                }
                noteListUiState.copy(filteredNotes = newList)
            }
        }
    }

    private suspend fun reduceEditState(
        editNoteUiState: NoteEditorUiState, editNoteIntent: EditNoteIntent,
    ): NoteEditorUiState {
        return when (editNoteIntent) {
            is EditNoteIntent.AddTagInNote -> {
                var newTags = editNoteUiState.currentNote?.tags ?: listOf()

                newTags = if (newTags.contains(editNoteIntent.tag)) {
                    newTags.minus(editNoteIntent.tag)
                } else {
                    newTags.plus(editNoteIntent.tag)
                }
                editNoteUiState.copy(currentNote = editNoteUiState.currentNote?.copy(tags = newTags))

            }

            is EditNoteIntent.ChangeBody -> {
                editNoteUiState.copy(currentNote = editNoteUiState.currentNote?.copy(content = editNoteIntent.body))
            }

            is EditNoteIntent.ChangeTitle -> {
                editNoteUiState.copy(currentNote = editNoteUiState.currentNote?.copy(title = editNoteIntent.title))
            }

            EditNoteIntent.DeleteNote -> {
                if (editNoteUiState.currentNote != null) {
                    homeNotesUseCase.deleteNote(editNoteUiState.currentNote)
                }
                editNoteUiState.copy(currentNote = null)
            }

            EditNoteIntent.SaveNote -> {
                val now: Instant = Clock.System.now()
                if (editNoteUiState.currentNote?.content.isNullOrBlank()) {
                    return editNoteUiState.copy(loadState = LoadState.Error(message = "Пустая заметка"))
                }

                var currentNote = editNoteUiState.currentNote

                if (currentNote?.title?.isEmpty() == true) {
                    currentNote =
                        currentNote.copy(
                            title = "${
                                currentNote.content?.split(" ")?.take(3)?.joinToString(" ")
                            }"
                        )
                }

                if (currentNote == null) return editNoteUiState
                delay(300)
                if (currentNote.uuid == null) {
                    val result = homeNotesUseCase.createNoteAndAnalayze(
                        currentNote.copy(
                            updatedAt = now.toLocalDateTime(
                                TimeZone.UTC
                            ), createdAt = now.toLocalDateTime(TimeZone.UTC)
                        )
                    )
                    when (val resultApi = result.first) {
                        is ApiResult.Failure -> {
                            editNoteUiState.copy(
                                loadState = LoadState.Error(message = resultApi.message),
                                currentNote = result.second
                            )
                        }

                        is ApiResult.ServerError -> {
                            editNoteUiState.copy(
                                loadState = LoadState.Error(message = resultApi.message),
                                currentNote = result.second
                            )
                        }

                        is ApiResult.Success -> {
                            editNoteUiState.copy(
                                loadState = LoadState.Success, currentNote = result.second
                            )
                        }
                    }
                } else {
                    when (val result = homeNotesUseCase.updateNoteAndAnalyze(
                        currentNote.copy(
                            updatedAt = now.toLocalDateTime(
                                TimeZone.UTC
                            ),
                        )
                    )) {
                        is ApiResult.Failure -> {
                            editNoteUiState.copy(loadState = LoadState.Error(message = result.message))
                        }

                        is ApiResult.ServerError -> {
                            if (result.status == HttpStatusCode.NotFound) {
                                when (val result2 = homeNotesUseCase.createNoteInServer(
                                    currentNote.copy(
                                        updatedAt = now.toLocalDateTime(
                                            TimeZone.UTC
                                        ), createdAt = now.toLocalDateTime(TimeZone.UTC)
                                    )
                                )) {
                                    is ApiResult.Failure -> {
                                        editNoteUiState.copy(loadState = LoadState.Error(message = result2.message))
                                    }

                                    is ApiResult.ServerError -> {
                                        editNoteUiState.copy(loadState = LoadState.Error(message = result2.message))
                                    }

                                    is ApiResult.Success -> {
                                        editNoteUiState.copy(
                                            loadState = LoadState.Success,
                                            currentNote = result2.data
                                        )
                                    }
                                }
                            } else {
                                editNoteUiState.copy(loadState = LoadState.Error(message = result.message))
                            }
                        }

                        is ApiResult.Success -> {
                            editNoteUiState.copy(
                                loadState = LoadState.Success, currentNote = result.data
                            )
                        }
                    }
                }
            }

            is EditNoteIntent.SelectNote -> {
                editNoteUiState.copy(
                    currentNote = editNoteIntent.note, loadState = LoadState.Idle
                )
            }
        }
    }

    private fun changeTag(
        tag: Tag, currentState: NoteListUiState,
    ): NoteListUiState {
        val newTags =
            currentState.tags?.map { (it, isSelected) -> if (it == tag) it to !isSelected else it to isSelected }

        val newFilteredNotes = filterList(currentState.notes, newTags, currentState.searchQuery)

        return currentState.copy(
            tags = newTags?.toPersistentList(),
            filteredNotes = newFilteredNotes?.toPersistentList()
        )
    }

    private fun changeSearchQuery(
        query: String, currentState: NoteListUiState,
    ): NoteListUiState {
        val newFilteredNotes = filterList(currentState.notes, currentState.tags, query)

        return currentState.copy(
            searchQuery = query,
            filteredNotes = newFilteredNotes?.toPersistentList()
        )
    }

    private fun filterList(
        notes: List<Note>?, tags: List<Pair<Tag, Boolean>>?, query: String,
    ) = if (!tags.isNullOrEmpty()) {
        val filteredTag = tags.filter { it.second }.map { it.first }

        notes?.filter { note ->
            note.tags.containsAll(filteredTag)
        }?.filter { note ->
            note.title.lowercase().contains(query.lowercase()) || note.content?.lowercase()
                ?.contains(query.lowercase()) == true
        }
    } else notes


}