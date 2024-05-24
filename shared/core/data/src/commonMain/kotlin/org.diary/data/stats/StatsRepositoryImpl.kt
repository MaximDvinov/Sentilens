package org.diary.data.stats

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate
import org.diary.data.diary.SentimentCategoryData
import org.diary.data.models.toSentiment
import org.diary.database.datasources.LocalNotesDataSource
import kotlin.math.sqrt

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
                    category = average.getCategory()
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
                    category = average.getCategory()
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

    override suspend fun sentimentVariability(): Int {
        val diaries = localNotesDataSource.getNotesSync()
        val sentiments = diaries.mapNotNull { it.sentiment?.value }
        val variability = calculateSentimentVariability(sentiments)
        return calculateStabilityScore(variability, 1.0)
    }

    override suspend fun sentimentVariabilityFlow(): Flow<Int> {
        return localNotesDataSource.getNotes().map { diaries ->
            val sentiments = diaries.mapNotNull { it.sentiment?.value }
            val variability = calculateSentimentVariability(sentiments)
            calculateStabilityScore(variability, 1.0)
        }
    }

    private fun calculateSentimentVariability(sentiments: List<Float>): Double {
        val mean = sentiments.average()
        val variance = sentiments.map { (it - mean) * (it - mean) }.average()
        return sqrt(variance)
    }

    private fun calculateStabilityScore(variability: Double, maxVariability: Double): Int {
        val normalizedVariability = variability / maxVariability
        return ((1 - normalizedVariability) * 100).toInt()
    }

    private fun Double.getCategory(): SentimentCategoryData? {
        return when (this) {
            in 0.0..0.20 -> SentimentCategoryData.TERRIBLE
            in 0.20..0.4 -> SentimentCategoryData.BAD
            in 0.4..0.6 -> SentimentCategoryData.NEUTRAL
            in 0.6..0.8 -> SentimentCategoryData.GOOD
            in 0.8..1.0 -> SentimentCategoryData.AWESOME
            else -> null
        }
    }

}