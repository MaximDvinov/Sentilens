package org.senti.lens.screens.home

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.Crossfade
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.navigator.LocalNavigator
import org.senti.lens.screens.commons.ui.WindowSize
import org.senti.lens.screens.commons.ui.WindowSize.Companion.basedOnWidth
import org.senti.lens.screens.home.onepane.OnePane
import org.senti.lens.screens.home.twopane.TwoPane

class HomeScreen() : Screen {
    override val key = uniqueScreenKey

    @OptIn(ExperimentalAnimationApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.current

        val screenModel = rememberScreenModel {
            HomeScreenModel(HomeNotesUseCase.instance)
        }

        val state by screenModel.state.collectAsState()

        BoxWithConstraints {
            Crossfade(basedOnWidth(maxWidth, maxHeight) == WindowSize.COMPACT){
                if (it) {
                    OnePane(state, screenModel, navigator)
                } else {
                    TwoPane(state, screenModel, navigator)
                }
            }

        }
    }


}