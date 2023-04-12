package org.senti.lens.screens.homeNotes.elements

import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun HomeNotesContents(modifier: Modifier = Modifier) {
    Column(
        modifier = modifier.fillMaxSize()
    ) {
        CollapsingLayout(
            collapsingTop = {
                Column {
                    TopBar(modifier = Modifier.padding(16.dp))
                    TagsList(
                        modifier = Modifier.fillMaxWidth(),
                    )
                }

            },
            bodyContent = { NotesList() })
    }
}


