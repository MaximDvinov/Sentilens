package org.diary.nerwork

import io.ktor.client.plugins.ResponseException

public suspend inline fun <R> runCatchingForApi(block: () -> R): Result<R> {
    return try {
        Result.success(block())
    } catch (c: ResponseException) {
        Result.failure(HttpException(c.response.status.value, c.message ?: "Unknown error"))
    } catch (e: Throwable) {
        Result.failure(e)
    }
}

class HttpException(val code: Int, val errorMessage: String) : Exception(errorMessage)