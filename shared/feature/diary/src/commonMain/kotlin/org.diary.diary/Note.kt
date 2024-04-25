package org.diary.diary

import kotlinx.datetime.LocalDateTime
import kotlinx.uuid.UUID

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

data class Sentiment(
    val description: String? = null,
    val smile: String? = null,
    val title: String? = null,
    val advices: List<Advice?>? = null,
)

data class AnalyzeText(
    val text: String,
)
data class Advice(
    val title: String? = null,
    val description: String? = null,
    val url: String? = null,
    val imageUrl: String? = null,
)
