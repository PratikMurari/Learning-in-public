// Type narrowing is a TypeScript process that refines a variable's broad type (e.g., string | number)
// into a more specific, predictable type (e.g., string) within a certain block of code.
// It uses runtime checks like typeof, instanceof, or custom predicates to enable precise operations,
// improving safety and enabling better IDE autocompletion

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `chai order: ${kind}`;
}

// as you can see in the above example when you will add . after kind in the if block you will get all the string methods
// and properties and in the else block you will get all the number methods and properties.
// This is because TypeScript has narrowed down the type of kind based on the typeof check.
