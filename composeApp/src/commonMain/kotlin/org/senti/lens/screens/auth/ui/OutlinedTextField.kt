package org.senti.lens.screens.auth.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.MaterialTheme
import androidx.compose.material.OutlinedTextField
import androidx.compose.material.Text
import androidx.compose.material.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import org.senti.lens.theme.defaultShape

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun AuthTextField(
    modifier: Modifier = Modifier,
    text: String,
    placeholder: String,
    style: TextStyle = MaterialTheme.typography.body1,
    onTextChange: (String) -> Unit
) {
    OutlinedTextField(
        modifier = modifier,
        value = text,
        shape = defaultShape,
        onValueChange = onTextChange,
        textStyle = style.copy(color = MaterialTheme.colors.onSecondary),
        singleLine = true,
        maxLines = 1,
        placeholder = {
            Text(
                text = placeholder,
                style = style.copy(color = MaterialTheme.colors.onSecondary.copy(0.6f))
            )
        },
        colors = TextFieldDefaults.outlinedTextFieldColors(
            textColor = MaterialTheme.colors.onSecondary,
            backgroundColor = MaterialTheme.colors.secondary,
            focusedBorderColor = MaterialTheme.colors.primary,
            unfocusedBorderColor = MaterialTheme.colors.onSecondary.copy(
                alpha = 0.2f
            )
        ),
    )

}