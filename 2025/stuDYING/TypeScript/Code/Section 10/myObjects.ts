// const userName = {
//   name: "Pratik",
//   email: "coolPratik@gmail.com",
//   isActive: true,
// };

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
//   console.log(name);
//   console.log(isPaid);
// }

// createUser({ name: "Pratik", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "ReactJS", price: 399 };
// }

type User = {
  name: string;
  email: string;
  active: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", active: true };
}

createUser({ name: "", email: "", active: true });

export {};

//Source:
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
