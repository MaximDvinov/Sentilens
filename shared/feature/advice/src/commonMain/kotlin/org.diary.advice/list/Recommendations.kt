package org.diary.advice.list

import androidx.compose.runtime.Stable
import org.diary.data.advice.RecommendationsData

@Stable
data class Recommendations(
    val title: String,
    val content: String,
    val url: String,
    val image: String,
    val id: Int
)

internal fun RecommendationsData.toStable() = Recommendations(
    title = title,
    content = content,
    url = url,
    image = image,
    id = id
)