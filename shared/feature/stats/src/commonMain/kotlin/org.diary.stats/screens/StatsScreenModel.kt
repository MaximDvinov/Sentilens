package org.diary.stats.screens

import androidx.compose.runtime.Stable
import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.ImmutableMap
import kotlinx.collections.immutable.persistentListOf
import kotlinx.collections.immutable.persistentMapOf
import kotlinx.collections.immutable.toImmutableMap
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.Month
import kotlinx.datetime.minus
import kotlinx.datetime.number
import org.diary.composeui.components.calendar.CalendarUtils.getDaysInMonth
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.data.stats.SentimentStatItemData
import org.diary.data.stats.StatsRepository
import org.diary.stats.models.SentimentStatItem
import org.diary.stats.models.toStable
import org.diary.utils.currentTimeZone
import org.diary.utils.toDate
import org.diary.utils.toDateTime


@Stable
data class StatsScreenState(
    val sentimentForMonth: ImmutableMap<LocalDate, SentimentStatItem> = persistentMapOf(),
    val averageSentimentByDayOfWeek: ImmutableMap<DayOfWeek, SentimentStatItem> = persistentMapOf(),
    val frequencies: ImmutableList<SentimentStatItem> = persistentListOf(),
    val sentimentVariability: Int? = null,
    val selectedMonth: MonthWithYear,
)

sealed interface StatsScreenEvent {
    data class ChangeMonth(val month: MonthWithYear) : StatsScreenEvent
}

class StatsScreenModel(private val statsRepository: StatsRepository) : ScreenModel {
    private val _state: MutableStateFlow<StatsScreenState> = MutableStateFlow(
        StatsScreenState(selectedMonth = getCurrentMonth())
    )
    val state: StateFlow<StatsScreenState>
        get() = _state

    init {
        changeMonth(getCurrentMonth())

        screenModelScope.launch {
            statsRepository.sentimentVariabilityFlow().collect { sentimentVariability ->
                _state.update { oldState ->
                    oldState.copy(
                        sentimentVariability = sentimentVariability
                    )
                }
            }
        }

    }

    fun onEvent(event: StatsScreenEvent) {
        when (event) {
            is StatsScreenEvent.ChangeMonth -> changeMonth(event.month)
        }
    }

    private fun changeMonth(month: MonthWithYear) {
        _state.update {
            it.copy(selectedMonth = month)
        }

        updateSentiment(month)
        updateFrequencies(month)
        updateAverageSentimentByDayOfWeek()
    }

    private fun updateFrequencies(month: MonthWithYear) {
        screenModelScope.launch {
            val frequencies = statsRepository.frequenciesForPeriod(
                LocalDate(month.year, month.month, 1),
                LocalDate(
                    month.year, month.month,
                    getDaysInMonth(month.month, month.year).size
                )
            )

            _state.update { oldState ->
                oldState.copy(
                    frequencies = frequencies.map { it.toStable() }.toPersistentList()
                )
            }
        }
    }

    private fun updateSentiment(month: MonthWithYear) {
        screenModelScope.launch {
            val sentimentForPeriod = statsRepository.sentimentForPeriod(
                LocalDate(month.year, month.month, 1),
                LocalDate(
                    month.year, month.month,
                    getDaysInMonth(month.month, month.year).size
                )
            )

            _state.update { oldState ->
                oldState.copy(
                    sentimentForMonth = sentimentForPeriod.mapValues { it.value.toStable() }
                        .toImmutableMap()
                )
            }
        }
    }

    private fun updateAverageSentimentByDayOfWeek() {
        screenModelScope.launch {
            val averageSentiment = statsRepository.averageSentimentByDayOfWeek()
            _state.update { oldState ->
                oldState.copy(
                    averageSentimentByDayOfWeek = averageSentiment.mapValues { it.value.toStable() }
                        .toImmutableMap()
                )
            }
        }
    }


    private fun getBasePeriod(): Pair<LocalDate, LocalDate> {
        val instant = Clock.System.now()
        return instant.minus(7, DateTimeUnit.DAY, currentTimeZone)
            .toDate() to instant.toDate()
    }

    private fun getCurrentMonth(): MonthWithYear {
        val instant = Clock.System.now().toDate()
        return MonthWithYear(instant.month.number, instant.year)
    }

}