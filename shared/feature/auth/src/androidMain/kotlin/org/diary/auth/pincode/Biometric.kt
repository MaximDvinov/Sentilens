package org.diary.auth.pincode


import android.os.Build
import androidx.annotation.RequiresApi
import androidx.biometric.BiometricManager
import androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG
import androidx.biometric.BiometricManager.Authenticators.DEVICE_CREDENTIAL
import androidx.biometric.BiometricPrompt
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity
import java.lang.Error

@Composable
actual fun biometricAvailable(): Boolean {
    val context = LocalContext.current
    val biometricManager = remember { BiometricManager.from(context) }
    val isBiometricAvailable = remember {
        biometricManager.canAuthenticate(BIOMETRIC_STRONG or DEVICE_CREDENTIAL)
    }

    return isBiometricAvailable == BiometricManager.BIOMETRIC_SUCCESS
}

@Composable
actual fun BiometricAuthenticate(onError: (String) -> Unit, onAuthenticated: () -> Unit) {
    val context = LocalContext.current

    val executor = remember { ContextCompat.getMainExecutor(context) }
    LaunchedEffect(Unit) {
        BiometricPrompt(
            context as FragmentActivity,
            executor,
            object : BiometricPrompt.AuthenticationCallback() {
                override fun onAuthenticationError(errorCode: Int, errString: CharSequence) {
                    super.onAuthenticationError(errorCode, errString)
                    onError(errString.toString())

                }

                @RequiresApi(Build.VERSION_CODES.R)
                override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {
                    super.onAuthenticationSucceeded(result)
                    onAuthenticated()

                }

                override fun onAuthenticationFailed() {
                    super.onAuthenticationFailed()

                    onError("Ошибка авторизации")

                }
            }
        ).apply {
            authenticate(
                BiometricPrompt.PromptInfo.Builder()
                    .setTitle("Войти в приложение")
                    .setAllowedAuthenticators(BIOMETRIC_STRONG or DEVICE_CREDENTIAL)
                    .build()
            )
        }
    }


}