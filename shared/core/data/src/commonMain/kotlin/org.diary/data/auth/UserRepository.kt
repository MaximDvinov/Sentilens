package org.diary.data.auth

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.get
import com.russhwolf.settings.set
import org.diary.data.ApiResult
import org.diary.data.map
import org.diary.data.models.toDBO
import org.diary.data.models.toDTO
import org.diary.data.models.toData
import org.diary.data.toApiResult
import org.diary.database.datasources.LocalNotesDataSource
import org.diary.database.datasources.LocalUserDataSource
import org.diary.nerwork.ACCESS
import org.diary.nerwork.AuthApi
import org.diary.nerwork.REFRESH

interface UserRepository {
    suspend fun register(value: RegisterData): ApiResult<CreatedUserData>
    suspend fun login(value: LoginData): ApiResult<TokenData>
    suspend fun isAuthenticated(): Boolean
    suspend fun changePassword(oldPassword: String, newPassword: String): ApiResult<Unit>
    suspend fun changeEmail(email: String): ApiResult<CreatedUserData>
    suspend fun changeLogin(login: String): ApiResult<CreatedUserData>
    suspend fun deleteUser(): ApiResult<Unit>
    suspend fun userData(): CreatedUserData?
    suspend fun setPinCode(pin: String)
    suspend fun getPinCode(): String?
    suspend fun logout()
}

class UserRepositoryImpl(
    private val authApi: AuthApi,
    private val userDataSource: LocalUserDataSource,
    private val diaryDataSource: LocalNotesDataSource,
    private val setting: ObservableSettings,
) : UserRepository {
    override suspend fun register(value: RegisterData) =
        authApi.register(value.toDTO()).toApiResult().map { it.toData() }

    override suspend fun login(value: LoginData) =
        authApi.login(value.toDTO()).toApiResult().map { it.toData() }

    override suspend fun isAuthenticated() = setting.get<String>(ACCESS)?.isNotEmpty() ?: false
    override suspend fun changePassword(oldPassword: String, newPassword: String): ApiResult<Unit> =
        authApi.changePassword(oldPassword, newPassword).toApiResult()

    override suspend fun changeEmail(email: String): ApiResult<CreatedUserData> =
        authApi.changeUserData(email = email).toApiResult().map { it.toData() }


    override suspend fun changeLogin(login: String): ApiResult<CreatedUserData> =
        authApi.changeUserData(login = login).toApiResult().map { it.toData() }

    override suspend fun deleteUser(): ApiResult<Unit> {
        val result = authApi.deleteUser().toApiResult()

        if (result is ApiResult.Success) {
            clearUserData()
        }

        return result
    }


    override suspend fun userData(): CreatedUserData? {
        val result = authApi.userData().toApiResult().map { it.toData() }

        if (result is ApiResult.Success) {
            userDataSource.upsertUserData(result.data.toDBO())
        }

        return userDataSource.getUserData()?.toData()
    }

    override suspend fun setPinCode(pin: String) {
        setting["PIN"] = pin
    }

    override suspend fun getPinCode(): String? {
        return setting["PIN"]
    }

    override suspend fun logout() {
       clearUserData()
    }

    private suspend fun clearUserData(){
        setting.remove(ACCESS)
        setting.remove(REFRESH)
        setting.remove("PIN")
        userDataSource.deleteUserData()
        diaryDataSource.deleteAll()
    }

}

