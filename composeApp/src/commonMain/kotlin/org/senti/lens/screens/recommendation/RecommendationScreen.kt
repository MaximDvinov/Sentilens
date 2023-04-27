package org.senti.lens.screens.recommendation

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.PagerState
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.CircularProgressIndicator
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.screen.Screen
import com.seiko.imageloader.ImageRequestState
import com.seiko.imageloader.model.ImageRequest
import com.seiko.imageloader.model.ImageRequestEvent
import com.seiko.imageloader.rememberAsyncImagePainter
import org.senti.lens.generalElements.PrimaryButton
import org.senti.lens.models.Recommendation
import org.senti.lens.models.recommendationsList
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.h2
import org.senti.lens.theme.onPrimary
import org.senti.lens.theme.onSecondary
import org.senti.lens.theme.secondary
import kotlin.math.absoluteValue

class RecommendationScreen : Screen {
    @Composable
    override fun Content() {
        RecommendationScreenContent(modifier = Modifier, recommendationList = recommendationsList)
    }
}

@Composable
expect fun RecommendationScreenContent(
    modifier: Modifier = Modifier, recommendationList: List<Recommendation>
)

@Composable
fun RecommendationItem(recommendation: Recommendation) {
    LazyColumn(
        modifier = Modifier.clip(defaultShape).background(MaterialTheme.colors.secondary),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(10.dp, Alignment.Top),
        contentPadding = PaddingValues(8.dp)
    ) {
        item{
            Column(
                Modifier.padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                if (recommendation.imageUrl != null) {
                    ImageItem(
                        modifier = Modifier.padding(horizontal = 40.dp).heightIn(max = 130.dp)
                            .aspectRatio(1f),
                        url = recommendation.imageUrl
                    )
                }

                Text(recommendation.title, style = MaterialTheme.typography.h2, color = MaterialTheme.colors.onSecondary)
                Text(
                    recommendation.description,
                    style = MaterialTheme.typography.body1,
                    color = MaterialTheme.colors.onSecondary
                )

            }
        }

        if (recommendation.url != null) {
            item{
                PrimaryButton(
                    onClick = {},
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(8.dp)
                ) {
                    Text(
                        recommendation.title,
                        style = MaterialTheme.typography.body1,
                        color = MaterialTheme.colors.onPrimary
                    )
                }
            }

        }
    }
}

@Composable
fun ImageItem(
    modifier: Modifier = Modifier,
    url: String,
    blurRadius: Int = 0,
) {
    Box(modifier.clip(defaultShape), Alignment.Center) {
        val request = remember(url, blurRadius) {
            ImageRequest {
                data(url)
            }
        }
        val painter = rememberAsyncImagePainter(request)
        Image(
            painter = painter,
            contentDescription = null,
            contentScale = ContentScale.Crop,
            modifier = Modifier.fillMaxSize(),
        )
        when (val requestState = painter.requestState) {
            is ImageRequestState.Loading -> {
                val event = requestState.event
                if (event is ImageRequestEvent.ReadDiskCache && !event.hasCache) {
                    CircularProgressIndicator()
                }
            }

            is ImageRequestState.Failure -> {
                Text(requestState.error.message ?: "Error", modifier = Modifier.padding(16.dp), color = MaterialTheme.colors.onSecondary)
            }

            ImageRequestState.Success -> Unit
        }
    }
}