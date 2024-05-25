package org.diary.data.stats

import kotlinx.coroutines.flow.Flow
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate

interface StatsRepository {
    suspend fun sentimentVariabilityFlow(): Flow<Int>

    suspend fun sentimentForPeriodFlow(startDate: LocalDate, endDate: LocalDate): Flow<StatsByPeriod>

    suspend fun statsForAllDays(): Flow<AllDayStats>
}

