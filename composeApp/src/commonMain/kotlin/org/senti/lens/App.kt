package org.senti.lens

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.FadeTransition
import org.senti.lens.screens.commons.ui.WindowSize
import org.senti.lens.screens.home.HomeScreen


@OptIn(ExperimentalAnimationApi::class)
@Composable
internal fun App() {
    Surface {
        Navigator(HomeScreen()) {
            FadeTransition(it)
        }
    }
}

fun Navigator.singlePush(screen: Screen) {
    if (screen in this.items) return
    push(screen)
}