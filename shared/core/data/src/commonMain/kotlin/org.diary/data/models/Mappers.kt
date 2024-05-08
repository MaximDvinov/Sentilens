package org.diary.data.models

import org.diary.data.auth.CreatedUserData
import org.diary.data.auth.LoginData
import org.diary.data.auth.RegisterData
import org.diary.data.auth.TokenData
import org.diary.data.diary.NoteData
import org.diary.data.diary.SentimentCategoryData
import org.diary.data.diary.SentimentData
import org.diary.database.models.NoteDBO
import org.diary.database.models.SentimentCategoryDBO
import org.diary.nerwork.models.NoteDTO
import org.diary.database.models.SentimentDBO
import org.diary.nerwork.models.SentimentCategoryDTO
import org.diary.nerwork.models.SentimentDTO
import org.senti.lens.models.CreatedUserDTO
import org.senti.lens.models.LoginDataDTO
import org.senti.lens.models.RegisterDataDTO
import org.senti.lens.models.TokenDataDTO

fun NoteDBO.toNote() = NoteData(
    content = content,
    createdAt = createdAt,
    sentiment = sentiment?.toSentiment(),
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
    return SentimentData(
        category = SentimentCategoryData.entries.getOrNull(category ?: 0),
        value = value,
        advice = advice
    )
}

private fun SentimentCategoryDTO.toDTO(): SentimentCategoryData {
    return when (this) {
        SentimentCategoryDTO.bad -> SentimentCategoryData.bad
        SentimentCategoryDTO.terrible -> SentimentCategoryData.terrible
        SentimentCategoryDTO.neutral -> SentimentCategoryData.neutral
        SentimentCategoryDTO.good -> SentimentCategoryData.good
        SentimentCategoryDTO.awesome -> SentimentCategoryData.awesome
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
    return SentimentDTO(
        category = category?.ordinal,
        value = value,
        advice = advice
    )
}

private fun SentimentCategoryData.toData(): SentimentCategoryDTO {
//    return when (this) {
//        SentimentCategoryData.bad -> SentimentCategoryDTO.bad
//        SentimentCategoryData.terrible -> SentimentCategoryDTO.terrible
//        SentimentCategoryData.neutral -> SentimentCategoryDTO.neutral
//        SentimentCategoryData.good -> SentimentCategoryDTO.good
//        SentimentCategoryData.awesome -> SentimentCategoryDTO.awesome
//    }

    return SentimentCategoryDTO.entries.getOrNull(ordinal) ?: SentimentCategoryDTO.neutral
}

private fun SentimentData?.toSentiment(): SentimentData? {
    return this?.let {
        SentimentData(
            category = category,
            value = value,
            advice = advice
        )
    }
}

fun SentimentDBO.toSentiment(): SentimentData = SentimentData(
    category = category?.toDTO(),
    value = value,
    advice = advice
)

private fun SentimentCategoryDBO.toDTO(): SentimentCategoryData {
    return when (this) {
        SentimentCategoryDBO.bad -> SentimentCategoryData.bad
        SentimentCategoryDBO.terrible -> SentimentCategoryData.terrible
        SentimentCategoryDBO.neutral -> SentimentCategoryData.neutral
        SentimentCategoryDBO.good -> SentimentCategoryData.good
        SentimentCategoryDBO.awesome -> SentimentCategoryData.awesome
    }
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
            category = category?.toDBO(),
            value = value,
            advice = advice
        )
    }
}

private fun SentimentCategoryData.toDBO(): SentimentCategoryDBO {
    return when (this) {
        SentimentCategoryData.bad -> SentimentCategoryDBO.bad
        SentimentCategoryData.terrible -> SentimentCategoryDBO.terrible
        SentimentCategoryData.neutral -> SentimentCategoryDBO.neutral
        SentimentCategoryData.good -> SentimentCategoryDBO.good
        SentimentCategoryData.awesome -> SentimentCategoryDBO.awesome

    }
}

private fun SentimentDTO.toSentimentDBO(): SentimentDBO {
    return SentimentDBO(
        category = SentimentCategoryDBO.entries.getOrNull(category ?: 0),
        value = value,
        advice = advice
    )
}

private fun SentimentCategoryDTO.toDBO(): SentimentCategoryDBO {
    return when (this) {
        SentimentCategoryDTO.bad -> SentimentCategoryDBO.bad
        SentimentCategoryDTO.terrible -> SentimentCategoryDBO.terrible
        SentimentCategoryDTO.neutral -> SentimentCategoryDBO.neutral
        SentimentCategoryDTO.good -> SentimentCategoryDBO.good
        SentimentCategoryDTO.awesome -> SentimentCategoryDBO.awesome
    }
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

fun TokenDataDTO.toData(): TokenData = TokenData(accessToken, refreshToken)

fun LoginData.toDTO(): LoginDataDTO = LoginDataDTO(
    username = username,
    password = password
)