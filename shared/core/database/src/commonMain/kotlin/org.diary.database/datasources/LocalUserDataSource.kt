package org.diary.database.datasources

import org.diary.database.daos.UserDao
import org.diary.database.models.UserDataDBO

interface LocalUserDataSource {
    suspend fun getUserData(): UserDataDBO?

    suspend fun upsertUserData(userData: UserDataDBO): UserDataDBO
    suspend fun deleteUserData()
}

class LocalUserDataSourceImpl(private val dao: UserDao) : LocalUserDataSource {
    override suspend fun getUserData(): UserDataDBO? {
        return dao.getUserData()
    }

    override suspend fun upsertUserData(userData: UserDataDBO): UserDataDBO {
        return dao.upsertUserData(userData)
    }

    override suspend fun deleteUserData() {
        dao.deleteUserData()
    }

}