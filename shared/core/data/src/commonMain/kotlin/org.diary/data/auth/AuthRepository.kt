package org.diary.data.auth

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.get
import org.diary.data.ApiResult
import org.diary.data.map
import org.diary.data.models.toDBO
import org.diary.data.models.toDTO
import org.diary.data.models.toData
import org.diary.data.toApiResult
import org.diary.database.LocalUserDataSource
import org.diary.nerwork.ACCESS
import org.diary.nerwork.AuthDataSource

interface AuthRepository {
    suspend fun register(value: RegisterData): ApiResult<CreatedUserData>
    suspend fun login(value: LoginData): ApiResult<TokenData>
    suspend fun isAuthenticated(): Boolean
    suspend fun changePassword(oldPassword: String, newPassword: String): ApiResult<Unit>
    suspend fun changeEmail(email: String): ApiResult<CreatedUserData>
    suspend fun changeLogin(login: String): ApiResult<CreatedUserData>
    suspend fun deleteUser(): ApiResult<Unit>
    suspend fun userData(): CreatedUserData
}

class AuthRepositoryImpl(
    private val authDataSource: AuthDataSource,
    private val userDataSource: LocalUserDataSource,
    private val setting: ObservableSettings,
) : AuthRepository {
    override suspend fun register(value: RegisterData) =
        authDataSource.register(value.toDTO()).toApiResult().map { it.toData() }

    override suspend fun login(value: LoginData) =
        authDataSource.login(value.toDTO()).toApiResult().map { it.toData() }

    override suspend fun isAuthenticated() = setting.get<String>(ACCESS)?.isNotEmpty() ?: false
    override suspend fun changePassword(oldPassword: String, newPassword: String): ApiResult<Unit> =
        authDataSource.changePassword(oldPassword, newPassword).toApiResult()

    override suspend fun changeEmail(email: String): ApiResult<CreatedUserData> =
        authDataSource.changeUserData(email = email).toApiResult().map { it.toData() }


    override suspend fun changeLogin(login: String): ApiResult<CreatedUserData> =
        authDataSource.changeUserData(login = login).toApiResult().map { it.toData() }

    override suspend fun deleteUser(): ApiResult<Unit> =
        authDataSource.deleteUser().toApiResult()

    override suspend fun userData(): CreatedUserData {
        val result = authDataSource.userData().toApiResult().map { it.toData() }

        if (result is ApiResult.Success) {
            userDataSource.upsertUserData(result.data.toDBO())
        }

        return userDataSource.getUserData().toData()
    }


}

