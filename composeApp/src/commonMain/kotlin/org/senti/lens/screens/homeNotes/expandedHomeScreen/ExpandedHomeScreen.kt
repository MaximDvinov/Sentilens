package org.senti.lens.screens.homeNotes.expandedHomeScreen

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import org.koin.core.component.KoinComponent
import org.senti.lens.TagsList
import org.senti.lens.generalElements.fadingEdge
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.editNote.EditNoteContent
import org.senti.lens.screens.homeNotes.HomeNotesUseCase
import org.senti.lens.screens.homeNotes.elements.NotesList
import org.senti.lens.screens.homeNotes.elements.TopBarExpanded
import org.senti.lens.screens.recommendation.RecommendationScreen
import org.senti.lens.screens.setting.SettingScreen

class ExpandedHomeScreen : Screen, KoinComponent {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.current

        val screenModel = rememberScreenModel {
            ExpandedHomeScreenModel(HomeNotesUseCase.instance)
        }

        val state by screenModel.state.collectAsState()

        ExpandedHomeContents(state,
            onBackClick = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.SelectNote(null)
                )
            },
            onClickSetting = {
                navigator?.push(SettingScreen())
            }, onSaveClick = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.SaveNote
                )
            }, onChangeTitle = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.ChangeTitle(it)
                )
            }, onChangeBody = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.ChangeBody(it)
                )
            }, onDeleteClick = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.DeleteNote
                )
            }, onSelectNote = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.SelectNote(it)
                )
            }, onSelectTag = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.SelectTag(it)
                )
            }, changeSearchQuery = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.ChangeSearchQuery(
                        it
                    )
                )
            }, onRefresh = {
                screenModel.processIntent(
                    ExpandedHomeScreenModel.Intent.LoadDataIntent
                )
            }, onClickAnalyze = {
                navigator?.push(RecommendationScreen())
            }, onSaveTagsClick = { tag ->
                screenModel.processIntent(intent = ExpandedHomeScreenModel.Intent.SaveTags(tag))
            })
    }
}


@OptIn(ExperimentalAnimationApi::class)
@Composable
fun ExpandedHomeContents(
    state: ExpandedHomeScreenModel.UiState,
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
    onSaveTagsClick: (List<Tag>) -> Unit,
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
                    notes = state.filteredNotes ?: listOf(),
                    onClick = onSelectNote,
                    cellsDp = 300.dp,
                    currentNote = state.currentNote
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
                onSaveTagsClick = onSaveTagsClick,
                loadState = state.noteLoadState
            )


        }

    }
}