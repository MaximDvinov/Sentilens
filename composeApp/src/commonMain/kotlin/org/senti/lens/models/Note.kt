package org.senti.lens.models

import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import java.util.UUID


@Serializable
data class Note(
    @SerialName("content")
    val content: String? = null,

    @Serializable(with = Serializers::class)
    @SerialName("created_at")
    val createdAt: LocalDateTime? = null,

    @SerialName("sentiment")
    val sentiment: Sentiment? = null,

    @SerialName("title")
    val title: String = "",

    @Serializable(with = Serializers::class)
    @SerialName("updated_at")
    val updatedAt: LocalDateTime? = null,

    @Serializable(with = UUIDSerializer::class)
    @SerialName("uuid")
    val uuid: UUID? = null,

    @SerialName("tags")
    val tags: List<Tag> = listOf()
)

@Serializable
data class Sentiment(
    @SerialName("description")
    val description: String? = null,
    @SerialName("smile")
    val smile: String? = null,
    @SerialName("title")
    val title: String? = null
)
