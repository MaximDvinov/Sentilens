package org.diary.compose.home.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListScope
import androidx.compose.foundation.lazy.items
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.registry.ScreenRegistry
import cafe.adriel.voyager.navigator.Navigator
import kotlinx.collections.immutable.ImmutableList
import org.diary.composeui.bounceClick
import org.diary.composeui.theme.defaultShape
import org.diary.diary.Note
import org.diary.diary.ui.NoteItem
import org.diary.navigation.DiaryScreenProvider
import org.diary.navigation.InitialDiaryScreenState

fun LazyListScope.actualDiaries(
    notes: ImmutableList<Note>,
    onClickAll: () -> Unit,
    onClickNote: (Note) -> Unit,
) {
    item {
        Row(
            modifier = Modifier
                .bounceClick()
                .clip(defaultShape)
                .clickable(onClick = onClickAll)
                .padding(6.dp)
                .fillMaxWidth()
        ) {
            Text(
                text = "Страницы дневника",
                style = MaterialTheme.typography.subtitle1,
                modifier = Modifier.weight(1f)
            )
            Text(
                text = "еще",
                style = MaterialTheme.typography.subtitle1.copy(MaterialTheme.colors.primary),
                modifier = Modifier
            )
        }
    }
    items(notes) {
        NoteItem(modifier = Modifier.bounceClick(),
            note = it,
            onItemClick = { onClickNote(it) },
            onDeleteItemClick = {})
    }

}

fun Navigator.navigateToDiary(diary: Note) {
    push(
        ScreenRegistry.get(
            DiaryScreenProvider.DiaryScreen(
                InitialDiaryScreenState.UpdateDiary(
                    diaryId = diary.uuid
                )
            )
        )
    )
}