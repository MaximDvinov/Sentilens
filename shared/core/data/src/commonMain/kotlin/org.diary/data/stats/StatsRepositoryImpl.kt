package org.diary.data.stats

import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate
import org.diary.data.diary.SentimentCategoryData
import org.diary.data.models.toSentiment
import org.diary.database.FakeLocalNotesDataSource
import org.diary.database.LocalNotesDataSource

class StatsRepositoryImpl(private val localNotesDataSource: LocalNotesDataSource) :
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
            .let { list ->
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

    override suspend fun averageSentimentByDayOfWeek(): Map<DayOfWeek, SentimentStatItemData> {
        val diaries = localNotesDataSource.getNotesSync()

        val result = diaries
            .groupBy { it.createdAt?.date?.dayOfWeek }
            .filterNot { it.key == null }
            .mapKeys { it.key!! }
            .mapValues { entry ->
                val average = entry.value.mapNotNull { it.sentiment?.value }.average()
                return@mapValues SentimentStatItemData(
                    value = average,
                    category = if (average > 0.4) SentimentCategoryData.AWESOME else SentimentCategoryData.TERRIBLE
                )
            }
            .toMutableMap()
            .apply {
                DayOfWeek.entries.forEach {
                    if (!containsKey(it)) {
                        this[it] = SentimentStatItemData(0.0, null)
                    }
                }
            }
            .toList()
            .sortedBy { it.first }
            .toMap()

        return result
    }
}