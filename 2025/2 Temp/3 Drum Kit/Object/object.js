//Object, their Method
//part 1, Create Object
// Objects: Collections of key-value pairs used to store and organize data in JavaScript 
var houseKeeper1 = {
    name: "Love",
    yearsOfExperince: 12,
    age: 32,
    language: ["english","french"]
}


//part 2, Object Constructor
//Object Constructor: A special function used to create multiple object instances with the same structure and behavior using the new keyword
//initializing the object
function HouseKeeper(name, yearsOfExperince, language) {
    this.name = name;
    this.yearsOfExperince = yearsOfExperince;
    this.language = language;
}
//creating the object
var houseKeeper2 = new HouseKeeper("Tom", 6, 28, ["english","German"]);
//creating the object
var houseKeeper3 = new HouseKeeper("Rom", 4, 25, ["english","Hindi"]);
//creating the object
var houseKeeper4 = new HouseKeeper("LOL", 3, 22, ["english","Italian"]);


//part 3, it's method
//Methods: Functions defined as properties inside objects that describe the object's behavior.
function HouseKeeper(name, yearsOfExperince, cleanExpertise) {
    this.name = name;
    this.yearsOfExperince = yearsOfExperince;
    this.cleanExpertise = cleanExpertise;
    this.clean = function () {
        alert ("Cleaning in progress...");
    }
}


//Finally
//Dot Notation: A syntax (objectName.property or objectName.method()) used to access an object's properties or call its methods.
