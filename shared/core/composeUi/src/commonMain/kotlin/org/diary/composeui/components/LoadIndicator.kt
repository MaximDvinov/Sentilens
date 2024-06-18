package org.diary.composeui.components

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.LinearProgressIndicator
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.pullrefresh.PullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp


@OptIn(ExperimentalMaterialApi::class)
@Composable
fun LoadIndicator(
    isLoad: Boolean,
    offset: Dp,
    text: String = "Синхронизация",
    text2: String = "Синхронизировать",
    refreshState: PullRefreshState
) {
    AnimatedContent(isLoad, Modifier.fillMaxWidth()) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.height(offset).fillMaxWidth().padding(2.dp)
        ) {
            AnimatedVisibility(refreshState.progress > 0f || it) {
                Text(
                    textAlign = TextAlign.Center,
                    style = MaterialTheme.typography.caption,
                    text = if (it) text else text2,
                    color = MaterialTheme.colors.onBackground.copy(0.3f),
                )
            }

            Spacer(Modifier.height(3.dp))
            if (it) {
                LinearProgressIndicator(
                    modifier = Modifier.width(60.dp).height(2.dp),
                    color = MaterialTheme.colors.onBackground.copy(alpha = 0.3f),
                    backgroundColor = MaterialTheme.colors.onBackground.copy(alpha = 0.1f),
                    strokeCap = StrokeCap.Round,
                )

            }
        }
    }
}

