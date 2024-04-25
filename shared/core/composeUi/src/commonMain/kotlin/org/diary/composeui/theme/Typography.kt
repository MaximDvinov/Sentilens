package org.diary.composeui.theme

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

val h1 = TextStyle(
    fontWeight = FontWeight.Bold,
    fontSize = 24.sp,
    color = Color.White
)

val h2 = TextStyle(
    fontWeight = FontWeight.SemiBold,
    fontSize = 20.sp,
    color = Color.White
)

val title = TextStyle(
    fontSize = 16.sp,
    color = Color.White
)

val body = TextStyle(
    fontSize = 16.sp,
    color = Color.White
)

val small = TextStyle(
    fontSize = 14.sp,
    color = Color.White
)

val muted = small.copy(Color.White.copy(0.6f))