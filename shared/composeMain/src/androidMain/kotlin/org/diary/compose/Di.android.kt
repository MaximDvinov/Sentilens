package org.diary.compose

import android.content.Context
import android.content.SharedPreferences
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.SharedPreferencesSettings
import org.koin.android.ext.koin.androidContext
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<SharedPreferences> {
        androidContext().getSharedPreferences(
            "prefs",
            Context.MODE_PRIVATE
        )
    }

    single<ObservableSettings> {
        SharedPreferencesSettings(get())
    }
}