package org.senti.lens.screens.home.twopane

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.unit.dp
import org.senti.lens.TagsList
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.home.editNote.EditNoteContent
import org.senti.lens.screens.home.ui.NotesList
import org.senti.lens.screens.home.ui.TopBarExpanded
import org.senti.lens.screens.home.HomeScreenModel

//class ExpandedHomeScreen : Screen, KoinComponent {
//    override val key = uniqueScreenKey
//    @Composable
//    override fun Content() {
//        val navigator = LocalNavigator.current
//
//        val screenModel = rememberScreenModel {
//            ExpandedHomeScreenModel(HomeNotesUseCase.instance)
//        }
//
//        val state by screenModel.state.collectAsState()
//
//        TwoPaneContent(state,
//            onBackClick = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.SelectNote(null)
//                )
//            },
//            onClickSetting = {
//                navigator?.singlePush(SettingScreen())
//            }, onSaveClick = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.SaveNote
//                )
//            }, onChangeTitle = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.ChangeTitle(it)
//                )
//            }, onChangeBody = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.ChangeBody(it)
//                )
//            }, onDeleteClick = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.DeleteNote
//                )
//            }, onSelectNote = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.SelectNote(it)
//                )
//            }, onSelectTag = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.SelectTag(it)
//                )
//            }, changeSearchQuery = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.ChangeSearchQuery(
//                        it
//                    )
//                )
//            }, onRefresh = {
//                screenModel.processIntent(
//                    ExpandedHomeScreenModel.Intent.LoadDataIntent
//                )
//            }, onClickAnalyze = {
//                navigator?.singlePush(RecommendationScreen())
//            }, onSaveTagsClick = { tag ->
//                screenModel.processIntent(intent = ExpandedHomeScreenModel.Intent.SaveTags(tag))
//            })
//    }
//}

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TwoPaneContent(
    state: HomeScreenModel.UiState,
    onBackClick: () -> Unit,
    onClickSetting: () -> Unit,
    onSaveClick: () -> Unit,
    onChangeTitle: (String) -> Unit,
    onChangeBody: (String) -> Unit,
    onDeleteClick: () -> Unit,
    onSelectNote: (Note) -> Unit,
    onSelectTag: (Tag) -> Unit,
    changeSearchQuery: (String) -> Unit,
    onRefresh: () -> Unit,
    onClickAnalyze: () -> Unit,
    onClickTagInDialog: (Tag) -> Unit
) {

    Column {
        TopBarExpanded(
            modifier = Modifier.padding(
                start = 16.dp, end = 16.dp, top = 16.dp, bottom = 8.dp
            ),
            onClickSetting = onClickSetting,
            searchQuery = state.searchQuery,
            changeSearchQuery = changeSearchQuery,
            onCreateClick = {
                onSelectNote(Note())
            },
            onRefresh = onRefresh,
            loadState = state.loadState
        )

        val alpha by animateFloatAsState(
            if (state.currentNote != null) 1f else 0f, spring(stiffness = Spring.StiffnessVeryLow)
        )

        Row(modifier = Modifier.fillMaxSize()) {
            Column(
                modifier = Modifier.weight(1f)
            ) {
                TagsList(
                    modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp).fadingEdge(
                        startingColor = MaterialTheme.colors.background,
                        length = 30f,
                        horizontal = true
                    ), tags = state.tags ?: listOf(), onClickTag = onSelectTag
                )
                NotesList(
                    onClick = onSelectNote,
                    notes = state.filteredNotes ?: listOf(),
                    currentNote = state.currentNote,
                    contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 40.dp)
                )
            }



            EditNoteContent(
                modifier = Modifier.weight(if (state.currentNote != null) 2f else 0.001f)
                    .alpha(alpha),
                tags = state.tags?.map { it.first },
                currentNote = state.currentNote,
                onBackClick = onBackClick,
                onSaveClick = onSaveClick,
                onChangeTitle = onChangeTitle,
                onChangeBody = onChangeBody,
                onDeleteClick = onDeleteClick,
                onClickAnalyze = onClickAnalyze,
                loadState = state.noteLoadState,
                onClickTagInDialog = onClickTagInDialog,
            )


        }

    }
}