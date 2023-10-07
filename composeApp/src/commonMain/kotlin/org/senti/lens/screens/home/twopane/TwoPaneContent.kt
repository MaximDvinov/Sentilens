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
import kotlinx.collections.immutable.persistentListOf
import org.senti.lens.TagsList
import org.senti.lens.screens.commons.ui.fadingEdge
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.home.editNote.EditNoteContent
import org.senti.lens.screens.home.ui.NotesList
import org.senti.lens.screens.home.ui.TopBarExpanded
import org.senti.lens.screens.home.HomeScreenModel

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TwoPaneContent(
    state: HomeScreenModel.NoteListUiState,
    editorUiStat: HomeScreenModel.NoteEditorUiState,
    onBackClick: () -> Unit,
    onClickSetting: () -> Unit,
    onSaveClick: () -> Unit,
    onChangeTitle: (String) -> Unit,
    onChangeBody: (String) -> Unit,
    onDeleteClick: () -> Unit,
    onDeleteItemClick:(Note) -> Unit,
    onSelectNote: (Note) -> Unit,
    onSelectTag: (Tag) -> Unit,
    changeSearchQuery: (String) -> Unit,
    onRefresh: () -> Unit,
    onClickAnalyze: () -> Unit,
    onClickTagInDialog: (Tag) -> Unit,
    onClickRecommendation: (String) -> Unit,
    onCreateTagClick: (Tag) -> Unit
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
            if (editorUiStat.currentNote != null) 1f else 0f,
            spring(stiffness = Spring.StiffnessVeryLow)
        )

        Row(modifier = Modifier.fillMaxSize()) {
            Column(
                modifier = Modifier.weight(1f)
            ) {
                if (state.tags?.isNotEmpty() == true) {
                    TagsList(
                        modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp).fadingEdge(
                            startingColor = MaterialTheme.colors.background,
                            length = 30f,
                            horizontal = true
                        ), tags = state.tags, onClickTag = onSelectTag
                    )
                }
                NotesList(
                    onItemClick = onSelectNote,
                    notes = state.filteredNotes ?: persistentListOf(),
                    currentNote = editorUiStat.currentNote,
                    cellsDp = 250.dp,
                    onDeleteClick = onDeleteItemClick,
                    contentPadding = PaddingValues(
                        start = 16.dp,
                        end = 16.dp,
                        top = 8.dp,
                        bottom = 40.dp
                    )
                )
            }



            EditNoteContent(
                modifier = Modifier.weight(if (editorUiStat.currentNote != null) 2f else 0.001f)
                    .alpha(alpha),
                tags = state.tags?.map { it.first },
                currentNote = editorUiStat.currentNote,
                onBackClick = onBackClick,
                onSaveClick = onSaveClick,
                onChangeTitle = onChangeTitle,
                onChangeBody = onChangeBody,
                onDeleteClick = onDeleteClick,
                onClickAnalyze = onClickAnalyze,
                onClickTagInDialog = onClickTagInDialog,
                loadState = editorUiStat.loadState,
                onClickRecommendation = onClickRecommendation,
                onCreteTagClick = onCreateTagClick
            )

        }

    }
}