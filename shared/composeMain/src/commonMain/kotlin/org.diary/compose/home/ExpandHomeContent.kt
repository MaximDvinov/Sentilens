package org.diary.compose.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.registry.ScreenRegistry
import cafe.adriel.voyager.core.registry.rememberScreen
import cafe.adriel.voyager.navigator.LocalNavigator
import kotlinx.collections.immutable.persistentMapOf
import org.diary.composeui.components.HomeTopBarExpanded
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.components.calendar.SentimentCalendar
import org.diary.diary.ui.NoteItem
import org.diary.navigation.DiaryScreenProvider
import org.diary.navigation.InitialDiaryScreenState.*

@Composable
fun ExpandHomeContent(
    modifier: Modifier,
    state: HomeScreenModel.UiState,
    onIntent: (org.diary.composeui.Intent) -> Unit,
) {
    val navigator = LocalNavigator.current
    val createDiaryScreen = rememberScreen(DiaryScreenProvider.DiaryScreen(CreateDiary))
    val searchDiaryScreen = rememberScreen(DiaryScreenProvider.DiaryScreen(Search))

    Column(modifier) {
        HomeTopBarExpanded(
            modifier = Modifier.padding(16.dp),
            onCreateClick = {
                navigator?.push(createDiaryScreen)
            },
            onClickSetting = {},
            onRefresh = {
                onIntent(HomeScreenModel.HomeIntent.LoadData)
            },
            onSearchClick = {
                navigator?.push(searchDiaryScreen)
            },
            state is HomeScreenModel.UiState.Loading
        )

        Row(
            Modifier.fillMaxWidth().padding(horizontal = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Column(Modifier.widthIn(max = 300.dp)) {
                val (selectedPeriod, onChangePeriod) = remember {
                    mutableStateOf(MonthWithYear(5, 2024))
                }
                SentimentCalendar(
                    modifier = Modifier,
                    selectedPeriod = selectedPeriod,
                    changeMonth = onChangePeriod,
                    onSelectDate = {},
                    items = persistentMapOf()
                )
            }
            Column(Modifier.weight(2f)) {
                LazyColumn(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    items(state.notes) { diary ->
                        NoteItem(modifier = Modifier,
                            note = diary,
                            onItemClick = {
                                navigator?.push(
                                    ScreenRegistry.get(
                                        DiaryScreenProvider.DiaryScreen(
                                            UpdateDiary(
                                                diaryId = diary.uuid
                                            )
                                        )
                                    )
                                )
                            },
                            onDeleteItemClick = {})
                    }
                }
            }
        }
    }
}