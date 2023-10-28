package org.senti.lens.db

import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import org.senti.lens.models.Tag


interface TagDao {

    fun getAllTags(): Flow<List<Tag>>
    suspend fun createTag(tag: Tag): Tag
    suspend fun getTag(uuid: UUID): Tag?
    suspend fun updateTag(tag: Tag): Tag?
    suspend fun deleteTag(tag: Tag)
    suspend fun deleteTags(tags: List<Tag>?)
    suspend fun getAllTagsSync(): List<Tag>
    suspend fun upsertTag(tag: Tag)
    suspend fun finallyDeleteTag(tag: Tag)
}
