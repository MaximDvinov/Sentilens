package org.diary.stats.models

import androidx.compose.runtime.Stable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import org.diary.composeui.icons.Emoji
import org.diary.composeui.theme.SentimentColor
import org.diary.data.diary.SentimentCategoryData
import org.diary.data.stats.SentimentStatItemData

@Stable
data class SentimentStatItem(
    val value: Double,
    val category: SentimentCategory?,
)

fun SentimentStatItemData.toStable(): SentimentStatItem {
    return SentimentStatItem(
        value = value,
        category = category?.toStable()
    )
}

@Stable
enum class SentimentCategory(val value: String, val color: Color, val icon: ImageVector) {
    @Stable TERRIBLE("Ужасное", SentimentColor.TERRIBLE.value, Emoji.Terrible),
    @Stable BAD("Плохое", SentimentColor.BAD.value, Emoji.Bad),
    @Stable NEUTRAL("Обычное", SentimentColor.NEUTRAL.value, Emoji.Neutral),
    @Stable GOOD("Хорошее", SentimentColor.GOOD.value, Emoji.Good),
    @Stable AWESOME("Отличное", SentimentColor.GREAT.value, Emoji.Great),
}

fun SentimentCategoryData.toStable() = when (this) {
    SentimentCategoryData.TERRIBLE -> SentimentCategory.TERRIBLE
    SentimentCategoryData.BAD -> SentimentCategory.BAD
    SentimentCategoryData.NEUTRAL -> SentimentCategory.NEUTRAL
    SentimentCategoryData.GOOD -> SentimentCategory.GOOD
    SentimentCategoryData.AWESOME -> SentimentCategory.AWESOME
}