package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material.Icon
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.Settings
import org.senti.lens.generalElements.SecondaryIconButton

@Composable
fun TopBarEdit(
    onClick: () -> Unit,
    onBackClick: () -> Unit,
    onDeleteClick: () -> Unit,
    onTagsClick: () -> Unit
) {
    val (expandedMenu, onChangeExpanded) = remember {
        mutableStateOf(false)
    }

    Row(
        modifier = Modifier.padding(16.dp).fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        SecondaryIconButton(
            onClick = onClick,
        ) {
            Icon(Icons.Default.ArrowBack, "Back")
        }

        Box(modifier = Modifier.wrapContentSize(Alignment.TopEnd)) {
            Box {
                SecondaryIconButton(
                    onClick = { onChangeExpanded(!expandedMenu) },
                ) {
                    Icon(FeatherIcons.Settings, "Settings")
                }
            }


            SettingNoteMenu(
                modifier = Modifier,
                expanded = expandedMenu,
                onDismissRequest = { onChangeExpanded(!expandedMenu) },
                onDeleteClick = remember {
                    {
                        onDeleteClick()
                        onChangeExpanded(false)
                    }
                },
                onTagsClick = {
                    onTagsClick()
                    onChangeExpanded(false)
                }
            )
        }

    }
}