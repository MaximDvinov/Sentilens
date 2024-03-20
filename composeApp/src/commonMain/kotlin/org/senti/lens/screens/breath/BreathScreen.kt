package org.senti.lens.screens.breath

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.List
import org.senti.lens.screens.commons.ui.ActionTopBar
import org.senti.lens.screens.player.ControlButton
import org.senti.lens.screens.player.MusicSlider
import org.senti.lens.screens.player.WaveAnimation

class BreathScreen : Screen {

    @Composable
    override fun Content() {
        BreathContent()
    }
}

@Composable
fun BreathContent() {
    val navigator = LocalNavigator.current

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter
    ) {
        ActionTopBar(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth(),
            title = "Дыхание",
            leftButtonIcon = FeatherIcons.ArrowLeft,
            onClickLeft = {
                navigator?.pop()
            },
            textAlign = TextAlign.Start
        )

        BreathAnimation(
            Modifier
                .fillMaxWidth()
                .align(Alignment.Center)
        )
    }
}