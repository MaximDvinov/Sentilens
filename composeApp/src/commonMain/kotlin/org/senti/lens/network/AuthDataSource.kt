package org.senti.lens.network

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import org.senti.lens.ApiResult
import org.senti.lens.models.CreatedUser
import org.senti.lens.models.LoginData
import org.senti.lens.models.RegisterData
import org.senti.lens.models.TokenData
import java.net.UnknownHostException

class AuthDataSource(private val client: HttpClient) {
    suspend fun register(value: RegisterData): ApiResult<CreatedUser> {
        return try {
            val result = client.post("/user/register") { setBody(value) }
            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }  catch (e: UnknownHostException) {
            ApiResult.Failure("Нет доступа к интернету")
        }catch (e: Exception) {
            ApiResult.Failure("${e.message}")
        }

    }

    suspend fun login(value: LoginData): ApiResult<TokenData> {
        return try {
            val result = client.post("/user/login") {
                setBody(value)
            }
            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }  catch (e: UnknownHostException) {
            ApiResult.Failure("Нет доступа к интернету")
        }catch (e: Exception) {
            ApiResult.Failure("${e.message}")
        }

    }

}