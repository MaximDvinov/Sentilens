package org.diary.stats.screens.size

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.datetime.LocalDate
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.components.calendar.SentimentCalendar
import org.diary.composeui.components.calendar.SentimentItem
import org.diary.composeui.components.calendar.pageCount
import org.diary.composeui.theme.defaultShape
import org.diary.stats.components.AverageSentimentByDayOfWeek
import org.diary.stats.components.FrequencyMoodHistogram
import org.diary.stats.components.SentimentInMonth
import org.diary.stats.components.SentimentVariability
import org.diary.stats.screens.StatsScreenState

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun ScreenExpanded(
    modifier: Modifier = Modifier,
    state: StatsScreenState,
    changeMonth: (MonthWithYear) -> Unit,
    calendarDays: ImmutableMap<LocalDate, SentimentItem>,
) {
    val pagerState = rememberPagerState(initialPage = pageCount / 2) { pageCount }

    Row(modifier, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        Column {
            SentimentVariability(
                modifier = Modifier
                    .width(360.dp)
                    .padding(top = 16.dp)
                    .clip(defaultShape)
                    .background(MaterialTheme.colors.secondary)
                    .padding(10.dp),
                variability = state.sentimentVariability
            )
            SentimentCalendar(
                modifier = Modifier
                    .padding(vertical = 16.dp)
                    .width(360.dp)
                    .heightIn(max = 1000.dp),
                selectedPeriod = state.selectedMonth,
                changeMonth = changeMonth,
                items = calendarDays,
                pagerState = pagerState,
                isExpand = true
            )
        }

        LazyVerticalGrid(
            columns = GridCells.Adaptive(420.dp),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
            modifier = Modifier,
            contentPadding = PaddingValues(vertical = 16.dp)
        ) {
            item {
                SentimentInMonth(
                    modifier = Modifier
                        .height(400.dp)
                        .clip(defaultShape)
                        .background(MaterialTheme.colors.secondary)
                        .padding(10.dp),
                    selectedPeriod = state.selectedMonth,
                    items = state.sentimentForMonth
                )
            }

            item {
                FrequencyMoodHistogram(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(400.dp)
                        .clip(defaultShape)
                        .background(MaterialTheme.colors.secondary)
                        .padding(10.dp),
                    selectedPeriod = state.selectedMonth,
                    frequencies = state.frequencies,
                )
            }

            item {
                AverageSentimentByDayOfWeek(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(400.dp)
                        .clip(defaultShape)
                        .background(MaterialTheme.colors.secondary)
                        .padding(10.dp),
                    items = state.averageSentimentByDayOfWeek,
                )
            }
        }

    }
}