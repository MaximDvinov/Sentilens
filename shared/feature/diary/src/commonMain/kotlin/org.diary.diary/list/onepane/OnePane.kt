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
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.diary.composeui.LoadState
import org.diary.diary.Note
import org.diary.diary.list.DiaryScreenModel
import org.diary.diary.list.Intent
import org.diary.diary.list.editDiary.EditNoteContent
import org.diary.navigation.InitialDiaryScreenState

@Composable
fun OnePane(
    state: DiaryScreenModel.NoteList,
    editState: DiaryScreenModel.EditNoteState?,
    onClickBack: () -> Unit,
    onIntent: (Intent) -> Unit,
    initialState: InitialDiaryScreenState,
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

    Crossfade(
        editState != null || initialState == InitialDiaryScreenState.CreateDiary || initialState is InitialDiaryScreenState.UpdateDiary,
        animationSpec = tween(200)
    ) { isNote ->
        if (!isNote) {
            NotesListContent(
                modifier = Modifier.padding(top = 8.dp).fillMaxSize(),
                state = state,
                onIntent = onIntent,
            )
        } else {
            EditNoteContent(
                modifier = Modifier
                    .padding(16.dp)
                    .fillMaxSize(),
                currentNote = currentNote,
                onIntent = onIntent,
                onClickBack = onClickBack,
                loadState = editState?.loadState ?: LoadState.Idle,
            )
        }
    }
}