const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Asyn task is Complete");
    resolve();
  }, 1000);
});

promise.then(function () {
  // console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Asyn task is Complete");
    resolve();
  }, 1000);
}).then(function () {
  // console.log("Asyn Resolved");
});

const newPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve({ username: "Example", email: "example@newpromise.com" });
  }, 1000);
});

newPromise.then(function (user) {
  // console.log(user);
});

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Tuman", email: "tuman@email.com" });
    } else {
      reject("ERROR!!!");
    }
  }, 1000);
});

promiseOne.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username);
}).catch(function (error) {
  console.log(error);
}).finally(() => {
  console.log("Promise either Resolved or Rejected");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Bishal", password: "123" });
    } else {
      reject("ERROR...");
    }
  }, 1000);
});

async function consumePromiseTwo() {
  try {
    const response = await promiseTwo;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseTwo();
