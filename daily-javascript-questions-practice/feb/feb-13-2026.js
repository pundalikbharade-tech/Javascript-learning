/*1.last occurrence using binary search in duplicate value*/
let arr = [1, 2, 2, 4, 4, 4, 6, 6, 8, 10];
let target = 4;
function end(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let lastIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      lastIndex = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return lastIndex;
}
console.log(end(arr, target));

/*2.first occurrence using binary search in duplicate value*/
let arr1 = [1, 3, 3, 3, 5, 7, 7, 9];
let target1 = 3;
function first(arr1, target1) {
  let start = 0;
  let end = arr1.length - 1;
  let firstIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr1[mid] === target1) {
      firstIndex = mid;
      end = mid - 1;
    } else if (arr1[mid] < target1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return firstIndex;
}
console.log(first(arr1, target1));
