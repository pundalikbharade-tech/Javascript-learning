/*1.first occurrence using binary search in duplicate value*/
let arr = [1, 2, 2, 4, 4, 4, 6, 6, 8, 10];
let target = 6;
let firstIndex = -1;

let low = 0;
let high = arr.length - 1;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    firstIndex = mid;
    high = mid - 1;
  } else if (arr[mid] < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}
console.log(firstIndex);

/*2.last occurrence using binary search in duplicate value*/

let array2 = [1, 2, 2, 4, 4, 4, 6, 6, 8, 10];
let target2 = 2;
let lastIndex = -1;

let low2 = 0;
let high2 = array2.length - 1;

while (low2 <= high2) {
  let mid2 = Math.floor((low2 + high2) / 2);

  if (array2[mid2] === target2) {
    lastIndex = mid2;
    low2 = mid2 + 1;
  } else if (array2[mid2] < target2) {
    low2 = mid2 + 1;
  } else {
    high2 = mid2 - 1;
  }
}

console.log(lastIndex);

/*3.All occurrence using binary search in duplicate value*/
let array3 = [1, 2, 2, 4, 4, 4, 6, 6, 8, 10];
let target3 = 4;

let low3 = 0;
let high3 = array3.length - 1;
let result = [];

while (low3 <= high3) {
  let mid3 = Math.floor((low3 + high3) / 2);

  if (array3[mid3] === target3) {
    result.push(mid3);

    let left3 = mid3 - 1;
    while (left3 >= 0 && array3[left3] === target3) {
      result.push(left3);
      left3--;
    }

    let right3 = mid3 + 1;
    while (right3 < array3.length && array3[right3] === target3) {
      result.push(right3);
      right3++;
    }

    break;
  } else if (array3[mid3] < target3) {
    low3 = mid3 + 1;
  } else {
    high3 = mid3 - 1;
  }
}

result.sort((a, b) => a - b);

console.log(result);
