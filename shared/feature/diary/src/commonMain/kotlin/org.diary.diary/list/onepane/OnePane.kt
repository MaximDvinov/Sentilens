package org.diary.diary.list.onepane

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.Navigator
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.diary.composeui.LoadState
import org.diary.diary.Note
import org.diary.diary.list.DiaryScreenModel
import org.diary.diary.list.editDiary.EditNoteContent

@Composable
fun OnePane(
    state: DiaryScreenModel.NoteList,
    editState: DiaryScreenModel.EditNoteState?,
    screenModel: DiaryScreenModel,
    navigator: Navigator?
) {
    var currentNote by remember {
        mutableStateOf<Note?>(null)
    }

    LaunchedEffect(editState) {
        launch {
            if (editState == null) {
                delay(100)
            }

            currentNote = editState?.currentNote
        }
    }

    Crossfade(editState == null, animationSpec = tween(100)) { isNote ->
        if (!isNote) {
            EditNoteContent(
                modifier = Modifier
                    .padding(16.dp)
                    .fillMaxSize(),
                currentNote = currentNote,
                onIntent = screenModel::processIntent,
                onClickRecommendation = { id: String ->
//                    navigator?.singlePush(RecommendationScreen(id))
                },
                loadState = editState?.loadState ?: LoadState.Idle,
            )
        } else {
            NotesListContent(
                modifier = Modifier.padding(top = 8.dp).fillMaxSize(),
                state = state,
                onIntent = screenModel::processIntent,
                onClickSetting = {
//                    navigator?.singlePush(SettingScreen()) TODO: implement
                },
            )
        }
    }
}