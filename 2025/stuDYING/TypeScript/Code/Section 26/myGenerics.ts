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


//Section 26
//identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  // Do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
  // Do some database operations
  const myIndex = 4;
  return products[myIndex];
};

