package org.senti.lens

import android.app.Application
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.systemBarsPadding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
import io.github.aakira.napier.DebugAntilog
import io.github.aakira.napier.Napier
import org.koin.android.ext.android.inject
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.GlobalContext.startKoin
import org.senti.lens.screens.auth.login.TOKEN
import org.senti.lens.theme.AppTheme

class AndroidApp : Application() {
    companion object {
        lateinit var INSTANCE: AndroidApp
    }

    override fun onCreate() {
        super.onCreate()
        INSTANCE = this

        startKoin {
            androidLogger()
            androidContext(this@AndroidApp)
            modules(platformModule, commonModule)
        }
    }
}

class AppActivity : ComponentActivity() {
    private lateinit var settingsListener: SettingsListener
    private lateinit var tokenListener: SettingsListener

    override fun onCreate(savedInstanceState: Bundle?) {
        setUpEdgeToEdge()
        super.onCreate(savedInstanceState)

        Napier.base(DebugAntilog())

        val settings: ObservableSettings by inject()

        setContent {
            var isDarkTheme by remember {
                mutableStateOf(settings.getBooleanOrNull("theme"))
            }

            var isLogin by remember {
                mutableStateOf(settings.getStringOrNull(TOKEN))
            }

            LaunchedEffect(Unit) {
                settingsListener = settings.addBooleanOrNullListener("theme") {
                    isDarkTheme = it
                }

                tokenListener = settings.addStringOrNullListener(TOKEN) {
                    isLogin = it
                }
            }


            AppTheme(isDarkTheme ?: isSystemInDarkTheme()) {
                Box(
                    modifier = Modifier
                        .background(MaterialTheme.colors.background)
                        .systemBarsPadding()
                        .navigationBarsPadding()
                        .imePadding()
                ) {
                    App(isLogin)
                }
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        if (::settingsListener.isInitialized) {
            settingsListener.deactivate()
        }
    }
}

//@Composable
//private fun Activity.rememberWindowSize(): WindowSize {
//    val configuration = LocalConfiguration.current
//    val windowMetrics = remember(configuration) {
//        WindowMetricsCalculator.getOrCreate()
//            .computeCurrentWindowMetrics(this)
//    }
//    val windowDpSize = with(LocalDensity.current) {
//        windowMetrics.bounds.toComposeRect().size.toDpSize()
//    }
//    return WindowSize.basedOnWidth(windowDpSize.width, windowDpSize.height)
//}

