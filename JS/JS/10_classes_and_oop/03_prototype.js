// let myName = "Tuman";

// console.log(myName.trueLength);

let heros = ["IronMan", "SpiderMan"];

let heroPower = {
    IronMan: "Rocket",
    SpiderMan: "Web-Shooting",

    getHeroPower: function () {
        console.log(`IronMan Power is ${this.IronMan}`);
    },
};

Object.prototype.tuman = function () {
    console.log("Present in all Object");
    // it give all object
};

Array.prototype.bishal = function () {
    console.log("Hello");
    // is only for Array
};

// heroPower.tuman();
// heros.tuman();

// heroPower.bishal();
// heros.bishal();

// Inheritance

const User = {
    name: "Tuman",
    email: "tuman@email.com",
};

const phone = {
    makeVideo: true,
};

const sdCardSupport = {
    isAvailable: false,
};

const gpuSupport = {
    playGame: "COC",
    fullPower: true,
    __proto__: sdCardSupport,
};

phone.__proto__ = User;

Object.setPrototypeOf(sdCardSupport, phone);

let newUser = "Bishal     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
};

newUser.trueLength();
"bishal".trueLength();
