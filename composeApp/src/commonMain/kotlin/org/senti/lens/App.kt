package org.senti.lens

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.FadeTransition
import cafe.adriel.voyager.transitions.ScaleTransition
import cafe.adriel.voyager.transitions.SlideTransition
import org.senti.lens.generalElements.WindowSize
import org.senti.lens.screens.auth.AuthScreen.AuthScreen
import org.senti.lens.screens.homeNotes.HomeScreen
import org.senti.lens.theme.AppTheme


@OptIn(ExperimentalAnimationApi::class)
@Composable
internal fun App(windowSize: WindowSize) {
    Surface {
        Navigator(HomeScreen(windowSize)) {
            FadeTransition(it)
        }
    }
}