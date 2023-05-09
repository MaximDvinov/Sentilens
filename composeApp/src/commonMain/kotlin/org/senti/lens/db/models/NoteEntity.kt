package org.senti.lens.db.models

import io.realm.kotlin.ext.realmListOf
import io.realm.kotlin.types.EmbeddedRealmObject
import io.realm.kotlin.types.RealmInstant
import io.realm.kotlin.types.RealmList
import io.realm.kotlin.types.RealmObject
import io.realm.kotlin.types.RealmUUID
import io.realm.kotlin.types.annotations.PrimaryKey
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.SerialName
import org.senti.lens.db.RealmDateTimeConversion
import org.senti.lens.db.toInstant
import org.senti.lens.db.toRealmInstant
import org.senti.lens.models.Note
import org.senti.lens.models.Sentiment
import java.util.UUID

class NoteEntity() : RealmObject {
    @PrimaryKey
    private var _id: RealmUUID = RealmUUID.random()
    var title: String = ""
    var content: String? = ""
    private var _createdAt: RealmInstant? = RealmInstant.from(0, 0)
    private var _updatedAt: RealmInstant? = RealmInstant.from(0, 0)
    var tags: RealmList<TagEntity>? = realmListOf()
    var sentiment: SentimentEntity? = null
    var isNew: Boolean = true

    public var createdAt: LocalDateTime?
        get() {
            return _createdAt?.toInstant()?.toLocalDateTime(TimeZone.currentSystemDefault())
        }
        set(value) {
            _createdAt = value?.toInstant(TimeZone.currentSystemDefault())?.toRealmInstant()
        }

    public var updatedAt: LocalDateTime?
        get() {
            return _updatedAt?.toInstant()?.toLocalDateTime(TimeZone.currentSystemDefault())
        }
        set(value) {
            _updatedAt = value?.toInstant(TimeZone.currentSystemDefault())?.toRealmInstant()
        }

    fun toNote(): Note {
        return Note(
            uuid = UUID.fromString(_id.toString()),
            title = title,
            content = content,
            createdAt = createdAt,
            updatedAt = updatedAt,
            sentiment = sentiment?.toSentiment(),
            tags = tags?.toList()?.map { it.toTag() } ?: listOf()
        )
    }
}

class SentimentEntity : EmbeddedRealmObject {
    var description: String? = null
    var smile: String? = null
    var title: String? = null

    fun toSentiment(): Sentiment {
        return Sentiment(
            description = description,
            smile = smile,
            title = title
        )
    }
}