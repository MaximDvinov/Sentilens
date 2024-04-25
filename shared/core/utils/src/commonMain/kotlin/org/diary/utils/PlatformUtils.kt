package org.diary.utils

import com.russhwolf.settings.Settings

expect fun getSettings(delegate: Any): Settings

enum class TypeDevice() {
    DESKTOP, MOBILE, WEB
}

expect fun getTypeDevice(): TypeDevice

expect fun openLink(context: Any?, url: String)

