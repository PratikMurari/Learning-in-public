const user: (string | number)[] = [1, "hc"]; // Array with union types

let User: [string, number, boolean]; // Tuple type
User = ["hc", 131, true];

// Tuple with specific types
let rgb: [number, number, number] = [255, 123, 112];

// Using type alias for tuple
// Link: https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
type User = [number, string];
const newUser: User = [112, "example@google.com",];
newUser[1] = "hc.com";
newUser.push(22);   // Allowed, but not recommended



