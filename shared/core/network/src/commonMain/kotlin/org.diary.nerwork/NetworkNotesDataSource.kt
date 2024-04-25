package org.diary.nerwork

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import org.diary.nerwork.models.AnalyzeText
import org.diary.nerwork.models.NoteDTO
import org.diary.nerwork.models.NoteWrite
import org.diary.nerwork.models.SentimentDTO

interface NetworkNotesDataSource {
    suspend fun getNotes(): Result<List<NoteDTO>>

    suspend fun createNote(value: NoteWrite): Result<NoteDTO>

    suspend fun deleteNote(id: String): Result<Unit>

    suspend fun updateNote(value: NoteDTO): Result<NoteDTO>

    suspend fun analyzeNote(id: String): Result<SentimentDTO>

    suspend fun analyzeByText(text: AnalyzeText): Result<SentimentDTO>
}

class NetworkNotesDataSourceImpl(private val client: HttpClient) : NetworkNotesDataSource {
    override suspend fun getNotes(): Result<List<NoteDTO>> = runCatchingForApi {
        client.get("/notes/").body()
    }


    override suspend fun createNote(value: NoteWrite): Result<NoteDTO> = runCatchingForApi {
        client.post("/notes/") { setBody(value) }.body()
    }

    override suspend fun deleteNote(id: String): Result<Unit> = runCatchingForApi {
        client.delete("/notes/$id").body()
    }

    override suspend fun updateNote(value: NoteDTO): Result<NoteDTO> = runCatchingForApi {
        client.put("/notes/${value.uuid.toString()}") { setBody(value) }.body()
    }

    override suspend fun analyzeNote(id: String): Result<SentimentDTO> = runCatchingForApi {
        client.get("/analyze/$id").body()
    }

    override suspend fun analyzeByText(text: AnalyzeText): Result<SentimentDTO> = runCatchingForApi {
        client.post("/analyze/") { setBody(text) }.body()
    }
}