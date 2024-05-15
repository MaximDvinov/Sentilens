package org.diary.stats.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.koin.koinNavigatorScreenModel
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import kotlinx.collections.immutable.persistentMapOf
import org.diary.composeui.components.ActionTopBar
import org.diary.composeui.components.calendar.MonthWithYear
import org.diary.composeui.components.calendar.SentimentCalendar
import org.diary.composeui.theme.defaultShape
import org.diary.stats.components.SentimentChart

class HomeStatsScreen : Screen {
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val screenModel = navigator.koinNavigatorScreenModel<StatsScreenModel>()

        val state by screenModel.state.collectAsState()

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

            val (selectedPeriod, onChangePeriod) = remember {
                mutableStateOf(MonthWithYear(5, 2024))
            }

            LazyColumn(
                contentPadding = PaddingValues(16.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                item {
                    SentimentCalendar(
                        modifier = Modifier.heightIn(max = 42000.dp),
                        selectedPeriod = selectedPeriod,
                        changeMonth = onChangePeriod,
                        onSelectDate = {},
                        items = persistentMapOf()
                    )
                }

                item {
                    SentimentChart(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(400.dp)
                            .clip(defaultShape)
                            .background(MaterialTheme.colors.secondary)
                            .padding(10.dp),
                        sentimentForPeriod = state.sentimentForPeriod
                    )
                }

            }

        }
    }
}
