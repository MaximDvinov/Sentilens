//package org.senti.lens.screens.home.editNote
//
//import cafe.adriel.voyager.core.model.StateScreenModel
//import cafe.adriel.voyager.core.model.screenModelScope
//import kotlinx.coroutines.delay
//import kotlinx.coroutines.flow.MutableSharedFlow
//import kotlinx.coroutines.flow.SharedFlow
//import kotlinx.coroutines.launch
//import org.senti.lens.LoadState
//import org.senti.lens.models.Note
//import org.senti.lens.models.Tag
//import org.senti.lens.repositories.DbNotesRepositoryImpl
//import org.senti.lens.repositories.DbTagsRepositoryImpl
//import java.util.UUID
//
//class EditNoteModel(
//    private val id: String?,
//    private val useCase: EditNoteUseCase = EditNoteUseCase(
//        DbNotesRepositoryImpl.instance,
//        DbTagsRepositoryImpl.instance
//    )
//) :
//    StateScreenModel<EditNoteModel.UiState>(UiState(currentNote = null, tags = listOf())) {
//
//    data class UiState(
//        val currentNote: Note? = Note(),
//        val tags: List<Tag> = listOf(),
//        val loadState: LoadState = LoadState.Success
//    )
//
//    sealed class Event {
//        object SavedNote : Event()
//        object DeletedNote : Event()
//    }
//
//    private val _event: MutableSharedFlow<Event?> = MutableSharedFlow()
//    val event: SharedFlow<Event?>
//        get() = _event
//
//    init {
//        if (id != null) {
//            screenModelScope.launch {
//                mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
//                useCase.getNote(UUID.fromString(id))?.let {
//                    mutableState.value =
//                        mutableState.value.copy(currentNote = it, loadState = LoadState.Success)
//                }
//            }
//        } else {
//            mutableState.value = mutableState.value.copy(currentNote = Note())
//        }
//
//        screenModelScope.launch {
//            useCase.getAllTags().collect { tags ->
//                mutableState.value = mutableState.value.copy(tags = tags)
//            }
//
//        }
//    }
//
//    sealed class Intent {
//        object SaveNote : Intent()
//        data class ChangeTitle(val title: String) : Intent()
//        data class ChangeBody(val body: String) : Intent()
//        data class SaveTags(val tags: List<Tag>) : Intent()
//        object DeleteNote : Intent()
//    }
//
//    fun processIntent(intent: Intent) {
//        screenModelScope.launch {
//            if (intent is Intent.SaveNote) {
//                mutableState.value = mutableState.value.copy(loadState = LoadState.Loading)
//            }
//            mutableState.value = reduce(mutableState.value, intent)
//        }
//    }
//
//    private suspend fun reduce(
//        oldState: UiState, intent: Intent
//    ): UiState {
//        return when (intent) {
//            is Intent.ChangeBody -> {
//                oldState.copy(currentNote = oldState.currentNote?.copy(content = intent.body))
//            }
//
//            is Intent.ChangeTitle -> {
//                oldState.copy(currentNote = oldState.currentNote?.copy(title = intent.title))
//            }
//
//            Intent.SaveNote -> {
//                if (oldState.currentNote == null) return oldState
//                val newNote = if (oldState.currentNote.uuid == null) {
//                    useCase.createNote(note = oldState.currentNote)
//                } else {
//                    useCase.updateNote(note = oldState.currentNote)
//                }
//
//                delay(300)
//                oldState.copy(currentNote = newNote, loadState = LoadState.Success)
//            }
//
//            is Intent.SaveTags -> {
//                oldState.copy(currentNote = oldState.currentNote?.copy(tags = intent.tags))
//            }
//
//            is Intent.DeleteNote -> {
//                if (oldState.currentNote?.uuid != null) {
//                    useCase.deleteNote(oldState.currentNote)
//                    _event.emit(Event.DeletedNote)
//                }
//
//                oldState
//            }
//
//        }
//    }
//
//}