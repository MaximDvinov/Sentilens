package org.senti.lens

import com.russhwolf.settings.ObservableSettings
import org.koin.dsl.module


actual val platformModule = module {
    single<ObservableSettings> {
        ObservableStorageSettings()
    }
}