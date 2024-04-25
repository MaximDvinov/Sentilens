package org.diary.database.models

data class UserDataDBO(
    val createdAt: String? = null,
    val email: String? = null,
    val id: Int? = null,
    val isSuperuser: Boolean? = null,
    val username: String? = null
)