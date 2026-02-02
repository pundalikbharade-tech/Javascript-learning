/*1)sum of arry*/
let sumarr = [2, 5, 8, 3, 7];
let sum = 0;
for (let i = 0; i < sumarr.length; i++) {
  sum = sum + sumarr[i];
}
console.log(sum);

/*2)count of even number in arry*/
let evenarr = [1, 4, 7, 10, 12, 15];
let evencount = 0;
for (let i = 0; i < evenarr.length; i++) {
  if (evenarr[i] % 2 === 0) evencount++;
}
console.log(evencount);

/*3)count of odd number in arry*/
let oddarr = [1, 4, 7, 10, 12, 15, 3];
let oddcount = 0;
for (let i = 0; i < oddarr.length; i++) {
  if (oddarr[i] % 2 !== 0) oddcount++;
}
console.log(oddcount);
