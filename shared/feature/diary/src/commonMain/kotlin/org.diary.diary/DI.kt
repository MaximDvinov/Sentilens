package org.diary.diary

import kotlinx.uuid.UUID
import org.diary.diary.list.DiaryScreenModel
import org.koin.dsl.module

val diaryModule = module {
//    factoryOf(::DiaryScreenModel)
    factory {
        DiaryScreenModel(get(), get(), diaryId = it.getOrNull<UUID>())
    }

    // TODO: проверить что все работает автоматом
}