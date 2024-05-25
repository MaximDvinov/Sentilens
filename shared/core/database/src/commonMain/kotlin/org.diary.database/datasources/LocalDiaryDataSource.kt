package org.diary.database.datasources

import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import org.diary.database.daos.NoteDao
import org.diary.database.models.NoteDBO

class LocalDiaryDataSource(private val dao: NoteDao) : LocalNotesDataSource {
    override fun getNotes(): Flow<List<NoteDBO>> = dao.getAllNotes()

    override suspend fun createNotes(note: NoteDBO): NoteDBO = dao.createNote(note)

    override suspend fun updateNotes(note: NoteDBO): NoteDBO? = dao.updateNote(note)

    override suspend fun deleteNote(note: NoteDBO) = dao.deleteNote(note)
    override suspend fun getNote(id: UUID): NoteDBO? = dao.getNote(id)

    override fun getNotesSync(): List<NoteDBO> = dao.getAllNotesSync()

    override suspend fun upsertNote(note: NoteDBO): NoteDBO? = dao.upsertNote(note)

    override suspend fun finallyDeleteNote(note: NoteDBO) = dao.finallyDeleteNote(note)
    override suspend fun deleteAll() = dao.deleteAll()
}