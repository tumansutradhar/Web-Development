// const tinder = new Object(); This is Singleton Object

const tinder = {}; //This is non Singleton Object
// console.log(tinder);

tinder.id = "7483KR";
tinder.name = "Bishal";
tinder.isLoggedIn = false;

// console.log(tinder);

const regularUser = {
  email: "new@regularuser.com",
  fullName: {
    userFullName: {
      firstName: "Tuman",
      lastName: "Sutradhar",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullName.userFullName);

const obj1 = { 1: "T", 2: "u" };
const obj2 = { 3: "m", 4: "a", 5: "n" };
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('isLoggedIn'));
// console.log(tinder.hasOwnProperty('isLogged'));

const course = {
  coruseName: "Become a Engineer",
  price: "37100",
  courseInstructor: "Tuman",
};

const { courseInstructor: instructor } = course;
console.log(instructor);
