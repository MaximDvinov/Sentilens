package org.diary.data.stats

import kotlinx.coroutines.flow.filter
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import org.diary.data.diary.SentimentData
import org.diary.data.models.toSentiment
import org.diary.database.FakeLocalNotesDataSource

class StatsRepositoryImpl(private val localNotesDataSource: FakeLocalNotesDataSource) :
    StatsRepository {
    override suspend fun sentimentForPeriod(
        startDate: LocalDate,
        endDate: LocalDate,
    ): Map<LocalDate, SentimentStatItemData> {
        val diaries = localNotesDataSource.getNotesSync()

        return diaries
            .filter { diary -> diary.createdAt?.let { it.date in startDate..endDate } == true }
            .mapNotNull { diary ->
                if (diary.sentiment == null || diary.createdAt == null) return@mapNotNull null

                diary.createdAt!! to diary.sentiment!!.toSentiment()
            }
            .groupBy { it.first.date }
            .mapValues {
                val list = it.value.mapNotNull { it.second.value }

                return@mapValues SentimentStatItemData(
                    value = list.average(),
                    category = 0
                )
            }
    }
}