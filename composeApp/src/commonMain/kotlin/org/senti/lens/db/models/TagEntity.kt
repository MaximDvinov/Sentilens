package org.senti.lens.db.models

import io.realm.kotlin.types.RealmObject
import io.realm.kotlin.types.RealmUUID
import io.realm.kotlin.types.annotations.PrimaryKey
import org.senti.lens.models.Tag
import java.util.UUID

class TagEntity : RealmObject {
    @PrimaryKey
    var uuid: RealmUUID? = null
    var title: String? = ""
    var isNew: Boolean = true

    fun toTag(): Tag {
        return Tag(uuid = UUID.fromString(uuid.toString()), title = title!!)
    }
}