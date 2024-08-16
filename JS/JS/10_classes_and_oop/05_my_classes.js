class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}xzc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const bishal = new User("Bishal", "bishal@bishal.com", "plm0ok");

// console.log(bishal.encryptPassword());
// console.log(bishal.changeUsername());

// ---------- BEHIND ----------

function newUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

newUser.prototype.encryptPassword = function () {
    return `${this.password}xzc`;
};

newUser.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

const tuman = new newUser("Tuman", "tuman@tuman.com", "edc4rfv");

console.log(tuman.encryptPassword());
console.log(tuman.changeUsername());
