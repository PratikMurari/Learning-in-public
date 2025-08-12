//Chapter 6 - Q1
let age = prompt("Please enter your age:");

if (age !== null) {  // Check if the user didn't click Cancel
  age = Number(age);

  if (isNaN(age)) {
    alert("Please enter a valid number for age.");
  } else if (age >= 18) {
    alert("You can drive!");
  } else {
    alert("You cannot drive yet.");
  }
}
