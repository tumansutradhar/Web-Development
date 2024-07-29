// Alert Function
alert("Hello, World!");

// Type checker
typeof (123);
typeof ("Tuman");
typeof (true);

// Input
prompt("What is your name?");

// Variable
var myName = "Tuman";
var yourAge = prompt("Enter your age?");
alert("Your age is: " + yourAge);

// Exercise start
var a = 3;
var b = 8;
var c = a;
a = b;
b = c;
console.log("a is " + a);
console.log("b is " + b);
// Exercise end

// String
var message = "Hello,";
var name = "Tuman";
alert(message + name);

// Length
var newName = "Bishal";
newName.length;

// Exercise start
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written" + tweetCount + "characters, you have" + (140 - tweetCount) + "characters remaining");
// Exercise end

// Slice(X,Y)
var name = "Tuman";
name.slice(0, 1);

// Exercise start
var tweet = prompt("Compose your tweet:");
var tweetSlice = tweet.slice(0, 140);
alert(tweetSlice);
// Exercise end

// Uppercase & Lowercase
// Exercise start
var userName = prompt("Enter your name:");
var firstChar = userName.slice(0, 1);
var upperCase = firstChar.toUpperCase(); //UpperCase: TUMAN
var restOfName = userName.slice(1, userName.length);
restOfName = restOfName.toLowerCase(); //LowerCase: tuman
var finalName = upperCase + restOfName;
alert("Hello, " + finalName);
// Exercise end

// Arithmetic & Modulo Operator
// Addition
var A = 2 + 3; //Output 5
// Subtraction
var B = 10 - 2; //Output 8
// Multiplication
var C = 3 * 3; //Output 9
// Division
var D = 6 / 2; //Output 3
// Modulo
var E = 9 % 6; //Output 3

// Precedence
var cost = 3 + 5 * 2; //Output 13
var cost = (3 + 5) * 2; //Output 16

// Dog age to Human Age Formula
// humanAge=(dogAge - 2) * 4 + 21
var dogAge = prompt("Enter Dog Age:");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Dog age is" + humanAge + "years old in human years");

// Increment & Decrement Expression
var x = 5;
x = x + 1; //Output 6

var x = 5;
x++; //Output 6

// Function
function getMilk() {
    alert("Leave House");
    alert("Move Right");
    alert("Move Up");
    alert("Move Up");
    alert("Move Right");
    alert("Buy Milk");
    alert("Move Left");
    alert("Move Up");
    alert("Move Up");
    alert("Move Left");
    alert("Enter House");
}
getMilk(); //For output

// Parameters & Arguments
// Parameters: inside of () value is called parameters
function getMilk(bottles) {
    alert("Leave House");
    alert("Move Right");
    alert("Move Up");
    alert("Move Up");
    alert("Move Right");
    alert("Buy" + bottles + "Milk");
    alert("Move Left");
    alert("Move Up");
    alert("Move Up");
    alert("Move Left");
    alert("Enter House");
}
// Arguments: function call is arguments
getMilk(10); //Then the output is 10 times in one movement
// Exercise start
function buyMilk(money) {
    var numberOfMilk = Math.floor(money / 1.5);
    alert("Buy" + numberOfMilk + "bottles of Milk");
}
buyMilk(5); //Output 3
// Exercise end

// Outputs & Return Values
function buyMilk(money) {
    var numberOfMilk = Math.floor(money / 1.5);
    alert("Buy" + numberOfMilk + "bottles of Milk");
    return money % 1.5; //Remainder Output 1
}
var newMilk = buyMilk(4);
console.log(newMilk); //Output 2
// Exercise start
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}
var bmi = bmiCalculator(45, 147);
console.log(bmi);
// Exercise end

// Random Number Generation: Building a Love Calculator
prompt("What is your name?");
prompt("What is their name?");
var score = Math.random() * 100;
score = Math.floor(score);
alert("Your love score is " + score);

// Control Statements: Using If-Else Condition & Logic
prompt("What is your name?");
prompt("What is their name?");
var score = Math.random() * 100;
score = Math.floor(score);
if (score > 90) {
    alert("Your love score is " + score + "% and you love each other");
} else {
    alert("Your love score is " + score + "%");
}

// Leap Year
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year";
            } else {
                return "Not Leap Year";
            }
        } else {
            return "Not Leap Year";
        }
    } else {
        return "Not Leap Year";
    }
}

// Arrays
var list = [12, 23, 34, 45, 56];
console.log(list);
console.log(list.length);
console.log(list[0]);

var listNumber = prompt("Enter Number:");
list.includes(listNumber)

// Adding Elements and Intermediate Array Techniques
var addArray = [];
var addNumber = 1;
function fun() {
    addArray.push(addNumber);
    addNumber++;
    console.log(addArray);
}

// Control Statements: While Loops
function fun() {
    while (addNumber <= 100) {
        if (addNumber % 3 === 0 && addNumber % 5 === 0) {
            addArray.push("FullFun");
        } else if (addNumber % 3 === 0) {
            addArray.push("Full");
        } else if (addNumber % 5 === 0) {
            addArray.push("Fun");
        } else {
            addArray.push(addNumber);
        }
        addNumber++;
    }
    console.log(addArray);
}

// 99 Bottles Challenge
var numberOfBottles = 99;
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
}

// Control Statements: For Loops
function fun() {
    for (var addNumber = 1; addNumber < 101; addNumber++) {
        if (addNumber % 3 === 0 && addNumber % 5 === 0) {
            addArray.push("FullFun");
        } else if (addNumber % 3 === 0) {
            addArray.push("Full");
        } else if (addNumber % 5 === 0) {
            addArray.push("Fun");
        } else {
            addArray.push(addNumber);
        }
    }
    console.log(addArray);
}

// Fibonacci Code
function fibonacci(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 1) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
output = fibonacci(/*type your number to show the output*/);
console.log(output);