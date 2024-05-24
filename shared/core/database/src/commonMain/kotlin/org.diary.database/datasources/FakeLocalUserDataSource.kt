package org.diary.database.datasources

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