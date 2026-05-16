// 1. Filter numbers greater than 10
let numbers = [5, 10, 15, 20];

let greaterNumbers = numbers.filter((num) => {
  return num > 10;
});

console.log(greaterNumbers);

// 2. Filter even numbers
let nums = [3, 6, 9, 12, 15, 18];

let evenNumbers = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

// 3. Filter strings with length greater than 5
let words = ["apple", "banana", "cat", "elephant", "dog", "sunflower"];

let longWords = words.filter((word) => {
  return word.length > 5;
});

console.log(longWords);

// 4. Filter numbers between 10 and 30 (both included)
let values = [5, 10, 15, 20, 25, 30, 35, 40];

let numbersInRange = values.filter((value) => {
  return value >= 10 && value <= 30;
});

console.log(numbersInRange);

// 5. Filter products with price less than 500
let products = [
  { name: "Pen", price: 20 },
  { name: "Book", price: 150 },
  { name: "Bag", price: 800 },
  { name: "Copy", price: 30 },
];

let affordableProducts = products.filter((product) => {
  return product.price < 500;
});

console.log(affordableProducts);

// 6. Filter names that start with 'A' (case sensitive)
let names = ["Amit", "Raj", "Anjali", "Sneha", "Akash", "Priya"];

let namesStartingWithA = names.filter((name) => {
  return name[0] === "A";
});

console.log(namesStartingWithA);

// 7. Filter numbers greater than 50 OR less than 20
let numbersList = [15, 25, 55, 10, 60, 18, 45, 70];

let numbersOrCondition = numbersList.filter((num) => {
  return num < 20 || num > 50;
});

console.log(numbersOrCondition);

// 8. Filter out all falsy values (false, 0, "", null, undefined, NaN)
let mixed = ["Hello", 0, "World", false, 42, "", null, "JS", undefined, NaN];

let truthyValues = mixed.filter((item) => {
  return Boolean(item);
});

console.log(truthyValues);

// 9. Filter students who passed (marks >= 40)
let students = [
  { name: "Raj", marks: 35 },
  { name: "Priya", marks: 78 },
  { name: "Amit", marks: 42 },
  { name: "Neha", marks: 38 },
];

let passedStudents = students.filter((student) => {
  return student.marks >= 40;
});

console.log(passedStudents);

// 10. Filter numbers that are divisible by 3
let digits = [4, 9, 12, 7, 15, 20, 18, 5];

let divisibleByThree = digits.filter((digit) => {
  return digit % 3 === 0;
});

console.log(divisibleByThree);

// 11. Filter cities with name length exactly 5 characters
let cities = ["Mumbai", "Delhi", "Pune", "Patna", "Jaipur", "Indore"];

let citiesLengthFive = cities.filter((city) => {
  return city.length === 5;
});

console.log(citiesLengthFive);

// 12. Filter numbers that are NOT equal to 0 (remove zeros)
let numbersWithZero = [0, 5, 0, 10, 0, 15, 20, 0];

let nonZeroNumbers = numbersWithZero.filter((num) => {
  return num !== 0;
});

console.log(nonZeroNumbers);

// 13. Filter products whose price is between 200 and 500 (both included)
let items = [
  { product: "Shoes", price: 300 },
  { product: "Watch", price: 150 },
  { product: "Bag", price: 450 },
  { product: "Belt", price: 100 },
  { product: "Shirt", price: 250 },
];

let priceBetween = items.filter((item) => {
  return item.price >= 200 && item.price <= 500;
});

console.log(priceBetween);

// 14. Filter names that contain letter 'e' (any position)
let namesList = ["Raj", "Neha", "Amit", "Meera", "Rohit", "Priya"];

let namesContainE = namesList.filter((name) => {
  return name.includes("e");
});

console.log(namesContainE);

// 15. Filter employees with salary greater than 50000 AND age less than 30
let employees = [
  { name: "Raj", salary: 60000, age: 28 },
  { name: "Priya", salary: 45000, age: 25 },
  { name: "Amit", salary: 70000, age: 32 },
  { name: "Neha", salary: 55000, age: 26 },
  { name: "Rohit", salary: 40000, age: 24 },
];

let highSalaryYoung = employees.filter((emp) => {
  return emp.salary > 50000 && emp.age < 30;
});

console.log(highSalaryYoung);
