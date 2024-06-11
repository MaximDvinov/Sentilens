package org.diary.database.daos

import app.cash.sqldelight.async.coroutines.awaitAsList
import app.cash.sqldelight.coroutines.asFlow
import app.cash.sqldelight.coroutines.mapToList
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.uuid.UUID
import org.diary.database.SentilensDB
import org.diary.database.SharedDatabase
import org.diary.database.models.NoteDBO
import org.diary.database.models.SentimentDBO
import org.diary.database.models.getValue
import orgdiarydatabase.Diary

interface NoteDao {
    suspend fun getAllNotes(): Flow<List<NoteDBO>>
    suspend fun createNote(note: NoteDBO): NoteDBO
    suspend fun getNote(uuid: UUID): NoteDBO?
    suspend fun updateNote(note: NoteDBO): NoteDBO?
    suspend fun deleteNote(note: NoteDBO)
    suspend fun getAllNotesSync(): List<NoteDBO>
    suspend fun upsertNote(note: NoteDBO): NoteDBO?
    suspend fun finallyDeleteNote(note: NoteDBO)
    suspend fun deleteAll()
}

class NoteDaoImpl(private val db: SharedDatabase) : NoteDao {

    override suspend fun getAllNotes(): Flow<List<NoteDBO>> {
        return db.getDatabase().diaryQueries.selectAllNotDeleted().asFlow()
            .mapToList(Dispatchers.Default)
            .map { it.map { it.toDBO() } }
    }

    override suspend fun createNote(note: NoteDBO): NoteDBO {
        db.getDatabase().diaryQueries.insert(note.toEntity())
        return note
    }

    override suspend fun getNote(uuid: UUID): NoteDBO? {
        return db.getDatabase().diaryQueries.getById(uuid).executeAsOneOrNull()?.toDBO()
    }

    override suspend fun updateNote(note: NoteDBO): NoteDBO? {
        db.getDatabase().diaryQueries.updateById(
            uuid = note.uuid,
            title = note.title,
            content = note.content,
            createdAt = note.createdAt,
            updatedAt = note.updatedAt,
            category = note.sentiment?.category,
            advice = note.sentiment?.advice,
            isDeleted = note.isDeleted,
            isNew = note.isNew
        )
        return note
    }

    override suspend fun deleteNote(note: NoteDBO) {
        db.getDatabase().diaryQueries.updateById(
            uuid = note.uuid,
            title = note.title,
            content = note.content,
            createdAt = note.createdAt,
            updatedAt = note.updatedAt,
            category = note.sentiment?.category,
            advice = note.sentiment?.advice,
            isDeleted = true,
            isNew = note.isNew
        )
    }

    override suspend fun getAllNotesSync(): List<NoteDBO> {
        return db.getDatabase().diaryQueries.selectAll().awaitAsList().map {
            it.toDBO()
        }
    }

    override suspend fun upsertNote(note: NoteDBO): NoteDBO? {
        db.getDatabase().diaryQueries.upsert(
            diary = note.toEntity()
        )
        return note
    }

    override suspend fun finallyDeleteNote(note: NoteDBO) {
        db.getDatabase().diaryQueries.deleteById(note.uuid)
    }

    override suspend fun deleteAll() {
        db.getDatabase().diaryQueries.deleteAll()
    }

}

private fun Diary.toDBO(): NoteDBO = NoteDBO(
    uuid = uuid,
    title = title,
    content = content,
    createdAt = createdAt,
    updatedAt = updatedAt,
    sentiment = SentimentDBO(
        category = category,
        advice = advice,
        value = category?.getValue()
    ),
    isDeleted = isDeleted,
    isNew = isNew,
)

private fun NoteDBO.toEntity(): Diary = Diary(
    uuid = uuid,
    title = title,
    content = content,
    createdAt = createdAt,
    updatedAt = updatedAt,
    category = sentiment?.category,
    advice = sentiment?.advice,
    isDeleted = isDeleted,
    isNew = isNew
)