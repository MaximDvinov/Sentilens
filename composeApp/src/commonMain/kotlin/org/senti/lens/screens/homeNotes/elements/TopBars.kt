package org.senti.lens.screens.homeNotes.elements

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.unit.dp
import org.senti.lens.generalElements.SecondaryIconButton
import org.senti.lens.theme.h1

@Composable
fun TopBar(modifier: Modifier = Modifier, searchQuery: String, changeSearchQuery: (String) -> Unit) {
    var searchable by remember {
        mutableStateOf(false)
    }
    val focusRequester = remember { FocusRequester() }

    Row(
        modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {
        if (searchable) {
            BasicTextField(
                modifier = Modifier.weight(1f).focusRequester(focusRequester),
                value = searchQuery,
                onValueChange = changeSearchQuery,
                textStyle = h1,
                singleLine = true,
                cursorBrush = SolidColor(Color.White),
                decorationBox = { innerTextField ->
                    Box {
                        if (searchQuery.isEmpty()) {
                            Text(
                                text = "Поиск",
                                style = h1.copy(color = Color.White.copy(0.6f))
                            )
                        }
                        innerTextField()
                    }
                }
            )
            LaunchedEffect(searchable) {
                focusRequester.requestFocus()
            }

        } else {
            Text(modifier = Modifier.weight(1f), text = "Заметки", style = h1)
        }

        SecondaryIconButton(
            onClick = {
                searchable = !searchable
                if (!searchable) {
                    changeSearchQuery("")
                }
            },
        ) {

            if (searchable) {
                Icon(Icons.Default.Close, "Search")
            } else {
                Icon(Icons.Default.Search, "Search")
            }

        }
    }
}