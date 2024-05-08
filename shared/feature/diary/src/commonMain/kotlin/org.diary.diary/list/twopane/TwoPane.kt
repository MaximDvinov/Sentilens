package org.diary.diary.list.twopane

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import org.diary.diary.list.DiaryScreenModel

@Composable
fun TwoPane(
    state: DiaryScreenModel.NoteList,
    editState: DiaryScreenModel.EditNoteState?,
    screenModel: DiaryScreenModel,
    navigator: Navigator,
) {
    TwoPaneContent(state, editState,
        onIntent = screenModel::processIntent,
        onClickBack = navigator::pop,
        onClickRecommendation = { id: String ->
//            navigator?.singlePush(RecommendationScreen(id)) TODO: implement
        })
}
