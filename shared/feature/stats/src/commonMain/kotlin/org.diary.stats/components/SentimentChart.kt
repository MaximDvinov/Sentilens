package org.diary.stats.components

import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.aay.compose.lineChart.LineChart
import com.aay.compose.lineChart.model.LineParameters
import com.aay.compose.lineChart.model.LineType
import kotlinx.collections.immutable.ImmutableList
import kotlinx.datetime.LocalDate
import org.diary.data.stats.SentimentStatItemData
import org.diary.utils.dateFormat

@Composable
fun SentimentChart(
    modifier: Modifier,
    sentimentForPeriod: ImmutableList<Pair<LocalDate, SentimentStatItemData>>,
) {
    val color = MaterialTheme.colors.primary

    val linesParameters by remember {
        derivedStateOf {
            listOf(
                LineParameters(
                    label = "",
                    data = sentimentForPeriod.map {
                        it.second.value
                    },
                    lineColor = color,
                    lineType = LineType.DEFAULT_LINE,
                    lineShadow = false,
                )
            )

        }
    }

    val xAxisData by remember {
        derivedStateOf {
            sentimentForPeriod.map {
                it.first.dateFormat()
            }
        }
    }

    LineChart(
        modifier = modifier,
        linesParameters = linesParameters,
        xAxisData = xAxisData,

        )
}