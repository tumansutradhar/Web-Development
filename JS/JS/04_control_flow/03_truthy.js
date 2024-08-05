const userEmail = "tuman@sutradhar.com";

if (userEmail) {
  // console.log("user have email");
} else {
  // console.log("user don't have email");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN;

// truthy value
// "0", "false", " ", [], {}, function () {}

const myArray = [];

if (myArray.length === 0) {
  // console.log("the array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  // console.log("the object is empty");
}

// Nullish Coalescing Operator(??): null, undefined

let var1;

// var1 = 5 ?? 10;
// var1 = null ?? 15;
// var1 = undefined ?? 20;
var1 = null ?? 25 ?? 30;
// console.log(var1);

// Tarniary Operator (condition ? true : false)

const price = 99;

price <= 100 ? console.log("Less than 100") : console.log("More than 100");
