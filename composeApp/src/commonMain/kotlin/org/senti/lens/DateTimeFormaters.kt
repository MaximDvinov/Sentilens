package org.senti.lens

import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.toJavaLocalDateTime
import java.time.format.DateTimeFormatter

val dateFormatter = DateTimeFormatter.ofPattern("d MMMM yyyy")
val timeFormatter = DateTimeFormatter.ofPattern("HH:mm")
val dateTimeFormatter = DateTimeFormatter.ofPattern("d MMM yyy в HH:mm")

fun LocalDateTime?.dateFormat(): String {
    return this?.toJavaLocalDateTime()?.format(dateFormatter) ?: ""
}

fun LocalDateTime?.timeFormat(): String {
    return this?.toJavaLocalDateTime()?.format(timeFormatter) ?: ""
}

fun LocalDateTime?.dateTimeFormat(): String {
    return this?.toJavaLocalDateTime()?.format(dateTimeFormatter) ?: ""
}