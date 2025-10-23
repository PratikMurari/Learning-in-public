var User2Renamed = /** @class */ (function () {
    //readonly property is accessible but cannot be modified,
    //To stop it from access use private modifier
    //private can only be accessed within the class
    //you can also mark private using #city: string = "Deradun";
    function User2Renamed(name, email) {
        this.city = "Deradun";
        this.name = name;
        this.email = email;
        this.city = "Mumbai"; // Allowed: can be set within the class
    }
    return User2Renamed;
}());
var pratikUser = new User2Renamed("Pratik", "p@m.com");
// Pratik.city = "Mumbai";
console.log(pratikUser);
// something I noticed was after marking city as private, it lost it's readonly property
