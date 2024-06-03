package org.diary.database.datasources

import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import org.diary.database.models.NoteDBO

interface LocalNotesDataSource {
    suspend fun getNotes(): Flow<List<NoteDBO>>
    suspend fun createNotes(note: NoteDBO): NoteDBO
    suspend fun updateNotes(note: NoteDBO): NoteDBO?
    suspend fun deleteNote(note: NoteDBO)
    suspend fun getNote(id: UUID): NoteDBO?
    suspend fun getNotesSync(): List<NoteDBO>
    suspend fun upsertNote(note: NoteDBO): NoteDBO?
    suspend fun finallyDeleteNote(note: NoteDBO)
    suspend fun deleteAll()
}

