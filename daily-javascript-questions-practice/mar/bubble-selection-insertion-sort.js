//bubble sort
let arr = [7, 2, 9, 4, 1];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

let arry = [30, 20, 10, 40, 50];

//Selection Sort
for (let i = 0; i < arry.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arry.length; j++) {
    if (arry[j] < arry[minIndex]) {
      minIndex = j;
    }
  }
  let temp = arry[i];
  arry[i] = arry[minIndex];
  arry[minIndex] = temp;
}
console.log(arry);

//Insertion Sort
let arr1 = [5, 3, 4, 1, 2];
for (let i = 1; i < arr1.length; i++) {
  let key = arr1[i];
  let j = i - 1;
  while (j >= 0 && arr1[j] > key) {
    arr1[j + 1] = arr1[j];
    j--;
  }
  arr1[j + 1] = key;
}

console.log(arr1);
