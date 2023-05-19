package org.senti.lens

import android.app.Activity
import android.content.SharedPreferences
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.Colors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.unit.dp
import androidx.core.view.WindowCompat
import com.russhwolf.settings.Settings
import com.russhwolf.settings.SharedPreferencesSettings
import org.senti.lens.models.Advice
import org.senti.lens.screens.recommendation.RecommendationItem

actual fun getSettings(delegate: Any): Settings {
    return SharedPreferencesSettings(delegate as SharedPreferences)
}

actual fun getTypeDevice(): TypeDevice {
    return TypeDevice.MOBILE
}

@Composable
actual fun PlatformBackHandler(
    backHandlingEnabled: Boolean,
    onBack: () -> Unit
) {
    BackHandler(backHandlingEnabled, onBack = onBack)
}

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun RecommendationScreenContent(
    modifier: Modifier,
    recommendationList: List<Advice?>
) {
    val pagerState = rememberPagerState()

    Column(modifier = modifier.fillMaxSize()) {
        HorizontalPager(
            modifier = Modifier,
            pageCount = recommendationList.size,
            contentPadding = PaddingValues(16.dp),
            verticalAlignment = Alignment.Top
        ) { page ->
            Box(
                Modifier.padding(8.dp).fillMaxSize()
            ) {
                recommendationList[page]?.let { RecommendationItem(it) }
            }
        }
    }
}

@Composable
actual fun SetColorStatusBar(darkTheme: Boolean, colors: Colors) {
    val view = LocalView.current

    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colors.background.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
        }
    }
}
