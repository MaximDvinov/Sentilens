package org.senti.lens.screens.auth

import org.senti.lens.ApiResult
import org.senti.lens.models.CreatedUser
import org.senti.lens.models.LoginData
import org.senti.lens.models.RegisterData
import org.senti.lens.models.TokenData
import org.senti.lens.network.AuthDataSource

interface AuthRepository {
    suspend fun register(value: RegisterData): ApiResult<CreatedUser>
    suspend fun login(value: LoginData): ApiResult<TokenData>
}

class AuthRepositoryImpl(private val authDataSource: AuthDataSource) : AuthRepository {
    override suspend fun register(value: RegisterData) = authDataSource.register(value)

    override suspend fun login(value: LoginData) = authDataSource.login(value)
}

class MockAuthRepository : AuthRepository {
    override suspend fun register(value: RegisterData) = ApiResult.Success(CreatedUser("", "", 0, false, "TestUser"))

    override suspend fun login(value: LoginData) = ApiResult.Success(TokenData("token"))

}