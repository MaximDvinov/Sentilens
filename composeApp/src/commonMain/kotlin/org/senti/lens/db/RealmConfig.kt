package org.senti.lens.db

import io.realm.kotlin.Realm
import io.realm.kotlin.RealmConfiguration
import org.senti.lens.db.models.NoteEntity
import org.senti.lens.db.models.SentimentEntity
import org.senti.lens.db.models.TagEntity


object RealmConfig {
    private val config = RealmConfiguration.create(
        schema = setOf(
            NoteEntity::class,
            TagEntity::class,
            SentimentEntity::class
        )
    )
    val realm: Realm by lazy { Realm.open(config) }
}
