package org.diary.composeui.components.calendar

import androidx.compose.runtime.Stable
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.LocalDate
import kotlinx.datetime.plus
import kotlinx.datetime.until
import org.diary.utils.toDate

object CalendarUtils {
    val today: LocalDate
        get() = Clock.System.now().toDate()

    fun getDaysInMonth(month: Int, year: Int): List<LocalDate> {
        val start = LocalDate(year, month, 1)
        val end = start.plus(1, DateTimeUnit.MONTH)
        val count = start.until(end, DateTimeUnit.DAY)
        return (1..count).map {
            LocalDate(year, month, it)
        }
    }

    fun getWeekCount(month: Int, year: Int): Int {
        val start = LocalDate(year, month, 1)
        val end = start.plus(1, DateTimeUnit.MONTH)
        return start.until(end, DateTimeUnit.WEEK)
    }
}

@Stable
data class MonthWithYear(
    val month: Int,
    val year: Int,
)


fun MonthWithYear.unaryMinus(): MonthWithYear {
    if (month == 1) {
        return MonthWithYear(12, year - 1)
    }

    return MonthWithYear(month - 1, year)
}


fun MonthWithYear.unaryPlus(): MonthWithYear {
    if (month == 12) {
        return MonthWithYear(1, year + 1)
    }

    return MonthWithYear(month + 1, year)
}