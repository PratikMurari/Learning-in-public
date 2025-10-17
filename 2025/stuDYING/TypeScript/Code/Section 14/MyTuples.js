var user = [1, "hc"]; // Array with union types
var User; // Tuple type
User = ["hc", 131, true];
// Tuple with specific types
var rgb = [255, 123, 112];
var newUser = [112, "example@google.com",];
newUser[1] = "hc.com";
newUser.push(22); // Allowed, but not recommended
//Additional Concepts of tuples
// Tuple with optional elements
var userInfo;
userInfo = ["hc", 131];
// Tuple with rest elements
var userRole;
userRole = [1, "admin", "editor", "subscriber"];
