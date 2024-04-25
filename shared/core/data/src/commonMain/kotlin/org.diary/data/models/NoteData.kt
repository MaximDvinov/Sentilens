package org.diary.data.models

import kotlinx.datetime.LocalDateTime
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import kotlinx.uuid.randomUUID
import kotlin.random.Random

data class NoteData(
    val content: String? = null,
    val createdAt: LocalDateTime? = null,
    val sentiment: SentimentData? = null,
    val title: String = "",
    val updatedAt: LocalDateTime? = null,
    val uuid: UUID? = UUID.generateUUID(),
    val isNew: Boolean = false,
    val isDeleted: Boolean = false,
)

data class SentimentData(
    val description: String? = null,
    val smile: String? = null,
    val title: String? = null,
    val advices: List<AdviceData?>? = null,
)

data class AnalyzeText(
    val text: String,
)

data class AdviceData(
    val title: String? = null,
    val description: String? = null,
    val url: String? = null,
    val imageUrl: String? = null,
)
