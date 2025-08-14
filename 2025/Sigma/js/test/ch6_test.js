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


//Chapter 6 - Q2
// Ask if the user wants to see the prompt
if (confirm("Do you want to enter your age to check if you can drive?")) {
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
} else {
  alert("Alright! Maybe next time.");
}


//Chapter 6 - Q3
if (confirm("Do you want to enter your age to check if you can drive?")) {
  let age = prompt("Please enter your age:");

  if (age !== null) {  
    age = Number(age);

    if (isNaN(age)) {
      alert("Please enter a valid number for age.");
    } else if (age < 0) {
      alert("Age cannot be negative.");
      console.error("Error: Negative age entered (" + age + ").");
    } else if (age >= 18) {
      alert("You can drive!");
    } else {
      alert("You cannot drive yet.");
    }
  }
} else {
  alert("Alright! Maybe next time.");
}


//Chapter 6 - Q4
if (confirm("Do you want to enter your age to check if you can drive?")) {
  let age = prompt("Please enter your age:");

  if (age !== null) {  
    age = Number(age);

    if (isNaN(age)) {
      alert("Please enter a valid number for age.");
    } else if (age < 0) {
      alert("Age cannot be negative.");
      console.error("Error: Negative age entered (" + age + ").");
    } else if (age > 4) {
      // Redirect to google.com if age is greater than 4
      window.location.href = "https://google.com";
    } else if (age >= 18) {
      alert("You can drive!");
    } else {
      alert("You cannot drive yet.");
    }
  }
} else {
  alert("Alright! Maybe next time.");
}
