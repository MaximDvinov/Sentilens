package org.diary.composeui

import androidx.compose.runtime.Stable

@Stable
sealed class LoadState {
    @Stable
    data object Idle : LoadState()
    @Stable
    data object Loading : LoadState()
    @Stable
    data object Success : LoadState()
    @Stable
    data class Error(val message: String) : LoadState()
}


