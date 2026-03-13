// interface and generics
// interface
// interface is a way to define the structure of an object.
// It is a contract that an object must adhere to.
// It is a way to define the shape of an object.
// It is a way to define the properties and methods of an object.
interface chai {
  flavor: string;
  price: number;
  milk?: boolean; // optional property, it may or may not be present in the object
}

// usage of interface
const masala: chai = {
  flavor: "masala",
  price: 10,
};

// readonly properties in interface
interface Shop {
  readonly id: number;
  name: string;
}
//usage of readonly properties in interface
const s: Shop = {
  id: 1,
  name: "Chai corner",
};
// s.id = 2; // error, because id is readonly and cannot be changed after it is set

// function type interface
interface DiscountCalculator {
  (price: number): number;
}

// usage of function type interface
const apply50: DiscountCalculator = (p) => p * 0.5; // 50% discount

// interface for class
interface TeaMachine {
  start(): void;
  stop(): void;
}

// usage of interface for class
const machine: TeaMachine = {
  start() {
    console.log("Tea machine started");
  },
  stop() {
    console.log("Tea machine stopped");
  },
};

//Index signaturing in interface
interface ChaiRatings {
  [flavor: string]: number; // index signature, it allows us to define a property with a dynamic name and type
}

//usage of index signature in interface
const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.0,
  // lemon: "3.5", // error, because the value must be a number
};

// interface merging
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Pratik",
  age: 24,
};

// interface extension
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {} // interface C extends A and B, it inherits the properties of both A and B
