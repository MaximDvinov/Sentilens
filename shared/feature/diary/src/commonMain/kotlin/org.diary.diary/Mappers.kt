package org.diary.diary

import org.diary.data.diary.NoteData
import org.diary.data.diary.SentimentCategoryData
import org.diary.data.diary.SentimentData

fun NoteData.toUiNote() = Note(
    content = content,
    createdAt = createdAt,
    sentiment = sentiment?.toSentiment(),
    title = title,
    updatedAt = updatedAt,
    uuid = uuid,
    isNew = isNew,
    isDeleted = isDeleted
)

fun SentimentData.toSentiment(): Sentiment {
    return Sentiment(
        category = category?.toStable(),
        value = value,
        advice = advice
    )
}

private fun SentimentCategoryData.toStable(): SentimentCategory {
    return when (this) {
        SentimentCategoryData.TERRIBLE -> SentimentCategory.terrible
        SentimentCategoryData.BAD -> SentimentCategory.bad
        SentimentCategoryData.NEUTRAL -> SentimentCategory.neutral
        SentimentCategoryData.GOOD -> SentimentCategory.good
        SentimentCategoryData.AWESOME -> SentimentCategory.awesome
    }
}

fun Note.toNoteData() = NoteData(
    content = content,
    createdAt = createdAt,
    sentiment = sentiment?.toSentimentData(),
    title = title,
    updatedAt = updatedAt,
    uuid = uuid,
    isNew = isNew,
    isDeleted = isDeleted
)

fun Sentiment.toSentimentData() = SentimentData(
    category = category?.toData(),
    value = value,
    advice = advice
)

private fun SentimentCategory.toData(): SentimentCategoryData {
    return when (this) {
        SentimentCategory.terrible -> SentimentCategoryData.TERRIBLE
        SentimentCategory.bad -> SentimentCategoryData.BAD
        SentimentCategory.neutral -> SentimentCategoryData.NEUTRAL
        SentimentCategory.good -> SentimentCategoryData.GOOD
        SentimentCategory.awesome -> SentimentCategoryData.AWESOME
    }
}
