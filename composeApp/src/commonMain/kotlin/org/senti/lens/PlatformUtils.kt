package org.senti.lens

import androidx.compose.material.Colors
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.russhwolf.settings.Settings
import org.senti.lens.models.Advice

expect fun getSettings(delegate: Any): Settings

enum class TypeDevice() {
    DESKTOP, MOBILE
}

expect fun getTypeDevice(): TypeDevice

expect fun openLink(url: String)


@Composable
expect fun RecommendationScreenContent(
    modifier: Modifier = Modifier, recommendationList: List<Advice?>
)

@Composable
expect fun PlatformBackHandler(backHandlingEnabled: Boolean, onBack: () -> Unit)


@Composable
expect fun SetColorStatusBar(darkTheme: Boolean, colors: Colors)

