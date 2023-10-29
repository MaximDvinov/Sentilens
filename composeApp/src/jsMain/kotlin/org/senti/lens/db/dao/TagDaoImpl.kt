package org.senti.lens.db.dao

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.filter
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.update
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import org.senti.lens.db.TagDao
import org.senti.lens.models.Tag
import kotlin.random.Random

class TagDaoImpl : TagDao {
    val tags = MutableStateFlow<List<Tag>>(listOf())
    override fun getAllTags(): Flow<List<Tag>> {
        return tags.map { it.filter { !it.isDeleted } }
    }

    override suspend fun createTag(tag: Tag): Tag {
        tags.update {
            it + tag.copy(uuid = tag.uuid ?: UUID.generateUUID(Random))
        }
        return tag
    }

    override suspend fun getTag(uuid: UUID): Tag? {
        return tags.value.find { it.uuid == uuid }
    }

    override suspend fun updateTag(tag: Tag): Tag? {
        tags.value.map { if (it.uuid == tag.uuid) tag else it }
        return tag
    }

    override suspend fun deleteTag(tag: Tag) {
        tags.value.map { if (it.uuid == tag.uuid) it.copy(isDeleted = true) else it }
    }

    override suspend fun deleteTags(tags: List<Tag>?) {
        tags?.forEach { deleteTag(it) }
    }

    override suspend fun getAllTagsSync(): List<Tag> {
        return tags.value
    }

    override suspend fun upsertTag(tag: Tag) {
        tags.update {
            it.map { if (it.uuid == tag.uuid) tag else it }
        }
    }

    override suspend fun finallyDeleteTag(tag: Tag) {
        tags.update {
            it - tag
        }
    }
}