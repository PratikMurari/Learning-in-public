//The While Loop
//The while loop loops through a block of code as long as a specified condition is true.

//Syntax
while (condition) {
  // code block to be executed
}

//Angela Syntax
var i = 1;
while (i < 2) {
  console.log(i);
  i++;
}

//Example
var i = 0;
while (i < 10) {
  text = "The number is " + i;
  console.log(text);
  i++;
}

//fizzbuzz challenge

var output = [];
var count = 1;

function fizzbuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzbuzz");
    } else if (count % 3 === 0) {
      output.push("fizz");
    } else if (count % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}
