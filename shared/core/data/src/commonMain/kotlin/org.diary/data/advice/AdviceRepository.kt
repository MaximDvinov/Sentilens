package org.diary.data.advice

import org.diary.data.ApiResult

interface AdviceRepository {
    suspend fun getMusics(): ApiResult<List<MusicData>>
    suspend fun getAdvices(): ApiResult<List<RecommendationsData>>
}