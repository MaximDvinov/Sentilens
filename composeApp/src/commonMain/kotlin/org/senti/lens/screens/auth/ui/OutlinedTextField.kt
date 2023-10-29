package org.senti.lens.screens.auth.ui

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.OutlinedTextField
import androidx.compose.material.Text
import androidx.compose.material.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import compose.icons.FeatherIcons
import compose.icons.feathericons.Eye
import compose.icons.feathericons.EyeOff
import org.senti.lens.theme.defaultShape

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun AuthTextField(
    modifier: Modifier = Modifier,
    text: String,
    placeholder: String,
    style: TextStyle = MaterialTheme.typography.body1,
    onTextChange: (String) -> Unit,
    keyboardType: KeyboardType,
    nextFocus: () -> Unit,
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
        keyboardOptions = KeyboardOptions(keyboardType = keyboardType, imeAction = ImeAction.Done),
        keyboardActions = KeyboardActions(onDone = {
            nextFocus()
        })

    )
}

@OptIn(ExperimentalMaterialApi::class, ExperimentalAnimationApi::class)
@Composable
fun PasswordTextField(
    modifier: Modifier = Modifier,
    text: String,
    placeholder: String,
    style: TextStyle = MaterialTheme.typography.body1,
    onTextChange: (String) -> Unit,
    keyboardType: KeyboardType,
    nextFocus: () -> Unit,
) {
    var showPassword by remember { mutableStateOf(false) }
    val focusManager = LocalFocusManager.current

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
        trailingIcon = {
            val (icon, iconColor) = if (showPassword) {
                Pair(
                    FeatherIcons.Eye,
                    MaterialTheme.colors.onSecondary
                )
            } else {
                Pair(FeatherIcons.EyeOff, MaterialTheme.colors.onSecondary)
            }

            IconButton(onClick = { showPassword = !showPassword }) {
                AnimatedContent(icon) {
                    Icon(
                        it,
                        contentDescription = "Visibility",
                        tint = iconColor
                    )
                }
            }
        },
        keyboardActions = KeyboardActions(
            onDone = {
                nextFocus()
            }
        ),
        keyboardOptions = KeyboardOptions(keyboardType = keyboardType, imeAction = ImeAction.Done),
        colors = TextFieldDefaults.outlinedTextFieldColors(
            textColor = MaterialTheme.colors.onSecondary,
            backgroundColor = MaterialTheme.colors.secondary,
            focusedBorderColor = MaterialTheme.colors.primary,
            unfocusedBorderColor = MaterialTheme.colors.onSecondary.copy(
                alpha = 0.2f
            )
        ),
        visualTransformation = if (showPassword) VisualTransformation.None
        else PasswordVisualTransformation()
    )
}

