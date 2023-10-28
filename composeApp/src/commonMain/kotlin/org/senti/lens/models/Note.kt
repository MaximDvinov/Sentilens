package org.senti.lens.models

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.uuid.UUID


@Serializable
data class Note(
    @SerialName("content") val content: String? = null,

    @Serializable(with = Serializers::class) @SerialName("created_at") val createdAt: LocalDateTime? = null,

    @SerialName("sentiment") val sentiment: Sentiment? = null,

    @SerialName("title") val title: String = "",

    @Serializable(with = Serializers::class) @SerialName("updated_at") val updatedAt: LocalDateTime? = null,

    @Serializable(with = UUIDSerializer::class) @SerialName("uuid") val uuid: UUID? = null,

    @SerialName("hashtags") val tags: List<Tag> = listOf(),

    val isNew: Boolean? = false,
    val isDeleted: Boolean = false
)

@Serializable
data class Sentiment(
    @SerialName("description") val description: String? = null,
    @SerialName("smile") val smile: String? = null,
    @SerialName("title") val title: String? = null,
    @SerialName("advices") val advices: List<Advice?>? = null
)

@Serializable
data class AnalyzeText(
    @SerialName("text") val text: String
)

@Serializable
data class NoteWrite(
    @SerialName("content")
    val content: String? = null,
    @SerialName("title")
    val title: String? = null,
    @Serializable(with = UUIDSerializer::class) @SerialName("uuid")
    val uuid: UUID? = null,
    @SerialName("hashtags")
    val tags: List<Tag>
)

@Serializable
data class Advice(
    @SerialName("title") val title: String? = null,
    @SerialName("description") val description: String? = null,
    @SerialName("url") val url: String? = null,
    @SerialName("image_url") val imageUrl: String? = null
)
