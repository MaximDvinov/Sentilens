package org.diary.diary.list.twopane

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.persistentListOf
import org.diary.composeui.LoadState
import org.diary.diary.list.DiaryScreenModel
import org.diary.diary.list.Intent
import org.diary.composeui.components.DiaryTopBarExpanded
import org.diary.diary.ui.NotesList
import org.diary.diary.list.editDiary.EditNoteContent

@Composable
fun TwoPaneContent(
    state: DiaryScreenModel.NoteList,
    editorUiStat: DiaryScreenModel.EditNoteState?,
    onIntent: (Intent) -> Unit,
    onClickBack: () -> Unit,
    onCloseNote: () -> Unit,
    onClickRecommendation: (String) -> Unit,
) {
    Column {
        DiaryTopBarExpanded(
            modifier = Modifier.padding(
                start = 16.dp, end = 16.dp, top = 16.dp, bottom = 8.dp
            ),
            onClickBack = onClickBack,
            isSearchable = state.searchState.isSearched,
            searchQuery = state.searchState.query,
            changeSearchQuery = {
                onIntent(DiaryScreenModel.NoteListIntent.ChangeSearchQuery(it))
            },
            changeSearchable = {
                onIntent(DiaryScreenModel.NoteListIntent.ChangeSearchable(it))
            },
            onCreateClick = {
                onIntent(DiaryScreenModel.EditNoteIntent.CreateNote)
            },
            onRefresh = {
                onIntent(DiaryScreenModel.NoteListIntent.LoadData)
            },
            loadState = state.loadState
        )

        Row(modifier = Modifier.widthIn(max = 1500.dp).align(Alignment.Start)) {
            Column(
                modifier = Modifier.weight(1.3f)
            ) {
                NotesList(
                    onItemClick = {
                        onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(it.uuid))
                    },
                    notes = state.filteredNotes ?: persistentListOf(),
                    currentNote = editorUiStat?.currentNote,
                    onDeleteClick = {
                        onIntent(DiaryScreenModel.NoteListIntent.DeleteNote(it))
                    },
                    contentPadding = PaddingValues(
                        start = 16.dp,
                        end = 14.dp,
                        top = 8.dp,
                        bottom = 40.dp
                    )
                )
            }

            EditNoteContent(
                modifier = Modifier
                    .padding(start = 4.dp, end = 16.dp, bottom = 16.dp, top = 8.dp)
                    .background(MaterialTheme.colors.background)
                    .clip(RoundedCornerShape(20.dp))
                    .border(
                        width = 1.dp,
                        color = MaterialTheme.colors.secondary,
                        shape = RoundedCornerShape(20.dp)
                    )
                    .padding(8.dp)
                    .weight(2f),
                currentNote = editorUiStat?.currentNote,
                onIntent = onIntent,
                loadState = editorUiStat?.loadState ?: LoadState.Idle,
                onClickBack = onCloseNote,
            )
        }
    }
}