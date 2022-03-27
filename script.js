'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних фильмов'),
        howMany = prompt('На сколько оцените его ?');
    if (lastFilm != '' && lastFilm != null && lastFilm.length < 50 && howMany != '' && howMany != null) {
        personalMovieDB.movies[lastFilm] = howMany;
    } else {
        i--;
    }

};
if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log('вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('вы киноман!');
}

console.log(personalMovieDB);