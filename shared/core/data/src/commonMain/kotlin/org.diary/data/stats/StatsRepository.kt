package org.diary.data.stats

import kotlinx.coroutines.flow.Flow
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import org.diary.data.diary.SentimentData

interface StatsRepository {
    suspend fun sentimentForPeriod(
        startDate: LocalDate,
        endDate: LocalDate,
    ): Map<LocalDate, SentimentStatItemData>

    suspend fun frequenciesForPeriod(
        startDate: LocalDate,
        endDate: LocalDate,
    ): List<SentimentStatItemData>
}

