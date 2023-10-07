package org.senti.lens.screens.home.twopane

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import org.senti.lens.screens.home.HomeScreenModel
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.setting.SettingScreen
import org.senti.lens.singlePush

@Composable
fun TwoPane(
    state: HomeScreenModel.NoteListUiState,
    editState: HomeScreenModel.NoteEditorUiState,
    screenModel: HomeScreenModel,
    navigator: Navigator?,
) {
    TwoPaneContent(state, editState, onBackClick = {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.SelectNote(null)
        )
    }, onClickSetting = {
        navigator?.singlePush(SettingScreen())
    }, onSaveClick = {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.SaveNote
        )
    }, onChangeTitle = {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.ChangeTitle(it)
        )
    }, onChangeBody = {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.ChangeBody(it)
        )
    }, onDeleteClick = {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.DeleteNote
        )
    }, onSelectNote = {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.SelectNote(it)
        )
    }, onSelectTag = {
        screenModel.processIntent(
            HomeScreenModel.NoteListIntent.SelectTag(it)
        )
    }, changeSearchQuery = {
        screenModel.processIntent(
            HomeScreenModel.NoteListIntent.ChangeSearchQuery(
                it
            )
        )
    }, onRefresh = {
        screenModel.processIntent(
            HomeScreenModel.NoteListIntent.LoadData
        )
    }, onClickAnalyze = {}, onClickTagInDialog = {
        screenModel.processIntent(
            HomeScreenModel.EditNoteIntent.AddTagInNote(
                it
            )
        )
    }, onClickRecommendation = { id: String ->
        navigator?.singlePush(RecommendationScreen(id))
    }, onCreateTagClick = {
        screenModel.processIntent(
            HomeScreenModel.NoteListIntent.CreateTag(it)
        )
    },
        onDeleteItemClick = {
            screenModel.processIntent(
                HomeScreenModel.NoteListIntent.DeleteNote(it)
            )
        })
}
