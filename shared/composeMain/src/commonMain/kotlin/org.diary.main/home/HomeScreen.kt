package org.diary.main.home

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.getNavigatorScreenModel
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.diary.composeui.isCompact

class HomeScreen : Screen {

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val windowSizeClass = calculateWindowSizeClass()

        val screenModel = navigator.koinNavigatorScreenModel<HomeScreenModel>()
        val state by screenModel.state.collectAsState()

        AnimatedContent(windowSizeClass.isCompact()) {
            if (it) {
                CompactHomeContent(
                    modifier = Modifier.fillMaxSize(),
                    state = state,
                    onIntent = screenModel::processIntent
                )
            } else {
                ExpandHomeContent(
                    modifier = Modifier.fillMaxSize(),
                    state = state,
                    onIntent = screenModel::processIntent
                )
            }
        }
    }
}

