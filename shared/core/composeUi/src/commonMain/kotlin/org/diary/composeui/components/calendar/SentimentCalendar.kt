package org.diary.composeui.components.calendar

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.ArrowRight
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.coroutines.launch
import kotlinx.datetime.LocalDate
import kotlinx.datetime.Month
import org.diary.composeui.components.SecondaryIconButton
import org.diary.composeui.theme.defaultShape
import org.diary.composeui.theme.primary
import org.diary.composeui.theme.smallShape
import org.diary.utils.monthFormatFull

@Stable
data class SentimentItem(
    val icon: @Composable () -> Unit,
    val color: Color = primary,
)

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun SentimentCalendar(
    modifier: Modifier,
    selectedPeriod: MonthWithYear,
    initialPeriod: MonthWithYear = MonthWithYear.current(),
    changeMonth: (MonthWithYear) -> Unit,
    onSelectDate: (LocalDate) -> Unit,
    items: ImmutableMap<LocalDate, SentimentItem>,
) {
    val scope = rememberCoroutineScope()
    val pageCount = 12000
    val pagerState = rememberPagerState(initialPage = pageCount / 2) { pageCount }

    Column(
        modifier = modifier
            .clip(defaultShape)
            .background(MaterialTheme.colors.secondary)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(10.dp)
                .clip(smallShape)
                .background(MaterialTheme.colors.background),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                modifier = Modifier.padding(horizontal = 12.dp),
                text = "${Month(selectedPeriod.month).monthFormatFull()} ${selectedPeriod.year}",
                style = MaterialTheme.typography.subtitle1
            )

            Spacer(Modifier.weight(1f))

            SecondaryIconButton(onClick = {
                scope.launch {
                    pagerState.animateScrollToPage(pagerState.currentPage - 1)
                }

            }, color = Color.Transparent) {
                Icon(FeatherIcons.ArrowLeft, null, tint = MaterialTheme.colors.onBackground)
            }

            SecondaryIconButton(onClick = {
                scope.launch {
                    pagerState.animateScrollToPage(pagerState.currentPage + 1)
                }
            }, color = Color.Transparent) {
                Icon(FeatherIcons.ArrowRight, null, tint = MaterialTheme.colors.onBackground)
            }
        }

        LaunchedEffect(pagerState.currentPage) {
            changeMonth(initialPeriod.plus(pagerState.currentPage - pageCount / 2))
        }

        HorizontalPager(
            state = pagerState,
            modifier = Modifier.fillMaxWidth(),
            pageSpacing = 10.dp,
            contentPadding = PaddingValues(start = 10.dp, end = 10.dp, bottom = 10.dp),
            key = { it }
        ) {
            val selected = initialPeriod.plus(it - pageCount / 2)
            val days by remember(selected) {
                derivedStateOf {
                    CalendarUtils.getDaysInMonth(
                        selected.month, selected.year
                    )
                }
            }

            CalendarGrid(days, items)
        }


    }
}

@Composable
private fun CalendarGrid(
    days: List<LocalDate>,
    items: ImmutableMap<LocalDate, SentimentItem>,
) {
    val startDayOfWeek by remember(days) {
        derivedStateOf {
            days.firstOrNull()?.dayOfWeek?.ordinal ?: 0
        }
    }

    LazyVerticalGrid(
        modifier = Modifier.fillMaxWidth(),
        columns = GridCells.Fixed(7),
        horizontalArrangement = Arrangement.spacedBy(4.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        items(startDayOfWeek) {
            Column { }
        }

        items(days) { date ->
            DateItem(modifier = Modifier, data = date to items[date])
        }
    }
}

