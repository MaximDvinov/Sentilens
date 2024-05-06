package org.diary.data

import org.diary.data.ApiResult
import org.diary.data.AuthRepository
import org.diary.data.models.CreatedUserData
import org.diary.data.models.LoginData
import org.diary.data.models.RegisterData
import org.diary.data.models.TokenData

class MockAuthRepository : AuthRepository {
    override suspend fun register(value: RegisterData) = ApiResult.Success(CreatedUserData("", "", 0, false, "TestUser"))

    override suspend fun login(value: LoginData) = ApiResult.Success(TokenData("token"))
    override suspend fun isAuthenticated() = true
}