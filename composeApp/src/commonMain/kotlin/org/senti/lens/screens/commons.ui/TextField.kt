package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.TextStyle
import org.senti.lens.theme.body

@Composable
fun TextField(
    modifier: Modifier = Modifier,
    text: String,
    onTextChange: (String) -> Unit,
    style: TextStyle = MaterialTheme.typography.body1,
    placeholder: String = ""
) {
    BasicTextField(modifier = modifier,
        value = text,
        onValueChange = onTextChange,
        textStyle = style,
        cursorBrush = SolidColor(MaterialTheme.colors.onSecondary),
        decorationBox = { innerTextField ->
            Box {
                if (text.isEmpty()) {
                    Text(
                        text = placeholder, style = style.copy(color = MaterialTheme.colors.onSecondary.copy(0.6f))
                    )
                }
                innerTextField()
            }
        })
}
