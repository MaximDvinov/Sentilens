package org.diary.advice.list

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.staggeredgrid.LazyHorizontalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridCells
import androidx.compose.foundation.lazy.staggeredgrid.items
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.ArrowRightCircle
import io.kamel.core.Resource
import io.kamel.core.getOrNull
import io.kamel.image.asyncPainterResource
import org.diary.composeui.LoadState
import org.diary.composeui.components.ActionTopBar
import org.diary.composeui.components.ErrorSnackbar
import org.diary.composeui.components.LoadIndicator
import org.diary.composeui.components.tileBack
import org.diary.composeui.theme.defaultShape
import org.diary.navigation.koinNavigatorScreenModel
import org.diary.utils.TypeDevice
import org.diary.utils.getTypeDevice
import org.diary.utils.openLink

class AdvicesScreen : Screen {
    @OptIn(ExperimentalMaterialApi::class, ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val screenModel = koinNavigatorScreenModel<AdvicesScreenModel>(navigator)
        val state by screenModel.state.collectAsState()
        val windowSizeClass = calculateWindowSizeClass()

        Column {
            ActionTopBar(
                modifier = Modifier.padding(start = 16.dp, end = 16.dp, top = 16.dp).fillMaxWidth(),
                title = "Советы",
                leftButtonIcon = FeatherIcons.ArrowLeft,
                onClickLeft = { navigator.pop() },
                rightButtonIcon = if (getTypeDevice() != TypeDevice.MOBILE) FeatherIcons.ArrowRightCircle else null,
                onClickRight = {
                    screenModel.handleIntent(AdviceEvent.LoadRecommendations)
                },
                textAlign = TextAlign.Left
            )
            if (windowSizeClass.widthSizeClass == WindowWidthSizeClass.Compact) {
                CompactAdviceScreen(state, screenModel)
            } else {
                ExpandAdviceScreen(state, screenModel)
            }
        }

    }

}

@Composable
@OptIn(ExperimentalMaterialApi::class)
fun CompactAdviceScreen(
    state: AdviceState,
    screenModel: AdvicesScreenModel
) {
    val refreshState = rememberPullRefreshState(
        state.loadState is LoadState.Loading, onRefresh = {
            screenModel.handleIntent(AdviceEvent.LoadRecommendations)
        }, refreshThreshold = 80.dp
    )

    val offset by animateDpAsState(
        if (state.loadState is LoadState.Loading) 58.dp else minOf(
            (refreshState.progress * 80).dp + 8.dp, 80.dp
        ), animationSpec = tween(if (refreshState.progress > 0) 0 else 300)
    )

    Box(modifier = Modifier.fillMaxSize()) {
        LoadIndicator(
            state.loadState is LoadState.Loading,
            offset,
            refreshState = refreshState,
            text = "Обновление",
            text2 = "Обновить"
        )

        if (state.loadState is LoadState.Error) {
            val error = state.loadState.message
            ErrorSnackbar(error = error,
                onDismiss = {
                    screenModel.handleIntent(AdviceEvent.CloseErrorMessage)
                })
        }

        LazyColumn(
            modifier = Modifier.fillMaxSize().pullRefresh(refreshState).padding(top = offset),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            items(state.recommendations) {
                AdviceCard(
                    modifier = Modifier.height(IntrinsicSize.Max).fillMaxWidth(),
                    recommendations = it
                )
            }
        }

    }
}

@Composable
fun ExpandAdviceScreen(
    state: AdviceState,
    screenModel: AdvicesScreenModel
) {
    Box(modifier = Modifier.fillMaxSize()) {
        if (state.loadState is LoadState.Error) {
            val error = state.loadState.message
            ErrorSnackbar(error = error,
                onDismiss = {
                    screenModel.handleIntent(AdviceEvent.CloseErrorMessage)
                })
        }

        LazyVerticalStaggeredGrid(
            modifier = Modifier.fillMaxSize(),
            columns = StaggeredGridCells.Adaptive(320.dp),
            contentPadding = PaddingValues(16.dp),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalItemSpacing = 10.dp
        ) {
            items(state.recommendations) {
                AdviceCard(
                    modifier = Modifier.fillMaxWidth(),
                    recommendations = it
                )
            }
        }

    }
}

@Composable
fun AdviceCard(modifier: Modifier, recommendations: Recommendations) {
    val painter = asyncPainterResource(recommendations.image)
    val uriHandler = LocalUriHandler.current

    Box(modifier
        .clip(defaultShape)
        .clickable { uriHandler.openUri(recommendations.url) }
        .background(MaterialTheme.colors.secondary)
    ) {
        if (painter is Resource.Success) {
            Image(
                painter.value,
                modifier = Modifier.matchParentSize(),
                contentScale = ContentScale.Crop,
                contentDescription = null
            )
        }

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    Brush.verticalGradient(
                        colors = listOf(
                            MaterialTheme.colors.secondary.copy(0.8f),
                            MaterialTheme.colors.secondary.copy(0.95f)
                        ),
                    )
                )
                .padding(horizontal = 16.dp, vertical = 36.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text(
                text = recommendations.title,
                style = MaterialTheme.typography.h2.copy(color = MaterialTheme.colors.onSecondary),
                textAlign = TextAlign.Center
            )
            Text(
                text = recommendations.content,
                style = MaterialTheme.typography.caption.copy(color = MaterialTheme.colors.onSecondary),
                textAlign = TextAlign.Center
            )
        }
    }
}
