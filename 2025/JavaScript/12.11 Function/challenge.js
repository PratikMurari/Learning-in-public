// Given a person's current age, calculate how many days, weeks, and months they have left to live if they are expected to live until 90 years old.

function lifeInWeeks(age) {
  var ageleft = 90 - age;
  var day = ageleft * 365;
  var week = ageleft * 52;
  var month = ageleft * 12;
  console.log(
    "You have " +
      day +
      " days, " +
      week +
      " weeks, and " +
      month +
      " months left."
  );
}

lifeInWeeks(23);
