package org.senti.lens

import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.PreferencesSettings
import io.realm.kotlin.Realm
import io.realm.kotlin.RealmConfiguration
import org.koin.dsl.module
import org.senti.lens.db.NoteDao
import org.senti.lens.db.TagDao
import org.senti.lens.db.dao.NoteDaoImpl
import org.senti.lens.db.dao.TagDaoImpl
import org.senti.lens.db.models.AdviceEntity
import org.senti.lens.db.models.NoteEntity
import org.senti.lens.db.models.SentimentEntity
import org.senti.lens.db.models.TagEntity
import java.util.prefs.Preferences

actual val platformModule = module {
    single<ObservableSettings> {
        PreferencesSettings(Preferences.userRoot())
    }

    single {
        val config = RealmConfiguration
            .Builder(
                schema = setOf(
                    NoteEntity::class,
                    TagEntity::class,
                    SentimentEntity::class,
                    AdviceEntity::class
                )
            )
            .schemaVersion(5)
            .build()
        Realm.open(config)
    }
    single<TagDao> {
        TagDaoImpl(get())
    }

    single<NoteDao> {
        NoteDaoImpl(get())
    }
}