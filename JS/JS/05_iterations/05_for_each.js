const programing = ["Python", "Javascript", "Java", "C++"];

// programing.forEach(function (language) {
// console.log(language);
// });

programing.forEach((language) => {
  // console.log(language);
});

// function printMe(item) {
// console.log(item);
// }
// programing.forEach(printMe);

// programing.forEach((item, index, arr) => {
// console.log(item, index, arr);
// });

const myCoding = [
  {
    language: "Javascript",
    fileName: "js",
  },
  {
    language: "Python",
    fileName: "py",
  },
  {
    language: "Ruby",
    fileName: "rb",
  },
];

myCoding.forEach((item) => {
  console.log(item.fileName);
});
