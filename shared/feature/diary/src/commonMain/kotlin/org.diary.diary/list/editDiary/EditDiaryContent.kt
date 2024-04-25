package org.diary.diary.list.editDiary

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import org.diary.composeui.LoadState
import org.diary.composeui.PlatformDialog
import org.diary.diary.Note
import org.diary.diary.list.DiaryScreenModel
import org.diary.diary.list.Intent
import org.diary.diary.list.SentimentDialog
import org.diary.diary.list.editDiary.ui.BottomBarEdit
import org.diary.diary.list.editDiary.ui.ContentNote
import org.diary.diary.list.editDiary.ui.TopBarEdit

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
                            onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(null))
                        },
                        loadState = loadState,
                        onDeleteClick = {
                            onIntent(DiaryScreenModel.EditNoteIntent.DeleteNote)
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
                            onIntent(DiaryScreenModel.EditNoteIntent.ChangeTitle(it))
                        }
                    ) {
                        onIntent(DiaryScreenModel.EditNoteIntent.ChangeBody(it))
                    }
                    BottomBarEdit(
                        modifier = Modifier.fillMaxWidth(),
                        sentiment = it.sentiment,
                        onSaveClick = {
                            onIntent(DiaryScreenModel.EditNoteIntent.SaveNote)
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




