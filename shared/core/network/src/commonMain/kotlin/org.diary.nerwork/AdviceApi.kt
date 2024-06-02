package org.diary.nerwork

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.get
import org.diary.nerwork.models.MusicDTO

class AdviceApi(private val client: HttpClient) {
   suspend fun getMusics(): Result<List<MusicDTO>> = runCatchingForApi {
       client.get("/api/music").body()
   }
}