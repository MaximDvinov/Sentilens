package org.senti.lens.screens.list.twopane

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.persistentListOf
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.senti.lens.models.Note
import org.senti.lens.screens.list.editDiary.EditNoteContent
import org.senti.lens.screens.commons.ui.NotesList
import org.senti.lens.screens.commons.ui.DiaryTopBarExpanded
import org.senti.lens.screens.commons.ui.fadingCenterBack
import org.senti.lens.screens.list.DiaryListScreenModel
import org.senti.lens.screens.list.Intent
import org.senti.lens.theme.defaultShape

@Composable
fun TwoPaneContent(
    state: DiaryListScreenModel.NoteListUiState,
    editorUiStat: DiaryListScreenModel.NoteEditorUiState,
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
                onIntent(DiaryListScreenModel.NoteListIntent.ChangeSearchQuery(it))
            },
            onCreateClick = {
                onIntent(DiaryListScreenModel.EditNoteIntent.SelectNote(Note()))
            },
            onRefresh = {
                onIntent(DiaryListScreenModel.NoteListIntent.LoadData)
            },
            loadState = state.loadState
        )

        Row(modifier = Modifier.widthIn(max = 1500.dp).align(Alignment.Start)) {
            Column(
                modifier = Modifier.weight(1.2f)
            ) {
                NotesList(
                    onItemClick = {
                        onIntent(DiaryListScreenModel.EditNoteIntent.SelectNote(it))
                    },
                    notes = state.filteredNotes ?: persistentListOf(),
                    currentNote = editorUiStat.currentNote,
                    onDeleteClick = {
                        onIntent(DiaryListScreenModel.NoteListIntent.DeleteNote(it))
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
                currentNote = editorUiStat.currentNote,
                onIntent = onIntent,
                loadState = editorUiStat.loadState,
                onClickRecommendation = onClickRecommendation,
            )
        }
    }
}