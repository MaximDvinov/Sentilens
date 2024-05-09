package org.diary.composeui.theme

import androidx.compose.ui.graphics.Color

val primary = Color(0xFF9AB168)
val onPrimary = Color(0xffffffff)

val secondary = Color(0xFF3A281D)
val onSecondary = Color(0xffffffff)

val error = Color(0xFF93000a)
val onError = Color(0xFFffdad6)

val background = Color(0xFF1E1710)
val onBackground = Color(0xffffffff)

val surface = Color(0xFF1E1710)
val onSurface = Color(0xffffffff)


val lightPrimary = Color(0xFF9AB168)
val lightOnPrimary = Color(0xffffffff)

val lightSecondary = Color(0xFFF7F4F2)
val lightOnSecondary = Color(0xff000000)

val lightError = Color(0xFFFFB4AB)
val lightOnError = Color(0xFF690005)

val lightBackground = Color(0xFFFFFFFF)
val lightOnBackground = Color(0xff000000)

val lightSurface = Color(0xFFFFFFFF)
val lightOnSurface = Color(0xff000000)

val lightTagColor = Color(0xFFF7F4F2)
val tagColor = Color(0xFF3A281D)

enum class SentimentColor(val value: Color) {
    TERRIBLE(Color(0xFFA28FFF)),
    BAD(Color(0xFFFF824D)),
    NEUTRAL(Color(0xFF916247)),
    GOOD(Color(0xFFFFCF5C)),
    AWESOME(Color(0xFF9AB168)),
    UNKNOWN(Color(0xFF8F8F8F))
}