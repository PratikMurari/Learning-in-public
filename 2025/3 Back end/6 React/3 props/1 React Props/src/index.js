import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" width="250" height="250" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.wordpress.com/wp-content/uploads/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 78"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
    <Card
      name="Bob"
      img="https://i.pinimg.com/1200x/91/d0/f9/91d0f983a57e43de961628d620a7ede3.jpg"
      tel="+B-A-N-A-N-A"
      email="BANANA@minions.com"
    />
  </div>,
  document.getElementById("root")
);
