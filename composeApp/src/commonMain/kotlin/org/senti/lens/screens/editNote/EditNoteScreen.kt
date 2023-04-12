package org.senti.lens.screens.editNote

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Settings
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.Placeholder
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import org.senti.lens.generalElements.PrimaryIconButton
import org.senti.lens.generalElements.SecondaryButton
import org.senti.lens.generalElements.SecondaryIconButton
import org.senti.lens.models.Note
import org.senti.lens.theme.body
import org.senti.lens.theme.h1

class EditNoteScreen(val note: Note? = null) : Screen {
    @Composable
    override fun Content() {
        Column(modifier = Modifier.fillMaxSize()) {
            TopBarEdit()
            ContentNote(modifier = Modifier.weight(1f), note = note)
            BottomBarEdit()
        }

    }
}


@Composable
fun BottomBarEdit() {
    Row(
        modifier = Modifier.padding(16.dp).fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        SecondaryButton(modifier = Modifier.weight(1f),
            onClick = { }
        ) {
            Text("Анализ настроения", style = body)
        }

        PrimaryIconButton(
            onClick = { }
        ) {
            Icon(Icons.Default.Add, "Settings")
        }
    }
}

@Composable
fun ContentNote(modifier: Modifier = Modifier, note: Note? = null) {
    val (title, onTitleChange) = remember { mutableStateOf(note?.title ?: "") }
    val (body, onBodyChange) = remember { mutableStateOf(note?.body ?: "") }

    Column(
        modifier = modifier
            .verticalScroll(rememberScrollState())
            .padding(start = 16.dp, end = 16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        TextField(
            text = title,
            onTextChange = onTitleChange,
            placeholder = "Введите заголовок...",
            style = h1
        )
        TextField(
            modifier = Modifier.weight(1f),
            text = body,
            onTextChange = onBodyChange,
            placeholder = "Введите текст заметки..."
        )
    }

}

@Composable
fun TextField(
    modifier: Modifier = Modifier,
    text: String,
    onTextChange: (String) -> Unit,
    style: TextStyle = body,
    placeholder: String = ""
) {
    BasicTextField(
        modifier = modifier,
        value = text,
        onValueChange = onTextChange,
        textStyle = style,
        cursorBrush = SolidColor(Color.White),
        decorationBox = { innerTextField ->
            Box {
                if (text.isEmpty()) {
                    Text(
                        text = placeholder,
                        style = style.copy(color = Color.White.copy(0.6f))
                    )
                }
                innerTextField()
            }
        }
    )
}

@Composable
fun TopBarEdit() {
    val navigator = LocalNavigator.currentOrThrow

    Row(
        modifier = Modifier.padding(16.dp).fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        SecondaryIconButton(
            onClick = navigator::pop,
        ) {
            Icon(Icons.Default.ArrowBack, "Back")
        }

        SecondaryIconButton(
            onClick = navigator::pop,
        ) {
            Icon(Icons.Default.Settings, "Settings")
        }
    }
}