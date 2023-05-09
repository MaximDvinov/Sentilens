package org.senti.lens.db.dao

import io.realm.kotlin.ext.query
import io.realm.kotlin.types.RealmUUID
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import org.senti.lens.db.RealmConfig.realm
import org.senti.lens.db.models.TagEntity
import org.senti.lens.models.Tag
import java.util.UUID


interface TagDao {

    fun getAllTags(): MutableStateFlow<List<Tag>>
    suspend fun createTag(tag: Tag): Tag
    suspend fun getTag(uuid: UUID): Tag?
    suspend fun updateTag(tag: Tag): Tag?
    suspend fun deleteTag(tag: Tag)
    suspend fun deleteTags(map: List<Tag>?)
}

class TagDaoImpl : TagDao {
    override fun getAllTags(): MutableStateFlow<List<Tag>> {
        val result = realm.query<TagEntity>()
        val flow: MutableStateFlow<List<Tag>> = MutableStateFlow(listOf())

        CoroutineScope(Dispatchers.Default).launch {
            val resultFlow = result.asFlow()
            val resultSubscription = resultFlow.collect { changes ->
                flow.value = changes.list.map {
                    it.toTag()
                }
            }
        }

        return flow
    }

    override suspend fun createTag(tag: Tag): Tag {
        return realm.write {
            this.copyToRealm(TagEntity().apply {
                this.title = tag.title
            })
        }.toTag()
    }

    override suspend fun getTag(uuid: UUID): Tag? {
        return realm.query<TagEntity>("uuid == $0", RealmUUID.from(uuid.toString())).first().find()
            ?.toTag()
    }

    override suspend fun updateTag(tag: Tag): Tag? {
        return realm.write {
            val tagEntity =
                this.query<TagEntity>("uuid == $0", RealmUUID.from(tag.uuid.toString())).first()
                    .find()

            tagEntity?.apply {
                this.title = tag.title
            }
        }?.toTag()
    }

    override suspend fun deleteTag(tag: Tag) {
        realm.write {
            val tagEntity =
                query<TagEntity>("uuid == $0", RealmUUID.from(tag.uuid.toString())).first()
                    .find()

            if (tagEntity != null) {
                delete(tagEntity)
            }
        }
    }

    override suspend fun deleteTags(tags: List<Tag>?) {
        realm.write {
            tags?.forEach { tag ->
                val tagEntity =
                    findLatest(
                        query<TagEntity>("uuid == $0", RealmUUID.from(tag.uuid.toString()))
                            .find().first()
                    )

                if (tagEntity != null) {
                    delete(tagEntity)
                }
            }
        }
    }
}