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

const Pratik: User = {
  dbId: 1,
  email: "p@p.com",
  userId: 3,
  password: "12345",

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
