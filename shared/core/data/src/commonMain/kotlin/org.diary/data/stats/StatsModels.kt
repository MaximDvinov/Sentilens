package org.diary.data.stats

import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate
import org.diary.data.diary.SentimentCategoryData


data class SentimentStatItemData(
    val value: Double,
    val category: SentimentCategoryData?,
)

data class StatsByPeriod(
    val sentimentForMonth: Map<LocalDate, SentimentStatItemData> = mapOf(),
    val frequencies: List<SentimentStatItemData> = listOf()
)

data class AllDayStats(
    val variability: Int,
    val averageSentimentByDayOfWeek: Map<DayOfWeek, SentimentStatItemData> = mapOf(),
)