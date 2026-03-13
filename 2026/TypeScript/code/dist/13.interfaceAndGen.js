"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// usage of interface
const masala = {
    flavor: "masala",
    price: 10,
};
//usage of readonly properties in interface
const s = {
    id: 1,
    name: "Chai corner",
};
// usage of function type interface
const apply50 = (p) => p * 0.5; // 50% discount
// usage of interface for class
const machine = {
    start() {
        console.log("Tea machine started");
    },
    stop() {
        console.log("Tea machine stopped");
    },
};
//usage of index signature in interface
const ratings = {
    masala: 4.5,
    ginger: 4.0,
    lemon: 3.5,
};
//# sourceMappingURL=13.interfaceAndGen.js.map