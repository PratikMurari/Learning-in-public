// var numbers = [3, 56, 2, 48, 5];

//1. Map - Create a new array by doing something with each item in an array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//2. Filter - Create a new array by keeping the items that return true.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

//3. Reduce - Accumulate a value by doing something to each item in an array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

//4. Find - find the first item that matches from an array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//5. FindIndex - find the index of the first item that matches.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//6. substring
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//Challenge

import emojipedia from "./emojipedia";
let newArray = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 99);
});
console.log(newArray);

//Challenge Solution by Angela yu
//import emojipedia from "./emojipedia";

//const newEmojipedia = emojipedia.map(function (emojiEntry) {
//  return emojiEntry.meaning.substring(0, 100);
//});

//console.log(newEmojipedia);
