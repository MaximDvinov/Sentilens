package org.diary.model

data class RegisterData(
    val email: String? = null,
    val password: String? = null,
    val username: String? = null
)

data class LoginData(
    val username: String? = null,
    val password: String? = null
)

data class TokenData(
    val accessToken: String? = null,
    val tokenType: String? = null
)

data class CreatedUser(
    val createdAt: String? = null,
    val email: String? = null,
    val id: Int? = null,
    val isSuperuser: Boolean? = null,
    val username: String? = null
)