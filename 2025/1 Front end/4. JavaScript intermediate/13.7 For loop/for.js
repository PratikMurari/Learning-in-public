//Angela Syntax
for (var i = 1; i < 2; i++) {
  console.log(i);
}

//Now a lot of students wonder in which cases do I use the while loop and in which cases should I use the for loop.
//Keep in mind that while is essentially checking for a state, so it's while something is true, so that can be while player one is alive.
//And essentially you want to repeatedly run an instruction while the program is in a certain state.
//But for the for loop you're essentially trying to iterate.
//You're trying to run a piece of code many many times and you're going to use the for loop to define how many times.
//So with practice you'll find that that you'll gravitate toward one or the other type of loops while you're writing code with different purposes.

//while when something is true
//for when u r trying iterate

//Challenge, FizzBuzz using For Loop
var output = [];

function fizzbuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzbuzz");
    } else if (count % 3 === 0) {
      output.push("fizz");
    } else if (count % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}

//fizzbuzz()