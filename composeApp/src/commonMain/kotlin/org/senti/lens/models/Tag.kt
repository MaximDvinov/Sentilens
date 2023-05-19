package org.senti.lens.models

import androidx.compose.runtime.Stable
import cafe.adriel.voyager.core.lifecycle.JavaSerializable
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import java.util.UUID

@Stable
@Serializable
data class Tag(
    @SerialName("uuid")
    @Serializable(UUIDSerializer::class)
    val uuid: UUID? = null, val title: String,
    val isNew: Boolean? = false,
    val isDeleted: Boolean = false
) : JavaSerializable

