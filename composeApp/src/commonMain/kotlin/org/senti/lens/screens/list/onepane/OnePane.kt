package org.senti.lens.screens.list.onepane

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.navigator.Navigator
import org.senti.lens.PlatformBackHandler
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

    Crossfade(editState.currentNote == null, animationSpec = tween(400)) { isNote ->
        if (!isNote) {
            EditNoteContent(
                modifier = Modifier.fillMaxSize().background(MaterialTheme.colors.background),
                currentNote = editState.currentNote,
                onBackClick = {
                    screenModel.processIntent(
                        DiaryListScreenModel.EditNoteIntent.SelectNote(null)
                    )
                },
                onSaveClick = {
                    screenModel.processIntent(
                        DiaryListScreenModel.EditNoteIntent.SaveNote
                    )
                },
                onChangeTitle = {
                    screenModel.processIntent(
                        DiaryListScreenModel.EditNoteIntent.ChangeTitle(it)
                    )
                },
                onChangeBody = {
                    screenModel.processIntent(
                        DiaryListScreenModel.EditNoteIntent.ChangeBody(it)
                    )
                },
                onDeleteClick = {
                    screenModel.processIntent(
                        DiaryListScreenModel.EditNoteIntent.DeleteNote
                    )
                },
                onClickAnalyze = {

                },
                onClickRecommendation = { id: String ->
                    navigator?.singlePush(RecommendationScreen(id))
                },
                loadState = editState.loadState,
            )
        } else {
            NotesListContent(modifier = Modifier.fillMaxSize(),
                state = state,
                onClickNote = {
                    screenModel.processIntent(
                        DiaryListScreenModel.EditNoteIntent.SelectNote(it)
                    )
                },
                changeSearchQuery = {
                    screenModel.processIntent(
                        DiaryListScreenModel.NoteListIntent.ChangeSearchQuery(
                            it
                        )
                    )
                },
                onRefresh = { screenModel.processIntent(DiaryListScreenModel.NoteListIntent.LoadData) },
                onClickSetting = {
                    navigator?.singlePush(SettingScreen())
                },
                onDeleteItemClick = {
                    screenModel.processIntent(
                        DiaryListScreenModel.NoteListIntent.DeleteNote(it)
                    )
                })

        }
    }


}