package org.senti.lens.screens.list.twopane

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import org.senti.lens.screens.list.DiaryListScreenModel
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.setting.SettingScreen
import org.senti.lens.singlePush

@Composable
fun TwoPane(
    state: DiaryListScreenModel.NoteListUiState,
    editState: DiaryListScreenModel.NoteEditorUiState,
    screenModel: DiaryListScreenModel,
    navigator: Navigator?,
) {
    TwoPaneContent(state, editState, onBackClick = {
        screenModel.processIntent(
            DiaryListScreenModel.EditNoteIntent.SelectNote(null)
        )
    }, onClickSetting = {
        navigator?.singlePush(SettingScreen())
    }, onSaveClick = {
        screenModel.processIntent(
            DiaryListScreenModel.EditNoteIntent.SaveNote
        )
    }, onChangeTitle = {
        screenModel.processIntent(
            DiaryListScreenModel.EditNoteIntent.ChangeTitle(it)
        )
    }, onChangeBody = {
        screenModel.processIntent(
            DiaryListScreenModel.EditNoteIntent.ChangeBody(it)
        )
    }, onDeleteClick = {
        screenModel.processIntent(
            DiaryListScreenModel.EditNoteIntent.DeleteNote
        )
    }, onSelectNote = {
        screenModel.processIntent(
            DiaryListScreenModel.EditNoteIntent.SelectNote(it)
        )
    }, changeSearchQuery = {
        screenModel.processIntent(
            DiaryListScreenModel.NoteListIntent.ChangeSearchQuery(
                it
            )
        )
    }, onRefresh = {
        screenModel.processIntent(
            DiaryListScreenModel.NoteListIntent.LoadData
        )
    }, onClickAnalyze = {}, onClickRecommendation = { id: String ->
        navigator?.singlePush(RecommendationScreen(id))
    }, onDeleteItemClick = {
        screenModel.processIntent(
            DiaryListScreenModel.NoteListIntent.DeleteNote(it)
        )
    })
}
