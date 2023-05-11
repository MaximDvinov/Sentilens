package org.senti.lens.screens.home.onepane

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.Crossfade
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.navigator.Navigator
import org.senti.lens.PlatformBackHandler
import org.senti.lens.screens.home.editNote.EditNoteContent
import org.senti.lens.screens.home.HomeScreenModel
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.setting.SettingScreen
import org.senti.lens.singlePush

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun OnePane(
    state: HomeScreenModel.UiState,
    screenModel: HomeScreenModel,
    navigator: Navigator?
) {
    PlatformBackHandler(state.currentNote != null) {
        screenModel.processIntent(
            HomeScreenModel.Intent.SelectNote(null)
        )
    }

    Crossfade(state.currentNote == null, animationSpec = tween(400)) { isNote ->
        if (isNote) {
            NotesListContent(modifier = Modifier.fillMaxSize(),
                state = state,
                onClickTag = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.SelectTag(
                            it
                        )
                    )
                },
                onClickNote = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.SelectNote(it)
                    )
                },
                changeSearchQuery = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.ChangeSearchQuery(
                            it
                        )
                    )
                },
                onRefresh = { screenModel.processIntent(HomeScreenModel.Intent.LoadDataIntent) },
                onClickSetting = {
                    navigator?.singlePush(SettingScreen())
                })
        } else {
            EditNoteContent(
                modifier = Modifier.fillMaxSize(),
                tags = state.tags?.map { it.first },
                currentNote = state.currentNote,
                onBackClick = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.SelectNote(null)
                    )
                },
                onSaveClick = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.SaveNote
                    )
                },
                onChangeTitle = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.ChangeTitle(it)
                    )
                },
                onChangeBody = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.ChangeBody(it)
                    )
                },
                onDeleteClick = {
                    screenModel.processIntent(
                        HomeScreenModel.Intent.DeleteNote
                    )
                },
                onClickAnalyze = {
                    navigator?.singlePush(RecommendationScreen())
                },
                onSaveTagsClick = { tag ->
                    screenModel.processIntent(
                        intent = HomeScreenModel.Intent.SaveTags(
                            tag
                        )
                    )
                },
                loadState = state.noteLoadState
            )
        }
    }


}