package org.senti.lens.screens.setting

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.core.model.rememberScreenModel
import cafe.adriel.voyager.core.screen.Screen
import cafe.adriel.voyager.navigator.LocalNavigator
import cafe.adriel.voyager.navigator.currentOrThrow
import com.russhwolf.settings.ObservableSettings
import compose.icons.FeatherIcons
import compose.icons.feathericons.Moon
import compose.icons.feathericons.Sun
import compose.icons.feathericons.Tablet
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import org.senti.lens.generalElements.SecondaryButton
import org.senti.lens.generalElements.SecondaryIconButton
import org.senti.lens.models.Tag
import org.senti.lens.screens.commons.ui.TagsFlow
import org.senti.lens.theme.h1
import org.senti.lens.theme.h2

class SettingScreen : Screen, KoinComponent {
    @Composable
    override fun Content() {
        val settingScreenModel = rememberScreenModel { SettingScreenModel() }
        val state by settingScreenModel.state.collectAsState()
        val settings: ObservableSettings by inject()
        val navigator = LocalNavigator.currentOrThrow

        var isDarkTheme by remember(false) {
            mutableStateOf(
                settings.getBooleanOrNull(
                    "theme"
                )
            )
        }

        SettingScreenContent(isDarkTheme = isDarkTheme, state = state, onChangeTag = {
            settingScreenModel.processIntent(SettingScreenModel.Intent.SelectTag(it))
        }, onDeleteTag = {
            settingScreenModel.processIntent(SettingScreenModel.Intent.DeleteTags)
        }, onChangeTheme = {
            isDarkTheme = when (isDarkTheme) {
                true -> {
                    settings.putBoolean("theme", false)
                    false
                }

                false -> {
                    settings.remove("theme")
                    null
                }

                null -> {
                    settings.putBoolean("theme", true)
                    true
                }
            }

        }) { navigator.pop() }

    }
}

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun SettingScreenContent(
    isDarkTheme: Boolean?,
    onDeleteTag: () -> Unit,
    state: SettingScreenModel.UiState,
    onChangeTag: (Tag) -> Unit,
    onChangeTheme: () -> Unit,
    onBackClick: () -> Unit
) {
    Column(
        modifier = Modifier.fillMaxSize().padding(horizontal = 16.dp),
    ) {
        Row(
            modifier = Modifier.padding(vertical = 16.dp).fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            SecondaryIconButton(
                onClick = onBackClick,
            ) {
                Icon(Icons.Default.ArrowBack, "Back")
            }

            Text(
                "Настройки",
                style = MaterialTheme.typography.h1,
                color = MaterialTheme.colors.onBackground,
                modifier = Modifier.weight(1f)
            )
        }

        Column(modifier = Modifier.widthIn(max = 600.dp).align(Alignment.CenterHorizontally)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    "Сменить тему",
                    style = MaterialTheme.typography.h2,
                    color = MaterialTheme.colors.onBackground,
                    modifier = Modifier.weight(1f)
                )

                IconButton(onClick = onChangeTheme) {
                    AnimatedContent(isDarkTheme) {
                        when (it) {
                            true -> Icon(FeatherIcons.Moon, "theme")
                            false -> Icon(FeatherIcons.Sun, "theme")
                            null -> Icon(FeatherIcons.Tablet, "theme")
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))


            if (!state.tags.isNullOrEmpty()) {
                Text(
                    "Теги",
                    style = MaterialTheme.typography.h2,
                    color = MaterialTheme.colors.onBackground,
                    modifier = Modifier
                )
                Spacer(modifier = Modifier.height(8.dp))

                TagsFlow(
                    modifier = Modifier.fillMaxWidth().heightIn(max = 300.dp)
                        .padding()
                        .verticalScroll(
                            rememberScrollState()
                        ),
                    tagsState = state.tags.map { it.first },
                    selectedTagsState = state.tags.filter { it.second }.map { it.first },
                    changeSelectedTags = onChangeTag
                )
                Spacer(modifier = Modifier.height(16.dp))

                AnimatedVisibility(state.tags.any { it.second }) {
                    SecondaryButton(modifier = Modifier.fillMaxWidth(), onClick = onDeleteTag) {
                        Text(
                            "Удалить теги",
                            style = MaterialTheme.typography.body1.copy(MaterialTheme.colors.onSecondary)
                        )
                    }
                }

            }
        }
    }
}
