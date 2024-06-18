package org.diary.compose.home.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.unit.dp
import org.diary.composeui.bounceClick
import org.diary.composeui.theme.defaultShape
import org.diary.stats.components.SentimentVariability
import org.diary.utils.TypeDevice
import org.diary.utils.getTypeDevice
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource
import sentilens.shared.composemain.generated.resources.Res
import sentilens.shared.composemain.generated.resources.breath_icon
import sentilens.shared.composemain.generated.resources.music_icon
import sentilens.shared.composemain.generated.resources.recommendation__icon

@OptIn(ExperimentalResourceApi::class)
@Composable
fun Actions(
    onRecommendationClick: (() -> Unit)? = null,
    onMusicClick: (() -> Unit)? = null,
    onBreathClick: (() -> Unit)? = null,
    onStatsClick: (() -> Unit)? = null,
    variability: Int?,
) {

    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        if (onStatsClick != null){
            SentimentVariability(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(defaultShape)
                    .clickable(onClick = onStatsClick)
                    .background(MaterialTheme.colors.secondary)
                    .padding(10.dp),
                variability = variability
            )
        }

        Row(
            modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            onRecommendationClick?.let {
                ActionButton(
                    modifier = Modifier.weight(1f),
                    icon = painterResource(Res.drawable.recommendation__icon),
                    text = "Советы",
                    onClick = it
                )
            }


                onMusicClick?.let {
                    ActionButton(
                        modifier = Modifier.weight(1f),
                        icon = painterResource(Res.drawable.music_icon),
                        text = "Музыка",
                        onClick = it
                    )
                }


            onBreathClick?.let {
                ActionButton(
                    modifier = Modifier.weight(1f),
                    icon = painterResource(Res.drawable.breath_icon),
                    text = "Дыхание",
                    onClick = it
                )
            }
        }
    }
}

@Composable
fun ActionButton(
    modifier: Modifier, icon: Painter, text: String, onClick: () -> Unit,
) {

    Column(
        modifier = modifier.bounceClick().clip(defaultShape).clickable(onClick = onClick)
            .background(MaterialTheme.colors.secondary).padding(vertical = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        Icon(
            painter = icon,
            tint = MaterialTheme.colors.onSecondary,
            contentDescription = null,
            modifier = Modifier.size(30.dp)
        )
        Text(text = text, style = MaterialTheme.typography.caption)
    }
}

@Composable
fun Stats(onStatsClick: () -> Unit) {
    Row(
        modifier = Modifier.bounceClick().fillMaxWidth().height(75.dp).clip(defaultShape)
            .clickable(onClick = onStatsClick).background(MaterialTheme.colors.secondary),
    ) {

    }
}