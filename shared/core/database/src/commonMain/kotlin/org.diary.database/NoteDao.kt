package org.diary.database

import kotlinx.coroutines.flow.Flow
import kotlinx.uuid.UUID
import org.diary.database.models.NoteDBO

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

interface DiaryDao {
    fun getAllNotes(): Flow<List<NoteDBO>>
    suspend fun createNote(note: NoteDBO): NoteDBO
    suspend fun getNote(uuid: UUID): NoteDBO?
    suspend fun updateNote(note: NoteDBO): NoteDBO?
    suspend fun deleteNote(note: NoteDBO)
    fun getAllNotesSync(): List<NoteDBO>
    suspend fun upsertNote(note: NoteDBO): NoteDBO?
}