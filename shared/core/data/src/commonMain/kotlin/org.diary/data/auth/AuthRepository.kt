package org.diary.data.auth

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.get
import org.diary.data.ApiResult
import org.diary.data.map
import org.diary.data.models.toDTO
import org.diary.data.models.toData
import org.diary.data.toApiResult
import org.diary.nerwork.ACCESS
import org.diary.nerwork.AuthDataSource

interface AuthRepository {
    suspend fun register(value: RegisterData): ApiResult<CreatedUserData>
    suspend fun login(value: LoginData): ApiResult<TokenData>
    suspend fun isAuthenticated(): Boolean
}

class AuthRepositoryImpl(
    private val authDataSource: AuthDataSource,
    private val setting: ObservableSettings,
) : AuthRepository {
    override suspend fun register(value: RegisterData) =
        authDataSource.register(value.toDTO()).toApiResult().map { it.toData() }

    override suspend fun login(value: LoginData) =
        authDataSource.login(value.toDTO()).toApiResult().map { it.toData() }

    override suspend fun isAuthenticated() = setting.get<String>(ACCESS)?.isNotEmpty() ?: false
}

