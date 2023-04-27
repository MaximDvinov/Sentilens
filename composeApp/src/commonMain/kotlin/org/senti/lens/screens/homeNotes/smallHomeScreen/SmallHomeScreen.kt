package org.senti.lens.screens.homeNotes.smallHomeScreen

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import org.senti.lens.models.tags
import org.senti.lens.screens.editNote.EditNoteScreen
import org.senti.lens.screens.homeNotes.HomeNotesUseCase

class SmallHomeScreen : Screen {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.current

        val screenModel = rememberScreenModel {
            SmallHomeScreenModel(HomeNotesUseCase.instance)
        }

        val state by screenModel.state.collectAsState()

        SmallHomeContent(
            modifier = Modifier.fillMaxSize(),
            state = state,
            onClickTag = {
                screenModel.processIntent(SmallHomeScreenModel.Intent.SelectTag(it))
            },
            onClickNote = {
                navigator?.push(EditNoteScreen(it, tags))
            },
            changeSearchQuery = {
                screenModel.processIntent(SmallHomeScreenModel.Intent.ChangeSearchQuery(it))
            },
            onRefresh = { screenModel.processIntent(SmallHomeScreenModel.Intent.LoadDataIntent) }
        )
    }
}