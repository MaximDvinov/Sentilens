package org.senti.lens.screens.homeNotes.elements

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.RefreshCcw
import compose.icons.feathericons.RefreshCw
import compose.icons.feathericons.RotateCcw
import org.senti.lens.generalElements.PrimaryButton
import org.senti.lens.generalElements.PrimaryIconButton
import org.senti.lens.generalElements.SecondaryIconButton
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.h1

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TopBar(
    modifier: Modifier = Modifier,
    searchQuery: String,
    changeSearchQuery: (String) -> Unit
) {
    var searchable by remember {
        mutableStateOf(false)
    }
    val focusRequester = remember { FocusRequester() }

    Row(
        modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {

        SearchText(searchable, focusRequester, searchQuery, changeSearchQuery)

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
    }
}

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TopBarExpanded(
    modifier: Modifier = Modifier,
    searchQuery: String,
    changeSearchQuery: (String) -> Unit,
    onCreateClick: () -> Unit,
    onRefresh: () -> Unit,
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

            if (searchable) {
                Icon(Icons.Default.Close, "Search")
            } else {
                Icon(Icons.Default.Search, "Search")
            }

        }
        SearchText(searchable, focusRequester, searchQuery, changeSearchQuery)

        SecondaryIconButton(
            onClick = onRefresh,
        ) {
            Icon(FeatherIcons.RotateCcw, "Search")
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
                BasicTextField(
                    modifier = Modifier.focusRequester(focusRequester).fillMaxWidth(),
                    value = text,
                    onValueChange = { value -> changeSearchQuery(value); onChangeText(value) },
                    textStyle = MaterialTheme.typography.h1.copy(MaterialTheme.colors.onBackground),
                    singleLine = true,
                    cursorBrush = SolidColor(MaterialTheme.colors.onSecondary),
                    decorationBox = { innerTextField ->
                        Box {
                            if (searchQuery.isEmpty()) {
                                Text(
                                    text = "Поиск",
                                    style = MaterialTheme.typography.h1.copy(
                                        color = MaterialTheme.colors.onSecondary.copy(
                                            0.6f
                                        )
                                    )
                                )
                            }
                            innerTextField()
                        }
                    }
                )
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