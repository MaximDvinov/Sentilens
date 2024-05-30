package org.diary.composeui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListScope
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.material3.windowsizeclass.WindowHeightSizeClass
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

fun WindowSizeClass.isCompact() =
    widthSizeClass == WindowWidthSizeClass.Compact || heightSizeClass == WindowHeightSizeClass.Compact

fun WindowSizeClass.isMedium() =
    widthSizeClass == WindowWidthSizeClass.Compact || heightSizeClass == WindowHeightSizeClass.Compact ||
            widthSizeClass == WindowWidthSizeClass.Medium || heightSizeClass == WindowHeightSizeClass.Medium

@Composable
fun AutoOrientingLayout(
    modifier: Modifier = Modifier,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    isColumn: Boolean,
    content: @Composable () -> Unit,
) {
    if (isColumn) {
        Column(modifier = modifier,
            horizontalAlignment = horizontalAlignment,
            verticalArrangement = verticalArrangement,
            content = {
                content()
            })
    } else {
        Row(modifier = modifier,
            horizontalArrangement = horizontalArrangement,
            verticalAlignment = verticalAlignment,
            content = {
                content()
            })
    }
}

@Composable
fun LazyOrientedLayout(
    modifier: Modifier = Modifier,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    contentPadding: PaddingValues = PaddingValues(0.dp),
    isColumn: Boolean,
    content: LazyListScope.() -> Unit,
) {
    if (isColumn) {
        LazyColumn(
            modifier,
            contentPadding = contentPadding,
            verticalArrangement = verticalArrangement,
            content = content
        )
    } else {
        LazyRow(
            modifier,
            contentPadding = contentPadding,
            horizontalArrangement = horizontalArrangement,
            content = content
        )
    }
}
