package org.diary.database

import app.cash.sqldelight.ColumnAdapter
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime
import kotlinx.uuid.UUID

val uuidAdapter = object : ColumnAdapter<UUID, String> {
    override fun encode(value: UUID) = value.toString()
    override fun decode(databaseValue: String) = UUID(databaseValue)
}