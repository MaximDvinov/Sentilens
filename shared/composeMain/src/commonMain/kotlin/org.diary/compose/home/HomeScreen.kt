package org.diary.compose.home

import androidx.compose.animation.AnimatedContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.koin.koinScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.diary.composeui.LoadState
import org.diary.composeui.components.ErrorSnackbar
import org.diary.composeui.isCompact
import org.diary.diary.list.DiaryScreenModel
import org.diary.navigation.koinNavigatorScreenModel

class HomeScreen : Screen {

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val windowSizeClass = calculateWindowSizeClass()

        val screenModel = koinNavigatorScreenModel<HomeScreenModel>(navigator)
        val state by screenModel.state.collectAsState()

        Box {
            if (state is HomeScreenModel.UiState.Error) {
                ErrorSnackbar(error = (state as HomeScreenModel.UiState.Error).error,
                    onDismiss = {
                        screenModel.processIntent(HomeScreenModel.HomeIntent.CloseErrorMessage)
                    })
            }

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
}

