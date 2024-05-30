package org.diary.auth.pincode

import androidx.compose.runtime.Composable

@Composable
actual fun biometricAvailable(): Boolean {
    return false
}

@Composable
actual fun BiometricAuthenticate(onError: (String) -> Unit, onAuthenticated: () -> Unit){}
