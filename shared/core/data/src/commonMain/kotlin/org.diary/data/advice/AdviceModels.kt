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

data class RecommendationsData(
    val title: String,
    val content: String,
    val url: String,
    val image: String,
    val id: Int
)