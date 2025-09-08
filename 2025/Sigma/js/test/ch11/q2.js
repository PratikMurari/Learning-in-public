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
