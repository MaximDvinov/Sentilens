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
    TwoPaneContent(state, editState,
        onIntent = screenModel::processIntent,
        onClickSetting = {
            navigator?.singlePush(SettingScreen())
        },
        onClickRecommendation = { id: String ->
            navigator?.singlePush(RecommendationScreen(id))
        })
}
