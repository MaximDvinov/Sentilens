package org.diary.compose.home

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
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.systemBarsPadding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListScope
import androidx.compose.foundation.lazy.items
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
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
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.input.nestedscroll.NestedScrollConnection
import androidx.compose.ui.input.nestedscroll.NestedScrollSource
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.unit.Velocity
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.registry.ScreenRegistry
import cafe.adriel.voyager.core.registry.rememberScreen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import io.github.aakira.napier.LogLevel
import io.github.aakira.napier.Napier
import kotlinx.collections.immutable.ImmutableList
import org.diary.compose.home.components.Actions
import org.diary.compose.home.components.actualDiaries
import org.diary.compose.home.components.navigateToDiary
import org.diary.composeui.components.HomeTopBar
import org.diary.composeui.components.LoadIndicator
import org.diary.composeui.components.PrimaryIconButton
import org.diary.composeui.theme.defaultShape
import org.diary.diary.Note
import org.diary.compose.setting.SettingScreen
import org.diary.diary.ui.NoteItem
import org.diary.navigation.DiaryScreenProvider
import org.diary.navigation.InitialDiaryScreenState
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource
import sentilens.shared.composemain.generated.resources.Res
import sentilens.shared.composemain.generated.resources.breath_icon
import sentilens.shared.composemain.generated.resources.music_icon
import sentilens.shared.composemain.generated.resources.recommendation__icon
import kotlin.math.min

@OptIn(ExperimentalMaterialApi::class, ExperimentalFoundationApi::class)
@Composable
fun CompactHomeContent(
    modifier: Modifier,
    state: HomeScreenModel.UiState,
    onIntent: (org.diary.composeui.Intent) -> Unit,
) {
    val navigator = LocalNavigator.currentOrThrow
    val createScreen =
        rememberScreen(DiaryScreenProvider.DiaryScreen(InitialDiaryScreenState.CreateDiary))
    val statsScreen = rememberScreen(DiaryScreenProvider.HomeStatsScreen)
    val playerScreen = rememberScreen(DiaryScreenProvider.PlayerScreen)
    val breathScreen = rememberScreen(DiaryScreenProvider.BreathScreen)

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
                Modifier.fillMaxSize().padding(top = 64.dp),
                contentPadding = PaddingValues(
                    start = 16.dp,
                    end = 16.dp,
                    top = 0.dp,
                    bottom = 16.dp
                ),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                stickyHeader {

                }

                item {
                    Actions(onRecommendationClick = {},
                        onMusicClick = {
                            navigator.push(playerScreen)
                        },
                        onBreathClick = {
                            navigator.push(breathScreen)
                        },
                        onStatsClick = {
                            navigator.push(statsScreen)
                        })
                }


                actualDiaries(
                    state.notes,
                    onClickAll = {
                        navigator.push(ScreenRegistry.get(DiaryScreenProvider.DiaryScreen()))
                    },
                    onClickNote = navigator::navigateToDiary,
                )
            }

            HomeTopBar(
                modifier = Modifier.padding(start = 16.dp, end = 16.dp, top = 6.dp, bottom = 6.dp),
                onRefresh = {
                    onIntent(HomeScreenModel.HomeIntent.LoadData)
                },
                onClickSetting = {
                    navigator.push(SettingScreen())
                }
            )

            PrimaryIconButton(
                modifier = Modifier
                    .padding(16.dp)
                    .align(Alignment.BottomEnd),
                onClick = {
                    navigator.push(createScreen)
                }
            ) {
                Icon(Icons.Default.Add, "", tint = MaterialTheme.colors.onPrimary)
            }
        }
    }
}






