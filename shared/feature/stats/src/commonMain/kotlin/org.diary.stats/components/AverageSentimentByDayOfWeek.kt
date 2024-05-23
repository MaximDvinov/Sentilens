package org.diary.stats.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.collections.immutable.persistentMapOf
import kotlinx.collections.immutable.toImmutableList
import kotlinx.datetime.DayOfWeek
import org.diary.composeui.icons.Emoji
import org.diary.composeui.theme.SentimentColor
import org.diary.stats.models.SentimentStatItem
import org.diary.utils.shortFormat

@Composable
fun AverageSentimentByDayOfWeek(
    modifier: Modifier = Modifier,
    items: ImmutableMap<DayOfWeek, SentimentStatItem> = persistentMapOf(),
) {
    val histogramItems by remember(items) {
        derivedStateOf {
            items.map {
                HistogramItem(
                    color = it.value.category?.color ?: SentimentColor.UNKNOWN.value,
                    value = it.value.value.toFloat(),
                    index = 0
                )
            }.toImmutableList()
        }
    }

    Column(modifier) {
        Text(
            modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
            text = "Среднее настроение по дням недели",
            style = MaterialTheme.typography.h2.copy(fontSize = 18.sp)
        )

        Row(Modifier.weight(1f)) {
            Column {
                Image(
                    modifier = Modifier.width(20.dp).weight(1f),
                    imageVector = Emoji.Great,
                    contentDescription = null
                )
                Image(
                    modifier = Modifier.width(20.dp).weight(1f),
                    imageVector = Emoji.Good,
                    contentDescription = null
                )
                Image(
                    modifier = Modifier.width(20.dp).weight(1f),
                    imageVector = Emoji.Neutral,
                    contentDescription = null
                )
                Image(
                    modifier = Modifier.width(20.dp).weight(1f),
                    imageVector = Emoji.Bad,
                    contentDescription = null
                )
                Image(
                    modifier = Modifier.width(20.dp).weight(1f),
                    imageVector = Emoji.Terrible,
                    contentDescription = null
                )
            }

            Spacer(Modifier.width(10.dp))

            Histogram(
                modifier = Modifier.weight(1f).fillMaxHeight(),
                items = histogramItems,
                spacing = 10.dp,
                max = 1.0f,
                barTextStyle = MaterialTheme.typography.h2.copy(color = MaterialTheme.colors.onPrimary)
            )
        }

        Row(
            modifier = Modifier.padding(start = 30.dp, top = 10.dp).fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items.keys.forEach { item ->
                Text(
                    modifier = Modifier.weight(1f),
                    textAlign = TextAlign.Center,
                    text = item.shortFormat(),
                    style = MaterialTheme.typography.subtitle1
                )
            }
        }
    }


}