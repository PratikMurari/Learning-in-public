//Source:
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

interface User {
  readonly dbId: number;
  userId: number;
  email: string;
  password: string;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// Extending the User interface
//also called reopening of interface
interface User {
  githubToken?: string; // New optional property "?"
}

// Extending User interface to create Admin interface
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const Pratik: Admin = {
  dbId: 1,
  email: "p@p.com",
  userId: 3,
  password: "12345",
  githubToken: "github",
  role:"admin", // Error: Object literal may only specify known properties, and 'role' does not exist in type 'User'.

  startTrial: () => {
    return "Trial started";
  },

  getCoupon: (name: "pratik20", off: 5) => {
    return 10;
  },
};

Pratik.email = "p@m.com";
// Pratik.dbId= 5; // Error: Cannot assign to 'dbId' because it is a read-only property.

console.log(Pratik);
export {};
