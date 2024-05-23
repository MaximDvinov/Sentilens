package org.diary.database

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.update
import kotlinx.uuid.UUID
import org.diary.database.models.NoteDBO

class FakeLocalNotesDataSource : LocalNotesDataSource {
    private val flow = MutableStateFlow<List<NoteDBO>>(listOf())
    override fun getNotes(): Flow<List<NoteDBO>> {
        return flow.map { fl -> fl.sortedByDescending { it.updatedAt } }
    }

    override suspend fun createNotes(note: NoteDBO): NoteDBO {
        flow.update {
            it + note
        }
        return note
    }

    override suspend fun updateNotes(note: NoteDBO): NoteDBO? {
        flow.update { list ->
            list.map {
                if (it.uuid == note.uuid) {
                    note
                } else {
                    it
                }
            }
        }
        return note
    }

    override suspend fun deleteNote(note: NoteDBO) {
        flow.update { list ->
            list.map {
                if (it.uuid == note.uuid) {
                    it.copy(isDeleted = true)
                } else {
                    it
                }
            }
        }
    }

    override suspend fun getNote(id: UUID): NoteDBO? {
        return flow.value.find { it.uuid == id }
    }

    override fun getNotesSync(): List<NoteDBO> {
        return flow.value.sortedByDescending { it.updatedAt }
    }

    override suspend fun upsertNote(note: NoteDBO): NoteDBO? {
        val find = note.uuid?.let { it1 -> getNote(it1) }
        if (find != null) {
            updateNotes(note)
        } else {
            createNotes(note)
        }
        return note
    }

    override suspend fun finallyDeleteNote(note: NoteDBO) {
        flow.update { list ->
            list.filter { it.uuid != note.uuid }
        }
    }
}