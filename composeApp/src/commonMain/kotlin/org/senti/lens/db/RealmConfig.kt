package org.senti.lens.db

import io.realm.kotlin.Realm
import io.realm.kotlin.RealmConfiguration
import org.senti.lens.models.NoteEntity


object RealmConfig {
    private val config = RealmConfiguration.create(schema = setOf(NoteEntity::class))
    val realm: Realm = Realm.open(config)
}
