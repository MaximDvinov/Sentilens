package org.diary.diary

import androidx.compose.runtime.Stable

@Stable
data class Sentiment(
    val category: SentimentCategory? = null,
    val value: Float? = null,
    val advice: String? = null,
)

enum class SentimentCategory(val value: String) {
    terrible("Ужасно"), bad("Плохо"), neutral("Так себе"), good("Хорошо"), awesome("Супер")
}
