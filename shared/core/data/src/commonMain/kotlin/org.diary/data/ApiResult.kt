package org.diary.data

import org.diary.nerwork.HttpException

sealed class ApiResult<T> {
    data class Success<T>(val data: T) : ApiResult<T>()
    data class ServerError<T>(val message: String, val status: Int, val data: T? = null) :
        ApiResult<T>()

    data class Failure<T>(val message: String, val data: T? = null) : ApiResult<T>()
}

fun <T : Any> Result<T>.toApiResult(): ApiResult<T> {
    return when {
        isSuccess -> this.getOrNull()?.let { ApiResult.Success(it) }
            ?: ApiResult.ServerError("Not found", 404)

        isFailure -> {
            val exception = exceptionOrNull()
            if (exception is HttpException) {
                ApiResult.ServerError(exception.errorMessage, exception.code)
            } else {
                ApiResult.Failure(exception?.message ?: "Unknown error")
            }
        }

        else -> ApiResult.Failure("Unknown error")
    }
}

fun <T, R> ApiResult<T>.map(transform: (T) -> R): ApiResult<R> {
    return when (this) {
        is ApiResult.Success -> ApiResult.Success(transform(data))
        is ApiResult.ServerError -> ApiResult.ServerError(message, status)
        is ApiResult.Failure -> ApiResult.Failure(message)
    }
}