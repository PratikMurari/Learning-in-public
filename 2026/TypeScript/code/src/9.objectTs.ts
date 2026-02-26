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

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  // isHot: 5, // Error: Type 'string' is not assignable to type 'boolean'.
  isHot: false,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakTea: Tea = {
  name: "Adrak Tea",
  price: 30,
  // ingredients: ["water", 2 "milk", "sugar", "tea leaves", "ginger"],
  // Error: Type 'number' is not assignable to type 'string'.
  ingredients: ["water", "milk", "sugar", "tea leaves", "ginger"],
};

// exceptions
type Cup = { size: string };

let smallCup: Cup = { size: "small" };
let bigCup = { size: "big", material: "steel" };

smallCup = bigCup; // This is allowed because smallCup has a subset of the properties of bigCup.
// bigCup = smallCup; // Error: Type 'Cup' is not assignable to type '{ size: string; material: string; }'.
// Property 'material' is missing in type 'Cup' but required in type '{ size: string; material: string; }'.

//kinda similar issue over here as well
type Brew = { brewTime: number };
let coffee = { brewTime: 5, flavor: "strong" };
let chaiBrew: Brew = coffee;
// heres the issue unffortunately this is allowed because chaiBrew has a subset of the properties of coffee.

type User = {
  username: string;
  password: string;
};

let u: User = {
  username: "john_doe",
  password: "securepassword123",
};
// if u didn't have the password property, it would throw an error because it's required in the User type.
// However, if you try to assign an object that has extra properties, it will not throw an error as long as it has all the required properties of the User type.
