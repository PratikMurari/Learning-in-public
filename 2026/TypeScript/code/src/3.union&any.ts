// union types allow us to specify that a variable can hold more than one type of value.
// We can use the pipe (|) operator to define a union type.

let subs: number | string = "1M";

let apiRequestStatus: "success" | "error" | "pending" = "pending";

apiRequestStatus = "done"; // Error: Type '"done"' is not assignable to type '"success" | "error" | "pending"'.

let airlineSeat: "window" | "aisle" | "middle" = "window";

const orders = ["12", "20", "28", "42"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}

console.log(currentOrder);

// any means usko parvah nahi hai ki usme kya value aayegi, wo kisi bhi type ki ho sakti hai.
// try to avoid any as much as possible, because it defeats the purpose of using TypeScript,
// which is to have type safety and catch errors at compile time.
// Using any can lead to runtime errors that could have been caught during development.

// preferably use unknown instead of any, because it forces us to do type checking before using the variable, which helps in maintaining type safety.
