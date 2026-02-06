/*print arry*/
let arr = [3, 6, 9, 12];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
/*print sum*/
let arr1 = [5, 10, 15];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
}
console.log(sum);

/*print reverse print*/
let arr2 = [2, 4, 6, 8];
for (let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}
/*even index number print*/
let arr3 = [11, 22, 33, 44, 55];
let arr4 = [];
for (let i = 0; i < arr3.length; i++) {
  if (i % 2 == 0) {
    arr4.push(arr3[i]);
  }
}
console.log(arr4);

/*positive numbers print in another arry*/
let arr5 = [10, -3, 5, -7, 9, 0];
let positive = [];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] >= 0) {
    positive.push(arr5[i]);
  }
}
console.log(positive);

/*Max number*/
let arr6 = [4, 18, 2, 9, 25, 7];
let max = -Infinity;
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > max) {
    max = arr6[i];
  }
}
console.log(max);

/*Second Max*/
let arr7 = [10, 5, 20, 8, 15];
let max1 = -Infinity;
let secondMax = -Infinity;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > max1) {
    secondMax = max1;
    max1 = arr7[i];
  } else if (arr7[i] > secondMax && arr7[i] !== max1) {
    secondMax = arr7[i];
  }
}
console.log(secondMax);

/*odd and even count*/
let arr8 = [3, 10, 7, 6, 15, 18, 22];
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] % 2 === 0) {
    evencount++;
  } else {
    oddcount++;
  }
}

console.log("even count is:" + evencount);
console.log("odd count is:" + oddcount);

/*even number sum*/
let arr9 = [3, 10, 7, 6, 15, 18, 22];
let sum1 = 0;
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] % 2 === 0) {
    sum1 = sum1 + arr9[i];
  }
}
console.log("sum is:" + sum1);

/*even and odd in different arry*/
let arr10 = [3, 10, 7, 6, 15, 18, 22];
let even = [];
let odd = [];
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 === 0) {
    even.push(arr10[i]);
  } else {
    odd.push(arr10[i]);
  }
}
console.log(even);
console.log(odd);

/*first even number*/
let arr11 = [3, 7, 11, 9, 8, 10];
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] % 2 === 0) {
    console.log(arr11[i]);
    break;
  }
}
