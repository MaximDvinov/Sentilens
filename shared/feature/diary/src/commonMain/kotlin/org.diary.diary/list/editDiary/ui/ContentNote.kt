package org.diary.diary.list.editDiary.ui

import androidx.compose.foundation.gestures.scrollable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import org.diary.diary.Note
import org.diary.composeui.components.fadingEdge

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
        modifier = modifier.padding(vertical = 0.dp, horizontal = 4.dp),
    ) {
        TextField(
            Modifier.padding(vertical = 4.dp).fillMaxWidth(),
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
            modifier = Modifier.fillMaxSize().fadingEdge(
                startingColor = Color.Transparent,
                ending1Color = MaterialTheme.colors.background,
                length = 80f,
                length1 = 80f,
                horizontal = false
            )
                .weight(1f),
            text = body,
            onTextChange = {
                onChangeBody(it)
                onChangeBodyNote(it)
            },
            style = MaterialTheme.typography.body1.copy(MaterialTheme.colors.onSecondary),
            placeholder = "Введите текст заметки...",
            paddingValues = PaddingValues(bottom = 64.dp)
        )

    }
}
