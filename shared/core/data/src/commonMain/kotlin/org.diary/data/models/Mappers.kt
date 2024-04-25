package org.diary.data.models

import org.diary.database.models.NoteDBO
import org.diary.nerwork.models.NoteDTO
import org.diary.database.models.SentimentDBO
import org.diary.nerwork.models.SentimentDTO
import org.senti.lens.models.CreatedUserDTO
import org.senti.lens.models.LoginDataDTO
import org.senti.lens.models.RegisterDataDTO
import org.senti.lens.models.TokenDataDTO

fun NoteDBO.toNote() = NoteData(
    content = content,
    createdAt = createdAt,
    sentiment = sentiment.toSentiment(),
    title = title,
    updatedAt = updatedAt,
    uuid = uuid,
    isNew = isNew,
    isDeleted = isDeleted
)


fun NoteDTO.toNote(): NoteData {
    val noteData = NoteData(
        content = content,
        createdAt = createdAt,
        sentiment = sentiment?.toSentiment(),
        title = title,
        updatedAt = updatedAt,
        uuid = uuid,
        isNew = isNew,
        isDeleted = isDeleted
    )
    return noteData
}

private fun SentimentDTO.toSentiment(): SentimentData {
    return this.let {
        SentimentData(
            description = description,
            smile = smile,
            title = title
        )
    }
}

fun NoteData.toNoteDTO(): NoteDTO = this.let {
    NoteDTO(
        content = content,
        createdAt = createdAt,
        sentiment = sentiment?.toSentimentDTO(),
        title = title,
        updatedAt = updatedAt,
        uuid = uuid,
        isNew = isNew,
        isDeleted = isDeleted
    )
}

private fun SentimentData.toSentimentDTO(): SentimentDTO {
    return this.let {
        SentimentDTO(
            description = description,
            smile = smile,
            title = title
        )
    }
}

private fun SentimentData?.toSentiment(): SentimentData? {
    return this?.let {
        SentimentData(
            description = description,
            smile = smile,
            title = title
        )
    }
}

private fun SentimentDBO?.toSentiment(): SentimentData? = this?.let {
    SentimentData(
        description = description,
        smile = smile,
        title = title,
    )
}

fun NoteData.toNoteDBO() = this.let {
    NoteDBO(
        content = content,
        createdAt = createdAt,
        sentiment = sentiment?.toSentimentDBO(),
        title = title,
        updatedAt = updatedAt,
        uuid = uuid,
        isNew = isNew,
        isDeleted = isDeleted
    )
}

fun NoteDTO.toNoteDBO() = NoteDBO(
    content = content,
    createdAt = createdAt,
    sentiment = sentiment?.toSentimentDBO(),
    title = title,
    updatedAt = updatedAt,
    uuid = uuid,
    isNew = isNew,
    isDeleted = isDeleted
)

private fun SentimentData?.toSentimentDBO(): SentimentDBO? {
    return this?.let {
        SentimentDBO(
            description = description,
            smile = smile,
            title = title
        )
    }
}

private fun SentimentDTO.toSentimentDBO(): SentimentDBO {
    return SentimentDBO(
        description = description,
        smile = smile,
        title = title
    )
}

fun RegisterData.toDTO() = RegisterDataDTO(
    email = email,
    password = password,
    username = username
)

fun CreatedUserDTO.toData(): CreatedUserData = CreatedUserData(
    email = email,
    username = username,
    createdAt = createdAt,
    id = id,
    isSuperuser = isSuperuser
)

fun TokenDataDTO.toData(): TokenData = TokenData(accessToken, tokenType)

fun LoginData.toDTO(): LoginDataDTO = LoginDataDTO(
    username = username,
    password = password
)