"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Function 1
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(7));
//Function 2
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("Hello"));
//Function 3
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("Pratik", "pratik@gmail.com", false);
loginUser("P", "P@P.com"); //Normally it won't work, only if u provide a default value to it
