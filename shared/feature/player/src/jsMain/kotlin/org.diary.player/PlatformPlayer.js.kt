package org.diary.player

import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.ui.Modifier

@Composable
internal actual fun MusicPlayerImpl(
    url: String,
    seek: Float,
    isResumed: Boolean,
    modifier: Modifier,
    progressState: MutableState<Progress>,
    onFinish: (() -> Unit)?
) {
}