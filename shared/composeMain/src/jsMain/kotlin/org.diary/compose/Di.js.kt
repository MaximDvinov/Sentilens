package org.diary.compose

import com.russhwolf.settings.ObservableSettings
import org.koin.core.module.Module
import org.koin.dsl.module

actual val platformModule: Module = module {
    single<ObservableSettings> {
        ObservableStorageSettings()
    }
}