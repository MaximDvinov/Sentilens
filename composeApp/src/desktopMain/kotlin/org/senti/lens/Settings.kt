package org.senti.lens

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.PreferencesSettings
import com.russhwolf.settings.Settings
import java.util.prefs.Preferences

actual fun getSettings(delegate: Any): Settings {
    return PreferencesSettings(delegate as Preferences)
}