package org.senti.lens.screens.list

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

class DiaryListScreenModel(
    private val diaryUseCase: DiaryUseCase, private val syncUseCase: SyncUseCase,
) : StateScreenModel<DiaryListScreenModel.NoteListUiState>(NoteListUiState()) {

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
        data class ChangeSearchQuery(val query: String) : NoteListIntent()
        data class DeleteNote(val note: Note) : NoteListIntent()
        object CloseErrorMessage : NoteListIntent()
    }

    sealed class EditNoteIntent : Intent {
        object SaveNote : EditNoteIntent()
        object DeleteNote : EditNoteIntent()
        data class ChangeTitle(val title: String) : EditNoteIntent()
        data class ChangeBody(val body: String) : EditNoteIntent()
        data class SelectNote(val note: Note?) : EditNoteIntent()
    }

    init {
        coroutineScope.launch {
            diaryUseCase.getNotesAndTags().collect {
                mutableState.value = mutableState.value.copy(
                    notes = it.toPersistentList(),
                    filteredNotes = it.toPersistentList()
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
                reduceListState(mutableState.value, intent)
            }

            if (intent is EditNoteIntent) {
                if (intent is EditNoteIntent.SaveNote) _editNoteState.value =
                    _editNoteState.value.copy(loadState = LoadState.Loading)
                reduceEditState(_editNoteState.value, intent)
            }
        }
    }

    private suspend fun reduceListState(
        noteListUiState: NoteListUiState, noteListIntent: NoteListIntent,
    ) {
        when (noteListIntent) {
            NoteListIntent.LoadData -> {
                when (val result = syncUseCase.sync()) {
                    is ApiResult.Failure -> {
                        mutableState.update {
                            mutableState.value.copy(loadState = LoadState.Error(message = result.message))
                        }

                    }

                    is ApiResult.ServerError -> {
                        mutableState.update {
                            mutableState.value.copy(
                                loadState = LoadState.Error(
                                    message = result.message
                                )
                            )
                        }
                    }

                    is ApiResult.Success -> {
                        mutableState.update { mutableState.value.copy(loadState = LoadState.Success) }
                    }
                }
            }

            is NoteListIntent.ChangeSearchQuery -> mutableState.update {
                changeSearchQuery(
                    noteListIntent.query, noteListUiState
                )
            }

            NoteListIntent.CloseErrorMessage -> {
                mutableState.update { noteListUiState.copy(loadState = LoadState.Idle) }
            }

            is NoteListIntent.DeleteNote -> {
                diaryUseCase.deleteNote(noteListIntent.note)
                if (noteListIntent.note.uuid == _editNoteState.value.currentNote?.uuid) {
                    _editNoteState.update {
                        it.copy(currentNote = null)
                    }
                }
            }
        }
    }

    private suspend fun reduceEditState(
        editNoteUiState: NoteEditorUiState, editNoteIntent: EditNoteIntent,
    ) {
        when (editNoteIntent) {
            is EditNoteIntent.ChangeBody -> {
                _editNoteState.update {
                    editNoteUiState.copy(currentNote = editNoteUiState.currentNote?.copy(content = editNoteIntent.body))
                }

            }

            is EditNoteIntent.ChangeTitle -> {
                _editNoteState.update {
                    editNoteUiState.copy(currentNote = editNoteUiState.currentNote?.copy(title = editNoteIntent.title))
                }

            }

            EditNoteIntent.DeleteNote -> {
                if (editNoteUiState.currentNote != null) {
                    diaryUseCase.deleteNote(editNoteUiState.currentNote)
                }
                _editNoteState.update {
                    editNoteUiState.copy(currentNote = null)
                }

            }

            EditNoteIntent.SaveNote -> {
                if (editNoteUiState.currentNote == null) return

                if (editNoteUiState.currentNote.content.isNullOrBlank()) {
                    _editNoteState.update {
                        editNoteUiState.copy(loadState = LoadState.Error(message = "Пустая заметка"))
                    }
                    return
                }

                val now: Instant = Clock.System.now()

                var currentNote = editNoteUiState.currentNote

                if (currentNote.title.isEmpty()) {
                    currentNote =
                        currentNote.copy(
                            title = "${
                                currentNote.content?.split(" ")?.take(3)?.joinToString(" ")
                            }"
                        )
                }

                delay(300)
                if (currentNote.uuid == null) {
                    _editNoteState.update {
                        createNote(currentNote, now, editNoteUiState)
                    }
                } else {
                    _editNoteState.update {
                        editNote(currentNote, now, editNoteUiState)
                    }
                }
            }

            is EditNoteIntent.SelectNote -> {
                _editNoteState.update {
                    editNoteUiState.copy(
                        currentNote = editNoteIntent.note, loadState = LoadState.Idle
                    )
                }
            }
        }
    }

    private suspend fun editNote(
        currentNote: Note,
        now: Instant,
        editNoteUiState: NoteEditorUiState,
    ): NoteEditorUiState {
        return when (val result = diaryUseCase.updateNoteAndAnalyze(
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
                    when (val result2 = diaryUseCase.createNoteInServer(
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

    private suspend fun createNote(
        currentNote: Note,
        now: Instant,
        editNoteUiState: NoteEditorUiState,
    ): NoteEditorUiState {
        val result = diaryUseCase.createNoteAndAnalyze(
            currentNote.copy(
                updatedAt = now.toLocalDateTime(
                    TimeZone.UTC
                ), createdAt = now.toLocalDateTime(TimeZone.UTC)
            )
        )
        return when (val resultApi = result.first) {
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