package org.diary.diary

import androidx.compose.runtime.Stable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import org.diary.composeui.icons.Emoji
import org.diary.composeui.theme.SentimentColor

@Stable
data class Sentiment(
    val category: SentimentCategory? = null,
    val value: Float? = null,
    val advice: String? = null,
)

@Stable
enum class SentimentCategory(val value: String, val color: Color, val icon: ImageVector) {
    @Stable terrible("Ужасно", SentimentColor.TERRIBLE.value, Emoji.Terrible),
    @Stable bad("Плохо", SentimentColor.BAD.value, Emoji.Bad),
    @Stable neutral("Так себе", SentimentColor.NEUTRAL.value, Emoji.Neutral),
    @Stable good("Хорошо", SentimentColor.GOOD.value, Emoji.Good),
    @Stable awesome("Супер", SentimentColor.GREAT.value, Emoji.Great),
}