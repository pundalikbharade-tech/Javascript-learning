//1 Check if at least one number is greater than 10

let nums = [4, 7, 12, 3];

let greater = nums.some((num) => {
  return num > 10;
});

console.log(greater);

//2 Check if all numbers are greater than 0

let nums2 = [2, 5, 8, 10];

let greter0 = nums2.every((nums) => {
  return nums > 0;
});
console.log(greter0);

// 3) Check if at least one string is "admin"

let arr3 = ["user", "guest", "admin", "test"];

let string = arr3.some((arr) => {
  return arr === "admin";
});

console.log(string);

//4 Check if at least one number is divisible by 7

let scoresList = [10, 14, 22, 33, 41];

let divisible = scoresList.some((scores) => {
  return scores % 7 === 0;
});

console.log(divisible);

//5 Check if all students have marks above 40

let studentMarksList = [45, 60, 72, 88, 55];

let above = studentMarksList.every((student) => {
  return student > 40;
});

console.log(above);

//6 Check if at least one user is "premium"

let userTypeList = ["basic", "free", "premium", "basic"];

let premium = userTypeList.some((user) => {
  return user === "premium";
});

console.log(premium);

//7 Check if all numbers are even

let numberPool = [4, 8, 12, 16, 20];

let even = numberPool.every((n) => {
  return n % 2 === 0;
});

console.log(even);

//8  Check if at least one number is greater than the average of the array

let valuesSet = [10, 20, 30, 40, 50];

let sum = valuesSet.reduce((acc, reduce) => {
  return acc + reduce;
}, 0);

let average = sum / valuesSet.length;

let averagenumber = valuesSet.some((value) => {
  return value > average;
});

console.log(averagenumber);

//9 Check if all users have age >= 18

let usersGroup = [
  { name: "A", age: 20 },
  { name: "B", age: 17 },
  { name: "C", age: 25 },
];

let age = usersGroup.every((user) => {
  return user.age >= 18;
});

console.log(age);

//10 Check if at least one number is divisible by both 3 and 5

let magicNumbers = [10, 15, 22, 30, 44];

let divsibles1 = magicNumbers.some((magic) => {
  return magic % 3 === 0 && magic % 5 === 0;
});

console.log(divsibles1);
