package org.senti.lens.screens.recommendation

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Recommendation

@OptIn(ExperimentalFoundationApi::class)
@Composable
actual fun RecommendationScreenContent(
    modifier: Modifier,
    recommendationList: List<Recommendation>
) {
    val pagerState = rememberPagerState()

    Column(modifier = modifier.fillMaxSize()) {
        HorizontalPager(
            modifier = Modifier,
            pageCount = recommendationList.size,
            contentPadding = PaddingValues(16.dp),
            verticalAlignment = Alignment.Top
        ) { page ->
            Box(
                Modifier.padding(8.dp).fillMaxSize()
            ) {
                RecommendationItem(recommendationList[page])
            }
        }
    }
}