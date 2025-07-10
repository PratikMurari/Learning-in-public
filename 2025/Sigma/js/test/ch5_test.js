//Chapter 5 - Q1
// let num = [1,2,3,4];
// n= prompt("add a number to arry: ");
// console.log(num.push(n));


//Chapter 5 - Q2
// let num = [1, 2, 3, 4];
// let n;
// do{
//   n = prompt("add a number to arry: ");
//   num.push(n)
//   console.log(num);
// }
// while (n = 0) {
//     console.log(num);
// }

//Chapter 5 - Q3
let arr = [5,10,15,16,20,40];
let n = arr.filter((x)=>{
  return x % 10 == 0;
});
console.log(n)
