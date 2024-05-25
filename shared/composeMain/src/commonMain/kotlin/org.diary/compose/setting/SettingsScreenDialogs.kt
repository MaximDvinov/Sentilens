package org.diary.compose.setting

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import org.diary.composeui.components.DefaultDialogContainer
import org.diary.composeui.components.PasswordTextField
import org.diary.composeui.components.PrimaryButton
import org.diary.composeui.components.SecondaryButton
import org.diary.composeui.components.SingleLineTextField


@Composable
fun SingleFieldChangeDialog(
    modifier: Modifier = Modifier,
    text: String,
    title: String,
    placeholder: String = "",
    onConfirm: (String) -> Unit,
    onDismiss: () -> Unit,
) {
    val (textState, onTextChange) = remember { mutableStateOf(text) }
    var errorState by remember { mutableStateOf("") }
    DefaultDialogContainer(
        modifier = modifier,
        onDismiss = onDismiss
    ) {
        Column(
            modifier = Modifier.padding(10.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            Text(
                title,
                modifier = Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.h2.copy(color = MaterialTheme.colors.onBackground),
                textAlign = TextAlign.Center
            )
            SingleLineTextField(
                modifier = Modifier.fillMaxWidth(),
                text = textState,
                placeholder = placeholder,
                onTextChange = onTextChange,
                nextFocus = {
                    onConfirm(textState)
                },
                keyboardType = KeyboardType.Text
            )

            Text(
                text = errorState,
                modifier = Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onError),
                textAlign = TextAlign.Center,
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                SecondaryButton(
                    modifier = Modifier.weight(1f),
                    onClick = onDismiss
                ) {
                    Text("Отмена", style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary))
                }

                PrimaryButton(modifier = Modifier.weight(1f), onClick = {
                    if (!textState.isEmpty()) {
                        onConfirm(textState)
                    } else {
                        errorState = "Поле не должно быть пустым"
                    }
                }) {
                    Text("Сохранить", style = MaterialTheme.typography.body1)
                }
            }
        }
    }
}

@Composable
fun PasswordChangeDialog(
    modifier: Modifier = Modifier,
    onConfirm: (String, String) -> Unit,
    onDismiss: () -> Unit,
) {
    val (oldPassword, onChangeOldPassword) = remember { mutableStateOf("") }
    val (newPassword, onChangeNewPassword) = remember { mutableStateOf("") }
    var errorState by remember { mutableStateOf("") }
    DefaultDialogContainer(
        modifier = modifier,
        onDismiss = onDismiss
    ) {
        Column(
            modifier = Modifier.padding(10.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            Text(
                "Изменить пароль",
                modifier = Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.h2.copy(color = MaterialTheme.colors.onBackground),
                textAlign = TextAlign.Center
            )
            PasswordTextField(
                modifier = Modifier.fillMaxWidth(),
                text = oldPassword,
                placeholder = "Введите старый пароль",
                onTextChange = onChangeOldPassword,
                nextFocus = { },
                keyboardType = KeyboardType.Text
            )

            PasswordTextField(
                modifier = Modifier.fillMaxWidth(),
                text = newPassword,
                placeholder = "Введите новый пароль",
                onTextChange = onChangeNewPassword,
                nextFocus = { },
                keyboardType = KeyboardType.Text
            )

            Text(
                text = errorState,
                modifier = Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onError),
                textAlign = TextAlign.Center,
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                SecondaryButton(
                    modifier = Modifier.weight(1f),
                    onClick = onDismiss
                ) {
                    Text("Отмена", style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary))
                }

                PrimaryButton(modifier = Modifier.weight(1f), onClick = {
                    if (oldPassword.isNotEmpty() && newPassword.isNotEmpty()) {
                        onConfirm(oldPassword, newPassword)
                    } else {
                        errorState = "Поля не должны быть пустым"
                    }
                }) {
                    Text("Сохранить", style = MaterialTheme.typography.body1)
                }
            }
        }
    }
}

@Composable
fun ConfirmDialog(
    modifier: Modifier = Modifier,
    title: String,
    subtitle: String,
    onConfirm: () -> Unit,
    onDismiss: () -> Unit,
) {
    DefaultDialogContainer(
        modifier = modifier,
        onDismiss = onDismiss
    ) {
        Column(
            modifier = Modifier.padding(10.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            Text(
                title,
                modifier = Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.h2.copy(color = MaterialTheme.colors.onBackground),
                textAlign = TextAlign.Center
            )

            Text(
                subtitle,
                modifier = Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onBackground),
                textAlign = TextAlign.Center
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                SecondaryButton(
                    modifier = Modifier.weight(1f),
                    onClick = onDismiss
                ) {
                    Text("Отмена", style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary))
                }

                PrimaryButton(modifier = Modifier.weight(1f), onClick = onConfirm) {
                    Text("Подтвердить", style = MaterialTheme.typography.body1)
                }
            }
        }
    }
}