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
}

// Create and test a ComplexNumber object
const num = new ComplexNumber(5, 7);
console.log(`Real part: ${num.real}`); // Will show 5
console.log(`Imaginary part: ${num.imaginary}`); // Will show 7
