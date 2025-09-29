"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userName = {
    name: "Pratik",
    email: "coolPratik@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    console.log(name);
    console.log(isPaid);
}
createUser({ name: "Pratik", isPaid: false });
function createCourse() {
    return { name: "ReactJS", price: 399 };
}
