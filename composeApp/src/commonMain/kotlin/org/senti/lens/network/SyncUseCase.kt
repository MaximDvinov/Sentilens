package org.senti.lens.network

import io.github.aakira.napier.Napier
import io.ktor.http.HttpStatusCode
import org.senti.lens.ApiResult
import org.senti.lens.models.NoteWrite
import org.senti.lens.repositories.NotesRepository
import org.senti.lens.repositories.TagsRepository

class SyncUseCase(
    private val notesRepository: NotesRepository,
    private val tagsRepository: TagsRepository,
    private val notesDataSource: NotesDataSource,
    private val tagsDataSource: TagsDataSource
) {
    suspend fun sync(): ApiResult<String> {
        val localeTags = tagsRepository.getTagsSync()
        val tags = tagsDataSource.getTags()

        if (tags is ApiResult.Success) {
            localeTags.forEach { tag ->
                if (tag.isNew != false && !tag.isDeleted) {

                    val created = tagsDataSource.createTag(tag)

                    if (created is ApiResult.Success) {
                        val updated = tagsRepository.updateTag(tag.copy(isNew = false))
                        Napier.wtf(tag = "createdTag", throwable = null) { "$updated ${tag.isNew}" }
                    }


                } else {
                    if (tags.data.find { it.uuid == tag.uuid } == null) {
                        val deleted = tagsRepository.deleteTag(tag)
                        Napier.wtf(tag = "delete tag", throwable = null) { "$deleted" }
                    }
                }

                if (tag.isDeleted) {
                    when (val delResult = tagsDataSource.deleteTag(tag.uuid.toString())) {
                        is ApiResult.Failure -> {}
                        is ApiResult.ServerError -> {
                            if (delResult.status == HttpStatusCode.NotFound) {
                                tagsRepository.finallyDeleteTag(tag)
                                Napier.wtf(tag = "finallyDeleteTag", throwable = null) { "$tag ${delResult.status.value}" }
                            }
                        }

                        is ApiResult.Success -> {
                            tagsRepository.finallyDeleteTag(tag)
                            Napier.wtf(tag = "finallyDeleteTag", throwable = null) { "$tag" }
                        }
                    }

                }
            }

            tags.data.forEach { tag ->
                val syncedTag = localeTags.find { it.uuid == tag.uuid }
                if (syncedTag == null) {
                    tagsRepository.createTag(tag.copy(isNew = false, isDeleted = false))
                    Napier.wtf(tag = "synced tag", throwable = null) { "$syncedTag" }
                }
            }
        }

        val localeNotes = notesRepository.getNotesSync()
        val notes = notesDataSource.getNotes()

        if (notes is ApiResult.Success) {
            localeNotes.forEach { note ->
                if (note.isNew != false && !note.isDeleted) {
                    val created = notesDataSource.createNote(
                        NoteWrite(
                            title = note.title,
                            content = note.content,
                            uuid = note.uuid,
                            tags = note.tags
                        )
                    )

                    if (created is ApiResult.Success) {
                        val upserted = notesRepository.upsertNote(note.copy(isNew = false))
                        Napier.wtf(tag = "created", throwable = null) { "$upserted ${upserted?.isNew}" }
                    }

                } else {
                    if (notes.data.find { it.uuid == note.uuid } == null) {
                        notesRepository.deleteNote(note)
                        Napier.wtf(tag = "notesDelete", throwable = null) { "$note" }
                    }
                }

                if (note.isDeleted) {
                    if (notesDataSource.deleteNote(note.uuid.toString()) is ApiResult.Success) {
                        notesRepository.finalyDeleteNote(note)
                        Napier.wtf(tag = "finalyDeleteNote", throwable = null) { "$note" }
                    }
                }
            }

            notes.data.forEach { note ->
                val syncedNote = localeNotes.find { it.uuid == note.uuid }
                if (syncedNote?.updatedAt != null && note.updatedAt != null) {
                    if (syncedNote.updatedAt.compareTo(note.updatedAt) == 1) {
                        val updated = notesDataSource.updateNote(note.copy(isNew = false))
                        Napier.wtf(tag = "updated") { "$updated" }
                    }
                    if (syncedNote.updatedAt.compareTo(note.updatedAt) == -1) {
                        val updated = notesRepository.updateNotes(note.copy(isNew = false))
                        Napier.wtf(tag = "updated") { "$updated" }
                    }
                }
                if (syncedNote == null) {
                    notesRepository.createNotes(note.copy(isNew = false))
                    Napier.wtf(tag = "syncedNote", throwable = null) { "$syncedNote" }
                }
            }
        }

        return when {
            notes is ApiResult.ServerError || tags is ApiResult.ServerError -> ApiResult.ServerError(
                message = "Sync error ${if (notes is ApiResult.ServerError) notes.message else ""} ${if (tags is ApiResult.ServerError) tags.message else ""}",
                status = when {
                    notes is ApiResult.ServerError -> notes.status
                    tags is ApiResult.ServerError -> tags.status
                    else -> HttpStatusCode.InternalServerError
                }
            )

            notes is ApiResult.Success && tags is ApiResult.Success -> {
                ApiResult.Success(
                    "Данные синхронизированны"
                )
            }

            else -> {
                ApiResult.Failure("Ошибка синхронизации")
            }
        }
    }
}