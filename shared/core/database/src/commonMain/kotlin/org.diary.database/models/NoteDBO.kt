package org.diary.database.models

import kotlinx.datetime.LocalDateTime
import kotlinx.uuid.UUID


data class NoteDBO(
    val content: String? = null,
    val createdAt: LocalDateTime? = null,
    val sentiment: SentimentDBO? = null,
    val title: String = "",
    val updatedAt: LocalDateTime? = null,
    val uuid: UUID? = null,
    val isNew: Boolean = false,
    val isDeleted: Boolean = false
)

data class SentimentDBO(
    val category: SentimentCategoryDBO? = null,
    val value: Float? = null,
    val advice: String? = null,
)

enum class SentimentCategoryDBO(value: String) {
    terrible("Ужасно"), bad("Плохо"), neutral("Так себе"), good("Хорошо"), awesome("Супер")
}