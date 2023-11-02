package org.senti.lens.screens.home

import androidx.compose.animation.Crossfade
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Snackbar
import androidx.compose.material.Text
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowHeightSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.zIndex
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.navigator.LocalNavigator
import compose.icons.FeatherIcons
import compose.icons.feathericons.X
import org.koin.core.component.KoinComponent
import org.koin.core.component.get
import org.senti.lens.LoadState
import org.senti.lens.screens.home.onepane.OnePane
import org.senti.lens.screens.home.twopane.TwoPane

class HomeScreen : Screen, KoinComponent {
    override val key = uniqueScreenKey

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.current
        val windowSizeClass = calculateWindowSizeClass()

        val screenModel = rememberScreenModel {
            HomeScreenModel(get(), get())
        }

        val listState by screenModel.state.collectAsState()
        val editState by screenModel.editNoteState.collectAsState()




        Box {
            if (listState.loadState is LoadState.Error) {
                Snackbar(
                    elevation = 100.dp,
                    shape = RoundedCornerShape(16.dp),
                    backgroundColor = MaterialTheme.colors.error.copy(alpha = 0.7f),
                    modifier = Modifier.zIndex(100f).align(Alignment.BottomCenter).padding(16.dp),
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = (listState.loadState as LoadState.Error).message,
                            color = MaterialTheme.colors.onPrimary,
                            style = MaterialTheme.typography.body1,
                            modifier = Modifier
                                .weight(1f)
                                .padding(end = 5.dp)
                        )

                        IconButton(onClick = {
                            screenModel.processIntent(HomeScreenModel.NoteListIntent.CloseErrorMessage)
                        }, modifier = Modifier.padding(0.dp)) {
                            Icon(
                                imageVector = FeatherIcons.X,
                                contentDescription = null,
                                tint = MaterialTheme.colors.onPrimary,
                                modifier = Modifier.padding(7.dp)
                            )
                        }
                    }
                }
            }

            Crossfade(windowSizeClass.widthSizeClass == WindowWidthSizeClass.Compact || windowSizeClass.heightSizeClass == WindowHeightSizeClass.Compact) {
                if (it) {
                    OnePane(listState, editState, screenModel, navigator)
                } else {
                    TwoPane(listState, editState, screenModel, navigator)
                }
            }
        }


    }
}