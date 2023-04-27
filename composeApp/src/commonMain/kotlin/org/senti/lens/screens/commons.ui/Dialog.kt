package org.senti.lens.screens.commons.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.unit.dp
import org.senti.lens.generalElements.fadingEdge
import org.senti.lens.models.Tag
import org.senti.lens.screens.homeNotes.elements.TagItem
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary


@Composable
fun DialogContent(
    modifier: Modifier = Modifier.background(MaterialTheme.colors.secondary),
    tags: List<Tag>?,
    selectedTags: List<Tag>?,
    onSaveClick: (List<Tag>) -> Unit,
    onDismissRequest: () -> Unit
) {
    var tagsState by remember { mutableStateOf(tags) }
    var selectedTagsState by remember { mutableStateOf(selectedTags) }
    val (tagName, onChangeTagName) = remember { mutableStateOf("") }

    Column(
        modifier = Modifier.clip(defaultShape).then(modifier),
    ) {
        HeaderDialog(selectedTagsState, onSaveClick, onDismissRequest)

        TagsDialog(tagsState, selectedTagsState) { tag ->
            selectedTagsState = if (selectedTagsState?.contains(tag) == true) {
                selectedTagsState?.minus(tag)
            } else {
                selectedTagsState?.plus(tag)
            }
        }

        TextFieldDialog(tagName, onChangeTagName) {
            tagsState = tagsState?.plus(Tag(name = tagName))
        }
    }
}

@Composable
fun TextFieldDialog(
    tagName: String,
    onChangeTagName: (String) -> Unit,
    onChangeTagsState: (Tag) -> Unit
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier.padding(start = 16.dp, end = 16.dp, bottom = 16.dp)
    ) {
        BasicTextField(
            modifier = Modifier
                .weight(1f),
            value = tagName,
            onValueChange = onChangeTagName,
            textStyle = MaterialTheme.typography.body1.copy(MaterialTheme.colors.onSecondary),
            singleLine = true,
            cursorBrush = SolidColor(MaterialTheme.colors.onSecondary),
            decorationBox = { innerTextField ->
                Box(
                    Modifier.weight(1f).height(32.dp),
                    contentAlignment = Alignment.CenterStart
                ) {
                    if (tagName.isEmpty()) {
                        Text(
                            text = "Введите тег",
                            style = MaterialTheme.typography.body1.copy(
                                color = MaterialTheme.colors.onSecondary.copy(
                                    0.6f
                                )
                            )
                        )
                    }
                    innerTextField()
                }
            }
        )

        if (tagName.isNotEmpty()) {
            Box(
                Modifier
                    .size(32.dp)
                    .clip(defaultShape)
                    .clickable {
                        if (tagName.isNotBlank()) {
                            onChangeTagsState(Tag(name = tagName))
                            onChangeTagName("")
                        }
                    }
                    .padding(4.dp)) {
                Icon(
                    Icons.Default.Add,
                    contentDescription = "add tag",
                    modifier = Modifier.fillMaxSize()
                )
            }
        }
    }

}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun TagsDialog(
    tagsState: List<Tag>?,
    selectedTagsState: List<Tag>?,
    changeSelectedTags: (Tag) -> Unit
) {
    FlowRow(
        modifier = Modifier.fillMaxWidth().height(100.dp)
            .padding(horizontal = 16.dp)
            .verticalScroll(
                rememberScrollState()
            ),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = { size, space -> 10 }
    ) {
        tagsState?.forEach {
            TagItem(
                modifier = Modifier.padding(bottom = 8.dp),
                text = it.name,
                selected = selectedTagsState?.contains(it) == true,
                onSelect = { changeSelectedTags(it) })
        }
    }
}

@Composable
fun HeaderDialog(
    selectedTagsState1: List<Tag>?,
    onSaveClick: (List<Tag>) -> Unit,
    onDismissRequest: () -> Unit
) {
    Row(modifier = Modifier.fillMaxWidth()) {
        Text(
            "Теги",
            style = MaterialTheme.typography.body1.copy(color = MaterialTheme.colors.onSecondary),
            modifier = Modifier
                .weight(1f)
                .padding(16.dp)
        )
        Text(
            "Сохранить",
            style = MaterialTheme.typography.body1,
            color = MaterialTheme.colors.primary,
            modifier = Modifier
                .clickable {
                    selectedTagsState1?.let { onSaveClick(it) }
                    onDismissRequest()
                }
                .padding(16.dp)
        )
    }
}