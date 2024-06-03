package org.diary.auth.pincode

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.spring
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import cafe.adriel.voyager.core.registry.rememberScreen
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.Check
import org.diary.composeui.bounceClick
import org.diary.composeui.theme.defaultShape
import org.diary.navigation.DiaryScreenProvider
import org.diary.navigation.koinNavigatorScreenModel
import kotlin.math.roundToInt

class PinCodeScreen : Screen {
    @OptIn(ExperimentalFoundationApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val screenModel = koinNavigatorScreenModel<PinCodeScreenModel>(navigator)
        val homeScreen = rememberScreen(DiaryScreenProvider.HomeScreen)
        var pin by remember { mutableStateOf("") }

        if (biometricAvailable()) {
            BiometricAuthenticate(
                onError = {
                },
                onAuthenticated = {
                    navigator.replace(homeScreen)
                }
            )
        }

        val shake = remember { Animatable(0f) }

        LaunchedEffect(Unit) {
            screenModel.event.collect {
                when (it) {
                    is PinCodeEvent.PinCodeCorrect -> navigator.replace(homeScreen)
                    is PinCodeEvent.PinCodeIncorrect -> {
                        for (i in 0..10) {
                            when (i % 2) {
                                0 -> shake.animateTo(5f, spring(stiffness = 100_000f))
                                else -> shake.animateTo(-5f, spring(stiffness = 100_000f))
                            }
                        }
                        shake.animateTo(0f)
                    }
                }
            }
        }

        Column(
            modifier = Modifier.fillMaxSize()
                .offset { IntOffset(shake.value.roundToInt(), y = 0) }
                .padding(40.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.SpaceEvenly
        ) {
            if (pin.isNotEmpty()) {
                Text(
                    text = "*".repeat(pin.length), style = MaterialTheme.typography.h1.copy(
                        fontSize = 42.sp, color = MaterialTheme.colors.onBackground
                    )
                )
            } else {
                Text(
                    text = "Введите пин-код", style = MaterialTheme.typography.h1.copy(
                        fontSize = 32.sp, color = MaterialTheme.colors.onBackground.copy(0.4f)
                    )
                )
            }


            LazyVerticalGrid(
                modifier = Modifier.widthIn(max = 500.dp),
                columns = GridCells.Fixed(3),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                items(9) {
                    Box(
                        modifier = Modifier
                            .widthIn(min = 78.dp)
                            .height(78.dp)
                            .bounceClick()
                            .clip(defaultShape)
                            .clickable {
                                pin += (it + 1).toString()
                            }
                            .background(MaterialTheme.colors.secondary),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = (it + 1).toString(),
                            style = MaterialTheme.typography.h1.copy(
                                fontSize = 32.sp,
                                color = MaterialTheme.colors.onBackground,
                                textAlign = TextAlign.Center
                            ),
                            textAlign = TextAlign.Center
                        )
                    }
                }

                item() {
                    Box(
                        modifier = Modifier
                            .height(78.dp)
                            .bounceClick()
                            .clip(defaultShape)
                            .combinedClickable(
                                onClick = { pin = pin.dropLast(1) },
                                onLongClick = { pin = "" })
                            .background(MaterialTheme.colors.secondary),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(FeatherIcons.ArrowLeft, contentDescription = "Войти")
                    }
                }

                item() {
                    Box(
                        modifier = Modifier
                            .height(78.dp)
                            .bounceClick()
                            .clip(defaultShape)
                            .clickable {
                                pin += "0"
                            }
                            .background(MaterialTheme.colors.secondary),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "0",
                            style = MaterialTheme.typography.h1.copy(
                                fontSize = 32.sp,
                                color = MaterialTheme.colors.onBackground,
                                textAlign = TextAlign.Center
                            ),
                            textAlign = TextAlign.Center
                        )
                    }
                }

                item() {
                    Box(
                        modifier = Modifier
                            .height(78.dp)
                            .bounceClick()
                            .clip(defaultShape)
                            .clickable {
                                screenModel.onIntent(PinCodeIntent.CheckPinCode(pin))
                            }
                            .background(MaterialTheme.colors.secondary),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(FeatherIcons.Check, contentDescription = "Войти")
                    }
                }
            }
        }
    }
}