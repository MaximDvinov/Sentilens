package org.senti.lens.models

import kotlinx.serialization.Serializable

import kotlinx.serialization.SerialName


@Serializable
data class RegisterDataDTO(
    @SerialName("email")
    val email: String? = null,
    @SerialName("password")
    val password: String? = null,
    @SerialName("username")
    val username: String? = null
)

@Serializable
data class LoginDataDTO(
    @SerialName("username")
    val username: String? = null,
    @SerialName("password")
    val password: String? = null
)

@Serializable
data class TokenDataDTO(
    @SerialName("access_token")
    val accessToken: String? = null,
    @SerialName("token_type")
    val tokenType: String? = null
)

@Serializable
data class CreatedUserDTO(
    @SerialName("created_at")
    val createdAt: String? = null,
    @SerialName("email")
    val email: String? = null,
    @SerialName("id")
    val id: Int? = null,
    @SerialName("is_superuser")
    val isSuperuser: Boolean? = null,
    @SerialName("username")
    val username: String? = null
)