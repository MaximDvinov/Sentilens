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
import org.senti.lens.db.toInstant
import org.senti.lens.db.toRealmInstant
import org.senti.lens.models.Advice
import org.senti.lens.models.Note
import org.senti.lens.models.Sentiment
import java.util.UUID

class NoteEntity() : RealmObject {
    @PrimaryKey
    var _id: RealmUUID = RealmUUID.random()
    var title: String = ""
    var content: String? = ""
    private var _createdAt: RealmInstant? = RealmInstant.from(0, 0)
    private var _updatedAt: RealmInstant? = RealmInstant.from(0, 0)
    var tags: RealmList<TagEntity>? = realmListOf()
    var sentiment: SentimentEntity? = null
    var isNew: Boolean = true
    var isDeleted: Boolean = false

    public var createdAt: LocalDateTime?
        get() {
            return _createdAt?.toInstant()?.toLocalDateTime(TimeZone.UTC)
        }
        set(value) {
            _createdAt = value?.toInstant(TimeZone.UTC)?.toRealmInstant()
        }

    public var updatedAt: LocalDateTime?
        get() {
            return _updatedAt?.toInstant()?.toLocalDateTime(TimeZone.UTC)
        }
        set(value) {
            _updatedAt = value?.toInstant(TimeZone.UTC)?.toRealmInstant()
        }

    fun toNote(): Note {
        return Note(uuid = kotlinx.uuid.UUID(_id.toString()),
            title = title,
            content = content,
            createdAt = createdAt,
            updatedAt = updatedAt,
            sentiment = sentiment?.toSentiment(),
            tags = tags?.toList()?.map { it.toTag() } ?: listOf(),
            isNew = isNew,
            isDeleted = isDeleted
        )
    }
}

class SentimentEntity : EmbeddedRealmObject {
    var description: String? = null
    var smile: String? = null
    var title: String? = null
    var advices: RealmList<AdviceEntity>? = realmListOf()

    fun toSentiment(): Sentiment {
        return Sentiment(
            description = description,
            smile = smile,
            title = title,
            advices = advices?.toList()?.map { it.toAdvice() }
        )
    }
}

class AdviceEntity : RealmObject {
    @PrimaryKey
    var title: String? = null
    var description: String? = null
    var url: String? = null
    var imageUrl: String? = null

    fun toAdvice(): Advice {
        return Advice(
            title = title,
            description = description,
            url = url,
            imageUrl = imageUrl
        )
    }
}