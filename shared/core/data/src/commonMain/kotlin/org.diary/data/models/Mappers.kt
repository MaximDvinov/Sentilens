package org.diary.data.models

import kotlinx.datetime.Clock
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import kotlinx.uuid.randomUUID
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
import org.diary.database.models.UserDataDBO
import org.diary.nerwork.models.SentimentCategoryDTO
import org.diary.nerwork.models.SentimentDTO
import org.senti.web.models.CreatedUserDTO
import org.senti.web.models.LoginDataDTO
import org.senti.web.models.RegisterDataDTO
import org.senti.web.models.TokenDataDTO
import kotlin.random.Random

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
        uuid = uuid ?: UUID.generateUUID(),
        isNew = isNew,
        isDeleted = isDeleted
    )
    return noteData
}

private fun SentimentDTO.toSentiment(): SentimentData {
    return SentimentData(
        category = category?.toDTO(),
        value = value,
        advice = advice
    )
}

private fun SentimentCategoryDTO.toDTO(): SentimentCategoryData {
    return when (this) {
        SentimentCategoryDTO.BAD -> SentimentCategoryData.BAD
        SentimentCategoryDTO.TERRIBLE -> SentimentCategoryData.TERRIBLE
        SentimentCategoryDTO.NEUTRAL -> SentimentCategoryData.NEUTRAL
        SentimentCategoryDTO.GOOD -> SentimentCategoryData.GOOD
        SentimentCategoryDTO.AWESOME -> SentimentCategoryData.AWESOME
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
        category = category?.toDTO(),
        value = value,
        advice = advice
    )
}

private fun SentimentCategoryData.toDTO(): SentimentCategoryDTO {
    return when (this) {
        SentimentCategoryData.BAD -> SentimentCategoryDTO.BAD
        SentimentCategoryData.TERRIBLE -> SentimentCategoryDTO.TERRIBLE
        SentimentCategoryData.NEUTRAL -> SentimentCategoryDTO.NEUTRAL
        SentimentCategoryData.GOOD -> SentimentCategoryDTO.GOOD
        SentimentCategoryData.AWESOME -> SentimentCategoryDTO.AWESOME
    }
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
    category = category?.toData(),
    value = value,
    advice = advice
)

private fun SentimentCategoryDBO.toData(): SentimentCategoryData {
    return when (this) {
        SentimentCategoryDBO.bad -> SentimentCategoryData.BAD
        SentimentCategoryDBO.terrible -> SentimentCategoryData.TERRIBLE
        SentimentCategoryDBO.neutral -> SentimentCategoryData.NEUTRAL
        SentimentCategoryDBO.good -> SentimentCategoryData.GOOD
        SentimentCategoryDBO.awesome -> SentimentCategoryData.AWESOME
    }
}

fun currentTime(): LocalDateTime {
    return Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault())
}

fun NoteData.toNoteDBO() = NoteDBO(
    content = content ?: "",
    createdAt = createdAt ?: currentTime(),
    sentiment = sentiment?.toSentimentDBO(),
    title = title,
    updatedAt = updatedAt ?: currentTime(),
    uuid = uuid,
    isNew = isNew,
    isDeleted = isDeleted
)

fun NoteDTO.toNoteDBO() = NoteDBO(
    content = content ?: "",
    createdAt = createdAt ?: currentTime(),
    sentiment = sentiment?.toSentimentDBO(),
    title = title,
    updatedAt = updatedAt ?: currentTime(),
    uuid = uuid ?: UUID.generateUUID(),
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
        SentimentCategoryData.BAD -> SentimentCategoryDBO.bad
        SentimentCategoryData.TERRIBLE -> SentimentCategoryDBO.terrible
        SentimentCategoryData.NEUTRAL -> SentimentCategoryDBO.neutral
        SentimentCategoryData.GOOD -> SentimentCategoryDBO.good
        SentimentCategoryData.AWESOME -> SentimentCategoryDBO.awesome

    }
}

private fun SentimentDTO.toSentimentDBO(): SentimentDBO {
    return SentimentDBO(
        category = category?.toDBO(),
        value = value,
        advice = advice
    )
}

private fun SentimentCategoryDTO.toDBO(): SentimentCategoryDBO {
    return when (this) {
        SentimentCategoryDTO.BAD -> SentimentCategoryDBO.bad
        SentimentCategoryDTO.TERRIBLE -> SentimentCategoryDBO.terrible
        SentimentCategoryDTO.NEUTRAL -> SentimentCategoryDBO.neutral
        SentimentCategoryDTO.GOOD -> SentimentCategoryDBO.good
        SentimentCategoryDTO.AWESOME -> SentimentCategoryDBO.awesome
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


fun CreatedUserData.toDTO(): CreatedUserDTO = CreatedUserDTO(
    email = email,
    username = username,
    createdAt = createdAt,
    id = id,
    isSuperuser = isSuperuser
)

fun CreatedUserData.toDBO(): UserDataDBO = UserDataDBO(
    email = email,
    username = username,
    createdAt = createdAt,
    id = id,
    isSuperuser = isSuperuser
)

fun UserDataDBO.toData(): CreatedUserData = CreatedUserData(
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