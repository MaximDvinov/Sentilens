package org.senti.lens.models

import cafe.adriel.voyager.core.lifecycle.JavaSerializable

data class Recommendation(
    val title: String,
    val description: String,
    val url: String? = null,
    val imageUrl: String? = null,
) : JavaSerializable

val recommendation1 = Recommendation(
    "Посмотрите фильм",
    "Рекомендуем посмотреть кино, чтобы поднять настроение. Вы можете выбрать фильм в жанре комедии, мелодрамы или другом жанре, который вам нравится. Подготовьте уютное место для просмотра и наслаждайтесь кино в хорошей компании или одни.",
    "https://www.kinopoisk.ru/lists/top250/",
    "https://illlustrations.co/static/5a4315249192fd92b2319472462ae375/ee604/113-workstation.png"
)

val recommendation2 = Recommendation(
    "Почитайте книгу",
    "Рекомендуем почитать книгу, чтобы улучшить настроение. Вы можете выбрать книгу в жанре фантастики, приключений или любом другом жанре, который вам нравится. Найдите уютное место и наслаждайтесь чтением в хорошей компании или одни.",
    "https://www.litres.ru/selections/top-100-fantasy/",
    "https://illlustrations.co/static/57c6ad286ab7e18d721163e6cc0093c8/ee604/day69-dotted-notebook.png"
)

val recommendation3 = Recommendation(
    "Сходите на прогулку",
    "Рекомендуем сходить на прогулку, чтобы поднять настроение. Вы можете выбрать любое место, которое вам нравится - парк, набережную, лес и т.д. Не забудьте одеться соответствующе погоде и прихватить с собой воду.",
    null,
    "https://illlustrations.co/static/9af1199dd7b4d496edb07880b91e98ef/ee604/109-map-location.png"
)

val recommendation4 = Recommendation(
    "Поговорите с другом",
    "Рекомендуем поговорить с другом, чтобы поднять настроение. Вы можете выбрать тему для разговора - работа, увлечения, планы на будущее и т.д. Найдите время для общения и получите удовольствие от общения с близким человеком.",
    null,
    "https://illlustrations.co/static/ac43573069f70cd73a85b83e326355e5/ee604/126-namaste-no-hand-shake.png"
)

val recommendation5 = Recommendation(
    "Сделайте что-то свое",
    "Рекомендуем сделать что-то свое, чтобы поднять настроение. Вы можете выбрать любое занятие, которое вам нравится - вышивание, рисование, готовка и т.д. Найдите время и место для творчества и наслаждайтесь процессом.",
    null,
    "https://illlustrations.co/static/13fefd389e126b12f50282fc1f93b6df/ee604/day19-apple-watch.png"
)

val recommendationsList =
    listOf(recommendation1, recommendation2, recommendation3, recommendation4, recommendation5)
