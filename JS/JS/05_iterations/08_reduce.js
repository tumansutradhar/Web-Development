const myNumber = [1, 2, 3, 4, 5];

// const total = myNumber.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);

const total = myNumber.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// console.log(total);

const card = [
  { itemName: "Apple Iphone 15", price: 89000 },
  { itemName: "Samsung Galaxy S24", price: 99099 },
  { itemName: "Apple Macbook Air M1 2020", price: 69000 },
  { itemName: "Asus Zenbook 14x OLED", price: 79000 },
];

const cardPrice = card.reduce(
  (accumulator, itemPrice) => accumulator + itemPrice.price,
  0
);

console.log(cardPrice);
