package org.senti.lens.repositories

import org.senti.lens.models.Note
import org.senti.lens.models.Tag
import org.senti.lens.models.notes
import org.senti.lens.models.tags

interface TagsRepository {
    suspend fun getTags(): List<Tag>

}

class TagsRepositoryImpl : TagsRepository {
    override suspend fun getTags(): List<Tag> {
        return tags
    }

    companion object {
        val instance = TagsRepositoryImpl()
    }
}