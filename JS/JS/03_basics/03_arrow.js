const user = {
  username: "Bunny",
  price: 199,
  message: function () {
    console.log(`Hello, ${this.username}`);
    console.log(this);
  },
};
// user.message();
// user.username = "Tuman";
// user.message();
// console.log(this);

// function newFunction() {
// let name = "BUNNY";
// console.log(this.name);
// }

const newFunction = () => {
  let name = "BUNNY";
  console.log(this.name);
};
// newFunction();

// const addTwo = (num1, num2) => {
// return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ username: "Bishal" });

// console.log(addTwo(1, 2));
