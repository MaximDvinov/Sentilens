package org.diary.data.stats

import kotlinx.datetime.LocalDate
import org.diary.data.diary.SentimentCategoryData
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
                val average = it.value.mapNotNull { it.second.value }.average()

                return@mapValues SentimentStatItemData(
                    value = average,
                    category = if (average > 0.4) SentimentCategoryData.AWESOME else SentimentCategoryData.TERRIBLE
                )
            }
    }

    override suspend fun frequenciesForPeriod(
        startDate: LocalDate,
        endDate: LocalDate,
    ): List<SentimentStatItemData> {
        val diaries = localNotesDataSource.getNotesSync()

        return diaries
            .filter { diary -> diary.createdAt?.let { it.date in startDate..endDate } == true }
            .mapNotNull { diary ->
                if (diary.sentiment == null || diary.createdAt == null) return@mapNotNull null

                diary.sentiment!!.toSentiment()
            }
            .groupingBy {
                it.category
            }
            .eachCount()
            .map {
                SentimentStatItemData(
                    value = it.value.toDouble(),
                    category = it.key
                )
            }
            .let {list ->
                val missingCategories = mutableListOf<SentimentStatItemData>()
                SentimentCategoryData.entries.forEach { category ->
                    if (!list.any { category == it.category }) {
                        missingCategories.add(SentimentStatItemData(0.0, category = category))
                    }
                }

                list.plus(missingCategories)
            }
            .sortedBy { it.category }

    }
}