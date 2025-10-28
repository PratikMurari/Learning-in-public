// https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content

const score: Array<number> = [];

const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo<T>(val: any): any {
  return val;
}

// Generic Type
function identityThree<Type>(val: Type): Type {
  return val;
}

//identityThree(true)

// How generally people write generics
function identityFour<T>(val: T): T {
  return val;
}

console.log(identityFour("Hello World"));

interface Bottle {
  brand: string;
  type: number;
}

const TestOne = identityFour<Bottle>({ brand: "Coca Cola", type: 1 });
console.log(TestOne);

//Additional Generic Examples
// Multiple Generics
function identityFive<T, U>(valOne: T, valTwo: U): [T, U] {
  return [valOne, valTwo];
}

console.log(identityFive<string, string>("Hello", "World"));
console.log(identityFive<number, boolean>(25, true));

// Generic Constraints
function identitySix<T, U extends number>(valOne: T, valTwo: U): [T, U] {
  return [valOne, valTwo];
}
