const name = "tuman";
const repoCount = 50;

console.log(`Hello my name is ${name} & my Github repo count is ${repoCount}`);

const newName = new String("Tuman Sutradhar");
console.log(newName[0]);
console.log(newName.toUpperCase());
console.log(newName.length);
console.log(newName.charAt(4));
console.log(newName.indexOf("n"));

const newString = newName.substring(6, 15);
console.log(newString);

const anotherString = newName.slice(0, 5);
console.log(anotherString);

const newStringOne = "  Tuman  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tuman%20sutradhar";
console.log(url.replace("%20", "-"));
console.log(url.includes("bishal"));
