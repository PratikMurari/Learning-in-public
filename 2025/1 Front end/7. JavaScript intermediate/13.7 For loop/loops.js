//JavaScript Loops
//In JavaScript, a loop is a control flow statement that allows code to be executed repeatedly based on a condition.
//It's a fundamental concept for automating repetitive tasks and processing collections of data.
//JavaScript offers several types of loops, each with its own syntax and use case

//Types of Loops

//for loop: Executes a block of code a specified number of times. It consists of three optional expressions:
//  Initialization: Executed once before the loop starts.
//  Condition: Evaluated before each iteration; the loop continues as long as it's true.
//  Increment/Decrement: Executed after each iteration.

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

//while loop: Executes a block of code as long as a specified condition is true.
//  The condition is evaluated before each iteration.
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}

//do...while loop: Similar to the while loop, but the code block is executed at least once before the condition is checked.
let i = 0;
do {
  console.log(i); // Output: 0
  i++;
} while (i < 0);

//for...in loop: Iterates over the properties of an object.
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
  // Output:
  // name: John
  // age: 30
  // city: New York
}

//for...of loop: Iterates over iterable objects, such as arrays, strings, Maps, and Sets.
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number); // Output: 1, 2, 3, 4, 5
}


//Use Cases
//Loops are commonly used for: Iterating over arrays or other collections, 
//Repeating a task until a certain condition is met, Processing data in a structured manner, 
//Creating animations or games, and Implementing algorithms.
