const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// Math.PI=10
// console.log(Math.PI);

const tuman = {
    name: "Tuman",
    email: "tuman@sutradhar.com",
    currentlyAvailable: true,

    availableCurrently: function () {
        console.log("I'm not available");
    },
};

console.log(Object.getOwnPropertyDescriptor(tuman, "name"));

Object.defineProperty(tuman, "name", {
    // writable: false,
    enumerable: true,
    // configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(tuman, "name"));

for (const [key, value] of Object.entries(tuman)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}
