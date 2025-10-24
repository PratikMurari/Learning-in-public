var User4 = /** @class */ (function () {
    function User4(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Deradun";
    }
    User4.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(User4.prototype, "getAppleEmail", {
        // Getter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User4.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        // Setter
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User4;
}());
var Pratik = new User4("Pratik", "p@m.com", "U1234");
console.log(Pratik);
//Pratik.deleteToken; // Error: Property 'deleteToken' is private and only accessible within class 'User4'.
//difference between js and ts in getters and setters
//in js we call them as methods but in ts we call them as properties
//in ts we don't use () while calling getters and setters
//also void return type is not allowed in setters
