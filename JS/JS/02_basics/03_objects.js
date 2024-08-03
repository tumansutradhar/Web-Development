// Singleton
// Object.create

// Object literals
const mySym = Symbol("key1");

const jsUser = {
  [mySym]: "mykey1",
  name: "Tuman",
  "full name": "Tuman Sutradhar",
  age: 20,
  location: "Burdwan",
  email: "tuman@tuman.com",
  isLoggedIn: false,
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "tuman@sutradhar.com";
// Object.freeze(jsUser);
// jsUser.email = "tuman@tuman.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS User");
};
console.log(jsUser.greeting());

jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};
console.log(jsUser.greetingTwo());
