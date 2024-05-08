package org.diary.nerwork

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.Settings
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import org.senti.lens.models.CreatedUserDTO
import org.senti.lens.models.LoginDataDTO
import org.senti.lens.models.RegisterDataDTO
import org.senti.lens.models.TokenDataDTO

class AuthDataSource(private val client: HttpClient, private val settings: ObservableSettings) {
    suspend fun register(value: RegisterDataDTO): Result<CreatedUserDTO> = runCatchingForApi {
        val result = client.post("/user/register") { setBody(value) }.body<CreatedUserDTO>()

        result
    }

    suspend fun login(value: LoginDataDTO): Result<TokenDataDTO> = runCatchingForApi {
        val result = client.post("/user/login") {
            setBody(value)
        }.body<TokenDataDTO>()

        settings.putString(ACCESS, result.accessToken ?: "")
        settings.putString(REFRESH, result.refreshToken ?: "")

        result
    }

    suspend fun updateToken(): Result<TokenDataDTO> = runCatchingForApi {
        client.post("/user/update_token").body()
    }

    suspend fun deleteUser(): Result<String> = runCatchingForApi {
        client.post("/user/delete").body()
    }
}
