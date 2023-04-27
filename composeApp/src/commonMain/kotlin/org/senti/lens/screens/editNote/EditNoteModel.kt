package org.senti.lens.screens.editNote

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import kotlinx.coroutines.launch
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.repositories.NotesRepositoryImpl
import org.senti.lens.repositories.TagsRepositoryImpl

class EditNoteModel(note: Note? = Note(), tags: List<Tag>) :
    StateScreenModel<EditNoteModel.UiState>(UiState(currentNote = note, tags = tags)) {

    val useCase: EditNoteUseCase =
        EditNoteUseCase(NotesRepositoryImpl.instance, TagsRepositoryImpl.instance)

    data class UiState(
        val currentNote: Note? = Note(),
        val tags: List<Tag> = listOf()
    )

    sealed class Intent {
        object SaveNote : Intent()
        data class ChangeTitle(val title: String) : Intent()
        data class ChangeBody(val body: String) : Intent()
        data class SaveTags(val tags: List<Tag>) : Intent()
        object DeleteNote : Intent()
    }

    fun processIntent(intent: Intent) {
        coroutineScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    private suspend fun reduce(
        oldState: UiState,
        intent: Intent
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

            is Intent.SaveTags -> {
                oldState.copy(currentNote = oldState.currentNote?.copy(tags = intent.tags))
            }

            Intent.DeleteNote -> {
                if (oldState.currentNote != null) {
                    useCase.deleteNote(oldState.currentNote)
                }
                oldState
            }
        }
    }

}