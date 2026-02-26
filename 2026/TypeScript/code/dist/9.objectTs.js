"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
};
//ts always infers the type of an object based on its properties and their values.
// In this case, the type of the chai object would be inferred as:
// {
//     name: string,
//     price: number,
//     isHot: boolean,
// }
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    // isHot: 5, // Error: Type 'string' is not assignable to type 'boolean'.
    isHot: false,
};
const adrakTea = {
    name: "Adrak Tea",
    price: 30,
    // ingredients: ["water", 2 "milk", "sugar", "tea leaves", "ginger"],
    // Error: Type 'number' is not assignable to type 'string'.
    ingredients: ["water", "milk", "sugar", "tea leaves", "ginger"],
};
let smallCup = { size: "small" };
let bigCup = { size: "big", material: "steel" };
smallCup = bigCup; // This is allowed because smallCup has a subset of the properties of bigCup.
let coffee = { brewTime: 5, flavor: "strong" };
let chaiBrew = coffee;
let u = {
    username: "john_doe",
    password: "securepassword123",
};
// if u didn't have the password property, it would throw an error because it's required in the User type.
// However, if you try to assign an object that has extra properties, it will not throw an error as long as it has all the required properties of the User type.
//# sourceMappingURL=9.objectTs.js.map