package org.diary.diary.list

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import compose.icons.FeatherIcons
import compose.icons.feathericons.X
import org.diary.diary.Sentiment
import org.diary.composeui.components.PrimaryButton
import org.diary.composeui.components.SecondaryIconButton
import org.diary.composeui.icons.Emoji
import org.diary.composeui.theme.SentimentColor
import org.diary.composeui.theme.defaultShape
import org.diary.diary.ui.getSentimentColor

@Composable
fun SentimentDialog(
    modifier: Modifier,
    onCloseClick: () -> Unit,
    onActionClick: () -> Unit,
    sentiment: Sentiment,
) {
    val color = (sentiment.category?.color ?: SentimentColor.UNKNOWN.value)
    Box(
        modifier = modifier
            .widthIn(max = 400.dp)
            .clip(defaultShape)
            .background(MaterialTheme.colors.secondary)
            .background(
                Brush.verticalGradient(
                    0f to color,
                    0.50f to color.copy(0f)
                )
            )
    ) {
        SecondaryIconButton(
            modifier = Modifier.align(Alignment.TopEnd),
            onClick = onCloseClick,
            color = Color.Transparent
        ) {
            Icon(FeatherIcons.X, null, tint = MaterialTheme.colors.onBackground)
        }

        Column(
            Modifier.padding(top = 50.dp, start = 20.dp, end = 14.dp, bottom = 20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            Column(
                modifier = modifier.padding(vertical = 15.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Image(
                    modifier = Modifier.size(100.dp),
                    imageVector = sentiment.category?.icon ?: Emoji.Unknown,
                    contentDescription = ""
                )
                Text(
                    text = sentiment.category?.value.toString(),
                    style = MaterialTheme.typography.h2,
                    textAlign = TextAlign.Center
                )
                Text(
                    text = sentiment.advice ?: "",
                    style = MaterialTheme.typography.body1,
                    textAlign = TextAlign.Center,
                    color = MaterialTheme.colors.onSecondary.copy(0.7f)
                )
            }
        }
    }
}