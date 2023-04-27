package org.senti.lens.models

import androidx.compose.runtime.Stable
import io.realm.kotlin.types.RealmObject
import io.realm.kotlin.types.annotations.PrimaryKey
import kotlinx.serialization.Serializable

@Stable
@Serializable
data class Tag(
    val id: Int? = null, val name: String
)

class TagEntity : RealmObject {
    @PrimaryKey
    var id: Int? = null
    var name: String? = ""
}

val tags = listOf(
    Tag(id = 1, name = "Work"),
    Tag(id = 2, name = "Personal"),
    Tag(id = 3, name = "Travel"),
    Tag(id = 4, name = "Shopping"),
    Tag(id = 3, name = "Blog"),
    Tag(id = 4, name = "Univer"),
    Tag(id = 3, name = "Что-то еще"),
    Tag(id = 4, name = "тег")
)