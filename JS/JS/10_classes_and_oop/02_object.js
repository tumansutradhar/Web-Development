function multiply(num) {
  return num * 5;
}

multiply.power = 3;

console.log(multiply(10));
console.log(multiply.power);
console.log(multiply.prototype);

function newUser(username, score) {
  this.username = username;
  this.score = score;
}

newUser.prototype.increment = function () {
  this.score++;
};

newUser.prototype.print = function () {
  console.log(`Score is ${this.score}`);
};

const tuman = new newUser("tuman", 199);
const bishal = new newUser("bishal", 599);

tuman.print();
