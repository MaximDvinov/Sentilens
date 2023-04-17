package org.senti.lens.screens.homeNotes

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.runtime.Composable
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.SlideTransition
import org.senti.lens.generalElements.WindowSize
import org.senti.lens.screens.homeNotes.expandedHomeScreen.ExpandedHomeScreen
import org.senti.lens.screens.homeNotes.smallHomeScreen.SmallHomeScreen

class HomeScreen(private val windowSize: WindowSize) : Screen {
    @OptIn(ExperimentalAnimationApi::class)
    @Composable
    override fun Content() {
        if (windowSize != WindowSize.COMPACT) {
            Navigator(ExpandedHomeScreen()) {
                SlideTransition(it)
            }
        } else {
            Navigator(SmallHomeScreen()) {
                SlideTransition(it)
            }
        }
    }
}