// Base class
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age}-year-old human.`;
  }
}

// Subclass
class Student extends Human {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }

  // Override introduce()
  introduce() {
    const base = super.introduce();
    return `${base} I'm a student with roll no. ${this.rollNo}.`;
  }
}

// Create instances
const human = new Human("Aarav", 25);
const student = new Student("Rohan", 20, "S-102");

// Show method overriding in action
console.log(human.introduce()); // Hi, I'm Aarav, a 25-year-old human. [overridden only in Student]
console.log(student.introduce()); // Extended message via override

// instanceof checks
console.log(student instanceof Student); // true
console.log(student instanceof Human); // true (Student extends Human)
console.log(student instanceof Object); // true (all objects inherit from Object)

// Extra: verify prototype-chain behavior explicitly (equivalent logic to instanceof)
console.log(Human.prototype.isPrototypeOf(student)); // true
