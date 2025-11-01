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
