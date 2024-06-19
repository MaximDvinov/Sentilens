package org.diary.nerwork.models

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.uuid.UUID


@Serializable
data class NoteDTO(
    @SerialName("title") val title: String = "",
    @SerialName("content") val content: String? = null,
    @Serializable(with = UUIDSerializer::class) @SerialName("uuid") val uuid: UUID? = null,
    @SerialName("created_at") val createdAt: LocalDateTime? = null,
    @SerialName("updated_at") val updatedAt: LocalDateTime? = null,
    @SerialName("sentiment") val sentiment: SentimentDTO? = null,

    val isNew: Boolean = false,
    val isDeleted: Boolean = false,
)

@Serializable
data class SentimentDTO(
    @SerialName("category") val category: SentimentCategoryDTO? = null,
    @SerialName("value") val value: Float? = null,
    @SerialName("advice") val advice: String? = null,
)

enum class SentimentCategoryDTO(value: String) {
    TERRIBLE("Ужасно"), BAD("Плохо"), NEUTRAL("Так себе"), GOOD("Хорошо"), AWESOME("Супер"), UNKNOWN("Неизвестно");
}

@Serializable
data class AnalyzeText(
    @SerialName("text") val text: String,
)

@Serializable
data class NoteWrite(
    @SerialName("content") val content: String? = null,
    @SerialName("title") val title: String? = null,
    @Serializable(with = UUIDSerializer::class) @SerialName("uuid") val uuid: UUID? = null,
)