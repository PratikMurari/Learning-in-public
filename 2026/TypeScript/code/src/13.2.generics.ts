//Generics are templates, just like interfaces. they are used to create reusable components. they can be used with classes, interfaces, and functions.
function wrapInArray<T>(item: T): T[] {
  return [item];
}
// The <T> is a placeholder for the type that will be passed in when the function is called.
// it can be any type, and it will be replaced with the actual type when the function is called.
// this allows us to create a function that can work with any type, without having to specify the type in the function definition.

wrapInArray(5); // returns [5]
wrapInArray("masala"); // returns ["masala"]
wrapInArray({ flavor: "Ginger" }); // returns [{flavor:"Ginger"}]

// second example
// we can also use generics with multiple type parameters.
// we can use as many type parameters as we want,
// and they will be replaced with the actual types when the function is called.
function pair<A, B>(a: A, b: B): [A, B] {
  // where A and B are data types that will be passed in when the function is called.
  return [a, b];
  // return [b, a]; // this will cause an error because the return type is [A, B] and not [B, A]
}

// Usage
// we can call the function with different types of arguments,
// and the return type will be inferred based on the types of the arguments.
pair("masala", 20);
pair("masala", { flavor: "Ginger" });
