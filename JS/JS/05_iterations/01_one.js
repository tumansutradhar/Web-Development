// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop ${j}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["Spider Man", "Iron Man", "Hulk"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// break & continue

// for (let index = 1; index <= 15; index++) {
// if (index == 5) {
// console.log("5 is detected");
// break;
// }
// console.log(`The value of Index is ${index}`);
// }

for (let index = 1; index <= 15; index++) {
  if (index == 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(`The value of Index is ${index}`);
}
