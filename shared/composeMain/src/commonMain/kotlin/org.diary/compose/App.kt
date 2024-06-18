package org.diary.compose

import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.FadeTransition
import org.diary.auth.splash.SplashScreen


@Composable
fun App(initNavigator: (Navigator) -> Unit = {}) {
    Surface(
        color = Color.Transparent,
        contentColor = MaterialTheme.colors.onBackground
    ) {
        Navigator(SplashScreen()) {
            initNavigator(it)
            FadeTransition(it)
        }
    }
}