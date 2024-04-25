package org.diary.diary

import org.diary.data.models.NoteData
import org.diary.data.models.SentimentData

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
        description = description,
        smile = smile,
        title = title
    )
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
    description = description,
    smile = smile,
    title = title
)