package org.senti.lens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.Navigator
import kotlinx.browser.window
import org.senti.lens.models.notes
import org.senti.lens.screens.editNote.EditNoteScreen
import org.senti.lens.screens.homeNotes.elements.NoteItem