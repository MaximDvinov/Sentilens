package org.diary.stats.components

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.collections.immutable.toImmutableList
import kotlinx.datetime.LocalDate
import kotlinx.datetime.Month
import org.diary.composeui.components.calendar.CalendarUtils
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.theme.SentimentColor
import org.diary.stats.models.SentimentStatItem
import org.diary.utils.dateMonthFormat
import org.diary.utils.monthFormatWithDigit

@Composable
fun SentimentInMonth(
    modifier: Modifier,
    selectedPeriod: MonthWithYear,
    items: ImmutableMap<LocalDate, SentimentStatItem>,
) {
    val days by remember(selectedPeriod) {
        derivedStateOf {
            CalendarUtils.getDaysInMonth(selectedPeriod.month, selectedPeriod.year)
        }
    }
    var selectedDay by remember {
        mutableStateOf<LocalDate?>(null)
    }

    val histogramItems by remember(items) {
        derivedStateOf {
            days.mapIndexed { index, date ->
                val value = items[date]
                HistogramItem(
                    color = value?.category?.color ?: SentimentColor.UNKNOWN.value,
                    value = value?.value?.toFloat() ?: 0f,
                    index = index
                )
            }.toImmutableList()
        }
    }

    var selectedItem by remember { mutableStateOf<HistogramItem?>(null) }

    Column(modifier) {
        Text(
            modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
            text = "Среднее настроение по дням ${
                remember(selectedPeriod) {
                    Month(selectedPeriod.month).monthFormatWithDigit()
                }
            }",
            style = MaterialTheme.typography.h2.copy(fontSize = 18.sp)
        )
        AnimatedContent(modifier = Modifier.weight(1f), targetState = days) { list ->
            Histogram(
                modifier = Modifier.weight(1f).fillMaxWidth(),
                items = histogramItems,
                spacing = 4.dp,
                max = 1f,
                barTextStyle = MaterialTheme.typography.h2.copy(color = MaterialTheme.colors.onPrimary),
                selectedItem = selectedItem,
                onItemSelected = { item ->
                    selectedItem = item
                    selectedDay = list.getOrNull(item.index)
                },
                isSelectable = true
            )
        }

        Row(
            Modifier
                .fillMaxWidth()
                .padding(top = 8.dp),
            horizontalArrangement = Arrangement.spacedBy(4.dp),
        ) {
            Text(
                modifier = Modifier.weight(1f),
                text = LocalDate(selectedPeriod.year, selectedPeriod.month, 1).dateMonthFormat(),
                style = MaterialTheme.typography.subtitle1.copy(
                    textAlign = TextAlign.Start,
                    color = MaterialTheme.colors.onSecondary.copy(0.6f)
                )
            )

            if (selectedDay != null) {
                Text(
                    modifier = Modifier.weight(1f),
                    text = "${selectedDay!!.dateMonthFormat()} - ${items[selectedDay]?.category?.value ?: "Неизвестно"}",
                    style = MaterialTheme.typography.subtitle1.copy(
                        textAlign = TextAlign.Center,
                        color = MaterialTheme.colors.onSecondary
                    )
                )
            }

            Text(
                modifier = Modifier.weight(1f),
                text = remember(selectedPeriod) {
                    LocalDate(
                        selectedPeriod.year,
                        selectedPeriod.month,
                        days.size
                    ).dateMonthFormat()
                },
                style = MaterialTheme.typography.subtitle1.copy(
                    textAlign = TextAlign.End,
                    color = MaterialTheme.colors.onSecondary.copy(0.6f)
                )
            )
        }
    }
}

@Composable
fun SentimentInDayColumn(
    modifier: Modifier,
    isSelected: Boolean,
    day: Day?,
) {
    val color =
        if (day == null) SentimentColor.UNKNOWN.value.copy(0.3f) else if (day.statItem.value > 0.4) SentimentColor.GREAT.value else SentimentColor.TERRIBLE.value
    val border by animateDpAsState(if (isSelected) 1.5.dp else 0.dp)
    val borderColor by animateColorAsState(if (isSelected) color.copy(0.7f) else color.copy(0.0f))

    Column(
        modifier = modifier
            .border(width = border, color = borderColor, shape = RoundedCornerShape(50))
            .clip(RoundedCornerShape(50))
            .background(color.copy(0.3f)),
        verticalArrangement = Arrangement.Bottom
    ) {
        if (day == null) {
            Box(
                modifier = Modifier.fillMaxWidth().fillMaxHeight(1f)
            )
        } else {
//            Box(modifier = Modifier.weight(1f))
            Box(
                modifier = Modifier.fillMaxWidth()
                    .clip(RoundedCornerShape(50))
                    .fillMaxHeight(day.statItem.value.toFloat())
                    .background(color)
            )
        }

    }
}

@Stable
data class Day(
    val date: LocalDate,
    val statItem: SentimentStatItem,
)