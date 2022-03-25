import { data, MovieType } from "./data";




// 1. Собрать в массив все жанры фильмов (без повторения)
const f1 = (movies: MovieType[]): string[] => {
    const genres = movies.flatMap((item) => item.genre);
    return [...new Set(genres)];
}
// console.log(f1(data));




// 2. Собрать в массив всех актеров всех фильмов (без
//     повторения)
const f2 = (movies: MovieType[]): string[] => {
    const actors = movies.flatMap((item) => item.actors);
    return [...new Set(actors)];
}
// console.log(f2(data));




// 3. Отсортировать фильмы по рейтингу по убыванию
const f3 = (movies: MovieType[]): MovieType[] => {
    return [...movies].sort((a, b) => b.imdbRating - a.imdbRating);
}
// console.log(f3(data));




// 4. Создать новый массив, где объекты фильмов будут состоять
// из следующих полей:
// id, title, released, plot
type MovieDescriptionsType = {
    id?: number,
    title: string,
    released: string,
    plot: string,
}
const f4 = (movies: MovieType[]): MovieDescriptionsType[] => {
    return movies.map((item) => ({
        id: item.id,
        title: item.title,
        released: item.released,
        plot: item.plot,
    }));
}
// console.log(f4(data));




// 5. Создать функцию, которая бы принимала массив фильмов и
// число. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где число равно году
// выхода фильма.
const f5 = (movies: MovieType[], year: number): MovieType[] => {
    return movies.filter((item) => item.year === year);
}
// console.log(f5(data, 2011));




// 6. Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть новый
// отфильтрованный массив, с фильмами, где строка входит в
// название фильма.
const f6 = (movies: MovieType[], value: string): MovieType[] => {
    return movies.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
}
// console.log(f6(data, "Black WIDOW"));




// 7. Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где строка входит в
// название фильма или в его сюжет.
const f7 = (movies: MovieType[], value: string): MovieType[] => {
    return movies.filter((item) => 
        item.title.toLowerCase().includes(value.toLowerCase())
        || item.plot.toLowerCase().includes(value.toLowerCase())
    );
}
// console.log(f7(data, "Harry"));




// 8. Создать функцию, которая бы принимала 3 параметра:
// 1)массив фильмов , 2) строка(название поля, например 'title') и
// строку/число(значение поля "Black Widow"). А результатом

// этой функции должен быть отфильтрованный массив, где
// параметры 2 и 3 равны в объекте фильма. Например:
// передаем (films, 'title', 'Black Widow') и на выходе получаем
// фильм с id=1 если передаем (films, 'year', 2011) , то получаем
// фильм с id=2
const f8 = (movies: MovieType[], searchField: keyof MovieType, searchValue: string | number): MovieType[] => {
    return movies.filter((item) => item[searchField] === searchValue);
}

// console.log(f8(data, "title", "Black Widow"));
// console.log(f8(data, "year", 2011));
