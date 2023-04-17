package org.senti.lens.screens.homeNotes.expandedHomeScreen

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Note
import org.senti.lens.screens.editNote.EditNoteContent
import org.senti.lens.screens.homeNotes.elements.NotesList
import org.senti.lens.screens.homeNotes.elements.TagsList
import org.senti.lens.screens.homeNotes.elements.TopBar

@Composable
fun ExpandedHomeContents() {
    val (currentNote, onChangeNote) = remember {
        mutableStateOf<Note?>(null)
    }

    Column {
        TopBar(
            modifier = Modifier.padding(
                start = 16.dp,
                end = 16.dp,
                top = 16.dp,
                bottom = 8.dp
            ),
            searchQuery = "searchQuery",
            changeSearchQuery = {}
        )

        Row(modifier = Modifier.fillMaxSize()) {
            Column(
                modifier = Modifier.weight(1f)
            ) {
                TagsList(
                    modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
                    tags = listOf(),
                ) {

                }
                NotesList(notes = listOf(), onClick = {})
            }


            if (currentNote != null) {
                EditNoteContent(modifier = Modifier.weight(2f), currentNote) {
                    onChangeNote(null)
                }
            }
        }
    }
}