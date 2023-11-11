package org.senti.lens.screens.list.onepane

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.LinearProgressIndicator
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.screens.commons.ui.PrimaryIconButton
import org.senti.lens.screens.list.DiaryListScreenModel
import org.senti.lens.screens.list.ui.NotesList
import org.senti.lens.screens.list.ui.TopBar

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun NotesListContent(
    modifier: Modifier = Modifier,
    state: DiaryListScreenModel.NoteListUiState,
    onClickNote: (Note) -> Unit,
    onDeleteItemClick: (Note) -> Unit,
    changeSearchQuery: (String) -> Unit,
    onRefresh: () -> Unit,
    onClickSetting: () -> Unit,
) {
    val refreshState = rememberPullRefreshState(
        state.loadState == LoadState.Loading,
        onRefresh,
        refreshThreshold = 80.dp
    )
    val offset by animateDpAsState(
        if (state.loadState == LoadState.Loading) 58.dp else minOf(
            (refreshState.progress * 80).dp + 8.dp,
            80.dp
        ), animationSpec = tween(if (refreshState.progress > 0) 0 else 300)
    )

    AnimatedContent(state.loadState == LoadState.Loading, Modifier.fillMaxWidth()) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.height(offset).fillMaxWidth().padding(2.dp)
        ) {
            AnimatedVisibility(refreshState.progress > 0f || it) {
                Text(
                    textAlign = TextAlign.Center,
                    style = MaterialTheme.typography.caption,
                    text = if (it) "Синхронизация" else "Синхронизировать",
                    color = MaterialTheme.colors.onBackground.copy(0.3f),
                )
            }

            Spacer(Modifier.height(3.dp))
            if (it) {
                LinearProgressIndicator(
                    modifier = Modifier.width(60.dp).height(2.dp),
                    color = MaterialTheme.colors.onBackground.copy(alpha = 0.3f),
                    backgroundColor = MaterialTheme.colors.onBackground.copy(alpha = 0.1f),
                    strokeCap = StrokeCap.Round,
                )
            }
        }
    }

    Box(modifier.pullRefresh(refreshState).padding(top = offset)) {
        Column(
            modifier = Modifier.fillMaxSize().background(MaterialTheme.colors.background)
        ) {
            TopBar(
                modifier = Modifier.padding(
                    start = 16.dp, end = 16.dp, top = 0.dp, bottom = 8.dp
                ),
                searchQuery = state.searchQuery,
                changeSearchQuery = changeSearchQuery,
                onClickSetting = onClickSetting,
                onRefresh = onRefresh
            )

            if (state.filteredNotes != null) {
                NotesList(
                    modifier = Modifier.weight(1f),
                    onItemClick = onClickNote,
                    notes = state.filteredNotes,
                    currentNote = null,
                    onDeleteClick = onDeleteItemClick,
                    contentPadding = PaddingValues(
                        start = 16.dp, end = 16.dp, top = 8.dp, bottom = 40.dp
                    )
                )
            }
        }

        PrimaryIconButton(modifier = Modifier.padding(16.dp).align(Alignment.BottomEnd),
            onClick = { onClickNote(Note()) }) {
            Icon(Icons.Default.Add, "", tint = MaterialTheme.colors.onPrimary)
        }
    }
}


