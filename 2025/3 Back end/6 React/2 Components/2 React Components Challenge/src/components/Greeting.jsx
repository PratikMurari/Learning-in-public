import React from "react";

var time = new Date().getHours();

function Greetings() {
  let greeting;
  const customStyle = {
    color: "",
  };

  if (time < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (time < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return { greeting, customStyle };
}

export default Greetings;
