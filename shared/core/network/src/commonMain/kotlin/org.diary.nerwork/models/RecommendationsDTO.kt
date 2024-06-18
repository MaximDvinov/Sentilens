package org.diary.nerwork.models


import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class RecommendationsDTO(
    @SerialName("content")
    val content: String,
    @SerialName("id")
    val id: Int,
    @SerialName("image")
    val image: String,
    @SerialName("title")
    val title: String,
    @SerialName("url")
    val url: String
)