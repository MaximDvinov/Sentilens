package org.senti.lens.screens.home.editNote.ui

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.Save
import org.senti.lens.models.Sentiment
import org.senti.lens.screens.commons.ui.PrimaryIconButton
import org.senti.lens.screens.commons.ui.SecondaryButton

@Composable
fun BottomBarEdit(
    sentiment: Sentiment? = null, onSaveClick: () -> Unit, onClickAnalyze: () -> Unit
) {
    Row(
        modifier = Modifier.padding(16.dp).fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        Row(modifier = Modifier.weight(1f)) {
            AnimatedVisibility(sentiment?.title != null, modifier = Modifier.weight(1f)) {
                SecondaryButton(onClick = {
                    onClickAnalyze()
                }, enabled = sentiment?.title != null) {
                    Box(modifier = Modifier) {
                        Text(
                            modifier = Modifier.align(Alignment.Center),
                            text = "${sentiment?.smile ?: ""} ${sentiment?.title ?: ""}",
                            style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary)
                        )
                    }
                }
            }
        }

        PrimaryIconButton(onClick = remember { { onSaveClick() } }) {
            Icon(FeatherIcons.Save, "Settings", tint = MaterialTheme.colors.onPrimary)
        }
    }
}