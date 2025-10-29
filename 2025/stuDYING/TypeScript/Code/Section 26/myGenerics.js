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
var TestOne = identityFour({ brand: "Coca Cola", type: 1 });
console.log(TestOne);
//Section 26
//identityFour<Bottle>({})
function getSearchProducts(products) {
    // Do some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    // Do some database operations
    var myIndex = 4;
    return products[myIndex];
};
