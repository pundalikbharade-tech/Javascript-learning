/*1.binary search*/
let arr = [5, 12, 18, 23, 37, 42, 56, 61];
let target = 37;
let start = 0;
let end = arr.length - 1;
let found = false;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    console.log(mid);
    found = true;
    break;
  } else if (arr[mid] < target) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
if (!found) {
  console.log("not found");
}

/*2.linear search*/
let arr1 = [7, 2, 5, 9, 12];
let target1 = 5;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === target1) {
    console.log(i);
    break; // optional, first occurrence
  }
}

/*3.linear search*/
let arr2 = [3, 8, 1, 6, 10];
let target2 = 4;
let found1 = false;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === target2) {
    console.log(i);
    found1 = true;
    break;
  }
}
if (!found1) {
  console.log("not found");
}

/*4.binary search*/
let arr3 = [2, 4, 6, 8, 10, 12, 14];
let target3 = 10;
let start1 = 0;
let end1 = arr3.length - 1;
let found2 = false;
while (start1 <= end1) {
  let mid1 = Math.floor((start1 + end1) / 2);
  if (arr3[mid1] === target3) {
    console.log(mid1);
    found2 = true;
    break;
  } else if (arr3[mid1] < target3) {
    start1 = mid1 + 1;
  } else {
    end1 = mid1 - 1;
  }
}
if (!found2) {
  console.log("not found");
}
