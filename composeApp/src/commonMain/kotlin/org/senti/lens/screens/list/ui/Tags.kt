package org.senti.lens.screens.list.ui

import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import org.senti.lens.bounceClick

@Composable
fun TagItem(
    modifier: Modifier,
    text: String,
    selected: Boolean,
    onSelect: () -> Unit,
    selectedColor: Color = MaterialTheme.colors.primary,
    defaultColor: Color = MaterialTheme.colors.primaryVariant
) {

    val color by animateColorAsState(if (selected) selectedColor else defaultColor)

    Box(
        modifier
            .bounceClick()
            .shadow(
                elevation = if (color == defaultColor) 0.dp else 10.dp,
                shape = RoundedCornerShape(50),
                spotColor = if (color == defaultColor) MaterialTheme.colors.background else color,
            )
            .clip(RoundedCornerShape(50))
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
