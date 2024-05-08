package org.diary.data.stats

import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import org.diary.data.diary.SentimentData

interface StatsRepository {
    suspend fun sentimentForPeriod(
        startDate: LocalDateTime,
        endDate: LocalDateTime,
    ): Map<LocalDateTime, SentimentStatItemData>
}

