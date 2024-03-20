package org.senti.lens

import android.app.Activity
import android.content.Intent
import android.content.SharedPreferences
import android.graphics.Color
import android.net.Uri
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
    val pagerState = rememberPagerState(
        initialPage = 0,
        initialPageOffsetFraction = 0f
    ) {
        recommendationList.size
    }

    Column(modifier = modifier.fillMaxSize()) {
        HorizontalPager(
            modifier = Modifier,
            state = pagerState,
            contentPadding = PaddingValues(16.dp),
            verticalAlignment = Alignment.Top
        ) { page ->
            Box(
                Modifier
                    .padding(8.dp)
                    .fillMaxSize()
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
            window.statusBarColor = Color.TRANSPARENT
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
        }
    }
}

actual fun openLink(url: String) {
    val uri = url.let { Uri.parse(it) } ?: return
    val intent = Intent().apply {
        action = Intent.ACTION_VIEW
        data = uri
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }
    AndroidApp.INSTANCE.startActivity(intent)
}