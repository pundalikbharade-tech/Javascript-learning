// 1. Add 10 to each number using map()
let numbers = [5, 10, 15, 20];

let addTen = numbers.map((num) => {
  return num + 10;
});

console.log(addTen);

// 2. Convert all names to uppercase
let names = ["ram", "sham", "pundalik"];

let upperCaseNames = names.map((name) => {
  return name.toUpperCase();
});

console.log(upperCaseNames);

// 3. Extract only names from array of objects
let users = [
  { name: "Ram", age: 20 },
  { name: "Sham", age: 22 },
  { name: "Pundalik", age: 21 },
];

let userNames = users.map((user) => {
  return user.name;
});

console.log(userNames);

// 4. Add 18% GST to prices
let prices = [100, 200, 300, 400];

let gstPrices = prices.map((price) => {
  return price + (price * 18) / 100;
});

console.log(gstPrices);

// 5. Replace odd numbers with null (even only shown)
let numbersList1 = [1, 2, 3, 4, 5, 6, 7, 8];

let evenOnly = numbersList1.map((num) => {
  return num % 2 === 0 ? num : null;
});

console.log(evenOnly);

// 6. Square numbers
let numbersList2 = [2, 4, 6, 8];

let squaredNumbers = numbersList2.map((num) => {
  return num * num;
});

console.log(squaredNumbers);

// 7. Add index to each fruit
let fruits = ["apple", "banana", "mango"];

let indexedFruits = fruits.map((fruit, index) => {
  return index + " - " + fruit;
});

console.log(indexedFruits);

// 8. Convert to lowercase
let words = ["HELLO", "WORLD", "JAVASCRIPT"];

let lowerCaseWords = words.map((word) => {
  return word.toLowerCase();
});

console.log(lowerCaseWords);

// 9. Add ₹ symbol before price
let priceList = [100, 200, 300];

let rupeePrices = priceList.map((price) => {
  return "₹" + price;
});

console.log(rupeePrices);

// 10. Create array of objects with id and value
let items = ["pen", "pencil", "eraser"];

let itemsWithId = items.map((item, index) => {
  return {
    id: index,
    value: item,
  };
});

console.log(itemsWithId);

// 11. Pass or Fail
let marks = [35, 60, 25, 80];

let resultMarks = marks.map((mark) => {
  return mark >= 40 ? "Pass" : "Fail";
});

console.log(resultMarks);

// 12. Double odd numbers
let nums = [1, 2, 3, 4, 5];

let doubleOdd = nums.map((num) => {
  return num % 2 !== 0 ? num * 2 : num;
});

console.log(doubleOdd);

// 13. Add prefix Mr.
let people = ["ram", "sham", "amit"];

let mrNames = people.map((name) => {
  return "Mr. " + name;
});

console.log(mrNames);

// 14. Convert numbers to string
let numberArray = [10, 20, 30];

let stringNumbers = numberArray.map((num) => {
  return num.toString();
});

console.log(stringNumbers);

// 15. Replace odd numbers with "Odd"
let numbersFinal = [1, 2, 3, 4, 5];

let oddReplaced = numbersFinal.map((num) => {
  return num % 2 !== 0 ? "Odd" : num;
});

console.log(oddReplaced);
