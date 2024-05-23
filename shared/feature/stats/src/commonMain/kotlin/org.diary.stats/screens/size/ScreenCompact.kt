package org.diary.stats.screens.size

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.material.MaterialTheme
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.datetime.LocalDate
import org.diary.composeui.LazyOrientedLayout
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.components.calendar.SentimentCalendar
import org.diary.composeui.components.calendar.SentimentItem
import org.diary.composeui.isCompact
import org.diary.composeui.isMedium
import org.diary.composeui.theme.defaultShape
import org.diary.stats.components.AverageSentimentByDayOfWeek
import org.diary.stats.components.FrequencyMoodHistogram
import org.diary.stats.components.SentimentInMonth
import org.diary.stats.screens.StatsScreenState
import org.diary.stats.screens.width
import kotlin.reflect.KFunction1

@Composable
fun ScreenCompact(
    modifier: Modifier = Modifier,
    state: StatsScreenState,
    changeMonth: (MonthWithYear) -> Unit,
    onSelectDate: (LocalDate) -> Unit,
    calendarDays: ImmutableMap<LocalDate, SentimentItem>,
) {
    LazyColumn(
        modifier = modifier.fillMaxSize(),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        contentPadding = PaddingValues(16.dp),
    ) {
        item {
            SentimentCalendar(
                modifier = Modifier
                    .heightIn(max = 1000.dp),
                selectedPeriod = state.selectedMonth,
                changeMonth = changeMonth,
                onSelectDate = onSelectDate,
                items = calendarDays,
                isExpand = false
            )
        }

        item {
            SentimentInMonth(
                modifier = Modifier
                    .height(300.dp)
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
                    .height(300.dp)
                    .clip(defaultShape)
                    .background(MaterialTheme.colors.secondary)
                    .padding(10.dp),
                frequencies = state.frequencies,
            )
        }

        item {
            AverageSentimentByDayOfWeek(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(300.dp)
                    .clip(defaultShape)
                    .background(MaterialTheme.colors.secondary)
                    .padding(10.dp),
                items = state.averageSentimentByDayOfWeek,
            )
        }
    }
}