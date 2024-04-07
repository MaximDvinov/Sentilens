package org.senti.lens.datasource

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import org.senti.lens.ApiResult
import org.senti.lens.models.AnalyzeText
import org.senti.lens.models.Note
import org.senti.lens.models.NoteWrite
import org.senti.lens.models.Sentiment

interface NetworkNotesDataSource {
    suspend fun getNotes(): ApiResult<List<Note>>

    suspend fun createNote(value: NoteWrite): ApiResult<Note>

    suspend fun deleteNote(id: String): ApiResult<Unit>

    suspend fun updateNote(value: Note): ApiResult<Note>

    suspend fun analyzeNote(id: String): ApiResult<Sentiment>

    suspend fun analyzeByText(text: AnalyzeText): ApiResult<Sentiment>
}

class NetworkNotesDataSourceImpl(private val client: HttpClient) : NetworkNotesDataSource {
    override suspend fun getNotes(): ApiResult<List<Note>> {
        return try {
            val result = client.get("/notes/")
            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }catch (e: Exception) {
            ApiResult.Failure(e.message ?: "Unknown error")
        }
    }

    override suspend fun createNote(value: NoteWrite): ApiResult<Note> {
        return try {
            val result = client.post("/notes/") {
                setBody(value)
            }
            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        } catch (e: Exception) {
            ApiResult.Failure(e.message ?: "Unknown error")
        }
    }

    override suspend fun deleteNote(id: String): ApiResult<Unit> {
        return try {
            val result = client.delete("/notes/$id")
            return if (result.status.value in 200..299) {
                ApiResult.Success(Unit)
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }catch (e: Exception) {
            ApiResult.Failure(e.message ?: "Unknown error")
        }

    }

    override suspend fun updateNote(value: Note): ApiResult<Note> {
        return try {
            val result = client.put("/notes/${value.uuid.toString()}") {
                setBody(value)
            }

            if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }catch (e: Exception) {
            ApiResult.Failure("${e.message}")
        }
    }

    override suspend fun analyzeNote(id: String): ApiResult<Sentiment> {
        return try {
            val result = client.get("/notes/$id/analyze")
            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }catch (e: Exception) {
            ApiResult.Failure(e.message ?: "Unknown error")
        }

    }

    override suspend fun analyzeByText(text: AnalyzeText): ApiResult<Sentiment> {
        return try {
            val result = client.post("/analyze-by-text") {
                setBody(text)
            }
            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }catch (e: Exception) {
            ApiResult.Failure(e.message ?: "Unknown error")
        }

    }
}