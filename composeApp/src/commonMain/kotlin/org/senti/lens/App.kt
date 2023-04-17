package org.senti.lens

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.runtime.Composable
import cafe.adriel.voyager.navigator.Navigator
import cafe.adriel.voyager.transitions.SlideTransition
import org.koin.core.context.startKoin
import org.koin.dsl.module
import org.senti.lens.generalElements.WindowSize
import org.senti.lens.screens.repositories.NotesRepositoryImpl
import org.senti.lens.screens.homeNotes.HomeScreen
import org.senti.lens.screens.homeNotes.smallHomeScreen.SmallHomeScreenModel
import org.senti.lens.screens.repositories.TagsRepositoryImpl
import org.senti.lens.screens.useCases.GetNotesAndTagsUseCase
import org.senti.lens.theme.AppTheme


@OptIn(ExperimentalAnimationApi::class)
@Composable
internal fun App(windowSize: WindowSize) = AppTheme {
//    startKoin {
//        modules(appModule)
//    }

    Navigator(HomeScreen(windowSize)) {
        SlideTransition(it)
    }
}