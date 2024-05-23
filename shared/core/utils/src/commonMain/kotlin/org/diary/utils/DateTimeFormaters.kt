package org.diary.utils

import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.Month
import kotlinx.datetime.TimeZone
import kotlinx.datetime.format
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime
import kotlinx.datetime.format.FormatStringsInDatetimeFormats
import kotlinx.datetime.format.byUnicodePattern


fun Month.monthFormat(): String {
    return when (this.ordinal) {
        0 -> "янв"
        1 -> "фев"
        2 -> "мар"
        3 -> "апр"
        4 -> "мая"
        5 -> "июн"
        6 -> "июл"
        7 -> "авг"
        8 -> "сен"
        9 -> "окт"
        10 -> "ноя"
        11 -> "дек"
        else -> ""
    }
}

fun Month.monthFormatFull(): String {
    return when (this.ordinal) {
        0 -> "Январь"
        1 -> "Февраль"
        2 -> "Март"
        3 -> "Апрель"
        4 -> "Май"
        5 -> "Июнь"
        6 -> "Июль"
        7 -> "Август"
        8 -> "Сентярь"
        9 -> "Октябрь"
        10 -> "Ноябрь"
        11 -> "Декабрь"
        else -> ""
    }
}

fun Month.monthFormatWithDigit(): String {
    return when (this.ordinal) {
        0 -> "января"
        1 -> "февраля"
        2 -> "марта"
        3 -> "апреля"
        4 -> "мая"
        5 -> "июня"
        6 -> "июля"
        7 -> "августа"
        8 -> "сентября"
        9 -> "октября"
        10 -> "ноября"
        11 -> "декабря"
        else -> ""
    }
}

fun DayOfWeek.shortFormat(): String {
    return when (this) {
        DayOfWeek.MONDAY -> "Пн"
        DayOfWeek.TUESDAY -> "Вт"
        DayOfWeek.WEDNESDAY -> "Ср"
        DayOfWeek.THURSDAY -> "Чт"
        DayOfWeek.FRIDAY -> "Пт"
        DayOfWeek.SATURDAY -> "Сб"
        DayOfWeek.SUNDAY -> "Вс"
        else -> ""
    }
}

//"d MMMM yyyy"
fun LocalDateTime?.dateFormat(): String {
    if (this == null) {
        return ""
    }
    val timeZonedDate =
        this.toInstant(TimeZone.UTC).toLocalDateTime(TimeZone.currentSystemDefault())
    val day =
        if (timeZonedDate.dayOfMonth < 10) "0${timeZonedDate.dayOfMonth}" else "${timeZonedDate.dayOfMonth}"
    val month = timeZonedDate.month.monthFormat()
    val year = timeZonedDate.year.toString()
    return "$day $month $year"
}

@OptIn(FormatStringsInDatetimeFormats::class)
fun LocalDate.dateFormat(): String = format(LocalDate.Format {
    byUnicodePattern("dd.MM")
})


//"d MMMM yyyy"
fun LocalDateTime?.dateFormatWithEnter(): String {
    if (this == null) {
        return ""
    }
    val timeZonedDate =
        this.toInstant(TimeZone.UTC).toLocalDateTime(TimeZone.currentSystemDefault())
    val day =
        if (timeZonedDate.dayOfMonth < 10) "0${timeZonedDate.dayOfMonth}" else "${timeZonedDate.dayOfMonth}"
    val month = timeZonedDate.month.monthFormat()
    val year = timeZonedDate.year.toString()
    return "$day $month\n$year"
}


//"HH:mm"
@OptIn(FormatStringsInDatetimeFormats::class)
fun LocalDateTime?.timeFormat(): String = this?.format(LocalDateTime.Format {
    byUnicodePattern("HH:mm")
}) ?: ""


//"d MMM yyy в HH:mm"
@OptIn(FormatStringsInDatetimeFormats::class)
fun LocalDateTime?.dateTimeFormat(): String {
    if (this == null) {
        return ""
    }
    val timeZonedDate =
        this.toInstant(TimeZone.UTC).toLocalDateTime(TimeZone.currentSystemDefault())
    val day =
        if (timeZonedDate.dayOfMonth < 10) "0${timeZonedDate.dayOfMonth}" else "${timeZonedDate.dayOfMonth}"
    val month = timeZonedDate.month.monthFormat()
    val year = timeZonedDate.year.toString()
    val hour = if (timeZonedDate.hour < 10) "0${timeZonedDate.hour}" else "${timeZonedDate.hour}"
    val minute =
        if (timeZonedDate.minute < 10) "0${timeZonedDate.minute}" else "${timeZonedDate.minute}"

    return "$day $month $year в $hour:$minute"
}

fun LocalDate.dateMonthFormat(): String = "${this.dayOfMonth} ${this.month.monthFormatWithDigit()}"

val currentTimeZone
    get() = TimeZone.currentSystemDefault()

fun Instant.toDateTime() = this.toLocalDateTime(currentTimeZone)
fun Instant.toDate() = this.toLocalDateTime(currentTimeZone).date