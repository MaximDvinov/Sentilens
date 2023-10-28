package org.senti.lens.db.dao

import io.github.aakira.napier.Napier
import io.realm.kotlin.MutableRealm
import io.realm.kotlin.Realm
import io.realm.kotlin.ext.query
import io.realm.kotlin.ext.toRealmList
import io.realm.kotlin.query.Sort
import io.realm.kotlin.types.RealmUUID
import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import org.senti.lens.db.NoteDao
import org.senti.lens.db.asFlowMap
import org.senti.lens.db.models.AdviceEntity
import org.senti.lens.db.models.NoteEntity
import org.senti.lens.db.models.SentimentEntity
import org.senti.lens.db.models.TagEntity
import org.senti.lens.models.Note
import kotlin.random.Random

class NoteDaoImpl(private val realm: Realm) : NoteDao {
    override fun getAllNotes(): Flow<List<Note>> = realm.asFlowMap<NoteEntity, Note>(
        query = "isDeleted == false", sortField = "_updatedAt", sort = Sort.DESCENDING
    ) {
        it.toNote()
    }

    override fun getAllNotesSync(): List<Note> {
        return realm.query<NoteEntity>().find().map { it.toNote() }
    }

    override suspend fun createNote(note: Note): Note {
        return realm.write {
            val result = this.copyToRealm(NoteEntity().apply {
                this._id = RealmUUID.from((note.uuid ?: UUID.generateUUID(Random)).toString())
                this.title = note.title
                this.content = note.content
                this.createdAt = note.createdAt
                this.updatedAt = note.updatedAt
                if (note.sentiment != null) {
                    this.sentiment = SentimentEntity().apply {
                        title = note.sentiment.title
                        description = note.sentiment.description
                        smile = note.sentiment.smile
                        advices = upsertAdvices(note)
                    }
                }
                this.tags = upsertTags(note)
                this.isNew = note.isNew ?: true

            })

            Napier.wtf(tag = "CreateNote") { "$note" }

            result
        }.toNote()
    }

    override suspend fun getNote(uuid: UUID): Note? {
        return realm.query<NoteEntity>(
            "_id == $0", RealmUUID.from(uuid.toString())
        ).first().find()?.toNote()
    }

    override suspend fun updateNote(note: Note): Note? {
        return realm.write {
            val noteEntity: NoteEntity? =
                query<NoteEntity>("_id == $0", RealmUUID.from(note.uuid.toString())).first().find()

            noteEntity?.apply {
                this.title = note.title
                this.content = note.content
                this.createdAt = note.createdAt
                this.updatedAt = note.updatedAt
                if (note.sentiment != null) {
                    this.sentiment = SentimentEntity().apply {
                        title = note.sentiment.title
                        description = note.sentiment.description
                        smile = note.sentiment.smile
                        advices = upsertAdvices(note)
                    }
                }
                val addedTags = upsertTags(note)
                this.tags = addedTags
                this.isNew = note.isNew ?: true
            }
        }?.toNote()
    }

    private fun MutableRealm.upsertTags(
        note: Note,
    ) = note.tags.map { tag ->
        var tagEntity = if (tag.uuid == null) null else {
            val found = realm.query<TagEntity>(
                "uuid == $0", RealmUUID.from(tag.uuid.toString())
            ).find().firstOrNull()
            if (found != null) {
                findLatest(found)
            } else {
                null
            }
        }

        if (tagEntity == null) {
            tagEntity = TagEntity().apply {
                this.uuid = RealmUUID.from(
                    UUID.generateUUID(Random).toString()
                )
                this.title = tag.title
                this.isNew = tag.isNew ?: true
            }
        }

        tagEntity
    }.toRealmList()

    private fun MutableRealm.upsertAdvices(
        note: Note,
    ) = note.sentiment?.advices?.map { advice ->
        var adviceEntity = query<AdviceEntity>(
            "title == $0", advice?.title
        ).first().find()

        if (adviceEntity == null) {
            adviceEntity = AdviceEntity().apply {
                this.title = advice?.title
                this.description = advice?.description
                this.imageUrl = advice?.imageUrl
                this.url = advice?.url
            }
        }

        adviceEntity
    }?.toRealmList()

    override suspend fun upsertNote(note: Note): Note {
        return realm.write {
            val noteEntity: NoteEntity? =
                query<NoteEntity>("_id == $0", RealmUUID.from(note.uuid.toString())).first().find()

            noteEntity?.apply {
                this.title = note.title
                this.content = note.content
                this.createdAt = note.createdAt
                this.updatedAt = note.updatedAt
                if (note.sentiment != null) {
                    this.sentiment = SentimentEntity().apply {
                        title = note.sentiment.title
                        description = note.sentiment.description
                        smile = note.sentiment.smile
                        advices = upsertAdvices(note)
                    }
                }
                this.tags = upsertTags(note)
                this.isNew = note.isNew ?: true
            } ?: this.copyToRealm(NoteEntity().apply {
                this._id = RealmUUID.from(note.uuid.toString())
                this.title = note.title
                this.content = note.content
                this.createdAt = note.createdAt
                this.updatedAt = note.updatedAt
                if (note.sentiment != null) {
                    this.sentiment = SentimentEntity().apply {
                        title = note.sentiment.title
                        description = note.sentiment.description
                        smile = note.sentiment.smile
                        advices = upsertAdvices(note)
                    }
                }
                this.tags = upsertTags(note)
                this.isNew = note.isNew ?: true
            })
        }.toNote()

    }

    override suspend fun deleteNote(note: Note) {
        realm.write {
            if (note.uuid == null) return@write

            query<NoteEntity>("_id == $0", RealmUUID.from(note.uuid.toString())).first().find()
                ?.apply {
                    isDeleted = true
                }
        }
    }

    override suspend fun finallyDeleteNote(note: Note) {
        realm.write {
            if (note.uuid == null) return@write

            val noteEntity: NoteEntity? =
                query<NoteEntity>("_id == $0", RealmUUID.from(note.uuid.toString())).first().find()

            if (noteEntity != null) {
                delete(noteEntity)
            }
        }
    }
}