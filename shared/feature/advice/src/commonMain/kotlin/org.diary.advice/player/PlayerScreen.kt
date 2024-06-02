package org.diary.advice.player

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Slider
import androidx.compose.material.SliderDefaults
import androidx.compose.material.Text
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import androidx.compose.ui.zIndex
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.List
import compose.icons.feathericons.Music
import compose.icons.feathericons.Pause
import compose.icons.feathericons.Play
import compose.icons.feathericons.Radio
import compose.icons.feathericons.SkipBack
import compose.icons.feathericons.SkipForward
import kotlinx.collections.immutable.ImmutableList
import org.diary.advice.player.components.WaveAnimation
import org.diary.advice.player.models.Music
import org.diary.advice.player.models.MusicCategory
import org.diary.composeui.NoRippleInteractionSource
import org.diary.composeui.bounceClick
import org.diary.composeui.components.ActionTopBar
import org.diary.composeui.components.SecondaryIconButton
import org.diary.composeui.isCompact
import org.diary.composeui.theme.defaultShape
import org.diary.player.MusicPlayer
import org.diary.player.MusicPlayerState
import org.diary.player.Progress
import org.diary.player.rememberMusicPlayerState
import kotlin.math.max


class PlayerScreen : Screen {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val playerModel = navigator.koinNavigatorScreenModel<PlayerScreenModel>()
        val state by playerModel.state.collectAsState()

        PlayerContent(modifier = Modifier.fillMaxSize(),
            onBack = { navigator.pop() },
            state = state,
            onChangePlaying = {
                playerModel.handle(PlayerIntent.ChangePlay(it))
            },
            onNext = {
                playerModel.handle(PlayerIntent.Next)
            },
            onPrevious = {
                playerModel.handle(PlayerIntent.Previous)
            },
            onTrackSelect = {
                playerModel.handle(PlayerIntent.ChangeTrack(it))
            })
    }
}

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
fun PlayerContent(
    modifier: Modifier = Modifier,
    onBack: () -> Unit,
    state: PlayerState,
    onNext: () -> Unit,
    onPrevious: () -> Unit,
    onChangePlaying: (Boolean) -> Unit,
    onTrackSelect: (Music) -> Unit
) {
    val musicPlayerState = rememberMusicPlayerState(
        seek = state.progress, isResumed = state.isPlaying
    )
    val windowSizeClass = calculateWindowSizeClass()

    val seekState by musicPlayerState.progress
    LaunchedEffect(state) {
        musicPlayerState.isResumed = state.isPlaying
    }

    state.selectedMusic?.url?.let {
        MusicPlayer(url = it, state = musicPlayerState, onFinish = {
            onChangePlaying(false)
        })
    }


    var isShowPlaylist by remember(state.selectedMusic) { mutableStateOf(state.selectedMusic == null) }

    Column(modifier = modifier, horizontalAlignment = Alignment.CenterHorizontally) {
        ActionTopBar(
            modifier = Modifier.fillMaxWidth().padding(start = 16.dp, end = 16.dp, top = 16.dp),
            title = "Плеер",
            leftButtonIcon = FeatherIcons.ArrowLeft,
            onClickLeft = onBack,
            rightButtonIcon = if (windowSizeClass.isCompact()) FeatherIcons.List else null,
            onClickRight = {
                isShowPlaylist = !isShowPlaylist
            }
        )


        if (windowSizeClass.widthSizeClass == WindowWidthSizeClass.Compact) {
            CompactPlayer(
                state,
                isShowPlaylist,
                Modifier.fillMaxSize(),
                onTrackSelect,
                seekState,
                musicPlayerState,
                onChangePlaying,
                onNext,
                onPrevious
            )
        } else {
            ExpandPlayer(
                state,
                Modifier.fillMaxSize(),
                onTrackSelect,
                seekState,
                musicPlayerState,
                onChangePlaying,
                onNext,
                onPrevious
            )
        }
    }

}

@Composable
private fun ColumnScope.CompactPlayer(
    state: PlayerState,
    isShowPlaylist: Boolean,
    modifier: Modifier,
    onTrackSelect: (Music) -> Unit,
    seekState: Progress,
    musicPlayerState: MusicPlayerState,
    onChangePlaying: (Boolean) -> Unit,
    onNext: () -> Unit,
    onPrevious: () -> Unit
) {
    if (state.selectedMusic == null || isShowPlaylist) {
        Playlist(
            modifier = modifier,
            list = state.playlist,
            onClick = onTrackSelect,
            selectedMusic = state.selectedMusic
        )
    } else {
        WaveAnimation(
            Modifier.padding(30.dp).weight(1f).widthIn(max = 400.dp).aspectRatio(1f),
            isPlaying = seekState.isPlaying
        )

        MusicSlider(
            modifier = Modifier,
            progress = seekState.fraction,
            maxValue = seekState.timeMillis,
            onSliderSeek = {
                musicPlayerState.seek = it
            },
            title = state.selectedMusic.title,
            type = state.selectedMusic.category
        )

        ControlButton(
            onChangePlaying = onChangePlaying,
            onNext = onNext,
            onPrevious = onPrevious,
            isPlaying = state.isPlaying,
        )
    }
}

@Composable
private fun ColumnScope.ExpandPlayer(
    state: PlayerState,
    modifier: Modifier,
    onTrackSelect: (Music) -> Unit,
    seekState: Progress,
    musicPlayerState: MusicPlayerState,
    onChangePlaying: (Boolean) -> Unit,
    onNext: () -> Unit,
    onPrevious: () -> Unit
) {
    Row(modifier = modifier.fillMaxSize()) {
        Column(modifier = Modifier.weight(1f), horizontalAlignment = Alignment.CenterHorizontally) {
            if (state.selectedMusic != null) {
                WaveAnimation(
                    Modifier.zIndex(-10f)
                        .padding(start = 30.dp, top = 16.dp, end = 30.dp, bottom = 40.dp).weight(1f)
                        .heightIn(max = 400.dp).fillMaxWidth(),
                    isPlaying = seekState.isPlaying
                )

                MusicSlider(
                    modifier = Modifier,
                    progress = seekState.fraction,
                    maxValue = seekState.timeMillis,
                    onSliderSeek = {
                        musicPlayerState.seek = it
                    },
                    title = state.selectedMusic.title,
                    type = state.selectedMusic.category
                )

                ControlButton(
                    onChangePlaying = onChangePlaying,
                    onNext = onNext,
                    onPrevious = onPrevious,
                    isPlaying = state.isPlaying,
                )
            }
        }

        Playlist(
            modifier = Modifier.widthIn(max = 400.dp),
            list = state.playlist,
            onClick = onTrackSelect,
            selectedMusic = state.selectedMusic
        )
    }
}

@Composable
fun MusicSlider(
    modifier: Modifier,
    progress: Float = 0f,
    onSliderSeek: (Float) -> Unit = {},
    maxValue: Long,
    title: String,
    type: MusicCategory
) {
    val color = MaterialTheme.colors.onBackground
    Column(
        modifier,
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(title, style = MaterialTheme.typography.h1)
        Spacer(modifier = Modifier.height(16.dp))
        AnimatedVisibility(type == MusicCategory.AUDIOFILE) {
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(4.dp, Alignment.CenterHorizontally),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Slider(
                    modifier = Modifier.padding(horizontal = 40.dp),
                    value = progress,
                    onValueChange = onSliderSeek,
                    valueRange = 0f..max(0f, maxValue.toFloat()),
                    colors = SliderDefaults.colors(
                        thumbColor = color,
                        activeTrackColor = color,
                        inactiveTrackColor = color.copy(0.4f),
                    )
                )
            }
        }

        AnimatedVisibility(progress > 0 && progress < maxValue && type == MusicCategory.AUDIOFILE) {
            Row(
                Modifier.fillMaxWidth().padding(horizontal = 48.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(progress.toLong().toTime(), style = MaterialTheme.typography.caption)
                Text(maxValue.toTime(), style = MaterialTheme.typography.caption)
            }
        }


    }
}

@Composable
fun ControlButton(
    onChangePlaying: (Boolean) -> Unit,
    onNext: () -> Unit,
    onPrevious: () -> Unit,
    isPlaying: Boolean
) {
    Row(
        modifier = Modifier.widthIn(max = 400.dp).fillMaxWidth()
            .padding(vertical = 32.dp, horizontal = 32.dp),
        horizontalArrangement = Arrangement.SpaceAround,
        verticalAlignment = Alignment.CenterVertically
    ) {
        SecondaryIconButton(
            onClick = onPrevious,
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
            onClick = onNext,
            modifier = Modifier.size(48.dp),
        ) {
            Icon(FeatherIcons.SkipForward, "")
        }
    }
}

@Composable
fun Playlist(
    modifier: Modifier,
    list: ImmutableList<Music>,
    selectedMusic: Music? = null,
    onClick: (Music) -> Unit
) {
    LazyColumn(
        modifier,
        verticalArrangement = Arrangement.spacedBy(10.dp),
        contentPadding = PaddingValues(16.dp)
    ) {
        items(list) {
            PlaylistItem(
                modifier
                    .bounceClick()
                    .fillMaxWidth()
                    .clickable(onClick = {
                        onClick(it)
                    }, interactionSource = NoRippleInteractionSource(), indication = null),
                it,
                isSelected = it == selectedMusic
            )
        }
    }
}

@Composable
fun PlaylistItem(modifier: Modifier, item: Music, isSelected: Boolean) {
    val color by animateColorAsState(if (isSelected) MaterialTheme.colors.primary else MaterialTheme.colors.background)
    val width by animateDpAsState(if (isSelected) 1.dp else 0.dp)
    Row(
        modifier
            .border(width, color, defaultShape)
            .clip(defaultShape)
            .background(MaterialTheme.colors.secondary)
            .padding(vertical = 13.dp, horizontal = 16.dp),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            if (item.category == MusicCategory.RADIO) FeatherIcons.Radio else FeatherIcons.Music, ""
        )
        Text(
            item.title,
            style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary)
        )
    }
}