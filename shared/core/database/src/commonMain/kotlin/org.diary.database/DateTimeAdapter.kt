package org.diary.database

import app.cash.sqldelight.ColumnAdapter
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime

val dateTimeAdapter = object : ColumnAdapter<LocalDateTime, Long> {
    override fun encode(value: LocalDateTime) = value.toInstant(TimeZone.UTC).toEpochMilliseconds()
    override fun decode(databaseValue: Long) =
        Instant.fromEpochMilliseconds(databaseValue).toLocalDateTime(TimeZone.UTC)
}