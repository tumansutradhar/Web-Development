const marvelHeros = ["Iron Man", "Spider Man", "Hulk"];
const dcHeros = ["Super Man", "Flash", "Batman"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Tuman"));
console.log(Array.from("Sutradhar"));
console.log(Array.from({ name: "Bishal" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
