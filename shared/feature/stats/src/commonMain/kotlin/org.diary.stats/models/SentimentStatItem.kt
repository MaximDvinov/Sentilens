package org.diary.stats.models

import androidx.compose.runtime.Stable
import org.diary.data.stats.SentimentStatItemData

@Stable
data class SentimentStatItem(
    val value: Double,
    val category: Int,
)

fun SentimentStatItemData.toStable(): SentimentStatItem {
    return SentimentStatItem(
        value = value,
        category = category
    )
}