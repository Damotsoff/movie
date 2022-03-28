'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?');
        }
    },
    showMydb: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            console.log('Доступ закрыт!');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних фильмов'),
                howMany = prompt('На сколько оцените его ?');
            if (lastFilm != '' && lastFilm != null && lastFilm.length < 50 && howMany != '' && howMany != null) {
                personalMovieDB.movies[lastFilm] = howMany;
            } else {
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i <= 2; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (genre != '' && genre != null) {
                personalMovieDB.genres[i] = genre;
                personalMovieDB.genres.forEach(function (item, i, arr) {
                    console.log(`Любимый жанр #${i+1} - это ${item} из массива ${arr}`);
                })
            } else {
                i--;
            }
        }
    },
    choiseMyLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log('вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('вы киноман!');
        }
    },
    toggleVisibleMydb: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;

        }
    }
};