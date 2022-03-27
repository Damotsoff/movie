'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function start() {
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?');
    }

}
start();


function showMydb(status) {
    if (!status) {
        console.log(personalMovieDB);
    } else {
        console.log('Доступ закрыт!');
    }
}
showMydb(personalMovieDB.privat);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних фильмов'),
            howMany = prompt('На сколько оцените его ?');
        if (lastFilm != '' && lastFilm != null && lastFilm.length < 50 && howMany != '' && howMany != null) {
            personalMovieDB.movies[lastFilm] = howMany;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}
writeYourGenres();


function choiseMyLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('вы киноман!');
    }
}
choiseMyLevel();