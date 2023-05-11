package org.senti.lens.screens.auth.AuthScreen

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.senti.lens.screens.commons.ui.PrimaryButton
import org.senti.lens.screens.commons.ui.SecondaryButton
import org.senti.lens.screens.commons.ui.WindowSize
import org.senti.lens.screens.auth.ui.AuthTextField
import org.senti.lens.screens.home.HomeScreen

class AuthScreen(val windowSize: WindowSize) : Screen {
    @Composable
    override fun Content() {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            AuthScreenContent(windowSize)
        }

    }
}

@Composable
fun AuthScreenContent(windowSize: WindowSize) {
    val navigator = LocalNavigator.currentOrThrow

    Column(
        modifier = Modifier.widthIn(max = 500.dp).padding(40.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically),
    ) {
        Column(
            verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically),
            modifier = Modifier.weight(1f)
        ) {
            Text(
                "Авторизация",
                style = MaterialTheme.typography.h1.copy(),
                modifier = Modifier.fillMaxWidth(),
                textAlign = TextAlign.Center,
                color = MaterialTheme.colors.onBackground
            )


            Spacer(modifier = Modifier.height(40.dp))

            val (text, onTextChange) = remember { mutableStateOf("") }

            AuthTextField(
                modifier = Modifier.fillMaxWidth().widthIn(max = 240.dp),
                text = text,
                onTextChange = onTextChange,
                placeholder = "Логин"
            )
            AuthTextField(
                modifier = Modifier.fillMaxWidth().widthIn(max = 240.dp),
                text = text,
                onTextChange = onTextChange,
                placeholder = "Логин"
            )
        }

        Column(verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically)) {
            PrimaryButton(modifier = Modifier.fillMaxWidth().height(54.dp), onClick = {
                navigator.replace(HomeScreen())
            }) {
                Text(
                    "Войти",
                    style = MaterialTheme.typography.body1,
                    color = MaterialTheme.colors.onPrimary
                )
            }

            SecondaryButton(modifier = Modifier.fillMaxWidth().height(54.dp), onClick = {}) {
                Text(
                    "Регистрация",
                    style = MaterialTheme.typography.body1,
                    color = MaterialTheme.colors.onSecondary
                )
            }
        }
    }
}