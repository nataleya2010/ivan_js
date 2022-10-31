let numberOfFilms;
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms =='' || numberOfFilms ==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

function rememberMyFilms(){
    for (let i=1; i<=2; i++){
        const a = prompt('Один из последних просмотренных фильмов',''),
        b = +prompt('На сколько оцените его?', '');
        if(a != null && b != null && a != '' && ! isNaN(b) && a.length<=50){
            personalMovieDb.movies[a] = b;
        }else{
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if(numberOfFilms<10){
        console.log('вы посмотрели довольно мало фильмов!');
    }else if(numberOfFilms>=10 && numberOfFilms<30){
        console.log('вы классичекский зритель!');
    }else if(numberOfFilms>=30){
        console.log('вы настоящий киноман!');
    }
    
}

detectPersonalLevel();

function showMyDb(hidden){
    if(!hidden){
        console.log(personalMovieDb);
    }
}

function writeYourGenres(){
    for(let i=1; i<=3; i++){
        personalMovieDb.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
showMyDb(personalMovieDb.privat);
