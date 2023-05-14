package org.senti.lens.repositories

import kotlinx.coroutines.flow.Flow
import org.senti.lens.db.dao.TagDao
import org.senti.lens.db.dao.TagDaoImpl
import org.senti.lens.models.Tag

interface TagsRepository {
    fun getTags(): Flow<List<Tag>>

    suspend fun deleteTag(tag: Tag)
    suspend fun deleteTags(map: List<Tag>?)
}

class DbTagsRepositoryImpl(private val tagDao: TagDao) : TagsRepository {
    override fun getTags(): Flow<List<Tag>> {
        return tagDao.getAllTags()
    }

    override suspend fun deleteTag(tag: Tag) = tagDao.deleteTag(tag)
    override suspend fun deleteTags(tags: List<Tag>?) {
        tagDao.deleteTags(tags)
    }
}