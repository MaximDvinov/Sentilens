package org.senti.lens.models

import androidx.compose.runtime.Stable
import cafe.adriel.voyager.core.lifecycle.JavaSerializable
import io.realm.kotlin.types.RealmObject
import io.realm.kotlin.types.RealmUUID
import io.realm.kotlin.types.annotations.PrimaryKey
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import java.util.UUID

@Stable
@Serializable
data class Tag(
    @SerialName("uuid")
    @Serializable(UUIDSerializer::class)
    val uuid: UUID? = null, val title: String
) : JavaSerializable

