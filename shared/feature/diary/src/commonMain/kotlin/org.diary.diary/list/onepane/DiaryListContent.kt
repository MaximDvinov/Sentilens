package org.diary.diary.list.onepane

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.LocalNavigator
import org.diary.composeui.LoadState
import org.diary.diary.Note
import org.diary.diary.list.DiaryScreenModel
import org.diary.diary.list.Intent
import org.diary.composeui.components.DiaryTopBar
import org.diary.composeui.components.LoadIndicator
import org.diary.diary.ui.NotesList
import org.diary.composeui.components.PrimaryIconButton

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun NotesListContent(
    modifier: Modifier = Modifier,
    state: DiaryScreenModel.NoteList,
    onIntent: (Intent) -> Unit,
    onClickSetting: () -> Unit,
) {
    val navigator = LocalNavigator.current
    val refreshState = rememberPullRefreshState(
        state.loadState == LoadState.Loading,
        onRefresh = {
            onIntent(DiaryScreenModel.NoteListIntent.LoadData)
        },
        refreshThreshold = 80.dp
    )

    val offset by animateDpAsState(
        if (state.loadState == LoadState.Loading) 58.dp else minOf(
            (refreshState.progress * 80).dp + 8.dp,
            80.dp
        ), animationSpec = tween(if (refreshState.progress > 0) 0 else 300)
    )

    LoadIndicator(state.loadState == LoadState.Loading, offset, refreshState)

    Box(modifier.pullRefresh(refreshState).padding(top = offset)) {
        Column(
            modifier = Modifier.fillMaxSize()
        ) {
            DiaryTopBar(
                modifier = Modifier.padding(
                    start = 16.dp, end = 16.dp, top = 0.dp, bottom = 8.dp
                ),
                searchQuery = state.searchQuery,
                changeSearchQuery = {
                    onIntent(DiaryScreenModel.NoteListIntent.ChangeSearchQuery(it))
                },
                onBackClick = {
                    navigator?.pop()
                },
                onRefresh = {
                    onIntent(DiaryScreenModel.NoteListIntent.LoadData)
                }
            )

            if (state.filteredNotes != null) {
                NotesList(
                    modifier = Modifier.weight(1f),
                    onItemClick = {
                        onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(it))
                    },
                    notes = state.filteredNotes,
                    currentNote = null,
                    onDeleteClick = {
                        onIntent(DiaryScreenModel.NoteListIntent.DeleteNote(it))
                    },
                    contentPadding = PaddingValues(
                        start = 16.dp, end = 16.dp, top = 8.dp, bottom = 40.dp
                    )
                )
            }
        }

        PrimaryIconButton(
            modifier = Modifier
                .padding(16.dp)
                .align(Alignment.BottomEnd),
            onClick = { onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(Note())) }
        ) {
            Icon(Icons.Default.Add, "", tint = MaterialTheme.colors.onPrimary)
        }
    }
}

