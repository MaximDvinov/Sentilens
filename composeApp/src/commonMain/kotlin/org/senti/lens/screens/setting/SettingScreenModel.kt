package org.senti.lens.screens.setting

import cafe.adriel.voyager.core.model.StateScreenModel
import cafe.adriel.voyager.core.model.coroutineScope
import kotlinx.coroutines.launch
import org.senti.lens.models.Tag
import org.senti.lens.repositories.DbTagsRepositoryImpl
import org.senti.lens.repositories.TagsRepository


class SettingScreenModel(private val tagsRepository: TagsRepository) :
    StateScreenModel<SettingScreenModel.UiState>(UiState()) {
    data class UiState(
        val tags: List<Pair<Tag, Boolean>>? = null,
    )

    sealed class Intent {
        data class SelectTag(val tag: Tag) : Intent()
        object DeleteTags : Intent()
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
