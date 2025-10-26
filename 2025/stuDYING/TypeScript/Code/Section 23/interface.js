var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    Instagram.prototype.createStory = function () {
        console.log("Story created!");
    };
    return Instagram;
}());
var YouTube = /** @class */ (function () {
    function YouTube(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    YouTube.prototype.createStory = function () {
        console.log("YouTube Story created!");
    };
    return YouTube;
}());
console.log("Interfaces in TypeScript");
// what is going on here?
// Interfaces are used to define the structure of an object or a class.
// They can be used to enforce certain properties and methods on classes that implement them.
// This helps in maintaining consistency and ensuring that certain functionalities are present in the classes.  
// In this example, both Instagram and YouTube classes implement the takePhoto and Story interfaces, 
// ensuring they have the required properties and methods.
// This is useful for code organization and type safety in TypeScript.
// Interfaces can also be used to achieve multiple inheritance in TypeScript,
// as a class can implement multiple interfaces.
// This is particularly useful when you want to share common functionality across different classes without using traditional inheritance.
// Overall, interfaces are a powerful feature in TypeScript that help in defining contracts for classes and ensuring code quality.
