package org.diary.main

import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.FadeTransition
import org.diary.auth.login.LoginScreen
import org.diary.auth.splash.SplashScreen


@Composable
fun App() {
    Surface(
        color = Color.Transparent,
        contentColor = MaterialTheme.colors.onBackground
    ) {
        Navigator(SplashScreen()){
            FadeTransition(it)
        }
    }
}