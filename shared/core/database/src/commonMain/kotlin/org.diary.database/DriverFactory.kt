package org.diary.database

import app.cash.sqldelight.ColumnAdapter
import app.cash.sqldelight.EnumColumnAdapter
import app.cash.sqldelight.db.SqlDriver
import orgdiarydatabase.Diary

expect class DriverFactory {
    suspend fun createDriver(): SqlDriver
}

class SharedDatabase(
    private val driverFactory: DriverFactory
) {
    private var database: SentilensDB? = null
    suspend fun getDatabase(): SentilensDB {
        if (database != null) return database!!
        database = SentilensDB(
            driverFactory.createDriver(),
            diaryAdapter = Diary.Adapter(
                uuidAdapter = uuidAdapter,
                createdAtAdapter = dateTimeAdapter,
                updatedAtAdapter = dateTimeAdapter,
                categoryAdapter = EnumColumnAdapter()
            )
        )
        return database!!
    }
}

