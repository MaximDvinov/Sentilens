package org.diary.nerwork

import com.russhwolf.settings.ObservableSettings
import io.github.aakira.napier.LogLevel
import io.github.aakira.napier.Napier
import io.ktor.client.HttpClient
import io.ktor.client.plugins.auth.Auth
import io.ktor.client.plugins.auth.providers.BearerTokens
import io.ktor.client.plugins.auth.providers.bearer
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import io.ktor.http.HttpHeaders
import io.ktor.serialization.kotlinx.json.json
import io.ktor.util.appendIfNameAbsent
import kotlinx.serialization.json.Json
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

const val BASE_URL = "https://122467.msk.web.highserver.ru"
const val TOKEN = "token"

val networkModule = module {
    single<HttpClient> {
        val setting = get<ObservableSettings>()

        HttpClient {
            expectSuccess = true

            install(ContentNegotiation) {
                json(Json {
                    ignoreUnknownKeys = true
                    useAlternativeNames = false
                })
            }

            install(Logging) {
                this.logger = object : Logger {
                    override fun log(message: String) {
                        Napier.log(LogLevel.INFO, tag = "Ktor Request", message = message)
                    }

                }
            }

//            install(Auth) {
//                bearer {
//                    loadTokens {
//                        BearerTokens(
//                            accessToken = setting.getStringOrNull(TOKEN) ?: "",
//                            refreshToken = setting.getStringOrNull(TOKEN) ?: ""
//                        )
//                    }
//                    refreshTokens {
//                        BearerTokens(
//                            accessToken = setting.getStringOrNull(TOKEN) ?: "",
//                            refreshToken = setting.getStringOrNull(TOKEN) ?: ""
//                        )
//                    }
//                    sendWithoutRequest { request ->
//                        request.url.host == "122467.msk.web.highserver.ru"
//                    }
//                }
//            }

            defaultRequest {
                url(BASE_URL)
                headers.appendIfNameAbsent(HttpHeaders.ContentType, "application/json")
//                headers.append("Authorization", "Bearer ${setting.getStringOrNull(TOKEN)}")
            }
        }
    }

    singleOf(::NetworkNotesDataSourceImpl) bind NetworkNotesDataSource::class
    singleOf(::AuthDataSource)
}