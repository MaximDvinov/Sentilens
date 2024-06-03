package org.diary.database.daos

import org.diary.database.SentilensDB
import org.diary.database.SharedDatabase
import org.diary.database.models.UserDataDBO
import orgdiarydatabase.User

interface UserDao {
    suspend fun getUserData(): UserDataDBO?

    suspend fun upsertUserData(userData: UserDataDBO): UserDataDBO

    suspend fun deleteUserData()
}

class UserDaoImpl(private val db: SharedDatabase) : UserDao {
    override suspend fun getUserData(): UserDataDBO {
        val result = db.getDatabase().userQueries.getUser().executeAsOneOrNull()

        return UserDataDBO(
            id = result?.id?.toInt(),
            username = result?.username,
            email = result?.email,
            createdAt = result?.createdAt,
        )
    }

    override suspend fun upsertUserData(userData: UserDataDBO): UserDataDBO {
        val id = userData.id ?: return userData
        db.getDatabase().userQueries.insertUser(
            User(
                id = id.toLong(),
                username = userData.username,
                email = userData.email,
                createdAt = userData.createdAt
            )
        )
        return userData

    }

    override suspend fun deleteUserData() {
        db.getDatabase().userQueries.delete()
    }


}