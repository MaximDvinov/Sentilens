package org.diary.database

import org.diary.database.models.UserDataDBO

interface LocalUserDataSource {
    suspend fun getUserData(): UserDataDBO

    suspend fun upsertUserData(userData: UserDataDBO): UserDataDBO
}