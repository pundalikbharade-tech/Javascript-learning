/*1.find all index*/
let arr = [7, 14, 7, 21, 7, 28];
let key = 7;
let index = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === key) {
    index.push(i);
  }
}
console.log(index);

/*2.Last Occurrence*/
let arr2 = [7, 14, 7, 21, 7, 28];
let key2 = 7;
let lastIndex = -1;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === key2) {
    lastIndex = i;
  }
}
if (lastIndex !== -1) {
  console.log(lastIndex);
}

/*3.first Occurrence*/
let arr3 = [3, 6, 3, 9, 3];
let key3 = 3;
let firstIndex = -1;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === key3) {
    firstIndex = i;
    break;
  }
}
if (firstIndex !== -1) {
  console.log(firstIndex);
}
