package org.diary.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import cafe.adriel.voyager.core.model.ScreenModel
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.getScreenModel
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.Navigator
import org.koin.core.component.getScopeId
import org.koin.mp.KoinPlatform.getKoin

@Composable
actual inline fun <reified T : ScreenModel> Screen.koinNavigatorScreenModel(navigator: Navigator): T {
    return remember {
        getKoin().get<T>()
    }
}