// 1) Find the first even number in the array

let nums = [3, 7, 9, 12, 15, 18];

let evennumber = nums.find((num) => {
  return num % 2 === 0;
});

console.log(evennumber);

// 2) Find the first odd number in the array

let data = [4, 8, 10, 13, 16, 21];

let oddnumbers = data.find((da) => {
  return da % 2 !== 0;
});

console.log(oddnumbers);

// 3) Find the first number greater than 50

let list = [10, 25, 60, 45, 80, 30];

let greaternum = list.find((listn) => {
  return listn > 50;
});

console.log(greaternum);

// 4) Find the first negative number in the array

let numbersList = [5, 12, -3, 8, -10, 15];

let negative = numbersList.find((numburs) => {
  return numburs < 0;
});

console.log(negative);

// 5) Find the index of first even number in the array

let arrData = [3, 7, 9, 12, 15, 18];

let indexEven = arrData.findIndex((data) => {
  return data % 2 === 0;
});

console.log(indexEven);

// 6) Find the index of first number greater than 100

let numbersArray = [20, 45, 60, 150, 80, 200];

let indexg = numbersArray.findIndex((numbersA) => {
  return numbersA > 100;
});

console.log(indexg);

// 7) Find the first word that starts with "b"

let wordsList = ["apple", "banana", "mango", "blueberry", "grapes"];

let startb = wordsList.find((words) => {
  return words[0] === "b";
});

console.log(startb);

// 8) Find the index of first word that starts with "m"

let wordsList1 = ["apple", "banana", "mango", "blueberry", "grapes"];

let indexm = wordsList1.findIndex((word) => word[0] === "m");

console.log(indexm);

// 9) Find the first number divisible by 7

let dataSet = [10, 14, 22, 35, 40, 49];

let divisble = dataSet.find((dataset) => dataset % 7 === 0);

console.log(divisble);

// 10) Find the index of first number divisible by 3

let numbersSet = [7, 11, 13, 18, 22, 27, 30];

let devisible3 = numbersSet.findIndex((numbers) => {
  return numbers % 3 == 0;
});

console.log(devisible3);
