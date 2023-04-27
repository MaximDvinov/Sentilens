package org.senti.lens.models

import androidx.compose.runtime.Stable
import io.realm.kotlin.ext.realmListOf
import io.realm.kotlin.types.RealmList
import io.realm.kotlin.types.RealmObject
import io.realm.kotlin.types.annotations.PrimaryKey
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerialName


@Stable
@Serializable
data class Note(
    val id: Int? = null,
    val title: String = "",
    val body: String = "",
    val date: String = "",
    val time: String = "",
    val tags: List<Tag> = listOf()
)

class NoteEntity : RealmObject {
    @PrimaryKey
    var id: Int? = null
    var title: String = ""
    var body: String = ""
    var date: String = ""
    var time: String = ""
    var tags: RealmList<TagEntity> = realmListOf()

}

val notes = mutableListOf(
    Note(
        id = 1,
        title = "Заметка 1",
        body = "Текст первой заметки awdadw",
        date = "12.04.2023",
        time = "10:00",
        tags = tags.subList(1, 3)
    ),
    Note(
        id = 2,
        title = "Книга 'Война и мир'",
        body = """
            Книга Льва Николаевича Толстого, написанная с 1865 по 1869 годы и впервые опубликованная в 1869–1870 годах. 
            Роман повествует о жизни аристократических кругов России в период с 1805 года по 1820 годы, в том числе войне 1812 года.
            Основное действие происходит в Москве и Санкт-Петербурге, а также на фронте войны с Наполеоном.
            """.trim(),
        date = "01.01.2023",
        time = "12:00",
        tags = tags.subList(0, 1)
    ),
    Note(
        id = 3,
        title = "Заголовок второй заметки",
        body = """
            Это текст второй заметки. Он может быть несколько короче, но все равно достаточно длинным,
            чтобы проверить, что UI приложения корректно отображает многострочный текст и не обрезает
            его слишком рано.
            """.trimIndent(),
        date = "16.04.2023",
        time = "16:30",
        tags = emptyList()
    ),
    Note(
        id = 4,
        title = "Заметка 2",
        body = "Текст второй заметки",
        date = "13.04.2023",
        time = "14:30",
        tags = tags.subList(0, 3)
    ),
    Note(
        id = 5,
        title = "Пример заметки с длинным заголовком, который может занимать несколько строк",
        body = """
            Это тестовый текст для заметки, который может быть достаточно длинным, чтобы проверить,
            как будет отображаться многострочный текст в UI приложения. Мы также добавили некоторые
            дополнительные пробелы перед текстом, чтобы убедиться, что отступы корректно отображаются.
            """.trimIndent(),
        date = "15.04.2023",
        time = "12:00",
        tags = tags.subList(0, 2)
    ),
    Note(
        id = 6,
        title = "Заметка 3",
        body = "Текст третьей заметки",
        date = "14.04.2023",
        time = "09:15",
        tags = emptyList()
    ),
    Note(
        id = 7,
        title = "Еще одна заметка",
        body = """
            Это текст для еще одной заметки. Мы можем использовать эту заметку для тестирования разных
            методов класса Note, например, для проверки корректности сравнения заметок или для фильтрации
            заметок по тегам.
            """.trimIndent(),
        date = "17.04.2023",
        time = "09:00",
        tags = tags.subList(0, 1)
    )
)