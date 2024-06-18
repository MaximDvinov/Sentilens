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
import androidx.compose.material.AlertDialog
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.TextButton
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import org.diary.compose.setting.ConfirmDialog
import org.diary.composeui.components.SecondaryButton
import org.diary.composeui.theme.icons.androidIcon
import org.diary.composeui.theme.icons.webIcon
import org.diary.composeui.theme.icons.windowIcon
import org.diary.utils.openLink

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
fun StartScreenContent(onClick: () -> Unit) {
    val sizeScreen = calculateWindowSizeClass()
    var showDialog by remember { mutableStateOf(false) }
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
                    text = "Здесь вы можете получить доступ к веб-версии нашего умного дневника, а также скачать версии для ПК и Android.",
                    style = MaterialTheme.typography.h2,
                    color = MaterialTheme.colors.onBackground,
                    textAlign = TextAlign.Center
                )
            }

            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                VersionButton(webIcon, "Web (alpha)", onClick = {
                    showDialog = true
                })
            }


        }
    }

    if (showDialog) {
        ConfirmDialog(
            onDismiss = { showDialog = false },
            onConfirm = { showDialog = false; onClick() },
            title = "Alpha версия",
            subtitle = "Web-версия приложения заметок находится в стадии разработки, могут возникнуть различные ошибки. " +
                    "Также на некоторых устройствах могут возникнуть проблемы с вводом текста. " +
                    "Советуем установить приложение на Android или Windows. Данные версии приложения стабильны и не содержат известных ошибок."
        )
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