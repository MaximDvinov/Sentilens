package org.diary.data.advice

import org.diary.data.ApiResult
import org.diary.data.models.toData
import org.diary.data.toApiResult
import org.diary.nerwork.AdviceApi

class AdviceRepositoryImpl(private val api: AdviceApi) : AdviceRepository {
    override suspend fun getMusics(): ApiResult<List<MusicData>> {
        return api.getMusics().map { list -> list.map { it.toData() } }.toApiResult()
    }

    override suspend fun getAdvices(): ApiResult<List<RecommendationsData>> {
        return api.getRecommendations().map {
            list -> list.map { it.toData() }
        }.toApiResult()
    }
}