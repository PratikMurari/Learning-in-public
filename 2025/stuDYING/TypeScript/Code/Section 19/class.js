var User = /** @class */ (function () {
    function User(name, email) {
        this.city = "Deradun";
        this.name = name;
        this.email = email;
    }
    return User;
}());
var Pratik = new User("Pratik", "p@m.com");
// Pratik.city = "Mumbai";
console.log(Pratik);
