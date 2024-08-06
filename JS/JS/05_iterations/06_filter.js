const programing = ["Python", "Javascript", "Java", "C++"];

// const language = programing.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(language);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = myNumber.filter((number) => {
//   return number > 5;
// });

// const newNumber = [];

// myNumber.forEach((number) => {
//   if (number > 5) {
//     newNumber.push(number);
//   }
// });

// console.log(newNumber);

const books = [
  { title: "Book one", genre: "Fiction", publish: 1981, edition: 2003 },
  { title: "Book two", genre: "Non-Fiction", publish: 1992, edition: 2005 },
  { title: "Book three", genre: "History", publish: 1999, edition: 2008 },
  { title: "Book four", genre: "Science", publish: 1969, edition: 2009 },
  { title: "Book five", genre: "Fiction", publish: 1987, edition: 2016 },
  { title: "Book six", genre: "Non-Fiction", publish: 1996, edition: 2020 },
];

let userBooks = books.filter((book) => book.genre === "Non-Fiction");
userBooks = books.filter((book) => {
  return book.publish >= 1900 && book.genre === "Science";
});

console.log(userBooks);
