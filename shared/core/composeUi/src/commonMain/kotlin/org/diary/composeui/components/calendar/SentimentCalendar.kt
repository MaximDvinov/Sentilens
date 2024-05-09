package org.diary.composeui.components.calendar

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.animation.togetherWith
import androidx.compose.animation.with
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.AlignRight
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.ArrowRight
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.datetime.LocalDate
import kotlinx.datetime.Month
import org.diary.composeui.components.SecondaryIconButton
import org.diary.composeui.theme.SentimentColor
import org.diary.composeui.theme.defaultShape
import org.diary.composeui.theme.primary
import org.diary.composeui.theme.sixDpShape
import org.diary.composeui.theme.smallShape
import org.diary.utils.mothFormatFull

@Stable
data class SentimentItem(
    val icon: @Composable () -> Unit,
    val color: Color = primary,
)

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun SentimentCalendar(
    modifier: Modifier,
    selectedPeriod: MonthWithYear,
    changeMonth: (MonthWithYear) -> Unit,
    onSelectDate: (LocalDate) -> Unit,
    items: ImmutableMap<LocalDate, SentimentItem>,
) {
    val days by remember(selectedPeriod) {
        derivedStateOf {
            CalendarUtils.getDaysInMonth(selectedPeriod.month, selectedPeriod.year)
        }
    }

    val startDayOfWeek by remember(selectedPeriod) {
        derivedStateOf {
            days.firstOrNull()?.dayOfWeek?.ordinal ?: 0
        }
    }

    Column(
        modifier = modifier
            .clip(defaultShape)
            .background(MaterialTheme.colors.secondary)
            .padding(10.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(bottom = 10.dp)
                .clip(smallShape)
                .background(MaterialTheme.colors.background),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                modifier = Modifier.padding(horizontal = 12.dp),
                text = "${Month(selectedPeriod.month).mothFormatFull()} ${selectedPeriod.year}",
                style = MaterialTheme.typography.subtitle1
            )

            Spacer(modifier.weight(1f))

            SecondaryIconButton(onClick = {
                changeMonth(selectedPeriod.unaryMinus())
            }, color = Color.Transparent) {
                Icon(FeatherIcons.ArrowLeft, null, tint = MaterialTheme.colors.onBackground)
            }

            SecondaryIconButton(onClick = {
                changeMonth(selectedPeriod.unaryPlus())
            }, color = Color.Transparent) {
                Icon(FeatherIcons.ArrowRight, null, tint = MaterialTheme.colors.onBackground)
            }
        }

        AnimatedContent(days, contentKey = { selectedPeriod }, transitionSpec = {
            (fadeIn()).togetherWith(fadeOut())
        }) {
            LazyVerticalGrid(
                modifier = Modifier.fillMaxWidth(),
                columns = object : GridCells {
                    override fun Density.calculateCrossAxisCellSizes(
                        availableSize: Int,
                        spacing: Int,
                    ): List<Int> {
                        return List(7) { 40 }
                    }

                },
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalArrangement = Arrangement.spacedBy(4.dp),
            ) {
                items(startDayOfWeek) {
                    Column { }
                }

                items(it) {
                    DateItem(modifier = Modifier, data = it to items[it])
                }
            }
        }

    }
}

@Composable
fun DateItem(modifier: Modifier = Modifier, data: Pair<LocalDate, SentimentItem?>) {
    val (date, sentiment) = data
    Column(
        modifier = modifier
            .clip(sixDpShape)
            .background(SentimentColor.UNKNOWN.value)
            .padding(vertical = 4.dp, horizontal = 10.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "\uD83D\uDE42",
            style = MaterialTheme.typography.h2,
            color = Color.White
        )
        Text(
            text = date.dayOfMonth.toString(),
            style = MaterialTheme.typography.body1,
            color = Color.White
        )
    }
}


