package org.senti.lens.models

import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.toJavaLocalDateTime
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import java.time.format.DateTimeFormatter

actual object Serializers : KSerializer<LocalDateTime?> {
    private val formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME

    override val descriptor: SerialDescriptor =
        PrimitiveSerialDescriptor("LocalDateTime", PrimitiveKind.STRING)

    @OptIn(ExperimentalSerializationApi::class)
    override fun serialize(encoder: Encoder, value: LocalDateTime?) {
        if (value != null) {
            encoder.encodeString(formatter.format(value.toJavaLocalDateTime()))
        } else {
            encoder.encodeNull()
        }
    }

    override fun deserialize(decoder: Decoder): LocalDateTime? {
        val str = decoder.decodeString()
        return if (str.isEmpty()) null else LocalDateTime.parse(str)
    }
}