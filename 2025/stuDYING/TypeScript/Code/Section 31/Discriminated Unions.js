//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html?#discriminated-unions
function getParameter(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    //   return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.height;
        default:
            var _defaultforshape = shape;
            return _defaultforshape;
    }
}
// Example usage:
var myCircle = { kind: "circle", radius: 5 };
var mySquare = { kind: "square", side: 4 };
var myRectangle = { kind: "rectangle", width: 3, height: 6 };
console.log(getArea(myCircle)); // Output: 78.53981633974483
console.log(getArea(mySquare)); // Output: 16
console.log(getArea(myRectangle)); // Output: 18
// The getArea function correctly computes the area for each shape type.
// If a new shape type is added to the Shape union, TypeScript will
// enforce handling it in the getArea function, ensuring type safety.
// Never type is used here to ensure all cases are handled.
// If a case is missed, TypeScript will raise a compile-time error.
// This is a powerful feature of discriminated unions in TypeScript.
// This approach enhances code maintainability and reduces runtime errors.
// The getParameter function is incomplete and will only handle circles.
