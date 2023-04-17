package org.senti.lens.screens.homeNotes.smallHomeScreen

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.senti.lens.screens.editNote.EditNoteScreen
import org.senti.lens.screens.useCases.GetNotesAndTagsUseCase

class SmallHomeScreen : Screen {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow

        val screenModel = rememberScreenModel {
            SmallHomeScreenModel(GetNotesAndTagsUseCase.instance)
        }

        val state by screenModel.state.collectAsState()

        SmallHomeContent(
            modifier = Modifier.fillMaxSize(),
            state = state,
            onClickTag = {
                screenModel.processIntent(SmallHomeScreenModel.Intent.SelectTag(it))
            },
            onClickNote = {
                navigator.push(EditNoteScreen(it))
            },
            changeSearchQuery = {
                screenModel.processIntent(SmallHomeScreenModel.Intent.ChangeSearchQuery(it))
            }
        )
    }
}