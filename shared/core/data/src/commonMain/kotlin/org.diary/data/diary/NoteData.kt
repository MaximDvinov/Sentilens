package org.diary.data.diary

import kotlinx.datetime.LocalDateTime
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID

data class NoteData(
    val title: String = "",
    val content: String? = null,
    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null,
    val sentiment: SentimentData? = null,
    val uuid: UUID = UUID.generateUUID(),

    val isNew: Boolean = false,
    val isDeleted: Boolean = false,
)

data class SentimentData(
    val category: SentimentCategoryData? = null,
    val value: Float? = null,
    val advice: String? = null,
)

enum class SentimentCategoryData(val value: String) {
    TERRIBLE("Ужасно"), BAD("Плохо"), NEUTRAL("Так себе"), GOOD("Хорошо"), AWESOME("Супер"), UNKNOWN("Неизвестно");
}
