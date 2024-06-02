package org.diary.data.advice

data class MusicData(
    val title: String,
    val category: MusicCategoryData,
    val url: String
)

enum class MusicCategoryData {
    AUDIOFILE,
    RADIO
}