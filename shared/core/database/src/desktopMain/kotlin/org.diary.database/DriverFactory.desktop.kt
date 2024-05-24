package org.diary.database

import app.cash.sqldelight.db.SqlDriver
import app.cash.sqldelight.driver.jdbc.sqlite.JdbcSqliteDriver
import ca.gosyer.appdirs.AppDirs
import java.io.File

actual class DriverFactory {
    actual fun createDriver(): SqlDriver {
        val path = File(AppDirs("Sentilens").getUserDataDir(), "Sentilens.db")
        if (!path.exists()) {
            File(path.parent).mkdirs()
            path.createNewFile()
        }
        val driver: SqlDriver =
            JdbcSqliteDriver(url = "jdbc:sqlite:${path}").also {
                SentilensDB.Schema.create(it)
            }

        return driver
    }
}