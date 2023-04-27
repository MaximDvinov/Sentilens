package org.senti.lens.screens.editNote

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.senti.lens.TagsDialog
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.BottomBarEdit
import org.senti.lens.screens.commons.ui.ContentNote
import org.senti.lens.screens.commons.ui.TopBarEdit
import org.senti.lens.screens.recommendation.RecommendationScreen

class EditNoteScreen(val note: Note?, val tags: List<Tag>) : Screen {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val screenModel = rememberScreenModel {
            EditNoteModel(note, tags)
        }
        val state by screenModel.state.collectAsState()

        state.currentNote?.let {
            EditNoteContent(modifier = Modifier.fillMaxSize(),
                currentNote = it,
                tags = state.tags,
                onBackClick = { navigator.pop() },
                onChangeTitle = {
                    screenModel.processIntent(EditNoteModel.Intent.ChangeTitle(it))
                },
                onChangeBody = {
                    screenModel.processIntent(EditNoteModel.Intent.ChangeBody(it))
                },
                onSaveClick = {
                    screenModel.processIntent(EditNoteModel.Intent.SaveNote)
                },
                onDeleteClick = {
                    screenModel.processIntent(intent = EditNoteModel.Intent.DeleteNote)
                    navigator.pop()
                },
                onClickAnalyze = {
                    navigator.push(RecommendationScreen())
                },
                onSaveTagsClick = { tag ->
                    screenModel.processIntent(intent = EditNoteModel.Intent.SaveTags(tag))
                })
        }
    }
}

@Composable
fun EditNoteContent(
    modifier: Modifier,
    tags: List<Tag>?,
    currentNote: Note?,
    onBackClick: () -> Unit,
    onSaveClick: () -> Unit,
    onChangeTitle: (String) -> Unit,
    onChangeBody: (String) -> Unit,
    onDeleteClick: () -> Unit,
    onClickAnalyze: () -> Unit,
    onSaveTagsClick: (List<Tag>) -> Unit
) {
    var dialogShowed by remember { mutableStateOf(false) }

    Column(modifier) {
        TopBarEdit(onBackClick, onDeleteClick, onBackClick, onTagsClick = {
            dialogShowed = !dialogShowed
        })
        ContentNote(
            modifier = Modifier.weight(1f),
            currentNote = currentNote,
            onChangeTitle,
            onChangeBody
        )
        BottomBarEdit(onSaveClick, onBackClick, onClickAnalyze = onClickAnalyze)
    }


    TagsDialog(
        modifier = Modifier,
        tags = tags,
        visible = dialogShowed,
        selectedTags = currentNote?.tags,
        onSaveClick = onSaveTagsClick
    ) { dialogShowed = false }
}




