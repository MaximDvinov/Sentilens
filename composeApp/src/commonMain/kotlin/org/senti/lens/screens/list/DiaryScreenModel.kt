package org.senti.lens.screens.list

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import io.ktor.http.HttpStatusCode
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.toImmutableList
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.senti.lens.ApiResult
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.repositories.SyncRepository

interface Intent

class DiaryScreenModel(
    private val notesRepository: NotesRepository, private val syncRepository: SyncRepository,
) : StateScreenModel<DiaryScreenModel.UiState>(UiState()) {
    data class UiState(
        val listNote: NoteList = NoteList(),
        val editNoteState: EditNoteState? = null,
    )

    data class NoteList(
        val notes: ImmutableList<Note>? = null,
        val searchQuery: String = "",
        val loadState: LoadState = LoadState.Idle,
        val filteredNotes: ImmutableList<Note>? = notes?.toImmutableList(),
    )

    data class EditNoteState(
        val currentNote: Note,
        val loadState: LoadState = LoadState.Idle,
    )

    sealed class NoteListIntent : Intent {
        data object LoadData : NoteListIntent()
        data class ChangeSearchQuery(val query: String) : NoteListIntent()
        data class DeleteNote(val note: Note) : NoteListIntent()
        data object CloseErrorMessage : NoteListIntent()
    }

    sealed class EditNoteIntent : Intent {
        data object SaveNote : EditNoteIntent()
        data object DeleteNote : EditNoteIntent()
        data class ChangeTitle(val title: String) : EditNoteIntent()
        data class ChangeBody(val body: String) : EditNoteIntent()
        data class SelectNote(val note: Note?) : EditNoteIntent()
    }

    init {
        screenModelScope.launch {
            notesRepository.getNotesAndTags().collect { newList ->
                mutableState.update {
                    it.copy(
                        listNote = it.listNote.copy(
                            notes = newList.toPersistentList(),
                            filteredNotes = newList.toPersistentList()
                        )
                    )
                }
            }
        }

        screenModelScope.launch {
            delay(50)

            mutableState.update {
                it.copy(
                    listNote = it.listNote.copy(loadState = LoadState.Loading)
                )
            }

            loadNoteList()

        }
    }

    fun processIntent(intent: Intent) {
        screenModelScope.launch {
            if (intent is NoteListIntent) {
                if (intent is NoteListIntent.LoadData) {
                    mutableState.update {
                        it.copy(listNote = it.listNote.copy(loadState = LoadState.Loading))
                    }
                }
                reduceListState(mutableState.value.listNote, intent)
            } else if (intent is EditNoteIntent) {
                if (intent is EditNoteIntent.SaveNote) {
                    mutableState.update {
                        it.copy(
                            editNoteState = it.editNoteState?.copy(loadState = LoadState.Loading)
                        )
                    }
                }
                reduceEditState(mutableState.value.editNoteState, intent)
            }
        }
    }

    private suspend fun reduceListState(
        noteList: NoteList, noteListIntent: NoteListIntent,
    ) {
        when (noteListIntent) {
            NoteListIntent.LoadData -> {
                loadNoteList()
            }

            is NoteListIntent.ChangeSearchQuery -> mutableState.update {
                it.copy(listNote = changeSearchQuery(noteListIntent.query, noteList))
            }

            NoteListIntent.CloseErrorMessage -> mutableState.update {
                it.copy(listNote = noteList.copy(loadState = LoadState.Idle))
            }

            is NoteListIntent.DeleteNote -> deleteNote(noteListIntent.note)
        }
    }

    private suspend fun reduceEditState(
        editNoteUiState: EditNoteState?, editNoteIntent: EditNoteIntent,
    ) {
        when (editNoteIntent) {
            is EditNoteIntent.ChangeBody -> mutableState.update {
                it.updateEditNote(editNoteUiState?.currentNote?.copy(content = editNoteIntent.body))
            }

            is EditNoteIntent.ChangeTitle -> mutableState.update {
                it.updateEditNote(editNoteUiState?.currentNote?.copy(title = editNoteIntent.title))
            }

            EditNoteIntent.DeleteNote -> deleteNote(editNoteUiState?.currentNote)

            EditNoteIntent.SaveNote -> saveNote(editNoteUiState)

            is EditNoteIntent.SelectNote -> mutableState.update {
                it.updateEditNote(editNoteIntent.note, loadState = LoadState.Idle)
            }
        }
    }

    private suspend fun loadNoteList() {
        when (val result = syncRepository.sync()) {
            is ApiResult.Failure -> updateNoteListState(result.message)


            is ApiResult.ServerError -> updateNoteListState(result.message)

            is ApiResult.Success -> mutableState.update {
                it.copy(listNote = it.listNote.copy(loadState = LoadState.Success))
            }
        }
    }

    private fun updateNoteListState(message: String) {
        mutableState.update {
            it.copy(
                listNote = it.listNote.copy(loadState = LoadState.Error(message = message))
            )
        }
    }

    private suspend fun deleteNote(currentNote: Note?) {
        if (currentNote?.uuid == mutableState.value.editNoteState?.currentNote?.uuid) mutableState.update {
            it.copy(
                editNoteState = null
            )
        }

        if (currentNote != null) {
            notesRepository.deleteNote(currentNote)
        }
    }

    private suspend fun saveNote(editNoteUiState: EditNoteState?) {
        if (editNoteUiState?.currentNote == null) return

        if (editNoteUiState.currentNote.content.isNullOrBlank()) {
            mutableState.update {
                it.updateEditNote(loadState = LoadState.Error(message = "Пустая заметка"))
            }
            return
        }

        val nowTime: Instant = Clock.System.now()

        var currentNote = editNoteUiState.currentNote

        if (currentNote.title.isEmpty()) {
            currentNote = currentNote.copy(
                title = "${
                    currentNote.content?.split(" ")?.take(3)?.joinToString(" ")
                }"
            )
        }

        delay(300)
        if (currentNote.uuid == null) {
            val createNote = createNote(
                currentNote,
                nowTime,
                editNoteUiState
            )
            mutableState.update {
                it.copy(
                    editNoteState = createNote
                )
            }
        } else {
            val editedNote = editNote(currentNote, nowTime, editNoteUiState)
            mutableState.update {
                it.copy(editNoteState = editedNote)
            }
        }
    }

    private fun UiState.updateEditNote(
        selectedNote: Note? = this.editNoteState?.currentNote,
        loadState: LoadState = this.editNoteState?.loadState ?: LoadState.Idle
    ): UiState {
        return if (selectedNote == null) this.copy(editNoteState = null)
        else this.copy(
            editNoteState = this.editNoteState?.copy(
                currentNote = selectedNote, loadState = loadState
            ) ?: EditNoteState(selectedNote)
        )
    }

    private suspend fun editNote(
        currentNote: Note,
        now: Instant,
        editNoteUiState: EditNoteState,
    ): EditNoteState {
        return when (val result = notesRepository.updateNoteAndAnalyze(
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
                    when (val result2 = notesRepository.createNote(
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
                                loadState = LoadState.Success, currentNote = result2.data
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
        editNoteUiState: EditNoteState,
    ): EditNoteState {
        val result = notesRepository.createNoteAndAnalyze(
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
                    currentNote = result.second ?: currentNote
                )
            }

            is ApiResult.ServerError -> {
                editNoteUiState.copy(
                    loadState = LoadState.Error(message = resultApi.message),
                    currentNote = result.second ?: currentNote
                )
            }

            is ApiResult.Success -> {
                editNoteUiState.copy(
                    loadState = LoadState.Success, currentNote = result.second ?: resultApi.data
                )
            }
        }
    }

    private fun changeSearchQuery(
        query: String, currentState: NoteList,
    ): NoteList {
        val newFilteredNotes = filterList(currentState.notes, query)

        return currentState.copy(
            searchQuery = query, filteredNotes = newFilteredNotes?.toPersistentList()
        )
    }

    private fun filterList(
        notes: List<Note>?, query: String,
    ) = notes?.filter { note ->
        note.title.lowercase().contains(query.lowercase()) || note.content?.lowercase()
            ?.contains(query.lowercase()) == true
    }
}