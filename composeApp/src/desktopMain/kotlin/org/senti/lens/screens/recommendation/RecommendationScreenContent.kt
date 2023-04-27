package org.senti.lens.screens.recommendation

import androidx.compose.foundation.HorizontalScrollbar
import androidx.compose.foundation.LocalScrollbarStyle
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.rememberScrollbarAdapter
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.key
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.senti.lens.models.Recommendation
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.onBackground

@Composable
actual fun RecommendationScreenContent(
    modifier: Modifier, recommendationList: List<Recommendation>
) {
    val state = rememberLazyListState()
    Box(modifier = modifier.fillMaxSize().padding(vertical = 16.dp)) {
        LazyRow(
            modifier = Modifier.fillMaxSize(),
            state = state,
            contentPadding = PaddingValues(horizontal = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            recommendationList.forEach {
                item {
                    key(it){
                        Box(modifier = Modifier.widthIn(max = 300.dp)) {
                            RecommendationItem(it)
                        }
                    }

                }
            }
        }

        HorizontalScrollbar(
            modifier = Modifier.align(Alignment.BottomStart).fillMaxWidth()
                .padding(horizontal = 16.dp),
            adapter = rememberScrollbarAdapter(state),
            style = LocalScrollbarStyle.current.copy(
                hoverColor = MaterialTheme.colors.onBackground.copy(
                    0.3f
                ), shape = defaultShape, unhoverColor = MaterialTheme.colors.onBackground.copy(
                    0.03f
                ), thickness = 6.dp
            )
        )
    }


}