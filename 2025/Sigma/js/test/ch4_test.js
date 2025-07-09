//Chapter 4 - Q1
console.log("har\"".length);
//Ans: 4


//Chapter 4 - Q2
let a = "How you doin?";
console.log(a.startsWith("how"));
console.log(a.endsWith("doin?"));


//Chapter 4 - Q3
console.log(a.toLowerCase());
console.log(a.toUpperCase());


//Chapter 4 - Q4
let str = "Please give me Rs. 500";            
let num = Number(str.match(/\d+/g));
console.log(num);

// Use regex to extract the number from the string
// \d+ matches one or more digits
// match(/\d+/g) returns an array of matched digit sequences (as strings)
// Number(...) converts the first match to an actual number

//Chapter 4 - Q5
let q5 = "z";
let newStr = str.substring(0,3) + q5 + str.substring(4);
console.log(newStr);
//lol ans was no coz u can't change the existing string bhahaha
//I just created new string lol

