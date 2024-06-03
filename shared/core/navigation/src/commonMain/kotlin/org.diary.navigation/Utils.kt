package org.diary.navigation

import androidx.compose.runtime.Composable
import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.Navigator

fun Navigator.singlePush(screen: Screen) {
    if (screen in this.items) return
    push(screen)
}

@Composable
expect inline fun <reified T: ScreenModel> Screen.koinNavigatorScreenModel(navigator: Navigator): T