package org.senti.lens.screens.list

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
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
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.zIndex
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.koin.getNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.X
import org.senti.lens.LoadState
import org.senti.lens.models.Note
import org.senti.lens.screens.list.onepane.OnePane
import org.senti.lens.screens.list.twopane.TwoPane

class DiaryListScreen(private val diary: Note? = null) : Screen {
    override val key = uniqueScreenKey

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val windowSizeClass = calculateWindowSizeClass()

        val screenModel = navigator.getNavigatorScreenModel<DiaryScreenModel>()

        LaunchedEffect(diary) {
            if (diary != null) {
                screenModel.processIntent(DiaryScreenModel.EditNoteIntent.SelectNote(diary))
            }
        }

        val state by screenModel.state.collectAsState()

        Box {
            if (state.listNote.loadState is LoadState.Error) {
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
                            text = (state.listNote.loadState as LoadState.Error).message,
                            color = MaterialTheme.colors.onPrimary,
                            style = MaterialTheme.typography.body1,
                            modifier = Modifier
                                .weight(1f)
                                .padding(end = 5.dp)
                        )

                        IconButton(onClick = {
                            screenModel.processIntent(DiaryScreenModel.NoteListIntent.CloseErrorMessage)
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

            Crossfade(
                windowSizeClass.isCompact(),
                animationSpec = tween(durationMillis = 150)
            ) {
                if (it) {
                    OnePane(state.listNote, state.editNoteState, screenModel, navigator)
                } else {
                    TwoPane(state.listNote, state.editNoteState, screenModel, navigator)
                }
            }
        }
    }

    private fun WindowSizeClass.isCompact() =
        widthSizeClass == WindowWidthSizeClass.Compact || heightSizeClass == WindowHeightSizeClass.Compact
}