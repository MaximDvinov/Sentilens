package org.diary.diary.list

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.toImmutableList
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import org.diary.composeui.LoadState
import org.diary.data.ApiResult
import org.diary.diary.Note
import org.diary.data.NotesRepository
import org.diary.data.SyncRepository
import org.diary.diary.toNoteData
import org.diary.diary.toUiNote

interface Intent

class DiaryScreenModel(
    private val notesRepository: NotesRepository,
    private val syncRepository: SyncRepository,
    private val diaryId: UUID? = null,
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
            notesRepository.getNotes().collect { newList ->
                mutableState.update { state ->
                    state.copy(
                        listNote = state.listNote.copy(
                            notes = newList.map { it.toUiNote() }.toImmutableList(),
                            filteredNotes = newList.map { it.toUiNote() }.toPersistentList()
                        )
                    )
                }

                if (diaryId != null) {
                    mutableState.update { oldState ->
                        oldState.updateEditNote(
                            newList.find { it.uuid == diaryId }?.toUiNote(),
                            loadState = LoadState.Idle
                        )
                    }
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
            notesRepository.deleteNote(currentNote.toNoteData())
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
                currentNote.copy(uuid = UUID.generateUUID()),
                editNoteUiState
            )
            mutableState.update {
                it.copy(
                    editNoteState = createNote
                )
            }
        } else {
            val editedNote = editNote(currentNote, editNoteUiState)
            mutableState.update {
                it.copy(editNoteState = editedNote)
            }
        }
    }

    private fun UiState.updateEditNote(
        selectedNote: Note? = this.editNoteState?.currentNote,
        loadState: LoadState = this.editNoteState?.loadState ?: LoadState.Idle,
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
        editNoteUiState: EditNoteState,
    ): EditNoteState {
        val now = getNowTime()
        return when (val result = notesRepository.updateNoteAndAnalyze(
            currentNote.copy(
                updatedAt = now,
            ).toNoteData()
        )) {
            is ApiResult.Failure -> {
                editNoteUiState.copy(loadState = LoadState.Error(message = result.message))
            }

            is ApiResult.ServerError -> {
                editNoteUiState.copy(loadState = LoadState.Error(message = result.message))
            }

            is ApiResult.Success -> {
                editNoteUiState.copy(
                    loadState = LoadState.Success,
                    currentNote = result.data?.toUiNote() ?: currentNote
                )
            }
        }
    }

    private fun getNowTime(): LocalDateTime {
        val now = Clock.System.now()
        return now.toLocalDateTime(TimeZone.UTC)
    }

    private suspend fun createNote(
        currentNote: Note,
        editNoteUiState: EditNoteState,
    ): EditNoteState {
        val nowTime = getNowTime()
        val result = notesRepository.createNoteAndAnalyze(
            currentNote.copy(
                updatedAt = nowTime, createdAt = nowTime
            ).toNoteData()
        )
        return when (result) {
            is ApiResult.Failure -> {
                editNoteUiState.copy(
                    loadState = LoadState.Error(message = result.message),
                    currentNote = result.data?.toUiNote() ?: currentNote
                )
            }

            is ApiResult.ServerError -> {
                editNoteUiState.copy(
                    loadState = LoadState.Error(message = result.message),
                    currentNote = result.data?.toUiNote() ?: currentNote
                )
            }

            is ApiResult.Success -> {
                editNoteUiState.copy(
                    loadState = LoadState.Success,
                    currentNote = result.data?.toUiNote() ?: currentNote
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