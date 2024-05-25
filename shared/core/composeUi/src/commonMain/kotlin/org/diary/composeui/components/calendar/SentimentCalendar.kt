package org.diary.composeui.components.calendar

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
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
import androidx.compose.foundation.pager.PagerState
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.ArrowRight
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.collections.immutable.toImmutableList
import kotlinx.coroutines.launch
import kotlinx.datetime.LocalDate
import kotlinx.datetime.Month
import org.diary.composeui.components.SecondaryIconButton
import org.diary.composeui.theme.defaultShape
import org.diary.composeui.theme.primary
import org.diary.composeui.theme.sixDpShape
import org.diary.composeui.theme.smallShape
import org.diary.utils.monthFormatFull

@Stable
@Immutable
data class SentimentItem(
    val icon: @Composable () -> Unit,
    val color: Color = primary,
)

@Stable
val pageCount = 2400

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun SentimentCalendar(
    modifier: Modifier,
    selectedPeriod: MonthWithYear,
    pagerState: PagerState = rememberPagerState(initialPage = pageCount / 2) { pageCount },
    initialPeriod: MonthWithYear = MonthWithYear.current(),
    changeMonth: (MonthWithYear) -> Unit,
    onSelectDate: ((LocalDate) -> Unit)? = null,
    selectedDate: LocalDate? = null,
    isExpand: Boolean = false,
    items: ImmutableMap<LocalDate, SentimentItem>,
) {
    val scope = rememberCoroutineScope()
    var expandable by remember(isExpand) { mutableStateOf(isExpand) }

    Column(
        modifier = modifier
            .clip(defaultShape)
            .clickable { expandable = !expandable }
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
                text = "${remember(selectedPeriod.month) { Month(selectedPeriod.month).monthFormatFull() }} ${selectedPeriod.year}",
                style = MaterialTheme.typography.subtitle1
            )

            Spacer(Modifier.weight(1f))

            SecondaryIconButton(onClick = {
                scope.launch {
                    if (expandable) {
                        pagerState.animateScrollToPage(pagerState.currentPage - 1)
                    } else {
                        changeMonth(selectedPeriod.minus(1))
                        pagerState.scrollToPage(pagerState.currentPage - 1)
                    }
                }
            }, color = Color.Transparent) {
                Icon(FeatherIcons.ArrowLeft, null, tint = MaterialTheme.colors.onBackground)
            }

            SecondaryIconButton(onClick = {
                scope.launch {
                    if (expandable) {
                        pagerState.animateScrollToPage(pagerState.currentPage + 1)
                    } else {
                        changeMonth(selectedPeriod.plus(1))
                        pagerState.scrollToPage(pagerState.currentPage + 1)
                    }
                }
            }, color = Color.Transparent) {
                Icon(FeatherIcons.ArrowRight, null, tint = MaterialTheme.colors.onBackground)
            }
        }

        LaunchedEffect(pagerState.currentPage) {
            changeMonth(initialPeriod.plus(pagerState.currentPage - pageCount / 2))
        }

        AnimatedVisibility(expandable) {
            HorizontalPager(
                state = pagerState,
                modifier = Modifier.fillMaxWidth(),
                pageSpacing = 10.dp,
                contentPadding = PaddingValues(start = 10.dp, end = 10.dp, bottom = 10.dp),
                key = { it }
            ) {
                val days = remember(it) {
                    val selected = initialPeriod.plus(it - pageCount / 2)
                    CalendarUtils.getDaysInMonth(
                        selected.month, selected.year
                    ).map { date ->
                        DateItem(
                            date, sentiment = items[date]
                        )
                    }.toImmutableList()
                }

                CalendarGrid(days, selectedDate, onSelectDate)
            }
        }
    }
}

@Composable
private fun CalendarGrid(
    days: ImmutableList<DateItem>,
    selectedDate: LocalDate? = null,
    onSelectDate: ((LocalDate) -> Unit)? = null
) {
    val startDayOfWeek by remember(days) {
        derivedStateOf {
            days.firstOrNull()?.date?.dayOfWeek?.ordinal ?: 0
        }
    }

    LazyVerticalGrid(
        modifier = Modifier.fillMaxWidth(),
        columns = GridCells.Fixed(7),
        horizontalArrangement = Arrangement.spacedBy(4.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        items(startDayOfWeek) {
            Column {}
        }

        items(days) { item ->
            val isSelected by remember(item) {
                derivedStateOf {
                    selectedDate == item.date
                }
            }

            val borderWidth by animateDpAsState(if (isSelected) 1.dp else 0.dp)
            val selectedColor by animateColorAsState(if (isSelected) MaterialTheme.colors.onSecondary else Color.Transparent)

            DateItem(
                modifier = Modifier.border(
                    width = borderWidth,
                    color = selectedColor,
                    shape = sixDpShape
                ).clickable(
                    onClick = remember(item) { { onSelectDate?.invoke(item.date) } },
                    enabled = onSelectDate != null
                ),
                data = item
            )
        }
    }
}

