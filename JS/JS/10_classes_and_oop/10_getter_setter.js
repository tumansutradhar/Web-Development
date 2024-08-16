class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  get username() {
    return `${this._Username.toUpperCase()}xzcv`;
  }
  set username(value) {
    this._Username = value;
  }
  get email() {
    return this._Email.toUpperCase();
  }
  set email(value) {
    this._Email = value;
  }
}

const tuman = new User("tuman", "tuman@email.com");

// console.log(tuman.username);
// console.log(tuman.email);

// ---------- Function Based/ Define Property ----------

function newUser(username, email) {
  this._username = username;
  this._email = email;

  Object.defineProperty(this, "user", {
    get: function () {
      return this._username.toUpperCase();
    },
    set: function (value) {
      this._username = value;
    },
  });
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const bishal = new newUser("bishal", "bishal@email.com");

// console.log(bishal.user);
// console.log(bishal.email);

// ---------- Object Based ----------

const tumanBishal = {
  _username: "tuman",
  _email: "tuman@bishal.com",

  get username() {
    return this._username.toUpperCase();
  },
  set username(value) {
    this._username = value;
  },
  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const bishalTuman = Object.create(tumanBishal);

console.log(tumanBishal.username);
console.log(tumanBishal.email);
