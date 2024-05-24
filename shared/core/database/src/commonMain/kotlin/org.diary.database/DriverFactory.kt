package org.diary.database

import app.cash.sqldelight.ColumnAdapter
import app.cash.sqldelight.EnumColumnAdapter
import app.cash.sqldelight.db.SqlDriver
import orgdiarydatabase.Diary

expect class DriverFactory {
    fun createDriver(): SqlDriver
}

fun createDatabase(driverFactory: DriverFactory): SentilensDB {
    val driver = driverFactory.createDriver()
    val database = SentilensDB(
        driver,
        diaryAdapter = Diary.Adapter(
            uuidAdapter = uuidAdapter,
            createdAtAdapter = dateTimeAdapter,
            updatedAtAdapter = dateTimeAdapter,
            categoryAdapter = EnumColumnAdapter()
        )
    )
    return database
}