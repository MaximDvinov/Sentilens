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

interface NotesApi {
    suspend fun getNotes(): Result<List<NoteDTO>>

    suspend fun createNote(value: NoteWrite): Result<NoteDTO>

    suspend fun deleteNote(id: String): Result<Unit>

    suspend fun updateNote(value: NoteDTO): Result<NoteDTO>

    suspend fun analyzeNote(id: String): Result<SentimentDTO>

    suspend fun analyzeByText(text: AnalyzeText): Result<SentimentDTO>
}

class NotesApiImpl(private val client: HttpClient) : NotesApi {
    override suspend fun getNotes(): Result<List<NoteDTO>> = runCatchingForApi {
        client.get("/api/notes/").body()
    }


    override suspend fun createNote(value: NoteWrite): Result<NoteDTO> = runCatchingForApi {
        client.post("/api/notes/") { setBody(value) }.body()
    }

    override suspend fun deleteNote(id: String): Result<Unit> = runCatchingForApi {
        client.delete("/api/notes/$id").body()
    }

    override suspend fun updateNote(value: NoteDTO): Result<NoteDTO> = runCatchingForApi {
        client.put("/api/notes/${value.uuid.toString()}") { setBody(value) }.body()
    }

    override suspend fun analyzeNote(id: String): Result<SentimentDTO> = runCatchingForApi {
        client.get("/api/analyze/$id").body()
    }

    override suspend fun analyzeByText(text: AnalyzeText): Result<SentimentDTO> = runCatchingForApi {
        client.post("/api/analyze/") { setBody(text) }.body()
    }
}