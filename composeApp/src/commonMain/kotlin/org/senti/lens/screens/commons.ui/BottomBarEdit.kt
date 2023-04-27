package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.Save
import org.senti.lens.generalElements.PrimaryIconButton
import org.senti.lens.generalElements.SecondaryButton

@Composable
fun BottomBarEdit(onSaveClick: () -> Unit, onBackClick: () -> Unit, onClickAnalyze: () -> Unit) {
    Row(
        modifier = Modifier.padding(16.dp).fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        SecondaryButton(modifier = Modifier.weight(1f), onClick = onClickAnalyze) {
            Text("Анализ настроения", style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary))
        }

        PrimaryIconButton(onClick = remember { { onSaveClick(); onBackClick() } }) {
            Icon(FeatherIcons.Save, "Settings", tint = MaterialTheme.colors.onPrimary)
        }
    }
}
