package org.senti.lens.screens.homeNotes.elements

import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Tag
import org.senti.lens.theme.background
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.onSecondary
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary
import org.senti.lens.theme.small
import org.senti.lens.theme.tagColor

@Composable
fun TagItem(
    modifier: Modifier,
    text: String,
    selected: Boolean,
    onSelect: () -> Unit,
    selectedColor: Color = MaterialTheme.colors.primary,
    defaultColor: Color = MaterialTheme.colors.primary.copy(alpha = 0.1f)
) {

    val color by animateColorAsState(if (selected) selectedColor else defaultColor)

    Box(
        modifier
            .shadow(
                elevation = if (color == defaultColor) 0.dp else 10.dp,
                shape = defaultShape,
                spotColor = if (color == defaultColor) MaterialTheme.colors.background else color,
            )
            .clip(defaultShape)
            .background(color = color)
            .clickable {
                onSelect()
            }
            .padding(vertical = 8.dp, horizontal = 12.dp)
    ) {
        Text(
            text = text,
            style = MaterialTheme.typography.overline,
            color = if (selected) MaterialTheme.colors.onPrimary else MaterialTheme.colors.onSecondary
        )
    }
}
