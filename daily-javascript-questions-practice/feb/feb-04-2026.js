/*1.Find Max Number*/
let arr = [10, 45, 67, 23, 89, 12];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max);

/*2.Find Min Number*/
let arr1 = [10, 45, 67, 23, 89, 12];
let min = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < min) min = arr1[i];
}
console.log(min);

/*3.Find Min and Max in one loop */

let arr3 = [34, 12, 78, 5, 90, 23];
let max1 = arr3[0];
let min1 = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] > max1) {
    max1 = arr3[i];
  }
  if (arr3[i] < min1) {
    min1 = arr3[i];
  }
}
console.log("max" + " " + max1 + " " + "min" + " " + min1);
