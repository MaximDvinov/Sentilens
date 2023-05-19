package org.senti.lens.screens.home.onepane

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.navigator.Navigator
import org.senti.lens.PlatformBackHandler
import org.senti.lens.screens.home.editNote.EditNoteContent
import org.senti.lens.screens.home.HomeScreenModel
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.setting.SettingScreen
import org.senti.lens.singlePush

@Composable
fun OnePane(
    state: HomeScreenModel.NoteListUiState,
    editState: HomeScreenModel.NoteEditorUiStat,
    screenModel: HomeScreenModel,
    navigator: Navigator?
) {
    PlatformBackHandler(editState.currentNote != null) {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.SelectNote(null)
        )
    }

    Crossfade(editState.currentNote == null, animationSpec = tween(400)) { isNote ->
        if (!isNote) {
            EditNoteContent(
                modifier = Modifier.fillMaxSize().background(MaterialTheme.colors.background),
                tags = state.tags?.map { it.first },
                currentNote = editState.currentNote,
                onBackClick = {
                    screenModel.processIntent(
                        HomeScreenModel.EditNoteIntent.SelectNote(null)
                    )
                },
                onSaveClick = {
                    screenModel.processIntent(
                        HomeScreenModel.EditNoteIntent.SaveNote
                    )
                },
                onChangeTitle = {
                    screenModel.processIntent(
                        HomeScreenModel.EditNoteIntent.ChangeTitle(it)
                    )
                },
                onChangeBody = {
                    screenModel.processIntent(
                        HomeScreenModel.EditNoteIntent.ChangeBody(it)
                    )
                },
                onDeleteClick = {
                    screenModel.processIntent(
                        HomeScreenModel.EditNoteIntent.DeleteNote
                    )
                },
                onClickAnalyze = {

                },
                onClickRecommendation = { id: String ->
                    navigator?.singlePush(RecommendationScreen(id))
                },
                onClickTagInDialog = {
                    screenModel.processIntent(
                        HomeScreenModel.EditNoteIntent.AddTagInNote(
                            it
                        )
                    )
                },
                loadState = editState.loadState,
                onCreteTagClick = {
                    screenModel.processIntent(
                        HomeScreenModel.NoteListIntent.CreateTag(it)
                    )
                }
            )
        } else {
            NotesListContent(modifier = Modifier.fillMaxSize(),
                state = state,
                onClickTag = {
                    screenModel.processIntent(
                        HomeScreenModel.NoteListIntent.SelectTag(
                            it
                        )
                    )
                },
                onClickNote = {
                    screenModel.processIntent(
                        HomeScreenModel.EditNoteIntent.SelectNote(it)
                    )
                },
                changeSearchQuery = {
                    screenModel.processIntent(
                        HomeScreenModel.NoteListIntent.ChangeSearchQuery(
                            it
                        )
                    )
                },
                onRefresh = { screenModel.processIntent(HomeScreenModel.NoteListIntent.LoadData) },
                onClickSetting = {
                    navigator?.singlePush(SettingScreen())
                })

        }
    }


}