package org.senti.lens

import com.russhwolf.settings.StorageSettings
import androidx.compose.foundation.HorizontalScrollbar
import androidx.compose.foundation.LocalScrollbarStyle
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.material.Colors
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.key
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onPreviewKeyEvent
import androidx.compose.ui.unit.dp
import com.russhwolf.settings.Settings
import org.senti.lens.models.Advice
import org.senti.lens.screens.recommendation.RecommendationItem
import org.senti.lens.theme.defaultShape

actual fun getSettings(delegate: Any): Settings {
    return StorageSettings()
}

actual fun getTypeDevice(): TypeDevice {
    return TypeDevice.WEB
}

@Composable
actual fun PlatformBackHandler(
    backHandlingEnabled: Boolean,
    onBack: () -> Unit
) {
    Box(modifier = Modifier.onPreviewKeyEvent {
        if (it.key == Key.Escape) {
            onBack()
            true
        } else {
            false
        }
    })
}

@Composable
actual fun RecommendationScreenContent(
    modifier: Modifier, recommendationList: List<Advice?>
) {
    val state = rememberLazyListState()

    Box(modifier = modifier.fillMaxSize().padding()) {
        LazyRow(
            modifier = Modifier.fillMaxSize(),
            state = state,
            contentPadding = PaddingValues(horizontal = 16.dp, vertical = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            recommendationList.forEach {
                item {
                    key(it) {
                        Box(modifier = Modifier.widthIn(max = 300.dp)) {
                            if (it != null) {
                                RecommendationItem(it)
                            }
                        }
                    }

                }
            }
        }

        HorizontalScrollbar(
            modifier = Modifier.padding(bottom = 8.dp).align(Alignment.BottomStart).fillMaxWidth(),
            adapter = rememberScrollbarAdapter(state),
            style = LocalScrollbarStyle.current.copy(
                hoverColor = MaterialTheme.colors.onBackground.copy(
                    0.3f
                ), shape = defaultShape, unhoverColor = MaterialTheme.colors.onBackground.copy(
                    0.1f
                ), thickness = 6.dp
            )
        )
    }
}

@Composable
actual fun SetColorStatusBar(darkTheme: Boolean, colors: Colors) {
}

actual fun openLink(url: String) {

}