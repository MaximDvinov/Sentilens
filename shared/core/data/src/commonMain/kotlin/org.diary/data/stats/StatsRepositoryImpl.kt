package org.diary.data.stats

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.datetime.DatePeriod
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate
import kotlinx.datetime.minus
import kotlinx.datetime.plus
import org.diary.data.diary.SentimentCategoryData
import org.diary.data.models.toSentiment
import org.diary.database.datasources.LocalNotesDataSource
import org.diary.database.models.NoteDBO
import kotlin.math.sqrt

class StatsRepositoryImpl(private val localNotesDataSource: LocalNotesDataSource) :
    StatsRepository {

    override suspend fun sentimentForPeriodFlow(
        startDate: LocalDate,
        endDate: LocalDate,
    ): Flow<StatsByPeriod> {
        return localNotesDataSource.getNotes().map { diaries ->
            val startPeriodTmp = startDate.minus(DatePeriod(months = 2))
            val endPeriodTmp = endDate.plus(DatePeriod(months = 2))
            val filtered =
                diaries.filter { diary -> diary.createdAt.date in startPeriodTmp..endPeriodTmp }

            StatsByPeriod(
                sentimentForMonth = sentimentForPeriod(filtered),
                frequencies = frequenciesForPeriod(filtered.filter { diary ->
                    diary.createdAt.date in startDate..endDate
                })
            )
        }
    }

    override suspend fun statsForAllDays(): Flow<AllDayStats> {
        return localNotesDataSource.getNotes().map { diaries ->
            val sentiments = diaries.mapNotNull { it.sentiment?.value }
            val variability = calculateSentimentVariability(sentiments)

            AllDayStats(
                variability = calculateStabilityScore(variability, 1.0),
                averageSentimentByDayOfWeek = averageSentimentByDayOfWeek(diaries)
            )
        }
    }

    private fun sentimentForPeriod(
        diaries: List<NoteDBO>,
    ) = diaries
        .mapNotNull { diary ->
            if (diary.sentiment == null) return@mapNotNull null

            diary.createdAt to diary.sentiment?.toSentiment()
                ?.copy(value = if (diary.sentiment?.value != 0f) diary.sentiment?.value else 0.1f)
        }
        .groupBy { it.first.date }
        .mapValues {
            val average = it.value.mapNotNull { it.second?.value }.average()

            return@mapValues SentimentStatItemData(
                value = average,
                category = average.getCategory()
            )
        }

    private fun frequenciesForPeriod(
        diaries: List<NoteDBO>,
    ) = diaries
        .mapNotNull { diary ->
            if (diary.sentiment == null) return@mapNotNull null

            diary.sentiment!!.toSentiment()
                .copy(value = if (diary.sentiment?.value != 0f) diary.sentiment?.value else 0.1f)
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

    private fun averageSentimentByDayOfWeek(diaries: List<NoteDBO>) = diaries
        .groupBy { it.createdAt.date.dayOfWeek }
        .mapKeys { it.key }
        .mapValues { entry ->
            val average =
                entry.value.mapNotNull { if (it.sentiment?.value != 0f) it.sentiment?.value else 0.1f }
                    .average()
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

    override suspend fun sentimentVariabilityFlow(): Flow<Int> {
        return localNotesDataSource.getNotes().map { diaries ->
            val sentiments = diaries.mapNotNull { it.sentiment?.value }
            val variability = calculateSentimentVariability(sentiments)
            calculateStabilityScore(variability, 1.0)
        }
    }

    private fun calculateSentimentVariability(sentiments: List<Float>): Double {
        if (sentiments.isEmpty()) return 0.0
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