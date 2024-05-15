package org.diary.nerwork

import io.ktor.client.call.body
import io.ktor.client.plugins.ResponseException
import io.ktor.client.statement.HttpResponse
import io.ktor.http.HttpStatusCode
import kotlinx.serialization.json.JsonObject

inline fun <R> runCatchingForApi(block: () -> R): Result<R> {
    return try {
        Result.success(block())
    } catch (c: ResponseException) {
        Result.failure(HttpException(c.response.status.value, c.response.status.description))
    } catch (e: Throwable) {
        Result.failure(e)
    }
}

class HttpException(val code: Int, val errorMessage: String) : Exception(errorMessage)