class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
    static createId() {
        return `zxc472`;
    }
}

const tuman = new User("Tuman");

// console.log(tuman.createId());

class newUser extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const bishal = new newUser("Bishal", "bishal@sutradhar.com");

bishal.logMe();
// console.log(bishal.createId());
