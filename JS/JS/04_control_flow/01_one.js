// < (less than), > (greater than), <= (less than equal), >= (greater than equal), == (double equal) it compair asign values, != (not equal), ===(triple eqaul) it compair also types

const score = 200;

// if
if (score > 100) {
  // console.log(`score is greater than 100`);
}
// console.log(`score is less than 100`);

// ifelse
if (score == 100) {
  // console.log(`score is equals 100`);
} else {
  // console.log(`score is not equals 100`);
}
// in ifelse condition statements print if or else

// if (score == 100) console.log("test"), console.log("test1"); it's correct aslo but don't use this types of code

const value = 1000;

// elseif
if (value < 500) {
  // console.log(`the value is less than 500`);
} else if (value == 750) {
  // console.log(`the value is equals 750`);
} else if (value != 900) {
  // console.log(`the value is not equals 900`);
} else {
  // console.log(`the value is less than 1001`);
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
  console.log(`user can buy`);
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log(`user logged in`);
}
