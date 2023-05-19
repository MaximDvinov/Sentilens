package org.senti.lens

import io.ktor.http.HttpStatusCode

sealed class LoadState {
    object Idle : LoadState()
    object Loading : LoadState()
    object Success : LoadState()
    data class Error(val message: String) : LoadState()
}

sealed class ApiResult<T : Any> {
    data class Success<T : Any>(val data: T) : ApiResult<T>()
    data class ServerError<T : Any>(val message: String, val status: HttpStatusCode) :
        ApiResult<T>()

    data class Failure<T : Any>(val message: String) : ApiResult<T>()
}

