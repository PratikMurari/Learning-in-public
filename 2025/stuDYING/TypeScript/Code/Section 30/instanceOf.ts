//Narrowing
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val + 3;
}

//Test cases
console.log(detectType("Hello world!"));
console.log(detectType(5));

//common case
function provideId(id: string | null) {
  if (!id) {
    return console.log("Please provide ID");
  }
  return console.log("Your ID is " + id);
}

//Test cases
provideId(null);
provideId("12345");

//Documentation
// Addition Stuff
//Type Guards and Differentiating Types

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

//Section 29 The in Operator Narrowing
//Documentation :
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//Section 30 The instanceof Narrowing
//Documentation :
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing

new Date();
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet
    return "fish food";
  } else {
    pet
    return "bird food";
  }
}

//Test cases
console.log(getFood({ swim: () => {} }));
console.log(getFood({ fly: () => {} }));    

//:pet is Fish  -> Type Predicate
// A type predicate is a special return type that narrows the type of a variable within a conditional block.
// In this case, the function isFish checks if the pet is of type Fish.
// If it returns true, TypeScript understands that pet is a Fish within the if block of getFood function.
// This allows us to safely access Fish-specific properties and methods without type errors.
