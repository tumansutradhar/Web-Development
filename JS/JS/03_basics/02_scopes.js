// var c = 100;
//var not use because var change its value also if this presence in the scopes
let b = 200;
if (true) {
  const a = 10;
  let b = 20;
  // var c = 30;
  // console.log(b);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Tuman";
  function two() {
    const editor = "Bishal";
    // console.log(userName);
  }
  // console.log(editor);
  two();
}
one();

if (true) {
  const user = "Tuman";
  if (user === "Tuman") {
    const admin = "Bishal";
    // console.log(user + admin);
  }
  // console.log(admin);
}
// console.log(user);

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

console.log(addtwo(5));
const addtwo = function addTwo(num) {
  return num + 2;
};
