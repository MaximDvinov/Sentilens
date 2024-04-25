package org.diary.data

import org.diary.data.models.CreatedUserData
import org.diary.data.models.LoginData
import org.diary.data.models.RegisterData
import org.diary.data.models.TokenData
import org.diary.data.models.toDTO
import org.diary.data.models.toData
import org.diary.nerwork.AuthDataSource

interface AuthRepository {
    suspend fun register(value: RegisterData): ApiResult<CreatedUserData>
    suspend fun login(value: LoginData): ApiResult<TokenData>
}

class AuthRepositoryImpl(private val authDataSource: AuthDataSource) : AuthRepository {
    override suspend fun register(value: RegisterData) =
        authDataSource.register(value.toDTO()).toApiResult().map { it.toData() }

    override suspend fun login(value: LoginData) =
        authDataSource.login(value.toDTO()).toApiResult().map { it.toData() }
}

