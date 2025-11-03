//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html?#discriminated-unions

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getParameter(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //   return shape.side * shape.side;
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.height;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

// Example usage:
const myCircle: Circle = { kind: "circle", radius: 5 };
const mySquare: Square = { kind: "square", side: 4 };
const myRectangle: Rectangle = { kind: "rectangle", width: 3, height: 6 };

console.log(getArea(myCircle));    // Output: 78.53981633974483
console.log(getArea(mySquare));    // Output: 16
console.log(getArea(myRectangle)); // Output: 18

// The getArea function correctly computes the area for each shape type.
// If a new shape type is added to the Shape union, TypeScript will
// enforce handling it in the getArea function, ensuring type safety.

// Never type is used here to ensure all cases are handled.
// If a case is missed, TypeScript will raise a compile-time error.
// This is a powerful feature of discriminated unions in TypeScript.
// This approach enhances code maintainability and reduces runtime errors.
// The getParameter function is incomplete and will only handle circles.
