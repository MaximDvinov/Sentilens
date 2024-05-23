package org.diary.data.stats

import org.diary.data.diary.SentimentCategoryData


data class SentimentStatItemData(
    val value: Double,
    val category: SentimentCategoryData?,
)