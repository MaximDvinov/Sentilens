package org.diary.diary.list.editDiary.ui

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.toLowerCase
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.Save
import org.diary.composeui.LoadState
import org.diary.diary.Sentiment
import org.diary.composeui.components.PrimaryIconButton
import org.diary.composeui.components.SecondaryButton
import org.diary.diary.ui.getSentimentColor

@Composable
fun BottomBarEdit(
    modifier: Modifier,
    sentiment: Sentiment? = null,
    loadState: LoadState,
    onSaveClick: () -> Unit,
    onClickAnalyze: () -> Unit,
) {
    Row(
        modifier = modifier,
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        Row(modifier = Modifier.weight(1f)) {
            AnimatedVisibility(sentiment?.category?.value != null, modifier = Modifier.weight(1f)) {
                SecondaryButton(
                    onClick = {
                        onClickAnalyze()
                    },
                    enabled = sentiment?.category?.value != null,
                    color = sentiment?.category.getSentimentColor()
                ) {
                    Box(modifier = Modifier) {
                        Text(
                            modifier = Modifier.align(Alignment.Center),
                            text = buildAnnotatedString {
                                withStyle(
                                    style = MaterialTheme.typography.body1.copy(
                                        color = Color.White.copy(
                                            0.4f
                                        )
                                    ).toSpanStyle()
                                ) {
                                    append("настроение: ")
                                }
                                withStyle(
                                    style = MaterialTheme.typography.body1.copy(color = Color.White)
                                        .toSpanStyle()
                                ) {
                                    append(sentiment?.category?.value?.toLowerCase() ?: "")
                                }
                            },
                        )
                    }
                }
            }
        }

        PrimaryIconButton(
            onClick = remember { { onSaveClick() } },
            enabled = loadState != LoadState.Loading
        ) {
            Icon(FeatherIcons.Save, "Settings", tint = MaterialTheme.colors.onPrimary)
        }
    }
}