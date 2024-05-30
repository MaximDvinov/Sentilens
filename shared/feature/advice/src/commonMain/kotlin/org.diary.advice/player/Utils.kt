package org.diary.advice.player

fun Long.toTime(): String {
    val minutes = this / 1000 / 60
    val seconds = this / 1000 % 60

    val minuteString = if (minutes < 10) {
        "0$minutes"
    } else {
        "$minutes"
    }

    val secondString = if (seconds < 10) {
        "0$seconds"
    } else {
        "$seconds"
    }

    return "$minuteString:$secondString"
}