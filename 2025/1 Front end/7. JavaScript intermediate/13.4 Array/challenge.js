var guest = [
  "ram",
  "pratik",
  "raju",
  "ramesh",
  "diksha",
  "mango",
  "dog",
  "cat",
  "apple",
];

let person = "ram"; //add any name over here

if (guest.includes(person)) {
  console.log("Welcome " + person);
} else {
  console.log("You are not in the Guest list");
}
