package org.senti.lens.screens.list.twopane

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
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.screens.list.editDiary.EditNoteContent
import org.senti.lens.screens.commons.ui.NotesList
import org.senti.lens.screens.commons.ui.DiaryTopBarExpanded
import org.senti.lens.screens.list.DiaryScreenModel
import org.senti.lens.screens.list.Intent

@Composable
fun TwoPaneContent(
    state: DiaryScreenModel.NoteList,
    editorUiStat: DiaryScreenModel.EditNoteState?,
    onIntent: (Intent) -> Unit,
    onClickSetting: () -> Unit,
    onClickRecommendation: (String) -> Unit,
) {
    Column {
        DiaryTopBarExpanded(
            modifier = Modifier.padding(
                start = 16.dp, end = 16.dp, top = 16.dp, bottom = 8.dp
            ),
            onClickSetting = onClickSetting,
            searchQuery = state.searchQuery,
            changeSearchQuery = {
                onIntent(DiaryScreenModel.NoteListIntent.ChangeSearchQuery(it))
            },
            onCreateClick = {
                onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(Note()))
            },
            onRefresh = {
                onIntent(DiaryScreenModel.NoteListIntent.LoadData)
            },
            loadState = state.loadState
        )

        Row(modifier = Modifier.widthIn(max = 1500.dp).align(Alignment.Start)) {
            Column(
                modifier = Modifier.weight(1.2f)
            ) {
                NotesList(
                    onItemClick = {
                        onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(it))
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
                onClickRecommendation = onClickRecommendation,
            )
        }
    }
}