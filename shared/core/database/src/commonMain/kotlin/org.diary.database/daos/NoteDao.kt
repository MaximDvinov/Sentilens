package org.diary.database.daos

import app.cash.sqldelight.coroutines.asFlow
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.uuid.UUID
import org.diary.database.SentilensDB
import org.diary.database.models.NoteDBO
import org.diary.database.models.SentimentDBO
import org.diary.database.models.getValue
import orgdiarydatabase.Diary

interface NoteDao {
    fun getAllNotes(): Flow<List<NoteDBO>>
    suspend fun createNote(note: NoteDBO): NoteDBO
    suspend fun getNote(uuid: UUID): NoteDBO?
    suspend fun updateNote(note: NoteDBO): NoteDBO?
    suspend fun deleteNote(note: NoteDBO)
    fun getAllNotesSync(): List<NoteDBO>
    suspend fun upsertNote(note: NoteDBO): NoteDBO?
    suspend fun finallyDeleteNote(note: NoteDBO)
}

class NoteDaoImpl(private val db: SentilensDB) : NoteDao {
    override fun getAllNotes(): Flow<List<NoteDBO>> {
        return db.diaryQueries.selectAll().asFlow().map { query ->
            query.executeAsList().map {
                it.toDBO()
            }
        }
    }

    override suspend fun createNote(note: NoteDBO): NoteDBO {
        db.diaryQueries.insert(note.toEntity())
        return note
    }

    override suspend fun getNote(uuid: UUID): NoteDBO? {
        return db.diaryQueries.getById(uuid).executeAsOneOrNull()?.toDBO()
    }

    override suspend fun updateNote(note: NoteDBO): NoteDBO? {
        db.diaryQueries.updateById(
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
        db.diaryQueries.updateById(
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

    override fun getAllNotesSync(): List<NoteDBO> {
        return db.diaryQueries.selectAll().executeAsList().map {
            it.toDBO()
        }
    }

    override suspend fun upsertNote(note: NoteDBO): NoteDBO? {
        db.diaryQueries.upsert(
            diary = note.toEntity()
        )
        return note
    }

    override suspend fun finallyDeleteNote(note: NoteDBO) {
        db.diaryQueries.deleteById(note.uuid)
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