function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  var output = [];
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[i - 2] + output[i - 1]);
    }
    return output;
  }

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
console.log(fibonacciGenerator(15));