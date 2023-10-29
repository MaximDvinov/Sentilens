package org.senti.lens

import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.Month


fun Month.mothFormat(): String {
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

//"d MMMM yyyy"
fun LocalDateTime?.dateFormat(): String {
    if (this == null) {
        return ""
    }
    val day = if (this.dayOfMonth < 10) "0${this.dayOfMonth}" else "${this.dayOfMonth}"
    val month = this.month.mothFormat()
    val year = this.year.toString()
    return "$day $month $year"
}

//"HH:mm"
fun LocalDateTime?.timeFormat(): String {
    if (this == null) return ""
    val hour = if (this.hour < 10) "0${this.hour}" else "${this.hour}"
    val minute = if (this.minute < 10) "0${this.minute}" else "${this.minute}"
    return "$hour:$minute"
}

//"d MMM yyy в HH:mm"
fun LocalDateTime?.dateTimeFormat(): String {
    if (this == null) {
        return ""
    }
    val day = if (this.dayOfMonth < 10) "0${this.dayOfMonth}" else "${this.dayOfMonth}"
    val month = this.month.mothFormat()
    val year = this.year.toString()
    val hour = if (this.hour < 10) "0${this.hour}" else "${this.hour}"
    val minute = if (this.minute < 10) "0${this.minute}" else "${this.minute}"

    return "$day $month $year в $hour:$minute"
}