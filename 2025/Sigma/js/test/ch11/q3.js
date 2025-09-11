// Base class
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to be overridden
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age}-year-old human.`;
  }

  // Another method we'll optionally reuse
  speak(line) {
    return `${this.name} says: "${line}"`;
  }
}

// Derived class
class Student extends Human {
  constructor(name, age, rollNo) {
    super(name, age); // call parent constructor
    this.rollNo = rollNo;
  }

  // Override introduce()
  introduce() {
    // Extend parent behavior with super.introduce()
    const base = super.introduce();
    return `${base} I'm a student with roll no. ${this.rollNo}.`;
  }

  // Add a new method unique to Student
  study(subject) {
    // Reuse a parent method
    return super.speak(`Studying ${subject} now!`);
  }
}

// Demo
const h = new Human("Aarav", 25);
const s = new Student("Rohan", 20, "S-102");

console.log(h.introduce()); // Hi, I'm Aarav, a 25-year-old human.
console.log(s.introduce()); // Overridden version with extra info
console.log(s.study("JavaScript"));
