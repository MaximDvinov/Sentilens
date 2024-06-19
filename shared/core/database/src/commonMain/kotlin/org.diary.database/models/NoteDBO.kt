package org.diary.database.models

import kotlinx.datetime.LocalDateTime
import kotlinx.uuid.UUID


data class NoteDBO(
    val uuid: UUID,
    val content: String,
    val title: String = "",
    val createdAt: LocalDateTime,
    val updatedAt: LocalDateTime,
    val sentiment: SentimentDBO? = null,

    val isNew: Boolean = false,
    val isDeleted: Boolean = false,
)

data class SentimentDBO(
    val category: SentimentCategoryDBO? = null,
    val value: Float? = null,
    val advice: String? = null,
)

fun SentimentDBO.getValue(): Float? {
    if (category == SentimentCategoryDBO.unknown) {
        return null
    }
    return (category?.ordinal?.div(4f))
}

fun SentimentCategoryDBO.getValue(): Float? {
    if (this == SentimentCategoryDBO.unknown) {
        return null
    }
    return (ordinal.div(4f))
}

enum class SentimentCategoryDBO(value: String) {
    terrible("Ужасно"), bad("Плохо"), neutral("Так себе"), good("Хорошо"), awesome("Супер"), unknown(
        "Неизвестно"
    )
}