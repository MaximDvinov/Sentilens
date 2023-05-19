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
                        notesRepository.upsertNote(note.copy(isNew = false))
                    }

                    Napier.wtf(tag = "created", throwable = null) { "$created ${note.isNew}" }
                } else {
                    if (notes.data.find { it.uuid == note.uuid } == null) {
                        notesRepository.deleteNote(note)
                    }
                }

                if (note.isDeleted) {
                    if (notesDataSource.deleteNote(note.uuid.toString()) is ApiResult.Success) {
                        notesRepository.finalyDeleteNote(note)
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
                        notesRepository.updateNotes(note.copy(isNew = false))
                    }
                }
                if (syncedNote == null) {
                    notesRepository.createNotes(note.copy(isNew = false))
                }
            }
        }


        val localeTags = tagsRepository.getTagsSync()
        val tags = tagsDataSource.getTags()

        if (tags is ApiResult.Success) {
            localeTags.forEach { tag ->
                if (tag.isNew != false && !tag.isDeleted) {

                    val created = tagsDataSource.createTag(tag)

                    if (created is ApiResult.Success) {
                        tagsRepository.updateTag(tag.copy(isNew = false))
                    }

                    Napier.wtf(tag = "createdTag", throwable = null) { "$created ${tag.isNew}" }
                } else {
                    if (tags.data.find { it.uuid == tag.uuid } == null) {
                        tagsRepository.deleteTag(tag)
                    }
                }

                if (tag.isDeleted) {
                    when (val delResult = tagsDataSource.deleteTag(tag.uuid.toString())) {
                        is ApiResult.Failure -> {}
                        is ApiResult.ServerError -> {
                            if (delResult.status == HttpStatusCode.NotFound) {
                                tagsRepository.finallyDeleteTag(tag)
                            }
                        }

                        is ApiResult.Success -> {
                            tagsRepository.finallyDeleteTag(tag)
                        }
                    }

                }
            }

            tags.data.forEach { tag ->
                val syncedTag = localeTags.find { it.uuid == tag.uuid }
                if (syncedTag == null) {
                    tagsRepository.createTag(tag.copy(isNew = false))
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