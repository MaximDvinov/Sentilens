package org.senti.lens.screens.home

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListScope
import androidx.compose.foundation.lazy.items
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.LocalNavigator
import kotlinx.collections.immutable.ImmutableList
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource
import org.senti.lens.models.Note
import org.senti.lens.screens.breath.BreathScreen
import org.senti.lens.screens.commons.ui.LoadIndicator
import org.senti.lens.screens.commons.ui.NoteItem
import org.senti.lens.screens.commons.ui.HomeTopBar
import org.senti.lens.screens.list.DiaryListScreen
import org.senti.lens.screens.list.Intent
import org.senti.lens.screens.player.PlayerScreen
import org.senti.lens.screens.setting.SettingScreen
import org.senti.lens.theme.defaultShape
import sentilens.composeapp.generated.resources.Res
import sentilens.composeapp.generated.resources.breath_icon
import sentilens.composeapp.generated.resources.music_icon
import sentilens.composeapp.generated.resources.recommendation__icon

@OptIn(ExperimentalMaterialApi::class, ExperimentalFoundationApi::class)
@Composable
fun CompactHomeContent(
    modifier: Modifier, state: HomeScreenModel.UiState, onIntent: (Intent) -> Unit
) {
    val navigator = LocalNavigator.current
    val refreshState = rememberPullRefreshState(
        state is HomeScreenModel.UiState.Loading, onRefresh = {
            onIntent(HomeScreenModel.HomeIntent.LoadData)
        }, refreshThreshold = 80.dp
    )

    val offset by animateDpAsState(
        if (state is HomeScreenModel.UiState.Loading) 58.dp else minOf(
            (refreshState.progress * 80).dp + 8.dp, 80.dp
        ), animationSpec = tween(if (refreshState.progress > 0) 0 else 300)
    )

    Box {
        LoadIndicator(state is HomeScreenModel.UiState.Loading, offset, refreshState)

        Box(modifier.pullRefresh(refreshState).padding(top = offset)) {
            LazyColumn(
                Modifier.fillMaxSize(),
                contentPadding = PaddingValues(
                    start = 16.dp,
                    end = 16.dp,
                    top = 6.dp,
                    bottom = 16.dp
                ),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                stickyHeader {
                    HomeTopBar(
                        modifier = Modifier.padding(bottom = 6.dp),
                        onRefresh = {
                            onIntent(HomeScreenModel.HomeIntent.LoadData)
                        },
                        onClickSetting = {
                            navigator?.push(SettingScreen())
                        }
                    )
                }

                item {
                    Actions(onRecommendationClick = {},
                        onMusicClick = {
                            navigator?.push(PlayerScreen())
                        },
                        onBreathClick = {
                            navigator?.push(BreathScreen())
                        },
                        onStatsClick = {})
                }


                actualDiaries(
                    state.notes,
                    onClickAll = {
                        navigator?.push(DiaryListScreen())
                    }, onClickNote = { diary: Note ->
                        navigator?.push(DiaryListScreen(diary = diary))
                    })
            }
        }
    }


}

@OptIn(ExperimentalResourceApi::class)
@Composable
fun Actions(
    onRecommendationClick: () -> Unit,
    onMusicClick: () -> Unit,
    onBreathClick: () -> Unit,
    onStatsClick: () -> Unit
) {

    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        Stats(onStatsClick)
        Row(
            modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            ActionButton(
                modifier = Modifier.weight(1f),
                icon = painterResource(Res.drawable.recommendation__icon),
                text = "Советы",
                onClick = onRecommendationClick
            )
            ActionButton(
                modifier = Modifier.weight(1f),
                icon = painterResource(Res.drawable.music_icon),
                text = "Музыка",
                onClick = onMusicClick
            )
            ActionButton(
                modifier = Modifier.weight(1f),
                icon = painterResource(Res.drawable.breath_icon),
                text = "Дыхание",
                onClick = onBreathClick
            )
        }
    }
}

@Composable
fun ActionButton(
    modifier: Modifier, icon: Painter, text: String, onClick: () -> Unit
) {

    Column(
        modifier = modifier.clip(defaultShape).clickable(onClick = onClick)
            .background(MaterialTheme.colors.secondary).padding(vertical = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        Icon(
            painter = icon,
            tint = MaterialTheme.colors.onSecondary,
            contentDescription = null,
            modifier = Modifier.size(30.dp)
        )
        Text(text = text, style = MaterialTheme.typography.caption)
    }
}

@Composable
fun Stats(onStatsClick: () -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().height(75.dp).clip(defaultShape)
            .clickable(onClick = onStatsClick).background(MaterialTheme.colors.secondary),
    ) {

    }
}


fun LazyListScope.actualDiaries(
    notes: ImmutableList<Note>, onClickAll: () -> Unit, onClickNote: (Note) -> Unit
) {
    item {
        Row(
            modifier = Modifier
                .padding(top = 10.dp)
                .clip(defaultShape)
                .clickable(onClick = onClickAll)
                .padding(6.dp)
                .fillMaxWidth()
        ) {
            Text(
                text = "Страницы дневника",
                style = MaterialTheme.typography.subtitle1,
                modifier = Modifier.weight(1f)
            )
            Text(
                text = "еще",
                style = MaterialTheme.typography.subtitle1.copy(MaterialTheme.colors.primary),
                modifier = Modifier
            )
        }
    }
    items(notes) {
        NoteItem(modifier = Modifier,
            note = it,
            onItemClick = { onClickNote(it) },
            onDeleteItemClick = {})
    }

}
