package org.senti.web.screens.player

import androidx.compose.animation.AnimatedContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.Navigator
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.List
import compose.icons.feathericons.Pause
import compose.icons.feathericons.Play
import compose.icons.feathericons.SkipBack
import compose.icons.feathericons.SkipForward
import org.diary.composeui.components.ActionTopBar
import org.diary.composeui.components.SecondaryIconButton


class PlayerScreen : Screen {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.current
        PlayerContent(navigator)
    }
}

@Composable
fun PlayerContent(navigator: Navigator?) {
    val (isPlaying, onChangePlaying) = remember { mutableStateOf(false) }

    Column(modifier = Modifier.fillMaxSize(), horizontalAlignment = Alignment.CenterHorizontally) {
        ActionTopBar(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            title = "Плеер",
            leftButtonIcon = if (navigator != null) FeatherIcons.ArrowLeft else null,
            onClickLeft = {
                navigator?.pop()
            },
            rightButtonIcon = FeatherIcons.List
        )
        WaveAnimation(
            Modifier
                .padding(30.dp)
                .fillMaxWidth()
                .aspectRatio(1f),
            isPlaying = isPlaying
        )

        MusicSlider(modifier = Modifier.weight(1f))

        ControlButton(onChangePlaying, isPlaying)
    }
}

@Composable
fun MusicSlider(modifier: Modifier) {
    val color = MaterialTheme.colors.onBackground
    Column(
        modifier,
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(10.dp, Alignment.CenterVertically)
    ) {
        Text("Music Title", style = MaterialTheme.typography.h1)
        Row(
            Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(4.dp, Alignment.CenterHorizontally),
            verticalAlignment = Alignment.CenterVertically
        ) {
            for (i in 0 until 45) {
                Box(
                    Modifier
                        .size(3.dp, (10..40).random().dp)
                        .clip(RoundedCornerShape(50))
                        .background(if (i <= 25) color else color.copy(alpha = 0.4f))
                )
            }
        }
    }
}

@Composable
fun ControlButton(onChangePlaying: (Boolean) -> Unit, isPlaying: Boolean) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 32.dp, horizontal = 32.dp),
        horizontalArrangement = Arrangement.SpaceAround,
        verticalAlignment = Alignment.CenterVertically
    ) {
        SecondaryIconButton(
            onClick = {},
            modifier = Modifier.size(48.dp),
        ) {
            Icon(FeatherIcons.SkipBack, "")
        }

        SecondaryIconButton(
            onClick = {
                onChangePlaying(!isPlaying)
            },
            modifier = Modifier.size(60.dp),
        ) {
            AnimatedContent(isPlaying) {
                if (!it) Icon(FeatherIcons.Play, "") else Icon(FeatherIcons.Pause, "")
            }

        }

        SecondaryIconButton(
            onClick = {},
            modifier = Modifier.size(48.dp),
        ) {
            Icon(FeatherIcons.SkipForward, "")
        }
    }
}
