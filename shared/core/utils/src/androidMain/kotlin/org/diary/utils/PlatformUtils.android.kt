package org.diary.utils

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.net.Uri
import com.russhwolf.settings.Settings
import com.russhwolf.settings.SharedPreferencesSettings

actual fun getSettings(delegate: Any): Settings {
    return SharedPreferencesSettings(delegate as SharedPreferences)
}

actual fun getTypeDevice(): TypeDevice {
    return TypeDevice.MOBILE
}


actual fun openLink(context: Any?, url: String) {
    val uri = url.let { Uri.parse(it) } ?: return
    val intent = Intent().apply {
        action = Intent.ACTION_VIEW
        data = uri
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }

    (context as? Context)?.startActivity(intent)
}