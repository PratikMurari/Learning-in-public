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
  isActive: boolean;
};

// type MyString = string;
// can be done but not recommended

function createUser(user: User): User {
  return { name: "tom", email: "tom@tom", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

export {};

//Source:
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
