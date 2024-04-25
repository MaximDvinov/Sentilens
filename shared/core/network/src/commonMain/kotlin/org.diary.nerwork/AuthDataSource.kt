package org.diary.nerwork

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import org.senti.lens.models.CreatedUserDTO
import org.senti.lens.models.LoginDataDTO
import org.senti.lens.models.RegisterDataDTO
import org.senti.lens.models.TokenDataDTO

class AuthDataSource(private val client: HttpClient) {
    suspend fun register(value: RegisterDataDTO): Result<CreatedUserDTO> = runCatchingForApi {
        client.post("/user/register") { setBody(value) }.body()
    }

    suspend fun login(value: LoginDataDTO): Result<TokenDataDTO> = runCatchingForApi {
        client.post("/user/login") { setBody(value) }.body()
    }
}
