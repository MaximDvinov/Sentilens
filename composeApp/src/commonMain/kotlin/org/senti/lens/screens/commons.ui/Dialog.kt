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
import androidx.compose.foundation.layout.wrapContentHeight
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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Tag
import org.senti.lens.screens.list.ui.TagItem
import org.senti.lens.theme.defaultShape


@Composable
fun TagDialog(
    modifier: Modifier = Modifier,
    tags: List<Tag>?,
    onCreteTagClick: (Tag) -> Unit,
    selectedTags: List<Tag>?,
    onClickTag: (Tag) -> Unit,
    onDismissRequest: () -> Unit
) {
    val selectedTagsState by remember(selectedTags) { mutableStateOf(selectedTags) }
    val (tagName, onChangeTagName) = remember { mutableStateOf("") }

    Column(
        modifier = modifier.wrapContentHeight().clip(defaultShape)
            .background(MaterialTheme.colors.background),
    ) {
        HeaderDialog(selectedTagsState, { }, onDismissRequest)

        TagsDialog(tags, selectedTagsState, onClickTag = onClickTag)

        TextFieldDialog(tagName, onChangeTagName) { tag ->
            onCreteTagClick(tag)
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
                            onChangeTagsState(Tag(
                                title = tagName,
                                isNew = true,
                            ))
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
    onClickTag: (Tag) -> Unit
) {
    TagsFlow(
        tagsState, modifier = Modifier.fillMaxWidth().height(167.dp)
            .padding(horizontal = 16.dp)
            .verticalScroll(
                rememberScrollState()
            ), selectedTagsState, onClickTag
    )
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun TagsFlow(
    tagsState: List<Tag>?,
    modifier: Modifier = Modifier,
    selectedTagsState: List<Tag>?,
    changeSelectedTags: (Tag) -> Unit,
) {
    FlowRow(
        modifier = modifier,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        tagsState?.forEach { tag ->
            TagItem(
                modifier = Modifier.padding(bottom = 8.dp),
                text = tag.title,
                selected = selectedTagsState?.find { tag.title == it.title } != null,
                onSelect = { changeSelectedTags(tag) })
        }
    }
}

@Composable
fun HeaderDialog(
    selectedTagsState: List<Tag>?,
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
            "Закрыть",
            style = MaterialTheme.typography.body1,
            color = MaterialTheme.colors.primary,
            modifier = Modifier
                .clip(defaultShape)
                .clickable {
                    selectedTagsState?.let { onSaveClick(it) }
                    onDismissRequest()
                }
                .padding(16.dp)
        )
    }
}