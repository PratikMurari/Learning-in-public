"use strict";
//Source:
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
Object.defineProperty(exports, "__esModule", { value: true });
var Pratik = {
    dbId: 1,
    email: "p@p.com",
    userId: 3,
    password: "12345",
    githubToken: "github",
    role: "admin", // Error: Object literal may only specify known properties, and 'role' does not exist in type 'User'.
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
Pratik.email = "p@m.com";
// Pratik.dbId= 5; // Error: Cannot assign to 'dbId' because it is a read-only property.
console.log(Pratik);
