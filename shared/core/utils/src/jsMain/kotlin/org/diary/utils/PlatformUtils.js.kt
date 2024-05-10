package org.diary.utils

import com.russhwolf.settings.Settings
import com.russhwolf.settings.StorageSettings
import kotlinx.browser.window
import org.diary.utils.TypeDevice

actual fun openLink(context: Any?, url: String) {
    window.open(url)
}

actual fun getSettings(delegate: Any): Settings {
    return StorageSettings()
}

actual fun getTypeDevice(): TypeDevice {
    return TypeDevice.WEB
}