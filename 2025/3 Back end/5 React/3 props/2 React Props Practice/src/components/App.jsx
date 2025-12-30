import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />

      <Card
        name="Bob"
        img="https://i.pinimg.com/1200x/91/d0/f9/91d0f983a57e43de961628d620a7ede3.jpg"
        tel="+B-A-N-A-N-A"
        email="BANANA@minions.com"
      />
    </div>
  );
}

export default App;
