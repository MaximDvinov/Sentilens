package org.senti.lens.screens.home.twopane

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import org.senti.lens.screens.home.HomeScreenModel
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.setting.SettingScreen
import org.senti.lens.singlePush

@Composable
fun TwoPane(
    state: HomeScreenModel.UiState, screenModel: HomeScreenModel, navigator: Navigator?
) {
    TwoPaneContent(state, onBackClick = {
        screenModel.processIntent(
            HomeScreenModel.Intent.SelectNote(null)
        )
    }, onClickSetting = {
        navigator?.singlePush(SettingScreen())
    }, onSaveClick = {
        screenModel.processIntent(
            HomeScreenModel.Intent.SaveNote
        )
    }, onChangeTitle = {
        screenModel.processIntent(
            HomeScreenModel.Intent.ChangeTitle(it)
        )
    }, onChangeBody = {
        screenModel.processIntent(
            HomeScreenModel.Intent.ChangeBody(it)
        )
    }, onDeleteClick = {
        screenModel.processIntent(
            HomeScreenModel.Intent.DeleteNote
        )
    }, onSelectNote = {
        screenModel.processIntent(
            HomeScreenModel.Intent.SelectNote(it)
        )
    }, onSelectTag = {
        screenModel.processIntent(
            HomeScreenModel.Intent.SelectTag(it)
        )
    }, changeSearchQuery = {
        screenModel.processIntent(
            HomeScreenModel.Intent.ChangeSearchQuery(
                it
            )
        )
    }, onRefresh = {
        screenModel.processIntent(
            HomeScreenModel.Intent.LoadDataIntent
        )
    }, onClickAnalyze = {
        navigator?.singlePush(RecommendationScreen())
    }, onClickTagInDialog = {
        screenModel.processIntent(
            intent = HomeScreenModel.Intent.AddTagInNote(
                it
            )
        )
    })
}
