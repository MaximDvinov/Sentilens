package org.senti.lens.screens.homeNotes.smallHomeScreen

import androidx.compose.foundation.layout.*
import androidx.compose.material.Icon
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.senti.lens.generalElements.PrimaryIconButton
import org.senti.lens.generalElements.fadingEdge
import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.screens.editNote.EditNoteScreen
import org.senti.lens.screens.homeNotes.elements.NotesList
import org.senti.lens.screens.homeNotes.elements.TagsList
import org.senti.lens.screens.homeNotes.elements.TopBar
import org.senti.lens.theme.background

@Composable
fun SmallHomeContent(
    modifier: Modifier = Modifier,
    state: SmallHomeScreenModel.UiState,
    onClickTag: (Tag) -> Unit,
    onClickNote: (Note) -> Unit,
    changeSearchQuery: (String) -> Unit
) {
    val navigator = LocalNavigator.currentOrThrow

    Box {
        Column(
            modifier = modifier.fillMaxSize()
        ) {
            TopBar(
                modifier = Modifier.padding(
                    start = 16.dp,
                    end = 16.dp,
                    top = 16.dp,
                    bottom = 8.dp
                ),
                searchQuery = state.searchQuery,
                changeSearchQuery = changeSearchQuery
            )
            if (!state.tags.isNullOrEmpty()) {
                TagsList(
                    modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp).fadingEdge(
                        startingColor = background,
                        length = 60f,
                        horizontal = true
                    ),
                    tags = state.tags,
                    onClickTag = onClickTag
                )
            }

            if (!state.filteredNotes.isNullOrEmpty()) {
                NotesList(onClick = onClickNote, modifier = Modifier, notes = state.filteredNotes)
            }
        }

        PrimaryIconButton(
            modifier = Modifier.padding(8.dp).align(Alignment.BottomEnd),
            onClick = { navigator.push(EditNoteScreen()) }) {
            Icon(Icons.Default.Add, "")
        }
    }

}


