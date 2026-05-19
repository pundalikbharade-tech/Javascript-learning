//1.ascending order
let fruits = ["banana", "apple", "mango", "grapes"];
fruits.sort();

console.log(fruits);

//2.ascending order
let numbers = [100, 25, 3, 40, 9];
numbers.sort((a, b) => a - b);

console.log(numbers);

//3.decending order
let numbers1 = [100, 25, 3, 40, 9];
numbers1.sort((a, b) => b - a);

console.log(numbers1);

//4.descending marks
let students = [
  { name: "Rahul", marks: 70 },
  { name: "Amit", marks: 85 },
  { name: "Neha", marks: 60 },
];

students.sort((a, b) => b.marks - a.marks);
console.log(students);

//5.String Length
let words = ["apple", "kiwi", "banana", "mango"];

words.sort((a, b) => a.length - b.length);
console.log(words);

//6.Alphabetical sort
let users = [
  { name: "Rahul", age: 22 },
  { name: "Amit", age: 25 },
  { name: "Neha", age: 20 },
];

users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);

//7.max number
let numbers2 = [100, 25, 3, 40, 9];
numbers2.sort((a, b) => a - b);

let max = numbers2[numbers2.length - 1];

console.log(max);
