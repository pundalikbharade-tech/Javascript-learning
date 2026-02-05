/*Maximum find*/
let arr = [12, 45, 7, 89, 23, 56];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

/*Minimum find*/
let arr1 = [12, 45, 7, 89, 23, 56];
let min = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < min) {
    min = arr1[i];
  }
}
console.log(min);

/*Sum find*/
let arr2 = [12, 45, 7, 89, 23, 56];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum = sum + arr2[i];
}
console.log(sum);

/*Average*/
let arr3 = [12, 45, 7, 89, 23, 56];
let sum1 = 0;

for (let i = 0; i < arr3.length; i++) {
  sum1 = sum1 + arr3[i];
}
let average = sum1 / arr3.length;
console.log(average);

/*Second large*/
let arr4 = [12, 45, 7, 89, 23, 56];
let max2 = -Infinity;
let secondMax = -Infinity;
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > max2) {
    secondMax = max2;
    max2 = arr4[i];
  } else if (arr4[i] > secondMax && arr4[i] !== max2) {
    secondMax = arr4[i];
  }
}
console.log(secondMax);

/*Even numbers count*/
let arr5 = [10, -4, 0, 25, -9, 8, 0, 3];
let count = 0;
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] % 2 == 0) {
    count++;
  }
}
console.log(count);

/*odd numbers count*/
let arr6 = [10, -4, 0, 25, -9, 8, 0, 3];
let count1 = 0;
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 2 !== 0) {
    count1++;
  }
}
console.log(count1);

/*positive numbers count*/
let arr7 = [10, -4, 0, 25, -9, 8, 0, 3];
let count2 = 0;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > 0) {
    count2++;
  }
}
console.log(count2);

/*negative numbers count*/
let arr8 = [10, -4, 0, 25, -9, 8, 0, 3];
let count3 = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] < 0) {
    count3++;
  }
}
console.log(count3);

/*zero numbers count*/
let arr9 = [10, -4, 0, 25, -9, 8, 0, 3];
let count4 = 0;
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] === 0) {
    count4++;
  }
}
console.log(count4);

/* Sum of even numbers*/
let arr10 = [18, 5, 27, 33, 12, 40, 9];
let sum2 = 0;
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 === 0) {
    sum2 = sum2 + arr10[i];
  }
}
console.log(sum2);

/* Largest Even Number*/
let arr11 = [42, 5, 27, 45, 12, 40, 9];
let maxEven = -Infinity;
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] % 2 === 0 && arr11[i] > maxEven) {
    maxEven = arr11[i];
  }
}
console.log(maxEven);

/* Numbers divisible by 3*/
let arr12 = [18, 5, 27, 33, 12, 40, 9];
let count5 = 0;
for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] % 3 === 0) {
    count5++;
  }
}
console.log(count5);

/* Max - Min difference*/
let arr13 = [18, 5, 27, 33, 12, 40, 9];
let max3 = -Infinity;
let min3 = Infinity;
for (let i = 0; i < arr13.length; i++) {
  if (arr13[i] > max3) {
    max3 = arr13[i];
  }
  if (arr13[i] < min3) {
    min3 = arr13[i];
  }
}
let difference = max3 - min3;
console.log(difference);

/*numbers bigger than average*/
let arr14 = [18, 5, 27, 33, 12, 40, 9];
let sum4 = 0;
let count6 = 0;
for (let i = 0; i < arr14.length; i++) {
  sum4 = sum4 + arr14[i];
}
let average1 = sum4 / arr14.length;
for (let i = 0; i < arr14.length; i++) {
  if (arr14[i] > average1) {
    count6++;
  }
}
console.log(count6);
