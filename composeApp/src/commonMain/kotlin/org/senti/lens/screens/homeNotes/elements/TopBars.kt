package org.senti.lens.screens.homeNotes.elements

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.CircularProgressIndicator
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.unit.dp
import com.russhwolf.settings.ObservableSettings
import compose.icons.FeatherIcons
import compose.icons.feathericons.Moon
import compose.icons.feathericons.RotateCcw
import compose.icons.feathericons.Settings
import compose.icons.feathericons.Sun
import org.senti.lens.LoadState
import org.senti.lens.generalElements.PrimaryIconButton
import org.senti.lens.generalElements.SecondaryIconButton
import org.senti.lens.theme.defaultShape

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TopBar(
    modifier: Modifier = Modifier,
    searchQuery: String,
    changeSearchQuery: (String) -> Unit,
    onClickSetting: () -> Unit
) {
    var searchable by remember {
        mutableStateOf(false)
    }


    // temporary fix for a text input problem
    // TODO: get rid of storing state in two places

    val (text, onChangeText) = remember(false) {
        mutableStateOf(
            searchQuery
        )
    }

    LaunchedEffect(text) {
        changeSearchQuery(text)
    }

    val focusRequester = remember { FocusRequester() }

    Row(
        modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {

        SearchText(searchable, focusRequester, text, onChangeText)

        SecondaryIconButton(
            onClick = {
                searchable = !searchable
                if (!searchable) {
                    changeSearchQuery("")
                    onChangeText("")
                }
            },
        ) {
            AnimatedContent(searchable) {
                if (it) {
                    Icon(Icons.Default.Close, "Close Search")
                } else {
                    Icon(Icons.Default.Search, "Search")
                }
            }
        }

        AnimatedVisibility(!searchable) {
            SecondaryIconButton(
                onClick = onClickSetting,
            ) {
                Icon(FeatherIcons.Settings, "Setting")
            }
        }
    }
}

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TopBarExpanded(
    modifier: Modifier = Modifier,
    searchQuery: String,
    changeSearchQuery: (String) -> Unit,
    onCreateClick: () -> Unit,
    onClickSetting: () -> Unit,
    onRefresh: () -> Unit,
    loadState: LoadState,
) {
    var searchable by remember {
        mutableStateOf(false)
    }
    val focusRequester = remember { FocusRequester() }

    Row(
        modifier.fillMaxWidth().clip(defaultShape).background(MaterialTheme.colors.secondary)
            .padding(start = 0.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {
        SecondaryIconButton(
            onClick = {
                searchable = !searchable
                if (!searchable) {
                    changeSearchQuery("")
                }
            },
        ) {
            AnimatedContent(searchable) {
                if (it) {
                    Icon(Icons.Default.Close, "Search")
                } else {
                    Icon(Icons.Default.Search, "Search")
                }
            }
        }

        SearchText(searchable, focusRequester, searchQuery, changeSearchQuery)

        SecondaryIconButton(
            onClick = onRefresh,
        ) {
            if (loadState == LoadState.Loading) {
                CircularProgressIndicator(
                    color = MaterialTheme.colors.onSecondary,
                    modifier = Modifier.size(24.dp),
                    strokeWidth = 2.dp
                )
            } else {
                Icon(FeatherIcons.RotateCcw, "Search")
            }

        }

        SecondaryIconButton(
            onClick = onClickSetting,
        ) {
            Icon(FeatherIcons.Settings, "theme")
        }


        PrimaryIconButton(
            onClick = onCreateClick,
        ) {
            Icon(Icons.Default.Add, "Search", tint = MaterialTheme.colors.onPrimary)
        }
    }
}

@OptIn(ExperimentalAnimationApi::class)
@Composable
private fun RowScope.SearchText(
    searchable: Boolean,
    focusRequester: FocusRequester,
    searchQuery: String,
    changeSearchQuery: (String) -> Unit
) {
    val (text, onChangeText) = remember(searchQuery) { mutableStateOf(searchQuery) }

    Box(Modifier.Companion.weight(1f)) {
        AnimatedContent(searchable) {
            if (it) {
                BasicTextField(modifier = Modifier.focusRequester(focusRequester).fillMaxWidth(),
                    value = text,
                    onValueChange = { value -> changeSearchQuery(value); onChangeText(value) },
                    textStyle = MaterialTheme.typography.h1.copy(MaterialTheme.colors.onBackground),
                    singleLine = true,
                    cursorBrush = SolidColor(MaterialTheme.colors.onSecondary),
                    decorationBox = { innerTextField ->
                        Box {
                            if (searchQuery.isEmpty()) {
                                Text(
                                    text = "Поиск", style = MaterialTheme.typography.h1.copy(
                                        color = MaterialTheme.colors.onSecondary.copy(
                                            0.6f
                                        )
                                    )
                                )
                            }
                            innerTextField()
                        }
                    })
                LaunchedEffect(searchable) {
                    focusRequester.requestFocus()
                }

            } else {
                Text(
                    modifier = Modifier,
                    text = "Заметки",
                    style = MaterialTheme.typography.h1,
                    color = MaterialTheme.colors.onSecondary
                )
            }
        }
    }
}