package org.diary.stats.screens

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import kotlinx.collections.immutable.toPersistentMap
import kotlinx.datetime.LocalDate
import org.diary.composeui.components.ActionTopBar
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.components.calendar.SentimentItem
import org.diary.composeui.icons.Emoji
import org.diary.composeui.isCompact
import org.diary.composeui.theme.SentimentColor
import org.diary.stats.screens.size.ScreenCompact
import org.diary.stats.screens.size.ScreenExpanded

class HomeStatsScreen : Screen {
    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val screenModel = navigator.koinNavigatorScreenModel<StatsScreenModel>()
        val windowSizeClass = calculateWindowSizeClass()

        val state by screenModel.state.collectAsState()

        val calendarDays by remember(state.sentimentForMonth) {
            derivedStateOf {
                state.sentimentForMonth
                    .mapValues {
                        SentimentItem({
                            Image(Emoji.Great, null, Modifier)
                        }, SentimentColor.GREAT.value)
                    }
                    .toPersistentMap()
            }
        }

        Column(Modifier.fillMaxSize()) {
            ActionTopBar(
                modifier = Modifier.fillMaxWidth().padding(start = 16.dp, end = 16.dp, top = 16.dp),
                title = "Статистика",
                onClickLeft = {
                    navigator.pop()
                },
                leftButtonIcon = FeatherIcons.ArrowLeft,
                textAlign = TextAlign.Start
            )

            if (windowSizeClass.isCompact()) {
                ScreenCompact(
                    state = state,
                    changeMonth = screenModel::changeMonth,
                    onSelectDate = screenModel::onSelectDate,
                    calendarDays = calendarDays
                )
            } else {
                ScreenExpanded(
                    modifier = Modifier.padding(horizontal = 16.dp),
                    state = state,
                    changeMonth = screenModel::changeMonth,
                    onSelectDate = screenModel::onSelectDate,
                    calendarDays = calendarDays
                )
            }

        }
    }
}

fun StatsScreenModel.changeMonth(monthWithYear: MonthWithYear) {
    onEvent(StatsScreenEvent.ChangeMonth(monthWithYear))
}

fun StatsScreenModel.onSelectDate(date: LocalDate) {

}

fun Modifier.width(isMax: Boolean, value: Dp) = if (isMax) fillMaxWidth() else widthIn(max = value)
