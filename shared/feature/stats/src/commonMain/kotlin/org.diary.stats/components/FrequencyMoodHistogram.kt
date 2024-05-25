package org.diary.stats.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.drawscope.draw
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.toImmutableList
import kotlinx.datetime.Month
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.icons.Emoji
import org.diary.composeui.theme.SentimentColor
import org.diary.stats.models.SentimentStatItem
import org.diary.utils.monthFormatFull
import org.diary.utils.monthFormatWithDigit

@Composable
fun FrequencyMoodHistogram(
    modifier: Modifier = Modifier,
    selectedPeriod: MonthWithYear,
    frequencies: ImmutableList<SentimentStatItem>,
) {
    val total by remember(frequencies) {
        derivedStateOf { frequencies.sumOf { it.value } }
    }

    val histogramItems by remember(frequencies) {
        derivedStateOf {
            frequencies.mapIndexed { index, it ->
                HistogramItem(
                    color = it.category?.color ?: SentimentColor.UNKNOWN.value,
                    value = it.value.toFloat(),
                    barText = it.value.toInt().toString(),
                    index = index
                )
            }.toImmutableList()
        }
    }

    var selectedItem by remember { mutableStateOf<HistogramItem?>(null) }

    Column(modifier) {
        Text(
            modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
            text = "Частота настроений за ${
                remember(selectedPeriod) {
                    Month(selectedPeriod.month).monthFormatFull().lowercase()
                }
            }",
            style = MaterialTheme.typography.h2.copy(fontSize = 18.sp)
        )

        Histogram(
            modifier = Modifier.weight(1f).fillMaxWidth(),
            items = histogramItems,
            spacing = 16.dp,
            max = total.toFloat(),
            barTextStyle = MaterialTheme.typography.h2.copy(color = MaterialTheme.colors.onPrimary),
            selectedItem = selectedItem,
            onItemSelected = {
                selectedItem = it
            }
        )

        Row(
            modifier = Modifier.padding(top = 10.dp).fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            frequencies.forEach { item ->
                Box(
                    Modifier.weight(1f)
                ) {
                    Image(
                        item.category?.icon ?: Emoji.Unknown,
                        contentDescription = "",
                        Modifier.align(alignment = Alignment.Center).size(30.dp)
                    )
                }
            }
        }
    }
}