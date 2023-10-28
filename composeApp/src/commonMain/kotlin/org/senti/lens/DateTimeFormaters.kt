package org.senti.lens

import kotlinx.datetime.LocalDateTime

fun LocalDateTime?.dateFormat(): String {
    return this?.date?.toString() ?: ""
}

fun LocalDateTime?.timeFormat(): String {
    return this?.time?.toString() ?: ""
}

fun LocalDateTime?.dateTimeFormat(): String {
    return this?.toString() ?: ""
}