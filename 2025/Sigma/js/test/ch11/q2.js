// Class to represent a complex number
class ComplexNumber {
  /**
   * Constructor to initialize the complex number
   * @param {number} real - The real part of the complex number
   * @param {number} imaginary - The imaginary part of the complex number
   */
  constructor(real, imaginary) {
    this.real = real; // Set the real part
    this.imaginary = imaginary; // Set the imaginary part
  }

  /**
   * Method to add another complex number to this complex number
   * @param {ComplexNumber} other - The complex number to add
   * @returns {ComplexNumber} A new complex number which is the sum of this and the other
   */
  add(other) {
    const realSum = this.real + other.real; // Sum of real parts
    const imaginarySum = this.imaginary + other.imaginary; // Sum of imaginary parts
    return new ComplexNumber(realSum, imaginarySum); // Return new ComplexNumber instance
  }
}

console.log("Testing ComplexNumber class and add method:");
// Create two ComplexNumber objects
const num1 = new ComplexNumber(3, 4);
const num2 = new ComplexNumber(1, 2);

// Add the two complex numbers
const sum = num1.add(num2);

//result
console.log(`First Complex Number: ${num1.real} + ${num1.imaginary}i`); // Will show 3 + 4i
console.log(`Second Complex Number: ${num2.real} + ${num2.imaginary}i`); // Will show 1 + 2i
console.log(`Sum: ${sum.real} + ${sum.imaginary}i`); // Will show 4 + 6i
console.log(`Real part of sum: ${sum.real}`); // Will show 4
console.log(`Imaginary part of sum: ${sum.imaginary}`); // Will show 6
console.log("End of test.");