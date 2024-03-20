package org.senti.lens.screens.list.onepane

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.Navigator
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.senti.lens.PlatformBackHandler
import org.senti.lens.models.Note
import org.senti.lens.screens.commons.ui.fadingCenterBack
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.screens.list.editDiary.EditNoteContent
import org.senti.lens.screens.list.DiaryListScreenModel
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.setting.SettingScreen
import org.senti.lens.singlePush

@Composable
fun OnePane(
    state: DiaryListScreenModel.NoteListUiState,
    editState: DiaryListScreenModel.NoteEditorUiState,
    screenModel: DiaryListScreenModel,
    navigator: Navigator?
) {
    PlatformBackHandler(editState.currentNote != null) {
        screenModel.processIntent(
            DiaryListScreenModel.EditNoteIntent.SelectNote(null)
        )
    }

    var currentNote by remember {
        mutableStateOf<Note?>(null)
    }

    LaunchedEffect(editState.currentNote) {
        launch {
            if (editState.currentNote == null) {
                delay(100)
            }

            currentNote = editState.currentNote
        }
    }

    Crossfade(editState.currentNote == null, animationSpec = tween(100)) { isNote ->
        if (!isNote) {
            EditNoteContent(
                modifier = Modifier
                    .padding(16.dp)
                    .fillMaxSize(),
                currentNote = currentNote,
                onIntent = screenModel::processIntent,
                onClickRecommendation = { id: String ->
                    navigator?.singlePush(RecommendationScreen(id))
                },
                loadState = editState.loadState,
            )
        } else {
            NotesListContent(
                modifier = Modifier.padding(top = 8.dp).fillMaxSize(),
                state = state,
                onIntent = screenModel::processIntent,
                onClickSetting = {
                    navigator?.singlePush(SettingScreen())
                },
            )
        }
    }


}