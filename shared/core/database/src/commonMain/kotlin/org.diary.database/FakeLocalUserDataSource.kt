package org.diary.database

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.uuid.UUID
import org.diary.database.models.NoteDBO
import org.diary.database.models.UserDataDBO

class FakeLocalUserDataSource : LocalUserDataSource {
    var data: UserDataDBO = UserDataDBO()
    override suspend fun getUserData(): UserDataDBO {
        return data
    }

    override suspend fun upsertUserData(userData: UserDataDBO): UserDataDBO {
        data = userData
        return data
    }
}