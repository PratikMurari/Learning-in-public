class Complex {
  constructor(real = 0, imag = 0) {
    this._real = Number(real);
    this._imag = Number(imag);
  }

  // Getter for real part
  get real() {
    return this._real;
  }

  // Setter for real part (with basic validation)
  set real(value) {
    const n = Number(value);
    if (Number.isNaN(n)) throw new TypeError("real must be a number");
    this._real = n;
  }

  // Getter for imaginary part
  get imag() {
    return this._imag;
  }

  // Setter for imaginary part (with basic validation)
  set imag(value) {
    const n = Number(value);
    if (Number.isNaN(n)) throw new TypeError("imag must be a number");
    this._imag = n;
  }

  // Optional: derive magnitude and phase as read-only getters
  get magnitude() {
    return Math.hypot(this._real, this._imag);
  }

  get phase() {
    return Math.atan2(this._imag, this._real);
  }

  // Helper to show the number nicely
  toString() {
    const sign = this._imag >= 0 ? "+" : "-";
    const b = Math.abs(this._imag);
    return `${this._real} ${sign} ${b}i`;
  }
}

// Demo
const z = new Complex(2, -3);
console.log(z.toString()); // "2 - 3i" [computed via getters/fields]
console.log(z.real, z.imag); // 2 -3

z.real = 4; // uses setter
z.imag = "5.5"; // coerces to number via setter
console.log(z.toString()); // "4 + 5.5i"
console.log(z.magnitude); // 6.728...
console.log(z.phase); // angle in radians
