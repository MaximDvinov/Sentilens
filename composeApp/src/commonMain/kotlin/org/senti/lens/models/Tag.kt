package org.senti.lens.models

data class Tag(
    val id: Int,
    val name: String
)


val tags = listOf(
    Tag(id = 1, name = "Work"),
    Tag(id = 2, name = "Personal"),
    Tag(id = 3, name = "Travel"),
    Tag(id = 4, name = "Shopping"),
    Tag(id = 3, name = "Blog"),
    Tag(id = 4, name = "Univer"),
    Tag(id = 3, name = "Что-то еще"),
    Tag(id = 4, name = "тег")
)