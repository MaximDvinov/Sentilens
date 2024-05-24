package org.diary.database

import app.cash.sqldelight.ColumnAdapter
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime
import kotlinx.uuid.UUID
import org.diary.database.models.SentimentCategoryDBO

val enumAdapter = object : ColumnAdapter<SentimentCategoryDBO, String> {
    override fun encode(value: SentimentCategoryDBO) = value.name
    override fun decode(databaseValue: String) = SentimentCategoryDBO.valueOf(databaseValue)
}