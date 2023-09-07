package org.senti.lens

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.FadeTransition
import org.senti.lens.screens.auth.login.LoginScreen
import org.senti.lens.screens.home.HomeScreen


@OptIn(ExperimentalAnimationApi::class)
@Composable
internal fun App(loginState: String?) {
    Surface {
        AnimatedContent(!loginState.isNullOrBlank()) { isLogin ->
            if (isLogin) {
                Navigator(HomeScreen())
            } else {
                Navigator(LoginScreen())
            }
        }

    }
}

fun Navigator.singlePush(screen: Screen) {
    if (screen in this.items) return
    push(screen)
}