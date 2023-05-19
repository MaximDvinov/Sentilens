package org.senti.lens.screens.setting

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import com.russhwolf.settings.ObservableSettings
import kotlinx.coroutines.launch
import org.senti.lens.models.Tag
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.screens.auth.login.TOKEN


class SettingScreenModel(
    private val tagsRepository: TagsRepository,
    private val settings: ObservableSettings
) :
    StateScreenModel<SettingScreenModel.UiState>(UiState()) {
    data class UiState(
        val tags: List<Pair<Tag, Boolean>>? = null,
    )

    sealed class Intent {
        data class SelectTag(val tag: Tag) : Intent()
        object DeleteTags : Intent()
        object Logout : Intent()
    }

    init {
        coroutineScope.launch {
            tagsRepository.getTags().collect {
                mutableState.value = mutableState.value.copy(tags = it.map { tag -> tag to false })
            }
        }
    }

    fun processIntent(intent: Intent) {
        coroutineScope.launch {
            mutableState.value = reduce(mutableState.value, intent)
        }
    }

    private suspend fun reduce(oldState: UiState, intent: Intent): UiState {
        return when (intent) {
            is Intent.SelectTag -> changeTag(intent.tag, oldState)
            is Intent.DeleteTags -> deleteTags(oldState)
            Intent.Logout -> {
                settings.remove(TOKEN)
                oldState
            }
        }
    }

    private fun changeTag(
        tag: Tag,
        oldState: UiState
    ): UiState {
        val newTags =
            oldState.tags?.map { (it, isSelected) -> if (it.uuid == tag.uuid) it to !isSelected else it to isSelected }

        return oldState.copy(tags = newTags)
    }

    private suspend fun deleteTags(oldState: UiState): UiState {
        tagsRepository.deleteTags(oldState.tags?.filter { it.second }?.map { it.first })
        return oldState
    }
}
