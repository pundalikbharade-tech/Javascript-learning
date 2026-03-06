/*Array ascending sort*/
let arr = [9, 3, 7, 1, 5];
arr.sort((a, b) => a - b);
console.log(arr);

/*Array descending sort*/
let arr1 = [12, 4, 18, 7, 2];
arr1.sort((a, b) => b - a);
console.log(arr1);

/*Strings alphabetical sort*/
let fruits = ["mango", "apple", "banana", "grapes"];
fruits.sort();
console.log(fruits);

/*Array ascending sort*/
let arr2 = [45, 12, 89, 5, 34];
arr2.sort((a, b) => a - b);
console.log(arr2);

/*Numbers descending sort*/
let arr3 = [7, 33, 12, 90, 1];
arr3.sort((a, b) => b - a);
console.log(arr3);

/*second largest*/
let arr4 = [12, 45, 7, 89, 23];
arr4.sort((a, b) => a - b);
let secondLargest = arr4[arr4.length - 2];
console.log(secondLargest);

/*third largest number*/
let arr5 = [12, 45, 7, 89, 23];
arr5.sort((a, b) => a - b);
let largest = arr5[arr5.length - 3];
console.log(largest);

/*smallest number*/
let arr6 = [7, 3, 9, 1, 6];
arr6.sort((a, b) => a - b);
let small = arr6[0];
console.log(small);

/*smallest number*/
let arr7 = [7, 3, 9, 1, 6];
arr7.sort((a, b) => a - b);
let small1 = arr7[1];
console.log(small1);

/*sort using length*/
let words = ["apple", "kiwi", "banana", "fig", "mango"];
let newarr = [...words];
words.sort((a, b) => a.length - b.length);
console.log(words);

/*Object sort*/
let students = [
  { name: "A", marks: 70 },
  { name: "B", marks: 50 },
  { name: "C", marks: 90 },
];

// Sort by marks ascending
students.sort((a, b) => a.marks - b.marks);
console.log(students);

/* Sort by marks descending*/
students.sort((a, b) => b.marks - a.marks);
console.log(students);

/* Sort by alphabetical*/
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);
