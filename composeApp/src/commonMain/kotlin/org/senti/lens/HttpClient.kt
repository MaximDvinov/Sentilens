package org.senti.lens

import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.serialization.kotlinx.json.json


const val BASE_URL = ""

val httpClient by lazy {
    HttpClient {
        install(ContentNegotiation) {
            json()
        }

        defaultRequest {
            url(BASE_URL)
        }
    }
}