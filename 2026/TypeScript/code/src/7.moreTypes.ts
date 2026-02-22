let response: any = "42";
// forceful type assertion, we are telling the compiler that we know better than it does about the type of response.
let numericLength: number = (response as string).length;
// (response as string) is a type assertion that tells the compiler to treat response as a string, allowing us to access the length property without any type errors.
// However, this can lead to runtime errors if response is not actually a string, so it should be used with caution.

// Basic example of type assertion in TypeScript
type Book = {
  name: string;
};

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

// inputElement case
const inputElement = document.getElementById("username") as HTMLInputElement;

// Any vs Unknown
let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // No error, but will cause a runtime error if value is not a string

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase(); // Error: Object is of type 'unknown'.

if (typeof newValue === "string") {
  newValue.toUpperCase(); // No error, we have narrowed the type to string
}

// try catch block with unknown
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error", error);
  }
}

// Type Casting vs Assertion with unknown
const data: unknown = "chai aur code";
const strData: string = data as string; // This is type casting

let someValue: any = "hello world";
let strLength: number = (someValue as string).length; // Type assertion

// Aspect	| Type Assertion	                        | Type Casting
// Purpose	| Tell TypeScript to treat value as a type	| Actually convert value to another type
// Runtime	| No runtime effect	                        | May have runtime behavior
// Syntax	| value as Type or <Type>value	            | value as Type (when converting)
// Example	| (someValue as string).length	            | const str: string = data as string

// Example of type assertion with union types
type Role = "admin" | "user" | "guest" | "superadmin"; // We later added superadmin role but forgot to update the function

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard...");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard...");
    return;
  }
  if (role === "guest") {
    console.log("Redirecting to guest dashboard...");
    return;
  }
  role; // This will cause a compile-time error because role can only be "admin", "user", or "guest"
  // yet it is added coz if someone adds a new role in the future and forgets to update this function, the compiler will catch that error.
  // example how we later added superadmin role but forgot to update the function
}

// Never type example
// where it is used: when a function never returns, it can be used to indicate that the function will never complete its execution and will always throw an error or enter an infinite loop.
function neverReturns(): never {
  while (true) {}
}
