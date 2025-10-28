// https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content
var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generic Type
function identityThree(val) {
    return val;
}
//identityThree(true)
// How generally people write generics
function identityFour(val) {
    return val;
}
console.log(identityFour("Hello World"));
var Test = identityFour({ brand: "Coca Cola", type: 1 });
console.log(Test);
