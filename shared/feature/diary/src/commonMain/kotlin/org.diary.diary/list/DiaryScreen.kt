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
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
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
import org.diary.navigation.koinNavigatorScreenModel


class DiaryScreen(private val _initialState: InitialDiaryScreenState) : Screen {
    override val key = uniqueScreenKey

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val windowSizeClass = calculateWindowSizeClass()

        val screenModel = koinNavigatorScreenModel<DiaryScreenModel>(navigator)
        val state by screenModel.state.collectAsState()
        var initialState by remember(_initialState) { mutableStateOf(_initialState) }

        LaunchedEffect(_initialState) {
            val tmpInitialState = _initialState
            when (tmpInitialState) {
                InitialDiaryScreenState.CreateDiary -> screenModel.processIntent(
                    DiaryScreenModel.EditNoteIntent.CreateNote
                )

                InitialDiaryScreenState.Idle -> screenModel.processIntent(
                    DiaryScreenModel.EditNoteIntent.SelectNote(null)
                )

                is InitialDiaryScreenState.UpdateDiary -> screenModel.processIntent(
                    DiaryScreenModel.EditNoteIntent.SelectNote(
                        tmpInitialState.diaryId?.let { UUID(it) }
                    )
                )
            }
            initialState = InitialDiaryScreenState.Idle
        }

        PlatformBackHandler(true) {
            when (_initialState) {
                InitialDiaryScreenState.CreateDiary -> {
                    navigator.pop()
                }

                InitialDiaryScreenState.Idle -> {
                    if (state.editNoteState?.currentNote == null) {
                        navigator.pop()
                    } else {
                        screenModel.processIntent(DiaryScreenModel.EditNoteIntent.SelectNote(null))
                    }
                }

                is InitialDiaryScreenState.UpdateDiary -> {
                    navigator.pop()
                }
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
                    OnePane(
                        state = state.listNote,
                        editState = state.editNoteState,
                        onClickBack = {
                            if (_initialState is InitialDiaryScreenState.CreateDiary || _initialState is InitialDiaryScreenState.UpdateDiary) {
                                navigator.pop()
                            } else {
                                screenModel.processIntent(
                                    DiaryScreenModel.EditNoteIntent.SelectNote(null)
                                )
                            }
                        },
                        onIntent = screenModel::processIntent,
                        initialState = initialState
                    )
                } else {
                    TwoPane(
                        state = state.listNote,
                        editState = state.editNoteState,
                        onClickBack = navigator::pop,
                        onIntent = screenModel::processIntent
                    )
                }
            }
        }
    }
}