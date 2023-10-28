package org.senti.lens.db.models

import io.realm.kotlin.types.RealmObject
import io.realm.kotlin.types.RealmUUID
import io.realm.kotlin.types.annotations.PrimaryKey
import kotlinx.uuid.UUID
import org.senti.lens.models.Tag

class TagEntity : RealmObject {
    @PrimaryKey
    var uuid: RealmUUID? = null
    var title: String = ""
    var isNew: Boolean? = true
    var isDeleted: Boolean = false

    fun toTag(): Tag {
        return Tag(
            uuid = UUID(uuid.toString()),
            title = title,
            isNew = isNew,
            isDeleted = isDeleted
        )
    }
}