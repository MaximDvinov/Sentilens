package org.diary.nerwork

import com.russhwolf.settings.ObservableSettings
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import org.senti.web.models.CreatedUserDTO
import org.senti.web.models.LoginDataDTO
import org.senti.web.models.RegisterDataDTO
import org.senti.web.models.TokenDataDTO

class AuthDataSource(private val client: HttpClient, private val settings: ObservableSettings) {
    suspend fun register(value: RegisterDataDTO): Result<CreatedUserDTO> = runCatchingForApi {
        val result = client
            .post("/api/user/register") { setBody(value) }
            .body<CreatedUserDTO>()

        result
    }

    suspend fun login(value: LoginDataDTO): Result<TokenDataDTO> = runCatchingForApi {
        val result = client.post("/api/user/login") {
            setBody(value)
        }.body<TokenDataDTO>()

        settings.putString(ACCESS, result.accessToken ?: "")
        settings.putString(REFRESH, result.refreshToken ?: "")

        result
    }

    suspend fun updateToken(): Result<TokenDataDTO> = runCatchingForApi {
        client.post("/api/user/update_token").body()
    }

    suspend fun deleteUser(): Result<Unit> = runCatchingForApi {
        client.post("/api/user/delete").body()
    }

    suspend fun changePassword(
        oldPassword: String,
        newPassword: String,
    ): Result<Unit> = runCatchingForApi {
        val body = mutableMapOf<String, String>()
        body["old_password"] = oldPassword
        body["new_password"] = newPassword
        client.put("/api/user/password") {
            setBody(body)
        }.body()
    }

    suspend fun changeUserData(
        login: String? = null,
        email: String? = null,
    ): Result<CreatedUserDTO> = runCatchingForApi {
        val body = mutableMapOf<String, String>()
        login?.let { body["username"] = it }
        email?.let { body["email"] = it }

        client.put("/api/user/profile") {
            setBody(body)
        }.body()
    }

    suspend fun userData(): Result<CreatedUserDTO> = runCatchingForApi {
        client.get("/api/user/profile").body()
    }

}
