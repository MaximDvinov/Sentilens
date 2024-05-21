package org.diary.stats.components

import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import kotlinx.collections.immutable.ImmutableList
import org.diary.data.diary.SentimentCategoryData

@Stable
data class FrequencySentiment(
    val sentiment: SentimentCategoryData,
    val count: Int,
)

@Composable
fun FrequencySentimentHistogram(
    modifier: Modifier = Modifier,
    frequency: ImmutableList<FrequencySentiment>,
) {

}