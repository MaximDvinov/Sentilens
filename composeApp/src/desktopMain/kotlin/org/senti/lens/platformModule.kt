package org.senti.lens

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.PreferencesSettings
import org.koin.dsl.module
import java.util.prefs.Preferences

actual val platformModule = module {
    single<ObservableSettings> {
        PreferencesSettings(Preferences.userRoot())
    }
}