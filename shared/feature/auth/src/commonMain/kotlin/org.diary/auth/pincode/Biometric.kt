package org.diary.auth.pincode

import androidx.compose.runtime.Composable

@Composable
expect fun biometricAvailable(): Boolean

@Composable
expect fun BiometricAuthenticate(onError: (String) -> Unit, onAuthenticated: () -> Unit)
