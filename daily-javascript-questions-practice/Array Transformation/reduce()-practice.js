// 1) Find sum of all numbers in array

let nums = [10, 20, 30, 40, 50];

let totalSum = nums.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(totalSum);

// 2) Find product (multiplication) of all elements

let values = [2, 3, 4, 5];

let multiplication = values.reduce((multi, value) => {
  return multi * value;
}, 1);

console.log(multiplication);

// 3) Find maximum number from array

let digits = [12, 45, 7, 89, 23, 56];
let maximum = digits.reduce((max, digit) => {
  return max > digit ? max : digit;
}, -Infinity);

console.log(maximum);

// 4) Count even numbers in array

let numsArr = [3, 8, 12, 5, 10, 7, 6];

let evenCount = numsArr.reduce((even, nums) => {
  if (nums % 2 === 0) {
    even++;
  }
  return even;
}, 0);

console.log(evenCount);

// 5) Find sum of only even numbers in array

let arrNums = [5, 10, 15, 20, 25, 30];

let evenSum = arrNums.reduce((evens, arrnum) => {
  if (arrnum % 2 === 0) {
    evens = evens + arrnum;
  }
  return evens;
}, 0);

console.log(evenSum);

// 6) Find sum of squares of all numbers in array

let numsList = [2, 4, 6, 8];

let sumsquares = numsList.reduce((squares, numslist) => {
  return squares + numslist * numslist;
}, 0);
console.log(sumsquares);

// 7) Convert array of strings into a single sentence

let wordsArr = ["I", "love", "JavaScript"];

let string = wordsArr.reduce((str, words) => {
  return str + " " + words;
}, "");

console.log(string);

// 8) Count occurrences of each element in array

let fruitsArr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let occurrences = fruitsArr.reduce((occ, fruits) => {
  occ[fruits] = (occ[fruits] || 0) + 1;
  return occ;
}, {});

console.log(occurrences);

// 9) Find longest word in array

let wordsArr1 = ["apple", "banana", "pineapple", "kiwi", "watermelon"];

let longest = wordsArr1.reduce((long, words) => {
  return words.length > long.length ? words : long;
}, "");

console.log(longest);

// 10) Remove duplicate values from array

let numsArr3 = [1, 2, 2, 3, 4, 4, 5, 1];

let unique = numsArr3.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(unique);
