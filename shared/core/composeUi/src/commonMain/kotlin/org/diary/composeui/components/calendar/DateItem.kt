package org.diary.composeui.components.calendar

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import kotlinx.datetime.LocalDate
import org.diary.composeui.icons.Emoji
import org.diary.composeui.theme.SentimentColor
import org.diary.composeui.theme.sixDpShape

@Stable
@Immutable
data class DateItem(@Stable val date: LocalDate, val sentiment: SentimentItem?)

@Composable
fun DateItem(modifier: Modifier = Modifier, data: DateItem) {
    Column(
        modifier = modifier
            .clip(sixDpShape)
            .background(data.sentiment?.color ?: SentimentColor.UNKNOWN.value)
            .padding(vertical = 4.dp, horizontal = 6.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        data.sentiment?.icon?.invoke() ?: Image(
            modifier = Modifier,
            imageVector = Emoji.Unknown,
            contentDescription = null
        )

        Text(
            text = data.date.dayOfMonth.toString(),
            style = MaterialTheme.typography.body1,
            color = Color.White
        )
    }
}
