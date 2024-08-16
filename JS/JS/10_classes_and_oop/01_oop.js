const user = {
  username: "Tuman",
  loginCount: 5,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got User details");
    // console.log(`Username: ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const newUser = User("Tuman", 10, false);
const userNew = User("Bishal", 5, true);

console.log(newUser);
