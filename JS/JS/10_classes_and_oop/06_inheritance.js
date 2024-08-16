class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class phone extends User {
    constructor(username, model) {
        super(username);
        this.model = model;
        console.log(`Phone Name is ${this.username}`);
    }
}

const samsung = new phone("Samsung Galaxy S24 Ultra", "SMS24UQAX");

const asus = new phone("Asus Rog 4");

console.log(samsung === asus);
console.log(samsung instanceof User);
