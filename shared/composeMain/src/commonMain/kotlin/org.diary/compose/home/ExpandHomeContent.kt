package org.diary.compose.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.registry.ScreenRegistry
import cafe.adriel.voyager.core.registry.rememberScreen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.navigator.currentOrThrow
import kotlinx.collections.immutable.persistentMapOf
import org.diary.compose.home.components.Actions
import org.diary.compose.home.components.actualDiaries
import org.diary.compose.home.components.navigateToDiary
import org.diary.composeui.components.HomeTopBarExpanded
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.components.calendar.SentimentCalendar
import org.diary.diary.Note
import org.diary.navigation.DiaryScreenProvider
import org.diary.navigation.InitialDiaryScreenState.*

@Composable
fun ExpandHomeContent(
    modifier: Modifier,
    state: HomeScreenModel.UiState,
    onIntent: (org.diary.composeui.Intent) -> Unit,
) {
    val navigator = LocalNavigator.currentOrThrow
    val createDiaryScreen = rememberScreen(DiaryScreenProvider.DiaryScreen(CreateDiary))
    val statsScreen = rememberScreen(DiaryScreenProvider.HomeStatsScreen)
    val playerScreen = rememberScreen(DiaryScreenProvider.PlayerScreen)
    val breathScreen = rememberScreen(DiaryScreenProvider.BreathScreen)
    val setting = rememberScreen(DiaryScreenProvider.SettingScreen)

    Column(modifier) {
        HomeTopBarExpanded(
            modifier = Modifier.padding(start = 16.dp, top = 16.dp, end = 16.dp),
            onCreateClick = {
                navigator.push(createDiaryScreen)
            },
            onClickSetting = {
                navigator.push(setting)
            },
            onRefresh = {
                onIntent(HomeScreenModel.HomeIntent.LoadData)
            },
            state is HomeScreenModel.UiState.Loading
        )

        Row(
            Modifier.fillMaxWidth().padding(horizontal = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Column(Modifier.widthIn(max = 300.dp)) {
                LazyColumn(
                    verticalArrangement = Arrangement.spacedBy(10.dp),
                    contentPadding = PaddingValues(top = 16.dp),
                ) {
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
                }
            }
            Column(Modifier.weight(2f)) {
                LazyColumn(
                    verticalArrangement = Arrangement.spacedBy(10.dp),
                    contentPadding = PaddingValues(top = 16.dp, bottom = 40.dp),
                ) {
                    actualDiaries(
                        notes = state.notes,
                        onClickAll = {
                            navigator.push(ScreenRegistry.get(DiaryScreenProvider.DiaryScreen()))
                        },
                        onClickNote = navigator::navigateToDiary
                    )
                }
            }
        }
    }
}

