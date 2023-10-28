package org.senti.lens

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.Settings
import com.russhwolf.settings.SettingsListener
import com.russhwolf.settings.StorageSettings
import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import org.koin.dsl.module
import org.senti.lens.db.NoteDao
import org.senti.lens.db.TagDao
import org.senti.lens.db.dao.NoteDaoImpl
import org.senti.lens.db.dao.TagDaoImpl
import org.senti.lens.models.Note
import org.senti.lens.models.Tag


actual val platformModule = module {
    single<ObservableSettings> {
        ObservableStorageSettings()
    }

    single<TagDao> {
        TagDaoImpl()
    }

    single<NoteDao> {
        NoteDaoImpl()
    }
}