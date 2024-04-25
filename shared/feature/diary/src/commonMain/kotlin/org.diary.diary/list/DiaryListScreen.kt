package org.diary.diary.list

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowHeightSizeClass
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import kotlinx.uuid.UUID
import org.diary.composeui.LoadState
import org.diary.composeui.PlatformBackHandler
import org.diary.diary.list.onepane.OnePane
import org.diary.composeui.components.ErrorSnackbar
import org.diary.diary.list.twopane.TwoPane
import org.koin.core.parameter.parametersOf

class DiaryListScreen(private val diaryId: UUID? = null) : Screen {
    override val key = uniqueScreenKey

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val windowSizeClass = calculateWindowSizeClass()

        val screenModel = navigator.koinNavigatorScreenModel<DiaryScreenModel> {
            parametersOf(diaryId)
        }

        val state by screenModel.state.collectAsState()

        PlatformBackHandler(state.editNoteState?.currentNote != null) {
            if (diaryId != null) {
                navigator.pop()
            } else {
                screenModel.processIntent(
                    DiaryScreenModel.EditNoteIntent.SelectNote(null)
                )
            }
        }

        Box {
            if (state.listNote.loadState is LoadState.Error) {
                ErrorSnackbar(error = (state.listNote.loadState as? LoadState.Error)?.message ?: "",
                    onDismiss = {
                        screenModel.processIntent(DiaryScreenModel.NoteListIntent.CloseErrorMessage)
                    })
            }

            Crossfade(
                windowSizeClass.isCompact(), animationSpec = tween(durationMillis = 150)
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