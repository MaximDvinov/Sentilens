package org.diary.navigation

import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.Navigator

fun Navigator.singlePush(screen: Screen) {
    if (screen in this.items) return
    push(screen)
}