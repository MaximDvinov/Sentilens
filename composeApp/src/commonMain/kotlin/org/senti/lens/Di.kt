package org.senti.lens

import com.russhwolf.settings.ObservableSettings
import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.Logging
import io.ktor.http.HttpHeaders
import io.ktor.serialization.kotlinx.json.json
import io.ktor.util.appendIfNameAbsent
import io.realm.kotlin.Realm
import io.realm.kotlin.RealmConfiguration
import kotlinx.serialization.json.Json
import org.koin.core.module.Module
import org.koin.dsl.module
import org.senti.lens.db.dao.NoteDao
import org.senti.lens.db.dao.NoteDaoImpl
import org.senti.lens.db.dao.TagDao
import org.senti.lens.db.dao.TagDaoImpl
import org.senti.lens.db.models.AdviceEntity
import org.senti.lens.db.models.NoteEntity
import org.senti.lens.db.models.SentimentEntity
import org.senti.lens.db.models.TagEntity
import org.senti.lens.network.AuthDataSource
import org.senti.lens.network.NotesDataSource
import org.senti.lens.network.SyncUseCase
import org.senti.lens.network.TagsDataSource
import org.senti.lens.repositories.DbNotesRepositoryImpl
import org.senti.lens.repositories.DbTagsRepositoryImpl
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository
import org.senti.lens.screens.auth.AuthRepository
import org.senti.lens.screens.auth.AuthRepositoryImpl
import org.senti.lens.screens.auth.login.TOKEN
import org.senti.lens.screens.home.HomeNotesUseCase


expect val platformModule: Module

const val BASE_URL = "https://122467.msk.web.highserver.ru"

val commonModule = module {
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

    single {
        val setting = get<ObservableSettings>()

        HttpClient {
            install(ContentNegotiation) {
                json(Json {
                    ignoreUnknownKeys = true
                    useAlternativeNames = false
                })
            }

            install(Logging)

            defaultRequest {
                url(BASE_URL)
                headers.appendIfNameAbsent(HttpHeaders.ContentType, "application/json")
                headers.append("Authorization", "Bearer ${setting.getStringOrNull(TOKEN)}")
            }
        }
    }

    single<NotesRepository> {
        DbNotesRepositoryImpl(get())
    }

    single<TagsRepository> {
        DbTagsRepositoryImpl(get())
    }

    single {
        AuthDataSource(get())
    }

    single {
        HomeNotesUseCase(get(), get(), get())
    }

    single<AuthRepository> {
        AuthRepositoryImpl(get())
    }

    single {
        NotesDataSource(get())
    }

    single {
        TagsDataSource(get())
    }

    single {
        SyncUseCase(get(), get(), get(), get())
    }
}