package org.senti.lens

import com.russhwolf.settings.ObservableSettings
import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.Logging
import io.ktor.http.HttpHeaders
import io.ktor.serialization.kotlinx.json.json
import io.ktor.util.appendIfNameAbsent
import kotlinx.serialization.json.Json
import org.koin.core.module.Module
import org.koin.dsl.module
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
import org.senti.lens.screens.list.DiaryUseCase


expect val platformModule: Module

const val BASE_URL = "https://122467.msk.web.highserver.ru"

val commonModule = module {

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
        DiaryUseCase(get(), get())
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