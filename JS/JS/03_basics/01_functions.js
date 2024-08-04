function sayMyName() {
  console.log("B");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("L");
}
// sayMyName();

// function addTwoNumbers(number1, number2) {
// console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2; // this is short code of the above two line
}
const result = addTwoNumbers(10, 10);
// console.log("result", result);

function loginUser(username = "Computer") {
  // username computer means this is default value of username
  if (!username) {
    console.log("Please enter your username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUser("Tuman"));
// console.log(loginUser());

function calculatePrice(num1, num2, ...num3) {
  return num3;
}
// console.log(calculatePrice(100, 200, 300, 400, 500));

const user = {
  userName: "Tuman",
  price: 99,
};
function handleObj(anyObj) {
  console.log(`Username is ${anyObj.userName} & the price is ${anyObj.price}`);
}
// handleObj(user);
// handleObj({
// userName: "Bishal",
// price: 199,
// });

const newArray = [100, 200, 300];
function handleArray(getArray) {
  return getArray[2];
}
// console.log(handleArray(newArray));
// console.log(handleArray([400, 500, 600]));
