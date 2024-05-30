package org.diary.auth.splash

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.registry.rememberScreen
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import io.github.alexzhirkevich.compottie.LottieAnimation
import io.github.alexzhirkevich.compottie.LottieCompositionSpec
import io.github.alexzhirkevich.compottie.rememberLottieComposition
import org.diary.auth.loadAnimation
import org.diary.navigation.DiaryScreenProvider
import org.koin.core.component.KoinComponent
import org.koin.core.component.get

class SplashScreen : Screen, KoinComponent {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val screenModel = navigator.koinNavigatorScreenModel<SplashScreenModel>()
        val event by screenModel.event.collectAsState(null)
        val loginScreen = rememberScreen(DiaryScreenProvider.LoginScreen())
        val homeScreen = rememberScreen(DiaryScreenProvider.HomeScreen)

        LaunchedEffect(event) {
            event?.let {
                when (it) {
                    is SplashEvent.Authenticated -> navigator.replace(homeScreen)
                    is SplashEvent.Unauthenticated -> navigator.replace(loginScreen)
                }
            }
        }

        val composition by rememberLottieComposition(
            LottieCompositionSpec.JsonString(loadAnimation)
        )

        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            LottieAnimation(
                modifier = Modifier
                    .padding(30.dp)
                    .sizeIn(maxWidth = 300.dp, maxHeight = 300.dp),
                composition = composition,
                iterations = Int.MAX_VALUE
            )
        }
    }
}