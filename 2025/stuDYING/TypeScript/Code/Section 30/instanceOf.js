//Narrowing
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 3;
}
//Test cases
console.log(detectType("Hello world!"));
console.log(detectType(5));
//common case
function provideId(id) {
    if (!id) {
        return console.log("Please provide ID");
    }
    return console.log("Your ID is " + id);
}
//Test cases
provideId(null);
provideId("12345");
//Documentation
// Addition Stuff
//Type Guards and Differentiating Types
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//Section 30 The instanceof Narrowing
//Documentation :
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
new Date();
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
//Test cases
console.log(getFood({ swim: function () { } }));
console.log(getFood({ fly: function () { } }));
//:pet is Fish  -> Type Predicate
// A type predicate is a special return type that narrows the type of a variable within a conditional block.
// In this case, the function isFish checks if the pet is of type Fish.
// If it returns true, TypeScript understands that pet is a Fish within the if block of getFood function.
// This allows us to safely access Fish-specific properties and methods without type errors.
