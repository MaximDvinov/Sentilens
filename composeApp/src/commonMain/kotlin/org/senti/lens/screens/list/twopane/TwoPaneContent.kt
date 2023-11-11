package org.senti.lens.screens.list.twopane

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.persistentListOf
import org.senti.lens.models.Note
import org.senti.lens.screens.list.editDiary.EditNoteContent
import org.senti.lens.screens.list.ui.NotesList
import org.senti.lens.screens.list.ui.TopBarExpanded
import org.senti.lens.screens.list.DiaryListScreenModel

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TwoPaneContent(
    state: DiaryListScreenModel.NoteListUiState,
    editorUiStat: DiaryListScreenModel.NoteEditorUiState,
    onBackClick: () -> Unit,
    onClickSetting: () -> Unit,
    onSaveClick: () -> Unit,
    onChangeTitle: (String) -> Unit,
    onChangeBody: (String) -> Unit,
    onDeleteClick: () -> Unit,
    onDeleteItemClick: (Note) -> Unit,
    onSelectNote: (Note) -> Unit,
    changeSearchQuery: (String) -> Unit,
    onRefresh: () -> Unit,
    onClickAnalyze: () -> Unit,
    onClickRecommendation: (String) -> Unit,
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
            spring(stiffness = 100f)
        )

        Row(modifier = Modifier.fillMaxSize()) {
            Column(
                modifier = Modifier.weight(1f)
            ) {
                NotesList(
                    onItemClick = onSelectNote,
                    notes = state.filteredNotes ?: persistentListOf(),
                    currentNote = editorUiStat.currentNote,
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
                modifier = Modifier.weight(2f)
                    .alpha(alpha),
                currentNote = editorUiStat.currentNote,
                onBackClick = onBackClick,
                onSaveClick = onSaveClick,
                onChangeTitle = onChangeTitle,
                onChangeBody = onChangeBody,
                onDeleteClick = onDeleteClick,
                onClickAnalyze = onClickAnalyze,
                loadState = editorUiStat.loadState,
                onClickRecommendation = onClickRecommendation,
            )

        }

    }
}