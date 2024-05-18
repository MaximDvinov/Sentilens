package org.diary.diary.list.editDiary.ui

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun TextField(
    modifier: Modifier = Modifier,
    text: String,
    onTextChange: (String) -> Unit,
    style: TextStyle = MaterialTheme.typography.body1,
    placeholder: String = "",
    maxLines: Int = Int.MAX_VALUE,
    paddingValues: PaddingValues = PaddingValues(),
) {

    BasicTextField(
        modifier = modifier,
        value = text,
        onValueChange = onTextChange,
        textStyle = style,
        cursorBrush = SolidColor(MaterialTheme.colors.onSecondary),
        decorationBox = { innerTextField ->
            Column(
                modifier = Modifier
            ) {
                Box(
                    modifier = Modifier.padding(paddingValues),
                ) {
                    if (text.isEmpty()) {
                        Text(
                            text = placeholder,
                            style = style.copy(color = MaterialTheme.colors.onSecondary.copy(0.6f))
                        )
                    }

                    innerTextField()
                }
            }


        },
        maxLines = maxLines,
        keyboardOptions = KeyboardOptions(capitalization = KeyboardCapitalization.Sentences)
    )
}
