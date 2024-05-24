package org.senti.web

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.diary.composeui.components.SecondaryButton
import org.diary.composeui.theme.icons.androidIcon
import org.diary.composeui.theme.icons.webIcon
import org.diary.composeui.theme.icons.windowIcon
import org.diary.utils.openLink

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
fun StartScreenContent(onClick: () -> Unit) {
    val sizeScreen = calculateWindowSizeClass()
    Box(
        modifier = Modifier.fillMaxSize().background(MaterialTheme.colors.background)
            .padding(16.dp), contentAlignment = Alignment.TopCenter
    ) {
        if (sizeScreen.widthSizeClass != WindowWidthSizeClass.Compact) {
            Text(
                "Sentilens",
                style = MaterialTheme.typography.h1.copy(fontSize = 48.sp),
                modifier = Modifier.padding(16.dp)
            )
        }

        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = if (sizeScreen.widthSizeClass != WindowWidthSizeClass.Compact) Arrangement.spacedBy(
                50.dp,
                Alignment.CenterVertically
            ) else Arrangement.SpaceAround,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            if (sizeScreen.widthSizeClass == WindowWidthSizeClass.Compact) {
                Text(
                    "Sentilens",
                    style = MaterialTheme.typography.h1.copy(fontSize = 48.sp),
                    modifier = Modifier.padding(16.dp)
                )
            }

            Column(
                modifier = Modifier.widthIn(max = 500.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "Приветствуем на нашем сайте!",
                    style = MaterialTheme.typography.h1,
                    color = MaterialTheme.colors.primary,

                    textAlign = TextAlign.Center
                )
                Text(
                    text = "Здесь вы можете получить доступ к веб-версии нашего умного дневника, а так же скачать версии для ПК и Android.",
                    style = MaterialTheme.typography.h2,
                    color = MaterialTheme.colors.onBackground,
                    textAlign = TextAlign.Center
                )
            }

            if (sizeScreen.widthSizeClass == WindowWidthSizeClass.Compact) {
                Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                    VersionButton(windowIcon, "Windows") {
                        openLink(
                            null,
                            url = "https://github.com/MaximDvinov/Sentilens/releases/download/1.0.0/SentilensWindows.msi"
                        )
                    }

                    VersionButton(androidIcon, "Android") {
                        openLink(
                            null,
                            "https://github.com/MaximDvinov/Sentilens/releases/download/1.0.0/SentilensAndroid.apk"
                        )
                    }

                    VersionButton(webIcon, "Web-версия", onClick = onClick)
                }
            } else {
                Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                    VersionButton(windowIcon, "Windows") {
                        openLink(
                            null,
                            "https://github.com/MaximDvinov/Sentilens/releases/download/1.0.0/SentilensWindows.msi"
                        )
                    }

                    VersionButton(androidIcon, "Android") {
                        openLink(
                            null,
                            "https://github.com/MaximDvinov/Sentilens/releases/download/1.0.0/SentilensAndroid.apk"
                        )
                    }

                    VersionButton(webIcon, "Web-версия", onClick = onClick)
                }
            }


        }
    }
}

@Composable
private fun VersionButton(
    icon: ImageVector,
    text: String,
    onClick: () -> Unit,
) {
    SecondaryButton(
        modifier = Modifier.width(230.dp),
        onClick = onClick,
    ) {
        Icon(icon, contentDescription = null, tint = MaterialTheme.colors.onSecondary)
        Spacer(modifier = Modifier.width(5.dp))
        Text(
            text = text, style = MaterialTheme.typography.h2,
            color = MaterialTheme.colors.onSecondary,
        )
    }
}