package org.senti.lens.screens.editNote.ui

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.Save
import org.senti.lens.generalElements.PrimaryIconButton
import org.senti.lens.generalElements.SecondaryButton
import org.senti.lens.theme.defaultShape

@Composable
fun BottomBarEdit(onSaveClick: () -> Unit, onClickAnalyze: () -> Unit) {
    Row(
        modifier = Modifier.padding(16.dp).fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        var checked by remember { mutableStateOf(false) }

        val color by animateColorAsState(
            if (checked) MaterialTheme.colors.primary else MaterialTheme.colors.secondary
        )

        SecondaryButton(
            modifier = Modifier.weight(1f)
                .border(width = 2.dp, color = color, shape = defaultShape),
            onClick = { checked = !checked }) {
            Box(modifier = Modifier.fillMaxWidth()) {
                Checkbox(
                    modifier = Modifier.align(Alignment.CenterStart),
                    checked = checked, onCheckedChange = {
                        checked = it
                    }
                )

                Text(
                    modifier = Modifier.align(Alignment.Center),
                    text = "Анализ настроения",
                    style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary)
                )
            }

        }

        PrimaryIconButton(onClick = remember { { if (checked) onClickAnalyze() else onSaveClick() } }) {
            Icon(FeatherIcons.Save, "Settings", tint = MaterialTheme.colors.onPrimary)
        }
    }
}

@Composable
fun Checkbox(
    modifier: Modifier = Modifier, checked: Boolean, onCheckedChange: (Boolean) -> Unit
) {
    val color by animateColorAsState(
        if (checked) MaterialTheme.colors.primary else MaterialTheme.colors.onSecondary.copy(
            alpha = 0.6f
        )
    )

    Box(
        modifier
            .clip(RoundedCornerShape(6.dp))
            .size(24.dp)
            .border(width = 2.dp, color = color, shape = RoundedCornerShape(6.dp))
            .padding(4.dp)
    ) {
        AnimatedVisibility(checked, enter = fadeIn(), exit = fadeOut()) {
            Icon(Icons.Default.Check, null, tint = color)
        }
    }
}
