"use strict";
// const userName = {
//   name: "Pratik",
//   email: "coolPratik@gmail.com",
//   isActive: true,
// };
Object.defineProperty(exports, "__esModule", { value: true });
// type MyString = string;
// can be done but not recommended
function createUser(user) {
    return { name: "tom", email: "tom@tom", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
//Source:
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
