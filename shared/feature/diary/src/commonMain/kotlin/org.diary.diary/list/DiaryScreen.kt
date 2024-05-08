package org.diary.diary.list

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
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
import org.diary.composeui.isCompact
import org.diary.diary.list.twopane.TwoPane
import org.diary.navigation.InitialDiaryScreenState


class DiaryScreen(private val initialState: InitialDiaryScreenState) : Screen {
    override val key = uniqueScreenKey

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val windowSizeClass = calculateWindowSizeClass()

        val screenModel = navigator.koinNavigatorScreenModel<DiaryScreenModel>()

        val state by screenModel.state.collectAsState()

        LaunchedEffect(initialState) {
            when (initialState) {
                InitialDiaryScreenState.CreateDiary -> screenModel.processIntent(
                    DiaryScreenModel.EditNoteIntent.CreateNote
                )

                InitialDiaryScreenState.Idle -> {}
                is InitialDiaryScreenState.UpdateDiary -> screenModel.processIntent(
                    DiaryScreenModel.EditNoteIntent.SelectNote(initialState.diaryId)
                )

                InitialDiaryScreenState.Search -> {
                    DiaryScreenModel.NoteListIntent.ChangeSearchQuery("")
                }
            }
        }

        PlatformBackHandler(state.editNoteState?.currentNote != null) {
            if (initialState is InitialDiaryScreenState.Idle) {
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
}