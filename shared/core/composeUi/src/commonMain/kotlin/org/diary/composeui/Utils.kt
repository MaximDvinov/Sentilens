package org.diary.composeui

import androidx.compose.material3.windowsizeclass.WindowHeightSizeClass
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass

fun WindowSizeClass.isCompact() =
    widthSizeClass == WindowWidthSizeClass.Compact || heightSizeClass == WindowHeightSizeClass.Compact