package org.senti.lens.screens.homeNotes.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary
import org.senti.lens.theme.small

@Composable
fun TagsList(modifier: Modifier = Modifier) {
    LazyRow(
        modifier = modifier,
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        contentPadding = PaddingValues(horizontal = 16.dp)
    ) {
        items(10) {
            val (selected, onSelect) = remember { mutableStateOf(false) }
            TagItem(Modifier, selected = selected, text = "Tag $it", onSelect = onSelect)
        }
    }
}

@Composable
fun TagItem(
    modifier: Modifier,
    text: String,
    selected: Boolean,
    onSelect: (Boolean) -> Unit,
    selectedColor: Color = primary,
    defaultColor: Color = secondary
) {
    val color = remember(selected) { getColorBySelect(selected) }

    Box(
        modifier
            .shadow(elevation = 10.dp, shape = defaultShape, spotColor = color)
            .clip(defaultShape)
            .background(color = color)
            .clickable {
                onSelect(!selected)
            }
            .padding(vertical = 8.dp, horizontal = 12.dp)
    ) {
        Text(text = text, style = small)
    }
}

fun getColorBySelect(selected: Boolean): Color {
    return if (selected) primary else secondary
}