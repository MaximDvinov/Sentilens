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
import kotlinx.collections.immutable.toPersistentMap
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate
import kotlinx.datetime.minus
import kotlinx.datetime.number
import org.diary.composeui.components.calendar.CalendarUtils.getDaysInMonth
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.data.stats.StatsRepository
import org.diary.stats.models.SentimentStatItem
import org.diary.stats.models.toStable
import org.diary.utils.currentTimeZone
import org.diary.utils.toDate


@Stable
data class StatsScreenState(
    val sentimentForMonth: ImmutableMap<LocalDate, SentimentStatItem> = persistentMapOf(),
    val averageSentimentByDayOfWeek: ImmutableMap<DayOfWeek, SentimentStatItem> = persistentMapOf(),
    val frequencies: ImmutableList<SentimentStatItem> = persistentListOf(),
    val sentimentVariability: Int = 0,
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
            statsRepository.statsForAllDays().collect { allStats ->
                _state.update { oldState ->
                    oldState.copy(
                        sentimentVariability = allStats.variability,
                        averageSentimentByDayOfWeek = allStats.averageSentimentByDayOfWeek.mapValues { it.value.toStable() }
                            .toImmutableMap()
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

    private var job: Job? = null

    private fun changeMonth(month: MonthWithYear) {
        _state.update {
            it.copy(selectedMonth = month)
        }

        job?.cancel()

        job = screenModelScope.launch {
            statsRepository.sentimentForPeriodFlow(
                LocalDate(month.year, month.month, 1),
                LocalDate(
                    month.year, month.month,
                    getDaysInMonth(month.month, month.year).size
                )
            ).collect {
                _state.update { oldState ->
                    oldState.copy(
                        sentimentForMonth = it.sentimentForMonth.mapValues { it.value.toStable() }
                            .toPersistentMap(),
                        frequencies = it.frequencies.map { it.toStable() }.toPersistentList()
                    )
                }
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