var User2 = /** @class */ (function () {
    //readonly property is accessible but cannot be modified,
    //To stop it from access use private modifier
    //private can only be accessed within the class
    //you can also mark private using #city: string = "Deradun";
    function User2(name, email) {
        this.city = "Deradun";
        this.name = name;
        this.email = email;
        this.city = "Mumbai"; // Allowed: can be set within the class
    }
    return User2;
}());
var Pm = new User2("Pratik", "p@m.com");
// Pratik.city = "Mumbai";
console.log(Pm);
// something I noticed was after marking city as private, it lost it's readonly property
