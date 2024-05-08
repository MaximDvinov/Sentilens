package org.diary.nerwork

import com.russhwolf.settings.ObservableSettings
import io.github.aakira.napier.LogLevel
import io.github.aakira.napier.Napier
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.auth.Auth
import io.ktor.client.plugins.auth.providers.BearerTokens
import io.ktor.client.plugins.auth.providers.bearer
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import io.ktor.client.request.headers
import io.ktor.client.request.post
import io.ktor.client.request.url
import io.ktor.http.HttpHeaders
import io.ktor.serialization.kotlinx.json.json
import io.ktor.util.appendIfNameAbsent
import kotlinx.serialization.json.Json
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module
import org.senti.lens.models.TokenDataDTO

const val BASE_HOST = "217.28.221.132"
const val BASE_URL = "http://$BASE_HOST"
const val ACCESS = "ACCESS"
const val REFRESH = "REFRESH"

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
                logger = object : Logger {
                    override fun log(message: String) {
                        Napier.log(LogLevel.INFO, tag = "Ktor Request", message = message)
                    }
                }

                level = io.ktor.client.plugins.logging.LogLevel.ALL
            }

            install(Auth) {
                bearer {
                    refreshTokens {
                        val token = client.post {
                            headers {
                                appendIfNameAbsent(
                                    "Authorization",
                                    "Bearer ${setting.getStringOrNull(REFRESH)}"
                                )
                            }
                            url("/user/update_token")
                            markAsRefreshTokenRequest()
                        }.body<TokenDataDTO>()
                        setting.putString(ACCESS, token.accessToken ?: "")

                        BearerTokens(
                            accessToken = token.accessToken ?: "",
                            refreshToken = setting.getStringOrNull(REFRESH) ?: ""
                        )
                    }
                }
            }


            defaultRequest {
                url(BASE_URL)
                headers.appendIfNameAbsent(
                    "Authorization",
                    "Bearer ${setting.getStringOrNull(ACCESS)}"
                )
                headers.appendIfNameAbsent(HttpHeaders.ContentType, "application/json")
            }
        }
    }

    singleOf(::NetworkNotesDataSourceImpl) bind NetworkNotesDataSource::class
    singleOf(::AuthDataSource)
}