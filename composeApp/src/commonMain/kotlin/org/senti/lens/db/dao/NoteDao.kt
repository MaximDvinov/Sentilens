package org.senti.lens.db.dao

import io.realm.kotlin.MutableRealm
import io.realm.kotlin.ext.query
import io.realm.kotlin.ext.toRealmList
import io.realm.kotlin.query.Sort
import io.realm.kotlin.types.RealmUUID
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.senti.lens.db.RealmConfig.realm
import org.senti.lens.db.models.NoteEntity
import org.senti.lens.db.models.SentimentEntity
import org.senti.lens.db.models.TagEntity
import org.senti.lens.models.Note
import java.util.UUID

interface NoteDao {

    fun getAllNotes(): Flow<List<Note>>
    suspend fun createNote(note: Note): Note
    suspend fun getNote(uuid: UUID): Note?
    suspend fun updateNote(note: Note): Note?
    suspend fun deleteNote(note: Note)
}

class NoteDaoImpl() : NoteDao {
    override fun getAllNotes(): MutableStateFlow<List<Note>> {
        val result = realm.query<NoteEntity>()
        val flow: MutableStateFlow<List<Note>> = MutableStateFlow(listOf())

        CoroutineScope(Dispatchers.Default).launch {
            val resultFlow = result.sort("_updatedAt", Sort.DESCENDING).asFlow()
            val resultSubscription = resultFlow.collect { changes ->

                flow.value = changes.list.map {
                    it.toNote()
                }
            }
        }

        return flow
    }

    override suspend fun createNote(note: Note): Note {
        return realm.write {
            this.copyToRealm(NoteEntity().apply {
                this.title = note.title
                this.content = note.content
                this.createdAt = note.createdAt
                this.updatedAt = note.updatedAt
                this.sentiment = SentimentEntity().apply {
                    title = note.sentiment?.title
                    description = note.sentiment?.description
                    smile = note.sentiment?.smile
                }
                this.tags = upsertTags(note)

            })
        }.toNote()
    }

    override suspend fun getNote(uuid: UUID): Note? {
        return realm.query<NoteEntity>("_id == $0", RealmUUID.from(uuid.toString())).first().find()
            ?.toNote()
    }

    override suspend fun updateNote(note: Note): Note? {
        val now: Instant = Clock.System.now()

        return realm.write {
            val noteEntity: NoteEntity? =
                query<NoteEntity>("_id == $0", RealmUUID.from(note.uuid.toString())).first().find()

            noteEntity?.apply {
                this.title = note.title
                this.content = note.content
                this.createdAt = note.createdAt
                this.updatedAt = now.toLocalDateTime(TimeZone.currentSystemDefault())
                this.sentiment = SentimentEntity().apply {
                    title = note.sentiment?.title
                    description = note.sentiment?.description
                    smile = note.sentiment?.smile
                }

                this.tags = upsertTags(note)
            }
        }?.toNote()
    }

    private fun MutableRealm.upsertTags(
        note: Note,
    ) = note.tags.map { tag ->
        var tagEntity = if (tag.uuid == null) null else {
            findLatest(
                realm.query<TagEntity>(
                    "uuid == $0", RealmUUID.from(tag.uuid.toString())
                ).find().first()
            )
        }

        if (tagEntity == null) {
            tagEntity = TagEntity().apply {
                this.uuid = RealmUUID.from(
                    UUID.randomUUID().toString()
                )
                this.title = tag.title
            }
        }

        tagEntity
    }.toRealmList()

    override suspend fun deleteNote(note: Note) {
        realm.write {
            val noteEntity: NoteEntity? =
                query<NoteEntity>("_id == $0", RealmUUID.from(note.uuid.toString())).first().find()

            if (noteEntity != null) {
                delete(noteEntity)
            }
        }
    }

}