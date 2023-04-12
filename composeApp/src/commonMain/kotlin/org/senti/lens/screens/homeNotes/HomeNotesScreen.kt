package org.senti.lens.screens.homeNotes

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import org.senti.lens.generalElements.WindowSize
import org.senti.lens.screens.homeNotes.elements.HomeNotesContents

class HomeNotesScreen(private val windowSize: WindowSize) : Screen {

    @Composable
    override fun Content() {
        val screenModel = rememberScreenModel {
            HomeNotesScreenModel()
        }

        HomeNotesContents()
    }
}