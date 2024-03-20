package org.senti.lens

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.FadeTransition
import cafe.adriel.voyager.transitions.SlideTransition
import org.senti.lens.screens.auth.login.LoginScreen
import org.senti.lens.screens.home.HomeScreen
import org.senti.lens.screens.list.DiaryListScreen
import org.senti.lens.screens.player.PlayerScreen
import org.senti.lens.theme.background


@Composable
internal fun App(loginState: String?) {
    Surface(
        color = Color.Transparent,
        contentColor = MaterialTheme.colors.onBackground
    ) {
        AnimatedContent(!loginState.isNullOrBlank(), modifier = Modifier.fillMaxSize()) { isLogin ->
            if (isLogin) {
                Navigator(HomeScreen()) {
                    FadeTransition(it)
                }
            } else {
                Navigator(LoginScreen()) {
                    FadeTransition(it)
                }
            }
        }

    }
}

fun Navigator.singlePush(screen: Screen) {
    if (screen in this.items) return
    push(screen)
}