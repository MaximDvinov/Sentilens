package org.senti.lens

import android.content.SharedPreferences
import com.russhwolf.settings.Settings
import com.russhwolf.settings.SharedPreferencesSettings

actual fun getSettings(delegate: Any): Settings {
    return SharedPreferencesSettings(delegate as SharedPreferences)
}