package org.diary.stats.screens

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.persistentMapOf
import kotlinx.collections.immutable.toImmutableList
import kotlinx.collections.immutable.toPersistentList
import kotlinx.collections.immutable.toPersistentMap
import kotlinx.datetime.LocalDate
import org.diary.composeui.AutoOrientingLayout
import org.diary.composeui.components.ActionTopBar
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.components.calendar.SentimentCalendar
import org.diary.composeui.components.calendar.SentimentItem
import org.diary.composeui.icons.Emoji
import org.diary.composeui.isCompact
import org.diary.composeui.theme.SentimentColor
import org.diary.composeui.theme.defaultShape
import org.diary.data.stats.SentimentStatItemData
import org.diary.stats.components.SentimentChart
import org.diary.stats.components.SentimentInMonth

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

            AutoOrientingLayout(
                modifier = Modifier.fillMaxSize().padding(16.dp),
                horizontalArrangement = Arrangement.spacedBy(16.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp),
                isColumn = windowSizeClass.widthSizeClass == WindowWidthSizeClass.Compact
            ) {
                SentimentCalendar(
                    modifier = Modifier
                        .width(windowSizeClass.isCompact(), 360.dp)
                        .heightIn(max = 42000.dp),
                    selectedPeriod = state.selectedMonth,
                    changeMonth = {
                        screenModel.onEvent(
                            StatsScreenEvent.ChangeMonth(it)
                        )
                    },
                    onSelectDate = {},
                    items = calendarDays
                )

                SentimentInMonth(
                    modifier = Modifier
                        .weight(1f)
                        .height(300.dp)
                        .clip(defaultShape)
                        .background(MaterialTheme.colors.secondary)
                        .padding(10.dp),
                    selectedPeriod = state.selectedMonth,
                    items = state.sentimentForMonth
                )
            }

//            LazyVerticalGrid(
//                contentPadding = PaddingValues(16.dp),
//                verticalArrangement = Arrangement.spacedBy(16.dp),
//                horizontalArrangement = Arrangement.spacedBy(16.dp),
//                columns = GridCells.Adaptive(300.dp)
//            ) {
//
//            }
        }
    }
}

fun Modifier.width(isMax: Boolean, value: Dp) = if (isMax) fillMaxWidth() else widthIn(max = value)
