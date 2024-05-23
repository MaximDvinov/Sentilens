package org.diary.data.stats

import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate

interface StatsRepository {
    suspend fun sentimentForPeriod(
        startDate: LocalDate,
        endDate: LocalDate,
    ): Map<LocalDate, SentimentStatItemData>

    suspend fun frequenciesForPeriod(
        startDate: LocalDate,
        endDate: LocalDate,
    ): List<SentimentStatItemData>

    suspend fun averageSentimentByDayOfWeek(): Map<DayOfWeek, SentimentStatItemData>

}

