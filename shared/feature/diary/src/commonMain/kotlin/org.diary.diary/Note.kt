package org.diary.diary

import androidx.compose.runtime.Stable
import kotlinx.datetime.LocalDateTime
import kotlinx.uuid.UUID

@Stable
data class Note(
    val content: String? = null,
    val createdAt: LocalDateTime? = null,
    val sentiment: Sentiment? = null,
    val title: String = "",
    val updatedAt: LocalDateTime? = null,
    val uuid: UUID? = null,
    val isNew: Boolean = false,
    val isDeleted: Boolean = false,
)

@Stable
data class Sentiment(
    val category: SentimentCategory? = null,
    val value: Float? = null,
    val advice: String? = null,
)

enum class SentimentCategory(val value: String) {
    terrible("Ужасно"), bad("Плохо"), neutral("Так себе"), good("Хорошо"), awesome("Супер")
}