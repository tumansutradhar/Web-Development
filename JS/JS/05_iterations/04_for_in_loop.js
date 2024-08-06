const myObject = {
  js: "Javascript",
  rb: "Ruby",
  cpp: "C++",
};

for (const key in myObject) {
  // console.log(`${key} fullform is ${myObject[key]}`);
}

const language = ["Java", "Javascript", "C++"];

for (const key in language) {
  // console.log(language[key]);
}

const map = new Map();

map.set("WB", "West Bengal");
map.set("AS", "Assam");
map.set("NL", "Nagaland");
map.set("RJ", "Rajasthan");

for (const key in map) {
  console.log(key);
}
// it does't iterable
