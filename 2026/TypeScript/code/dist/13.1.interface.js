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
    // lemon: "3.5", // error, because the value must be a number
};
const u = {
    name: "Pratik",
    age: 24,
};
export {};
//# sourceMappingURL=13.1.interface.js.map