package org.diary.database

import app.cash.sqldelight.db.SqlDriver
import app.cash.sqldelight.driver.jdbc.sqlite.JdbcSqliteDriver
import ca.gosyer.appdirs.AppDirs
import java.io.File

actual class DriverFactory {
    actual suspend fun createDriver(): SqlDriver {
        return JdbcSqliteDriver(url = "jdbc:sqlite:SentilensDB.db", schema = SentilensDB.Schema).also {
            if (!File("SentilensDB.db").exists()) {
                SentilensDB.Schema.create(it)
            }
        }
    }
}