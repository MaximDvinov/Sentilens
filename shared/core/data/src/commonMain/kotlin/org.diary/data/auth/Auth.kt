package org.diary.data.auth

import kotlinx.datetime.LocalDateTime
import org.diary.database.models.UserDataDBO

data class RegisterData(
    val email: String? = null,
    val password: String? = null,
    val username: String? = null,
)

data class LoginData(
    val username: String? = null,
    val password: String? = null,
)

data class TokenData(
    val accessToken: String? = null,
    val refreshToken: String? = null,
    val expiresAt: LocalDateTime? = null,
)

data class CreatedUserData(
    val createdAt: String? = null,
    val email: String? = null,
    val id: Int? = null,
    val isSuperuser: Boolean? = null,
    val username: String? = null,
)