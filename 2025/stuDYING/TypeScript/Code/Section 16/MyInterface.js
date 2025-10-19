"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pratik = {
    dbId: 1,
    email: "p@p.com",
    userId: 3,
    password: "12345",
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
