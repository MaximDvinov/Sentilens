package org.senti.lens.screens.editNote

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
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
import org.senti.lens.LoadState
import org.senti.lens.PlatformDialog
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.DialogContent
import org.senti.lens.screens.editNote.ui.BottomBarEdit
import org.senti.lens.screens.editNote.ui.ContentNote
import org.senti.lens.screens.editNote.ui.TopBarEdit
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.recommendation.SentimentDialog

class EditNoteScreen(val id: String?) : Screen {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow

        val screenModel = rememberScreenModel {
            EditNoteModel(id)
        }
        val state by screenModel.state.collectAsState()


        LaunchedEffect(Unit) {
            screenModel.event.collect { event ->
                when (event) {
                    EditNoteModel.Event.DeletedNote -> {
                        navigator.pop()
                    }

                    EditNoteModel.Event.SavedNote -> {

                    }

                    null -> {

                    }
                }
            }
        }


        EditNoteContent(modifier = Modifier.fillMaxSize(),
            currentNote = state.currentNote,
            tags = state.tags,
            loadState = state.loadState,
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
            },
            onClickAnalyze = {
                navigator.push(RecommendationScreen())
            },
            onSaveTagsClick = { tag ->
                screenModel.processIntent(intent = EditNoteModel.Intent.SaveTags(tag))
            })

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
    onSaveTagsClick: (List<Tag>) -> Unit,
    loadState: LoadState
) {
    var tagDialogShowed by remember { mutableStateOf(false) }
    var sentimentDialogShowed by remember { mutableStateOf(false) }

    Column(modifier) {
        TopBarEdit(
            onBackClick = onBackClick,
            loadState = loadState,
            onDeleteClick = {
                onDeleteClick()
            },
            onTagsClick = {
                tagDialogShowed = !tagDialogShowed
            },
            note = currentNote
        )
        ContentNote(
            modifier = Modifier.weight(1f),
            currentNote = currentNote,
            onChangeTitle,
            onChangeBody
        )
        BottomBarEdit(onSaveClick, onClickAnalyze = {
            sentimentDialogShowed = true
        })
    }


    PlatformDialog(
        modifier = Modifier,
        visible = tagDialogShowed,
        onDismissRequest = { tagDialogShowed = false },
    ) {
        DialogContent(
            modifier = Modifier,
            tags = tags,
            selectedTags = currentNote?.tags,
            onSaveClick = onSaveTagsClick,
            onDismissRequest = { tagDialogShowed = false }
        )
    }

    PlatformDialog(
        modifier = Modifier,
        visible = sentimentDialogShowed,
        size = 300 to 450,
        onDismissRequest = { sentimentDialogShowed = false },
    ) {
        SentimentDialog(
            Modifier,
            onCloseClick = { sentimentDialogShowed = false },
            onRecommendationClick = onClickAnalyze
        )
    }
}




