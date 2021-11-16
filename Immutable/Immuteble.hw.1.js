const pipe = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

const lowerCase = (str) => str.toLowerCase();
const split = (separator) => (str) => str.split(separator);
const join = (separator) => (str) => str.join(separator);
const unique = (arr) => [...new Set(arr)];
const filter = (fn) => (arr) => arr.filter(fn);
const isVowel = (chart) => ["a", "e", "i", "o", "u", "y"].includes(chart);

const getVowels = pipe(
    lowerCase,
    split(""),
    unique,
    filter(isVowel),
);

console.log(getVowels("AaBaaaai"))