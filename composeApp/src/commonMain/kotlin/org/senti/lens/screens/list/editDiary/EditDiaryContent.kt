package org.senti.lens.screens.list.editDiary

import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import org.senti.lens.LoadState
import org.senti.lens.PlatformDialog
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.TagDialog
import org.senti.lens.screens.list.editDiary.ui.BottomBarEdit
import org.senti.lens.screens.list.editDiary.ui.ContentNote
import org.senti.lens.screens.list.editDiary.ui.TopBarEdit
import org.senti.lens.screens.recommendation.SentimentDialog

@Composable
fun EditNoteContent(
    modifier: Modifier,
    currentNote: Note?,
    onBackClick: () -> Unit,
    onSaveClick: () -> Unit,
    onChangeTitle: (String) -> Unit,
    onChangeBody: (String) -> Unit,
    onDeleteClick: () -> Unit,
    onClickAnalyze: () -> Unit,
    loadState: LoadState,
    onClickRecommendation: (String) -> Unit,
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
        BottomBarEdit(
            sentiment = currentNote?.sentiment,
            onSaveClick = onSaveClick,
            onClickAnalyze = {
                sentimentDialogShowed = true
            })
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




