package org.senti.lens.screens.home.editNote.ui

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material.Icon
import androidx.compose.material.LinearProgressIndicator
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import compose.icons.FeatherIcons
import compose.icons.feathericons.CloudOff
import compose.icons.feathericons.Settings
import org.senti.lens.LoadState
import org.senti.lens.SettingNoteMenu
import org.senti.lens.dateTimeFormat
import org.senti.lens.models.Note
import org.senti.lens.screens.commons.ui.SecondaryIconButton

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun TopBarEdit(
    onBackClick: () -> Unit,
    onDeleteClick: () -> Unit,
    onTagsClick: () -> Unit,
    note: Note?,
    loadState: LoadState,
) {
    val (expandedMenu, onChangeExpanded) = remember {
        mutableStateOf(false)
    }

    Row(
        modifier = Modifier.padding(16.dp).fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        SecondaryIconButton(
            onClick = onBackClick,
        ) {
            Icon(Icons.Default.ArrowBack, "Back")
        }


        AnimatedContent(
            loadState,
            modifier = Modifier.weight(1f),
            contentAlignment = Alignment.Center
        ) {
            when (it) {
                is LoadState.Error -> {
                    Text(
                        it.message,
                        style = MaterialTheme.typography.caption,
                        maxLines = 2,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.weight(1f)
                    )
                }

                LoadState.Idle -> {
                    StatusNote(note, modifier = Modifier.padding(horizontal = 10.dp))
                }

                LoadState.Loading -> {
                    LinearProgressIndicator(
                        modifier = Modifier.padding(horizontal = 80.dp),
                        color = MaterialTheme.colors.onBackground.copy(alpha = 0.3f),
                        backgroundColor = MaterialTheme.colors.onBackground.copy(alpha = 0.1f),
                        strokeCap = StrokeCap.Round,
                    )
                }

                LoadState.Success -> {
                    StatusNote(note, modifier = Modifier.weight(1f).padding(horizontal = 10.dp))
                }
            }
        }



        Box(modifier = Modifier.wrapContentSize(Alignment.TopEnd)) {
            Box {
                SecondaryIconButton(
                    onClick = { onChangeExpanded(!expandedMenu) },
                ) {
                    Icon(FeatherIcons.Settings, "Settings")
                }
            }


            SettingNoteMenu(modifier = Modifier,
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
                })
        }
    }
}

@Composable
private fun StatusNote(note: Note?, modifier: Modifier) {
    Box(modifier = modifier, contentAlignment = Alignment.Center) {
        if (note != null) {
            if (note.isNew == true) {
                Icon(
                    FeatherIcons.CloudOff,
                    "",
                    modifier = Modifier.align(Alignment.CenterEnd).size(16.dp),
                    tint = MaterialTheme.colors.onBackground.copy(0.3f)
                )
            }

            if (note.updatedAt != null) {
                Column(
                    modifier = Modifier,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text("сохранено", style = MaterialTheme.typography.caption)
                    Text(
                        text = note.updatedAt.dateTimeFormat(),
                        style = MaterialTheme.typography.caption
                    )
                }
            } else {
                Text(
                    "не сохранено",
                    style = MaterialTheme.typography.caption,
                    modifier = modifier,
                    textAlign = TextAlign.Center
                )
            }
        }
    }


}