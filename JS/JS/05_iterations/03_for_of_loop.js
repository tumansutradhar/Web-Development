// for of loop

const array = [9, 8, 7, 6, 5];
for (const number of array) {
  // console.log(number);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  // console.log(`Eatch character is "${greet}"`);
}

// Map

const map = new Map();

map.set("WB", "West Bengal");
map.set("AS", "Assam");
map.set("NL", "Nagaland");
map.set("RJ", "Rajasthan");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key + ": " + value);
}

const myObject = {
  game1: "NFS",
  game2: "IGI",
  gmae3: "GTAV",
};

for (const [key, value] of myObject) {
  console.log(key + ": " + value);
}

// does't works
