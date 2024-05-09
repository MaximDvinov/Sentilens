package org.diary.stats.screens

import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.model.screenModelScope
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.persistentListOf
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.minus
import org.diary.data.stats.SentimentStatItemData
import org.diary.data.stats.StatsRepository
import org.diary.utils.currentTimeZone
import org.diary.utils.toDate
import org.diary.utils.toDateTime


data class StatsScreenState(
    val sentimentForPeriod: ImmutableList<Pair<LocalDate, SentimentStatItemData>> = persistentListOf(),
    val period: Pair<LocalDate, LocalDate>,

    )

class StatsScreenModel(private val statsRepository: StatsRepository) : ScreenModel {
    private val _state: MutableStateFlow<StatsScreenState> = MutableStateFlow(
        StatsScreenState(period = getBasePeriod())
    )
    val state: StateFlow<StatsScreenState>
        get() = _state


    init {
        screenModelScope.launch {
            val sentimentForPeriod = statsRepository.sentimentForPeriod(
                _state.value.period.first,
                _state.value.period.second
            )
            _state.update {
                it.copy(
                    sentimentForPeriod = sentimentForPeriod
                        .toList()
                        .toPersistentList()
                )
            }
        }
    }

    private fun getBasePeriod(): Pair<LocalDate, LocalDate> {
        val instant = Clock.System.now()
        return instant.minus(7, DateTimeUnit.DAY, currentTimeZone)
            .toDate() to instant.toDate()
    }

}