package org.diary.advice.player.models

import androidx.compose.runtime.Stable
import org.diary.data.advice.MusicCategoryData
import org.diary.data.advice.MusicData

@Stable
data class Music(
    val title: String,
    val url: String,
    val category: MusicCategory
)

enum class MusicCategory {
    RADIO, AUDIOFILE
}

fun MusicData.toStable() = Music(title, url, category.toStable())

fun MusicCategoryData.toStable() = when (this) {
    MusicCategoryData.RADIO -> MusicCategory.RADIO
    MusicCategoryData.AUDIOFILE -> MusicCategory.AUDIOFILE
}