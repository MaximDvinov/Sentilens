package org.diary.diary.list.onepane

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.input.nestedscroll.NestedScrollConnection
import androidx.compose.ui.input.nestedscroll.NestedScrollSource
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.LocalNavigator
import io.github.aakira.napier.LogLevel
import io.github.aakira.napier.Napier
import org.diary.composeui.LoadState
import org.diary.diary.list.DiaryScreenModel
import org.diary.diary.list.Intent
import org.diary.composeui.components.DiaryTopBar
import org.diary.composeui.components.LoadIndicator
import org.diary.diary.ui.NotesList
import org.diary.composeui.components.PrimaryIconButton
import kotlin.math.min

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun NotesListContent(
    modifier: Modifier = Modifier,
    state: DiaryScreenModel.NoteList,
    scrollState: LazyListState = rememberLazyListState(),
    onIntent: (Intent) -> Unit,
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

    var totalScrollOffsetPx = remember { 0f }

    val nestedScrollConnection = remember {
        object : NestedScrollConnection {
            override fun onPreScroll(available: Offset, source: NestedScrollSource): Offset {

                val delta = available.y
                totalScrollOffsetPx += delta

                return Offset.Zero
            }
        }
    }

    Box(modifier.pullRefresh(refreshState).padding(top = offset)) {
        Column(
            modifier = Modifier.fillMaxSize()
        ) {
            DiaryTopBar(
                modifier = Modifier.background(
                    MaterialTheme.colors.background.copy(
                        alpha = min(
                            totalScrollOffsetPx,
                            1f
                        )
                    )
                ).padding(
                    start = 16.dp, end = 16.dp, top = 0.dp, bottom = 8.dp
                ),
                isSearchable = state.searchState.isSearched,
                searchQuery = state.searchState.query,
                changeSearchQuery = {
                    onIntent(DiaryScreenModel.NoteListIntent.ChangeSearchQuery(it))
                },
                changeSearchable = {
                    onIntent(DiaryScreenModel.NoteListIntent.ChangeSearchable(it))
                },
                onBackClick = {
                    navigator?.pop()
                },
            )

            if (state.filteredNotes != null) {
                NotesList(
                    modifier = Modifier.nestedScroll(nestedScrollConnection).weight(1f),
                    onItemClick = {
                        onIntent(DiaryScreenModel.EditNoteIntent.SelectNote(it.uuid))
                    },
                    scrollState = scrollState,
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
            onClick = { onIntent(DiaryScreenModel.EditNoteIntent.CreateNote) }
        ) {
            Icon(Icons.Default.Add, "", tint = MaterialTheme.colors.onPrimary)
        }
    }
}

