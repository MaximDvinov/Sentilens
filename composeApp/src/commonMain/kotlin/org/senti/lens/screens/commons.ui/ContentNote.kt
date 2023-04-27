package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
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
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Note

@Composable
fun ContentNote(
    modifier: Modifier = Modifier,
    currentNote: Note? = null,
    onChangeTitleNote: (String) -> Unit,
    onChangeBodyNote: (String) -> Unit
) {
    // temporary fix for a text input problem
    // TODO: get rid of storing state in two places

    val (title, onChangeTitle) = remember(currentNote?.id) {
        mutableStateOf(
            currentNote?.title ?: ""
        )
    }
    val (body, onChangeBody) = remember(currentNote?.id) { mutableStateOf(currentNote?.body ?: "") }

    Column(
        modifier = modifier.verticalScroll(rememberScrollState())
            .padding(start = 16.dp, end = 16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        TextField(
            Modifier.fillMaxWidth(),
            text = title,
            onTextChange = {
                onChangeTitle(it)
                onChangeTitleNote(it)
            },
            placeholder = "Введите заголовок...",
            style = MaterialTheme.typography.h1.copy(MaterialTheme.colors.onSecondary)
        )
        TextField(
            modifier = Modifier.weight(1f).fillMaxSize(),
            text = body,
            onTextChange = {
                onChangeBody(it)
                onChangeBodyNote(it)
            },
            placeholder = "Введите текст заметки...",
            style = MaterialTheme.typography.body1.copy(MaterialTheme.colors.onSecondary)
        )
    }

}
