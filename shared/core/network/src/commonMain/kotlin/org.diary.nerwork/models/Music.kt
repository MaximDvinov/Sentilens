package org.diary.nerwork.models

import kotlinx.serialization.Serializable

@Serializable
data class MusicDTO(
    val title: String,
    val category: MusicCategoryDTO,
    val url: String
)

enum class MusicCategoryDTO {
    AUDIOFILE,
    RADIO
}