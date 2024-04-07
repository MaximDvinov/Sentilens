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
import org.koin.core.module.dsl.factoryOf
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module
import org.senti.lens.datasource.AuthDataSource
import org.senti.lens.datasource.NetworkNotesDataSource
import org.senti.lens.datasource.NetworkNotesDataSourceImpl
import org.senti.lens.repositories.SyncRepository
import org.senti.lens.repositories.SyncRepositoryImpl
import org.senti.lens.datasource.LocalNotesDataSourceImpl
import org.senti.lens.datasource.LocalNotesDataSource
import org.senti.lens.screens.auth.AuthRepository
import org.senti.lens.screens.auth.MockAuthRepository
import org.senti.lens.screens.auth.login.TOKEN
import org.senti.lens.screens.home.HomeScreenModel
import org.senti.lens.screens.list.DiaryScreenModel
import org.senti.lens.screens.list.NotesRepository
import org.senti.lens.screens.list.NotesRepositoryImpl


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

    single<LocalNotesDataSource> {
        LocalNotesDataSourceImpl(get())
    }

    single {
        AuthDataSource(get())
    }

    single<AuthRepository> {
        MockAuthRepository()
    }

    singleOf(::NotesRepositoryImpl) bind NotesRepository::class

    singleOf(::NetworkNotesDataSourceImpl) bind NetworkNotesDataSource::class
    singleOf(::SyncRepositoryImpl) bind SyncRepository::class


    factory { DiaryScreenModel(get(), get()) }

    factoryOf(::HomeScreenModel)
}