package org.senti.lens.screens.recommendation

import androidx.compose.animation.Crossfade
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.CircularProgressIndicator
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.core.screen.uniqueScreenKey
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import io.kamel.core.Resource
import io.kamel.image.KamelImage
import io.kamel.image.asyncPainterResource
import org.koin.core.component.KoinComponent
import org.koin.core.component.get
import org.senti.lens.RecommendationScreenContent
import org.senti.lens.models.Advice
import org.senti.lens.openLink
import org.senti.lens.screens.commons.ui.PrimaryButton
import org.senti.lens.screens.commons.ui.SecondaryIconButton
import org.senti.lens.theme.defaultShape

class RecommendationScreen(private val id: String) : Screen, KoinComponent {
    override val key = uniqueScreenKey

    @Composable
    override fun Content() {
        val navigator = LocalNavigator.currentOrThrow
        val screenModel = rememberScreenModel {
            RecommendationScreenModel(get(), id)
        }

        val state by screenModel.state.collectAsState()

        Column {
            Row(
                modifier = Modifier.padding(top = 16.dp, start = 16.dp, end = 16.dp).fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                SecondaryIconButton(
                    onClick = {
                        navigator.pop()
                    },
                ) {
                    Icon(Icons.Default.ArrowBack, "Back")
                }

            }

            RecommendationScreenContent(
                modifier = Modifier,
                recommendationList = state.currentNote?.sentiment?.advices ?: listOf()
            )
        }

    }
}

@Composable
fun RecommendationItem(recommendation: Advice) {
    LazyColumn(
        modifier = Modifier.clip(defaultShape).background(MaterialTheme.colors.secondary),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp, Alignment.Top),
        contentPadding = PaddingValues(8.dp)
    ) {
        item {
            Column(
                Modifier.padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                if (recommendation.imageUrl != null) {
                    ImageItem(
                        modifier = Modifier.padding(horizontal = 40.dp).heightIn(max = 130.dp)
                            .aspectRatio(1f), url = recommendation.imageUrl
                    )
                }

                Text(
                    recommendation.title ?: "",
                    style = MaterialTheme.typography.h2,
                    color = MaterialTheme.colors.onSecondary,
                    textAlign = TextAlign.Center
                )
                Text(
                    recommendation.description ?: "",
                    style = MaterialTheme.typography.body1,
                    color = MaterialTheme.colors.onSecondary.copy(0.7f),
                    textAlign = TextAlign.Center
                )

            }
        }

        if (recommendation.url != null) {
            item {
                PrimaryButton(
                    onClick = {
                        openLink(recommendation.url)
                    },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(8.dp)
                ) {
                    Text(
                        "Открыть подборку",
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
        val painter = asyncPainterResource(url)

        Crossfade(painter) {
            when (it) {
                is Resource.Loading -> {
                    CircularProgressIndicator()
                }

                is Resource.Failure -> {
                    Text(
                        it.exception.message ?: "Error",
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colors.onSecondary
                    )
                }

                is Resource.Success -> {
                    KamelImage(
                        resource = painter,
                        contentDescription = null,
                        contentScale = ContentScale.Crop,
                        modifier = Modifier.fillMaxSize(),
                    )
                }
            }
        }
    }
}