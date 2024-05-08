package org.diary.diary.list

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import compose.icons.FeatherIcons
import compose.icons.feathericons.X
import org.diary.diary.Sentiment
import org.diary.composeui.components.PrimaryButton
import org.diary.composeui.components.SecondaryIconButton
import org.diary.composeui.theme.defaultShape

@Composable
fun SentimentDialog(
    modifier: Modifier,
    onCloseClick: () -> Unit,
    onActionClick: () -> Unit,
    sentiment: Sentiment,
) {

    Box(
        modifier = modifier
            .clip(defaultShape)
            .background(MaterialTheme.colors.secondary)
    ) {
        SecondaryIconButton(
            modifier = Modifier.align(Alignment.TopEnd),
            onClick = onCloseClick,
            color = Color.Transparent
        ) {
            Icon(FeatherIcons.X, null, tint = MaterialTheme.colors.onBackground)
        }


        Column(
            Modifier.padding(start = 14.dp, end = 14.dp, bottom = 20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            Column(
                modifier = modifier.padding(vertical = 15.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Text(text = sentiment.category.toString(), fontSize = 80.sp)
                Text(
                    text = sentiment.value.toString() ?: "",
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