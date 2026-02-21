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
