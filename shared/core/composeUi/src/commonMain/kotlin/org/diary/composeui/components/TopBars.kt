package org.diary.composeui.components

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.CircularProgressIndicator
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.RotateCcw
import compose.icons.feathericons.Settings
import org.diary.composeui.LoadState
import org.diary.utils.TypeDevice
import org.diary.utils.getTypeDevice
import org.diary.composeui.theme.defaultShape

@Composable
fun DiaryTopBar(
    modifier: Modifier = Modifier,
    isSearchable: Boolean,
    changeSearchable: (Boolean) -> Unit,
    searchQuery: String,
    changeSearchQuery: (String) -> Unit,
    onBackClick: () -> Unit,
) {
    val (text, onChangeText) = remember(false) {
        mutableStateOf(searchQuery)
    }

    LaunchedEffect(text) {
        changeSearchQuery(text)
    }

    val focusRequester = remember { FocusRequester() }

    Row(
        modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        AnimatedVisibility(!isSearchable) {
            SecondaryIconButton(
                onClick = onBackClick,
                modifier = Modifier
            ) {
                Icon(Icons.AutoMirrored.Rounded.ArrowBack, "Setting")
            }
        }

        SearchText(
            searchable = isSearchable,
            focusRequester = focusRequester,
            searchQuery = text,
            changeSearchQuery = onChangeText,
        )

        SecondaryIconButton(
            onClick = {
                changeSearchable(!isSearchable)
            },
            modifier = Modifier.padding(start = 6.dp)
        ) {
            AnimatedContent(isSearchable) {
                if (it) {
                    Icon(Icons.Default.Close, "Close Search")
                } else {
                    Icon(Icons.Default.Search, "Search")
                }
            }
        }
    }
}


@Composable
fun DiaryTopBarExpanded(
    modifier: Modifier = Modifier,
    isSearchable: Boolean,
    changeSearchable: (Boolean) -> Unit,
    searchQuery: String,
    changeSearchQuery: (String) -> Unit,
    onCreateClick: () -> Unit,
    onClickBack: () -> Unit,
    onRefresh: () -> Unit,
    loadState: LoadState,
) {
    val focusRequester = remember { FocusRequester() }

    Row(
        modifier.fillMaxWidth().clip(defaultShape).background(MaterialTheme.colors.secondary)
            .padding(start = 0.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {
        SecondaryIconButton(
            onClick = onClickBack,
        ) {
            Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back")
        }

        SearchText(
            searchable = isSearchable,
            focusRequester = focusRequester,
            searchQuery = searchQuery,
            changeSearchQuery = changeSearchQuery,
            isCenter = false
        )

        SecondaryIconButton(
            onClick = {
                changeSearchable(!isSearchable)
            },
        ) {
            AnimatedContent(isSearchable) {
                if (it) {
                    Icon(Icons.Default.Close, "Search")
                } else {
                    Icon(Icons.Default.Search, "Search")
                }
            }
        }

        SecondaryIconButton(
            onClick = onRefresh,
        ) {
            AnimatedContent(loadState == LoadState.Loading) {
                if (it) {
                    CircularProgressIndicator(
                        color = MaterialTheme.colors.onSecondary,
                        modifier = Modifier.size(24.dp),
                        strokeWidth = 2.3.dp
                    )
                } else {
                    Icon(FeatherIcons.RotateCcw, "Update")
                }
            }
        }

        PrimaryIconButton(
            onClick = onCreateClick,
        ) {
            Icon(Icons.Default.Add, "Search", tint = MaterialTheme.colors.onPrimary)
        }
    }
}

@Composable
fun HomeTopBar(
    modifier: Modifier = Modifier,
    onRefresh: () -> Unit,
    onClickSetting: () -> Unit,
) {
    Row(
        modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            modifier = Modifier.weight(1f),
            text = "Дневник",
            style = MaterialTheme.typography.h1,
            color = MaterialTheme.colors.onSecondary
        )

        if (getTypeDevice() == TypeDevice.DESKTOP || getTypeDevice() == TypeDevice.WEB) {

            SecondaryIconButton(
                onClick = onRefresh,
                modifier = Modifier.padding(start = 6.dp)
            ) {
                Icon(FeatherIcons.RotateCcw, "Refresh")
            }
        }

        Spacer(Modifier.width(6.dp))
        SecondaryIconButton(
            onClick = onClickSetting,
            modifier = Modifier.padding(start = 6.dp)
        ) {
            Icon(FeatherIcons.Settings, "Setting")
        }
    }
}

@Composable
fun HomeTopBarExpanded(
    modifier: Modifier = Modifier,
    onCreateClick: () -> Unit,
    onClickSetting: () -> Unit,
    onRefresh: () -> Unit,
    isLoad: Boolean,
) {
    Row(
        modifier.fillMaxWidth().clip(defaultShape).background(MaterialTheme.colors.secondary)
            .padding(start = 0.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {
        SecondaryIconButton(
            onClick = onClickSetting,
        ) {
            Icon(FeatherIcons.Settings, "setting")
        }

        Text(
            modifier = Modifier.weight(1f),
            text = "Дневник",
            style = MaterialTheme.typography.h1,
            color = MaterialTheme.colors.onSecondary,
        )

        SecondaryIconButton(
            onClick = onRefresh,
        ) {
            AnimatedContent(isLoad) {
                if (it) {
                    CircularProgressIndicator(
                        color = MaterialTheme.colors.onSecondary,
                        modifier = Modifier.size(24.dp),
                        strokeWidth = 2.3.dp
                    )
                } else {
                    Icon(FeatherIcons.RotateCcw, "Search")
                }
            }
        }

        PrimaryIconButton(
            onClick = onCreateClick,
        ) {
            Icon(Icons.Default.Add, "Search", tint = MaterialTheme.colors.onPrimary)
        }
    }
}

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
fun ActionTopBar(
    modifier: Modifier = Modifier,
    title: String,
    leftButtonIcon: ImageVector? = null,
    rightButtonIcon: ImageVector? = null,
    onClickLeft: () -> Unit = {},
    onClickRight: () -> Unit = {},
    textAlign: TextAlign = TextAlign.Center,
) {
    val windowSizeClass = calculateWindowSizeClass()
    if (windowSizeClass.widthSizeClass == WindowWidthSizeClass.Compact) {
        Row(
            modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            if (leftButtonIcon != null) {
                SecondaryIconButton(
                    onClick = onClickLeft,
                    modifier = Modifier
                ) {
                    Icon(leftButtonIcon, "")
                }
            }


            Text(
                modifier = Modifier.weight(1f).padding(horizontal = 10.dp),
                text = title,
                style = MaterialTheme.typography.h1,
                color = MaterialTheme.colors.onSecondary,
                textAlign = textAlign
            )

            if (rightButtonIcon != null) {
                SecondaryIconButton(
                    onClick = onClickRight,
                    modifier = Modifier
                ) {
                    Icon(rightButtonIcon, "")
                }
            }
        }
    } else {
        Row(
            modifier
                .fillMaxWidth()
                .clip(defaultShape)
                .background(MaterialTheme.colors.secondary)
                .padding(start = 0.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            if (leftButtonIcon != null) {
                SecondaryIconButton(
                    onClick = onClickLeft,
                    modifier = Modifier
                ) {
                    Icon(leftButtonIcon, "")
                }
            }

            Text(
                modifier = Modifier.weight(1f).padding(horizontal = 10.dp),
                text = title,
                style = MaterialTheme.typography.h1,
                color = MaterialTheme.colors.onSecondary,
                textAlign = TextAlign.Start
            )

            if (rightButtonIcon != null) {
                SecondaryIconButton(
                    onClick = onClickRight,
                    modifier = Modifier
                ) {
                    Icon(rightButtonIcon, "")
                }
            }
        }
    }

}


@Composable
private fun RowScope.SearchText(
    searchable: Boolean,
    focusRequester: FocusRequester,
    searchQuery: String,
    isCenter: Boolean = true,
    changeSearchQuery: (String) -> Unit,
) {
    val (text, onChangeText) = remember(searchQuery) { mutableStateOf(searchQuery) }

    Box(
        Modifier.Companion.weight(1f),
        contentAlignment = if (isCenter) Alignment.Center else Alignment.CenterStart
    ) {
        AnimatedContent(searchable) {
            if (it) {
                BasicTextField(modifier = Modifier.focusRequester(focusRequester)
                    .fillMaxWidth(),
                    value = text,
                    onValueChange = { value ->
                        if (searchable) {
                            changeSearchQuery(value)
                            onChangeText(value)
                        }
                    },
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
                    text = "Страницы",
                    style = MaterialTheme.typography.h1,
                    color = MaterialTheme.colors.onSecondary,
                )
            }
        }
    }
}