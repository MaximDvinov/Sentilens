package org.diary.navigation

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.Navigator

@Composable
actual inline fun <reified T: ScreenModel> Screen.koinNavigatorScreenModel(navigator: Navigator): T{
    return navigator.koinNavigatorScreenModel<T>()
}