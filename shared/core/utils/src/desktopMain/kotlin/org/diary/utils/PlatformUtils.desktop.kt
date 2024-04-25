package org.diary.utils

import com.russhwolf.settings.PreferencesSettings
import com.russhwolf.settings.Settings
import org.diary.utils.TypeDevice
import java.awt.Desktop
import java.net.URI
import java.util.prefs.Preferences


actual fun getSettings(delegate: Any): Settings {
    return PreferencesSettings(delegate as Preferences)
}

actual fun getTypeDevice(): TypeDevice {
    return TypeDevice.DESKTOP
}

actual fun openLink(context: Any?, url: String) {
    val uri = url.let { URI.create(it) } ?: return
    Desktop.getDesktop().browse(uri)
}