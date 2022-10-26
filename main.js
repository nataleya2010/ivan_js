const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i=1; i<=2; i++){
    const a = prompt('Один из последних просмотренных фильмов',''),
    b = prompt('На сколько оцените его?', '');
    if(a != null && b != null && a != '' && b != '' && a.length<=50){
        personalMovieDb.movies[a] = b;
    }else{
        i--;
    }
}
if(numberOfFilms<10){
    console.log('вы посмотрели довольно мало фильмов!');
}else if(numberOfFilms>=10 && numberOfFilms<30){
    console.log('вы классичекский зритель!');
}else if(numberOfFilms>=30){
    console.log('вы настоящий киноман!');
}

console.log(personalMovieDb);
