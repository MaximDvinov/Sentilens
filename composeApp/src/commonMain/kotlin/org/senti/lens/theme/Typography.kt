package org.senti.lens.theme

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import dev.icerock.moko.resources.compose.fontFamilyResource
import org.senti.lens.MR


val h1 = TextStyle(
    fontWeight = FontWeight.Bold,
    fontSize = 24.sp,
//    fontFamily = fontFamilyResource(MR.fonts.Nunito.bold),
    color = Color.White
)

val h2 = TextStyle(
    fontWeight = FontWeight.SemiBold,
    fontSize = 20.sp,
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