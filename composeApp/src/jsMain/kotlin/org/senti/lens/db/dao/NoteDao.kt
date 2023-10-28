package org.senti.lens.db.dao

import com.juul.indexeddb.Database
import com.juul.indexeddb.KeyPath
import com.juul.indexeddb.openDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.flow.updateAndGet
import kotlinx.uuid.UUID
import kotlinx.uuid.generateUUID
import org.senti.lens.db.NoteDao
import org.senti.lens.models.Note
import kotlin.random.Random


class NoteDaoImpl() : NoteDao {
    val notes = MutableStateFlow<List<Note>>(listOf())
    override fun getAllNotes(): Flow<List<Note>> = notes

    override suspend fun createNote(note: Note): Note {
        notes.updateAndGet {
            it + note.copy(uuid = note.uuid ?: UUID.generateUUID(Random))
        }

        return note
    }

    override suspend fun getNote(uuid: UUID): Note? {
        return notes.value.find { it.uuid == uuid }
    }

    override suspend fun updateNote(note: Note): Note? {
        notes.updateAndGet { list ->
            list.map { if (it.uuid == note.uuid) note else it }
        }
        return note
    }

    override suspend fun deleteNote(note: Note) {
        notes.updateAndGet { list ->
            list.map { if (it.uuid == note.uuid) Note(isDeleted = true) else it }
        }
    }

    override fun getAllNotesSync(): List<Note> {
        return notes.value
    }

    override suspend fun upsertNote(note: Note): Note? {
        notes.updateAndGet { list ->
            var count = 0
            val newList = list.map {
                if (it.uuid == note.uuid) {
                    count++
                    note
                } else it
            }

            if (count > 0) {
                newList
            } else {
                newList + note
            }
        }
        return note
    }

    override suspend fun finallyDeleteNote(note: Note) {
        notes.updateAndGet {
            it - note
        }
    }
}