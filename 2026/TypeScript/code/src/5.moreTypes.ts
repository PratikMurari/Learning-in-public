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
