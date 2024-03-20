package org.senti.lens.screens.list.editDiary

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import org.senti.lens.LoadState
import org.senti.lens.PlatformDialog
import org.senti.lens.models.Note
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.screens.list.DiaryListScreenModel
import org.senti.lens.screens.list.Intent
import org.senti.lens.screens.list.editDiary.ui.BottomBarEdit
import org.senti.lens.screens.list.editDiary.ui.ContentNote
import org.senti.lens.screens.list.editDiary.ui.TopBarEdit
import org.senti.lens.screens.recommendation.SentimentDialog

@Composable
fun EditNoteContent(
    modifier: Modifier,
    currentNote: Note?,
    onIntent: (Intent) -> Unit,
    loadState: LoadState,
    onClickRecommendation: (String) -> Unit,
) {
    var tagDialogShowed by remember { mutableStateOf(false) }
    var sentimentDialogShowed by remember { mutableStateOf(false) }

    Column(modifier = modifier.fillMaxHeight()) {
        AnimatedContent(
            currentNote,
            transitionSpec = {
                fadeIn(tween(100)) togetherWith fadeOut(tween(100))
            },
            contentKey = { it?.uuid }
        ) {
            Column(
                modifier = Modifier.fillMaxSize()
            ) {
                if (it != null) {
                    TopBarEdit(
                        onBackClick = {
                            onIntent(DiaryListScreenModel.EditNoteIntent.SelectNote(null))
                        },
                        loadState = loadState,
                        onDeleteClick = {
                            onIntent(DiaryListScreenModel.EditNoteIntent.DeleteNote)
                        },
                        onTagsClick = {
                            tagDialogShowed = !tagDialogShowed
                        },
                        note = it
                    )

                    ContentNote(
                        modifier = Modifier.weight(1f).fillMaxSize(),
                        currentNote = it,
                        onChangeTitleNote = {
                            onIntent(DiaryListScreenModel.EditNoteIntent.ChangeTitle(it))
                        }
                    ) {
                        onIntent(DiaryListScreenModel.EditNoteIntent.ChangeBody(it))
                    }
                    BottomBarEdit(
                        modifier = Modifier.fillMaxWidth(),
                        sentiment = it.sentiment,
                        onSaveClick = {
                            onIntent(DiaryListScreenModel.EditNoteIntent.SaveNote)
                        },
                        loadState = loadState
                    ) {
                        sentimentDialogShowed = true
                    }


                }
            }

        }
    }



    if (currentNote?.sentiment != null) {
        PlatformDialog(
            modifier = Modifier,
            visible = sentimentDialogShowed,
            size = 300 to 450,
            onDismissRequest = { sentimentDialogShowed = false },
        ) {
            SentimentDialog(
                Modifier,
                onCloseClick = { sentimentDialogShowed = false },
                onRecommendationClick = {
                    sentimentDialogShowed = false
                    onClickRecommendation(currentNote.uuid.toString())
                },
                sentiment = currentNote.sentiment
            )
        }
    }

}




