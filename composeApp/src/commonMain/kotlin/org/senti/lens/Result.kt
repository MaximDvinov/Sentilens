package org.senti.lens

sealed class LoadState {
    object Idle : LoadState()
    object Loading : LoadState()
    object Success : LoadState()
    data class Error(val message: String) : LoadState()
}

sealed class ApiResult<T : Any> {
    data class Failure<T : Any>(val message: String) : ApiResult<T>()
    data class Success<T : Any>(val data: T) : ApiResult<T>()
}

