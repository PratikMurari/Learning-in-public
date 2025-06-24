//What is a Function?

//A function holds a piece of code that does a specific task.
//A function takes some data as input, the code inside the function does something with the data, and then the result is returned.

//Click the "Run" button below to see the function converting a temperature from Fahrenheit to Celsius.

function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(convertToCelsius(100));
