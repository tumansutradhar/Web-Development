// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Iron man", "Spider man", "Hulk"];

let myObj = {
    name: "Tuman",
    age: 22,
};

const myFunction = function () {
    console.log("Hello World");
};

/* -------------------------------------- */
// Stack (Primitive), Heap (Non Primitive)

let myGithubName = "tumansutradhar";
let anotherName = myGithubName;
anotherName = "bishal";
console.log(myGithubName);
console.log(anotherName);

let userOne = {
    email: "userone@gmail.com",
    upi: "userone@upi",
};

let userTwo = {
    email: "usertwo@gmail.com",
    upi: "usertwo@upi",
};
userTwo.email = "bishal@google.com";
console.log(userOne.email);
console.log(userTwo.email);
