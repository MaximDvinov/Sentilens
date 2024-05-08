package org.diary.data.auth

import org.diary.data.ApiResult

class MockAuthRepository : AuthRepository {
    override suspend fun register(value: RegisterData) = ApiResult.Success(CreatedUserData("", "", 0, false, "TestUser"))

    override suspend fun login(value: LoginData) = ApiResult.Success(TokenData("token"))
    override suspend fun isAuthenticated() = true
}