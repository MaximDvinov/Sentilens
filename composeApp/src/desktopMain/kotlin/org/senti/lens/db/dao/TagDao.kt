package org.senti.lens.db.dao

import io.realm.kotlin.Realm
import io.realm.kotlin.ext.query
import io.realm.kotlin.types.RealmUUID
import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import kotlinx.uuid.randomUUID
import org.senti.lens.db.TagDao
import org.senti.lens.db.asFlowMap
import org.senti.lens.db.models.TagEntity
import org.senti.lens.models.Tag
import kotlin.random.Random

class TagDaoImpl(private val realm: Realm) : TagDao {
    override fun getAllTags(): Flow<List<Tag>> =
        realm.asFlowMap<TagEntity, Tag>(query = "isDeleted == false") {
            it.toTag()
        }


    override suspend fun createTag(tag: Tag): Tag {
        return realm.write {
            this.copyToRealm(TagEntity().apply {
                this.uuid =
                    RealmUUID.from(tag.uuid?.toString() ?: UUID.generateUUID(Random).toString())
                this.title = tag.title
                this.isNew = tag.isNew
            })
        }.toTag()
    }

    override suspend fun getTag(uuid: UUID): Tag? {
        return realm.query<TagEntity>(
            "uuid == $0 AND isDeleted == false",
            RealmUUID.from(uuid.toString())
        ).first().find()
            ?.toTag()
    }

    override suspend fun updateTag(tag: Tag): Tag? {
        return realm.write {
            val tagEntity =
                this.query<TagEntity>("uuid == $0", RealmUUID.from(tag.uuid.toString())).first()
                    .find()

            tagEntity?.apply {
                this.title = tag.title
                this.isNew = tag.isNew
            }
        }?.toTag()
    }

    override suspend fun deleteTag(tag: Tag) {
        realm.write {
            query<TagEntity>("uuid == $0", RealmUUID.from(tag.uuid.toString())).first()
                .find()?.apply {
                    isDeleted = true
                }

        }
    }

    override suspend fun finallyDeleteTag(tag: Tag) {
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
                findLatest(
                    query<TagEntity>("uuid == $0", RealmUUID.from(tag.uuid.toString()))
                        .find().first()
                )?.apply {
                    isDeleted = true
                }
            }
        }
    }

    override suspend fun getAllTagsSync(): List<Tag> {
        return realm.query<TagEntity>().find().map {
            it.toTag()
        }
    }

    override suspend fun upsertTag(tag: Tag) {
        realm.write {
            var tagEntity = if (tag.uuid == null) null else {
                findLatest(
                    realm.query<TagEntity>(
                        "uuid == $0", RealmUUID.from(tag.uuid.toString())
                    ).find().first()
                )?.apply {
                    this.title = tag.title
                    this.isNew = tag.isNew
                }
            }

            if (tagEntity == null) {
                tagEntity = TagEntity().apply {
                    this.uuid = RealmUUID.from(
                        tag.uuid?.toString() ?: UUID.generateUUID(Random).toString()
                    )
                    this.title = tag.title
                    this.isNew = tag.isNew
                }
            }

            tagEntity
        }
    }
}