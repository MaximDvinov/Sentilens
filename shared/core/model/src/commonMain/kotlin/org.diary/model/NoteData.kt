package org.diary.model

import kotlinx.datetime.LocalDateTime
import kotlinx.uuid.UUID

data class NoteData(
    val content: String? = null,
    val createdAt: LocalDateTime? = null,
    val sentiment: Sentiment? = null,
    val title: String = "",
    val updatedAt: LocalDateTime? = null,
    val uuid: UUID? = null,
    val isNew: Boolean? = false,
    val isDeleted: Boolean = false,
)

data class Sentiment(
    val category: SentimentCategoryData? = null,
    val value: Float? = null,
    val advice: String? = null,
)

enum class SentimentCategoryData(value: String) {
    terrible("Ужасно"), bad("Плохо"), neutral("Так себе"), good("Хорошо"), awesome("Супер")
}

data class AnalyzeText(
    val text: String,
)

data class NoteWrite(
    val content: String? = null,
    val title: String? = null,
    val uuid: UUID? = null,
)

data class Advice(
    val title: String? = null,
    val description: String? = null,
    val url: String? = null,
    val imageUrl: String? = null,
)
