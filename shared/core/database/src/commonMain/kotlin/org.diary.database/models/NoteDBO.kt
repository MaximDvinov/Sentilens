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
    val description: String? = null,
    val smile: String? = null,
    val title: String? = null,
    val advices: List<AdviceDBO?>? = null
)

data class AdviceDBO(
    val title: String? = null,
    val description: String? = null,
    val url: String? = null,
    val imageUrl: String? = null
)
