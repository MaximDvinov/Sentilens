package org.diary.compose

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SettingsListener
import kotlinx.browser.window
import org.w3c.dom.events.Event
import org.w3c.dom.get
import org.w3c.dom.set

public typealias Storage = org.w3c.dom.Storage

val localStorage: Storage
    get() {
        val storage = window.localStorage
        window.dispatchEvent(Event("storage"))
        return storage
    }

//external fun addChangeStorageListener(onChange: Any)

class ObservableStorageSettings : ObservableSettings {
    public override val keys: Set<String> get() = List(size) { localStorage.key(it)!! }.toSet()
    public override val size: Int get() = localStorage.length

    val listeners = mutableMapOf<String, (Any?) -> Unit>()
    override fun addBooleanListener(
        key: String,
        defaultValue: Boolean,
        callback: (Boolean) -> Unit,
    ): SettingsListener {
        listeners[key] = callback.unsafeCast<(Any?) -> Unit>()

        return object : SettingsListener {
            override fun deactivate() {
                listeners.remove(key)
            }
        }
    }

    override fun addBooleanOrNullListener(
        key: String,
        callback: (Boolean?) -> Unit,
    ): SettingsListener {
        listeners[key] = callback.unsafeCast<(Any?) -> Unit>()

        return object : SettingsListener {
            override fun deactivate() {
                listeners.remove(key)
            }
        }
    }

    override fun addDoubleListener(
        key: String,
        defaultValue: Double,
        callback: (Double) -> Unit,
    ): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addDoubleOrNullListener(
        key: String,
        callback: (Double?) -> Unit,
    ): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addFloatListener(
        key: String,
        defaultValue: Float,
        callback: (Float) -> Unit,
    ): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addFloatOrNullListener(key: String, callback: (Float?) -> Unit): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addIntListener(
        key: String,
        defaultValue: Int,
        callback: (Int) -> Unit,
    ): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addIntOrNullListener(key: String, callback: (Int?) -> Unit): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addLongListener(
        key: String,
        defaultValue: Long,
        callback: (Long) -> Unit,
    ): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addLongOrNullListener(key: String, callback: (Long?) -> Unit): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addStringListener(
        key: String,
        defaultValue: String,
        callback: (String) -> Unit,
    ): SettingsListener {
        TODO("Not yet implemented")
    }

    override fun addStringOrNullListener(
        key: String,
        callback: (String?) -> Unit,
    ): SettingsListener {
        listeners[key] = callback.unsafeCast<(Any?) -> Unit>()

        return object : SettingsListener {
            override fun deactivate() {
                listeners.remove(key)
            }
        }
    }

    public override fun clear() {
        listeners.forEach { it.value(null) }
        localStorage.clear()
    }

    public override fun remove(key: String): Unit {
        localStorage.removeItem(key)
        listeners[key]?.let { it(null) }
    }

    public override fun hasKey(key: String): Boolean = localStorage[key] != null

    public override fun putInt(key: String, value: Int) {
        localStorage[key] = value.toString()
    }

    public override fun getInt(key: String, defaultValue: Int): Int =
        localStorage[key]?.toInt() ?: defaultValue

    public override fun getIntOrNull(key: String): Int? =
        localStorage[key]?.toIntOrNull()

    public override fun putLong(key: String, value: Long) {
        localStorage[key] = value.toString()
    }

    public override fun getLong(key: String, defaultValue: Long): Long =
        localStorage[key]?.toLong() ?: defaultValue

    public override fun getLongOrNull(key: String): Long? =
        localStorage[key]?.toLongOrNull()


    public override fun putString(key: String, value: String) {
        localStorage[key] = value
        listeners[key]?.let { it(value) }
    }

    public override fun getString(key: String, defaultValue: String): String =
        localStorage[key] ?: defaultValue

    public override fun getStringOrNull(key: String): String? = localStorage[key]

    public override fun putFloat(key: String, value: Float) {
        localStorage[key] = value.toString()
    }

    public override fun getFloat(key: String, defaultValue: Float): Float =
        localStorage[key]?.toFloat() ?: defaultValue

    public override fun getFloatOrNull(key: String): Float? =
        localStorage[key]?.toFloatOrNull()

    public override fun putDouble(key: String, value: Double) {
        localStorage[key] = value.toString()
    }

    public override fun getDouble(key: String, defaultValue: Double): Double =
        localStorage[key]?.toDouble() ?: defaultValue

    public override fun getDoubleOrNull(key: String): Double? =
        localStorage[key]?.toDoubleOrNull()

    public override fun putBoolean(key: String, value: Boolean) {
        localStorage[key] = value.toString()
        listeners[key]?.let { it(value) }
    }

    public override fun getBoolean(key: String, defaultValue: Boolean): Boolean =
        localStorage[key]?.toBoolean() ?: defaultValue

    public override fun getBooleanOrNull(key: String): Boolean? =
        localStorage[key]?.toBoolean()

}
