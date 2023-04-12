package org.senti.lens

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.SlideTransition
import org.senti.lens.generalElements.WindowSize
import org.senti.lens.screens.homeNotes.HomeNotesScreen
import org.senti.lens.theme.AppTheme


@OptIn(ExperimentalAnimationApi::class)
@Composable
internal fun App(windowSize: WindowSize) = AppTheme {
    Navigator(HomeNotesScreen(windowSize)) {
        SlideTransition(it)
    }
}