package org.diary.advice.player.models

import androidx.compose.runtime.Stable
import kotlinx.collections.immutable.persistentListOf

@Stable
data class Track(
    val title: String,
    val url: String,
    val type: TrackType
)

enum class TrackType {
    RADIO, FILE
}

val playlist = persistentListOf(
    Track(
        title = "Nature Rex",
        url = "https://nature-rex.radioca.st/stream",
        type = TrackType.RADIO
    ),
    Track(
        title = "Time To Relax",
        url = "https://radio4.vip-radios.fm:18048/stream-128kmp3-TimeToRelax",
        type = TrackType.RADIO
    ),
    Track(
        title = "Relax",
        url = "https://relax.stream.publicradio.org/relax.mp3",
        type = TrackType.RADIO
    ),
    Track(
        title = "Ambient music",
        url = "https://stream03.pcradio.ru/rad_am-med",
        type = TrackType.RADIO
    ),
    Track(
        title = "Cassiopeia",
        url = "https://stream03.pcradio.ru/cassiopeia_station-med",
        type = TrackType.RADIO
    )
)