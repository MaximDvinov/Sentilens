package org.senti.lens.network

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import org.senti.lens.ApiResult
import org.senti.lens.models.Tag
import java.net.UnknownHostException

class TagsDataSource(private val client: HttpClient) {
    suspend fun getTags(): ApiResult<List<Tag>> {
        return try {
            val result = client.get("/hashtags/")
            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }  catch (e: UnknownHostException) {
            ApiResult.Failure("Нет доступа к интернету")
        }catch (e: Exception) {
            ApiResult.Failure("${e.message}")
        }
    }

    suspend fun createTag(value: Tag): ApiResult<Tag> {
        return try {
            val result = client.post("/hashtags/") {
                setBody(value)
            }

            return if (result.status.value in 200..299) {
                ApiResult.Success(result.body())
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }  catch (e: UnknownHostException) {
            ApiResult.Failure("Нет доступа к интернету")
        }catch (e: Exception) {
            ApiResult.Failure("${e.message}")
        }
    }

    suspend fun deleteTag(id: String): ApiResult<Unit> {
        return try {
            val result = client.delete("/hashtags/$id")
            return if (result.status.value in 200..299) {
                ApiResult.Success(Unit)
            } else {
                ApiResult.ServerError(status = result.status, message = result.body())
            }
        }  catch (e: UnknownHostException) {
            ApiResult.Failure("Нет доступа к интернету")
        }catch (e: Exception) {
            ApiResult.Failure("${e.message}")
        }
    }
}