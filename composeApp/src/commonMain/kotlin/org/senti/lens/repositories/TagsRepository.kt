package org.senti.lens.repositories

import kotlinx.coroutines.flow.Flow
import org.senti.lens.db.TagDao
import org.senti.lens.models.Tag

interface TagsRepository {
    fun getTags(): Flow<List<Tag>>

    suspend fun deleteTag(tag: Tag)
    suspend fun deleteTags(tags: List<Tag>?)
    suspend fun getTagsSync(): List<Tag>
    suspend fun upsertTag(tags: Tag)
    suspend fun createTag(tag: Tag)
    suspend fun updateTag(tags: Tag)
    suspend fun finallyDeleteTag(tag: Tag)
}

class DbTagsRepositoryImpl(private val tagDao: TagDao) : TagsRepository {
    override fun getTags(): Flow<List<Tag>> {
        return tagDao.getAllTags()
    }

    override suspend fun deleteTag(tag: Tag) = tagDao.deleteTag(tag)
    override suspend fun deleteTags(tags: List<Tag>?) {
        tagDao.deleteTags(tags)
    }

    override suspend fun getTagsSync(): List<Tag> = tagDao.getAllTagsSync()
    override suspend fun upsertTag(tags: Tag) {
        tagDao.upsertTag(tags)
    }

    override suspend fun createTag(tag: Tag) {
        tagDao.createTag(tag)
    }

    override suspend fun updateTag(tags: Tag) {
        tagDao.updateTag(tags)
    }

    override suspend fun finallyDeleteTag(tag: Tag) {
        tagDao.finallyDeleteTag(tag)
    }
}