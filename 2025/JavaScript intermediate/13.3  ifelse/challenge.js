//Leap Year Challenge Exercise
//💪This is a Difficult Challenge 💪

//Write a program that works out whether if a given year is a leap year.
//A normal year has 365 days, leap years have 366, with an extra day in February.
//The reason why we have leap years is really fascinating,

//This is how to work out whether if a particular year is a leap year:

// -A year is a leap year if it is evenly divisible by 4 ;

// -except if that year is also evenly divisible by 100;

// -unless that year is also evenly divisible by 400.

function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leap year.");
  } else {
    console.log("Not leap year.");
  }

  /**************Don't change the code below****************/
}


//test cases

isLeap(2400); 

isLeap(1898);