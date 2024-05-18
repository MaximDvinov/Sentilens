package org.diary.diary.list.twopane

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import org.diary.diary.list.DiaryScreenModel
import org.diary.diary.list.Intent

@Composable
fun TwoPane(
    state: DiaryScreenModel.NoteList,
    editState: DiaryScreenModel.EditNoteState?,
    onClickBack: () -> Unit,
    onIntent: (Intent) -> Unit,
) {
    TwoPaneContent(state, editState,
        onIntent = onIntent,
        onClickBack = onClickBack,
        onClickRecommendation = { id: String ->
//            navigator?.singlePush(RecommendationScreen(id)) TODO: implement
        },
        onCloseNote = {
            onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(null))
        })
}
