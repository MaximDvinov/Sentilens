package org.senti.lens.screens.list.editDiary.ui

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Note
import org.senti.lens.screens.commons.ui.fadingCenterBack
import org.senti.lens.screens.commons.ui.fadingEdge

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun ContentNote(
    modifier: Modifier = Modifier,
    currentNote: Note? = null,
    onChangeTitleNote: (String) -> Unit,
    onChangeBodyNote: (String) -> Unit,
) {
    // temporary fix for a text input problem
    // TODO: get rid of storing state in two places

    val (title, onChangeTitle) = remember(currentNote?.uuid) {
        mutableStateOf(
            currentNote?.title ?: ""
        )
    }
    val (body, onChangeBody) = remember(currentNote?.uuid) {
        mutableStateOf(
            currentNote?.content ?: ""
        )
    }

    Column(
        modifier = modifier.padding(vertical = 16.dp, horizontal = 4.dp).fadingEdge(
            startingColor = Color.Transparent,
            ending1Color = MaterialTheme.colors.background,
            length = 40f,
            length1 = 40f,
            horizontal = false
        ),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        TextField(
            Modifier.fillMaxWidth(),
            text = title,
            onTextChange = {
                onChangeTitle(it)
                onChangeTitleNote(it)
            },
            placeholder = "Введите заголовок...",
            style = MaterialTheme.typography.h1.copy(MaterialTheme.colors.onSecondary),
            maxLines = 3,
        )

        TextField(
            modifier = Modifier
                .weight(1f).fillMaxSize(),
            text = body,
            onTextChange = {
                onChangeBody(it)
                onChangeBodyNote(it)
            },
            style = MaterialTheme.typography.body1.copy(MaterialTheme.colors.onSecondary),
            placeholder = "Введите текст заметки..."
        )

    }
}
